"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

type FormState = {
  companyName: string;
  contactName: string;
  email: string;
  phone: string;
  inquiryType: string;
  quantity: string;
  timeline: string;
  inquiry: string;
};

const fieldClassName = "h-11 border-white/10 bg-white/[0.03] text-white placeholder:text-zinc-500 focus-visible:ring-[#00dfb6]/30";

const initialFormState: FormState = {
  companyName: "",
  contactName: "",
  email: "",
  phone: "",
  inquiryType: "일반 문의",
  quantity: "",
  timeline: "영업일 내 답변 희망",
  inquiry: "",
};

export function SupportInquiryForm() {
  const [formData, setFormData] = useState<FormState>(initialFormState);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [message, setMessage] = useState<string | null>(null);

  const updateField = (field: keyof FormState, value: string) => {
    setFormData((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("submitting");
    setMessage(null);

    try {
      const response = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = (await response.json().catch(() => null)) as { message?: string; error?: string } | null;

      if (!response.ok) {
        throw new Error(result?.error ?? "문의 접수 중 문제가 발생했습니다.");
      }

      setStatus("success");
      setMessage(result?.message ?? "문의가 정상적으로 접수되었습니다.");
      setFormData({ ...initialFormState });
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "문의 접수 중 문제가 발생했습니다.");
    }
  };

  return (
    <Card className="rounded-[28px] border-white/10 bg-[#111319]/90 text-white backdrop-blur-xl">
      <CardHeader className="space-y-3 border-b border-white/5 pb-6">
        <div className="inline-flex w-fit rounded-full border border-[#00dfb6]/20 bg-[#00dfb6]/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#00dfb6]">
          1:1 Inquiry
        </div>
        <CardTitle className="text-2xl font-black tracking-tight">문의 내용 접수하기</CardTitle>
        <CardDescription className="text-sm leading-6 text-zinc-400">
          일반 상담, 주문/결제, 제작, 배송, A/S 문의를 한 번에 접수할 수 있습니다.
        </CardDescription>
      </CardHeader>

      <CardContent className="pt-6">
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <label htmlFor="contactName" className="text-sm font-medium text-zinc-200">이름</label>
              <Input id="contactName" required value={formData.contactName} placeholder="예: 홍길동" className={fieldClassName} onChange={(event) => updateField("contactName", event.target.value)} />
            </div>
            <div className="space-y-2">
              <label htmlFor="phone" className="text-sm font-medium text-zinc-200">연락처</label>
              <Input id="phone" type="tel" required value={formData.phone} placeholder="010-0000-0000" className={fieldClassName} onChange={(event) => updateField("phone", event.target.value)} />
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-zinc-200">이메일</label>
              <Input id="email" type="email" required value={formData.email} placeholder="example@email.com" className={fieldClassName} onChange={(event) => updateField("email", event.target.value)} />
            </div>
            <div className="space-y-2">
              <label htmlFor="companyName" className="text-sm font-medium text-zinc-200">주문번호 / 업체명 (선택)</label>
              <Input id="companyName" value={formData.companyName} placeholder="예: ORD-20260310 또는 업체명" className={fieldClassName} onChange={(event) => updateField("companyName", event.target.value)} />
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <label className="text-sm font-medium text-zinc-200">문의 유형</label>
              <Select value={formData.inquiryType} onValueChange={(value) => updateField("inquiryType", value)}>
                <SelectTrigger className="h-11 w-full border-white/10 bg-white/[0.03] text-white">
                  <SelectValue placeholder="문의 유형 선택" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="일반 문의">일반 문의</SelectItem>
                  <SelectItem value="주문 / 결제 문의">주문 / 결제 문의</SelectItem>
                  <SelectItem value="제작 / 디자인 문의">제작 / 디자인 문의</SelectItem>
                  <SelectItem value="배송 문의">배송 문의</SelectItem>
                  <SelectItem value="A/S 문의">A/S 문의</SelectItem>
                  <SelectItem value="제휴 / 협업 문의">제휴 / 협업 문의</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-zinc-200">답변 희망</label>
              <Select value={formData.timeline} onValueChange={(value) => updateField("timeline", value)}>
                <SelectTrigger className="h-11 w-full border-white/10 bg-white/[0.03] text-white">
                  <SelectValue placeholder="답변 희망 시점 선택" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="영업일 내 답변 희망">영업일 내 답변 희망</SelectItem>
                  <SelectItem value="가능한 한 빠른 확인 요청">가능한 한 빠른 확인 요청</SelectItem>
                  <SelectItem value="급하지 않음">급하지 않음</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="inquiry" className="text-sm font-medium text-zinc-200">문의 내용</label>
            <Textarea id="inquiry" required value={formData.inquiry} placeholder="상황, 주문 정보, 제품명, 확인한 증상, 원하는 도움 내용을 자세히 적어주세요." className="min-h-[170px] border-white/10 bg-white/[0.03] text-white placeholder:text-zinc-500 focus-visible:ring-[#00dfb6]/30" onChange={(event) => updateField("inquiry", event.target.value)} />
          </div>

          {message ? (
            <div className={`rounded-2xl border px-4 py-3 text-sm leading-relaxed ${status === "success" ? "border-[#00dfb6]/30 bg-[#00dfb6]/10 text-[#b8fff0]" : "border-red-500/30 bg-red-500/10 text-red-200"}`}>
              {message}
            </div>
          ) : null}

          <Button type="submit" size="lg" disabled={status === "submitting"} className="h-12 w-full rounded-full bg-[#00dfb6] text-base font-semibold text-black hover:bg-[#00dfb6]/90">
            {status === "submitting" ? "문의 접수 중..." : "1:1 문의 접수하기"}
          </Button>

          <p className="text-xs leading-relaxed text-zinc-500">
            접수된 문의는 영업일 기준 순차적으로 확인되며, 상황에 따라 전화 또는 이메일로 추가 확인을 요청드릴 수 있습니다.
          </p>
        </form>
      </CardContent>
    </Card>
  );
}