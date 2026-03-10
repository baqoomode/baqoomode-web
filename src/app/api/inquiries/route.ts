import { NextResponse } from "next/server";
import { db } from "@/db";
import { inquiry } from "@/db/schema";

export const runtime = "edge";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phonePattern = /^[0-9+()\-\s]{8,20}$/;

function normalizeSingleLine(value: unknown) {
  if (typeof value !== "string") {
    return "";
  }

  return value.replace(/\s+/g, " ").trim();
}

function normalizeMultiline(value: unknown) {
  if (typeof value !== "string") {
    return "";
  }

  return value
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean)
    .join("\n")
    .trim();
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as {
      companyName?: string;
      contactName?: string;
      email?: string;
      phone?: string;
      inquiryType?: string;
      quantity?: string;
      timeline?: string;
      inquiry?: string;
    };

    const companyName = normalizeSingleLine(body.companyName);
    const contactName = normalizeSingleLine(body.contactName);
    const email = normalizeSingleLine(body.email).toLowerCase();
    const phone = normalizeSingleLine(body.phone);
    const inquiryType = normalizeSingleLine(body.inquiryType);
    const quantity = normalizeSingleLine(body.quantity);
    const timeline = normalizeSingleLine(body.timeline);
    const inquiryContent = normalizeMultiline(body.inquiry);

    if (!contactName || !email || !phone || !inquiryType || !inquiryContent) {
      return NextResponse.json(
        { error: "필수 항목을 모두 입력해 주세요." },
        { status: 400 }
      );
    }

    if (!emailPattern.test(email)) {
      return NextResponse.json(
        { error: "올바른 이메일 주소를 입력해 주세요." },
        { status: 400 }
      );
    }

    if (!phonePattern.test(phone)) {
      return NextResponse.json(
        { error: "올바른 연락처를 입력해 주세요." },
        { status: 400 }
      );
    }

    const now = new Date();
    const subject = [
      inquiryType,
      companyName || contactName,
      quantity ? `수량 ${quantity}` : null,
      timeline ? `일정 ${timeline}` : null,
    ]
      .filter(Boolean)
      .join(" | ");

    const content = [
      `문의 유형: ${inquiryType}`,
      companyName ? `회사명: ${companyName}` : null,
      `담당자: ${contactName}`,
      `이메일: ${email}`,
      `연락처: ${phone}`,
      quantity ? `예상 수량: ${quantity}` : null,
      timeline ? `희망 일정: ${timeline}` : null,
      "",
      inquiryContent,
    ]
      .filter(Boolean)
      .join("\n");

    await db.insert(inquiry).values({
      id: crypto.randomUUID(),
      name: contactName,
      company: companyName || null,
      email,
      phone,
      subject,
      content,
      status: "pending",
      createdAt: now,
      updatedAt: now,
    });

    return NextResponse.json({
      success: true,
      message: "문의가 접수되었습니다. 영업일 기준 빠르게 연락드리겠습니다.",
    });
  } catch (error) {
    console.error("Failed to create inquiry", error);

    return NextResponse.json(
      { error: "문의 접수 중 문제가 발생했습니다. 잠시 후 다시 시도해 주세요." },
      { status: 500 }
    );
  }
}