"use client";

import { useState, type FormEvent } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
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

const initialFormState: FormState = {
  companyName: "",
  contactName: "",
  email: "",
  phone: "",
  inquiryType: "대량 구매 / 설치 제휴",
  quantity: "",
  timeline: "1개월 이내",
  inquiry: "",
};

const fieldClassName = "h-11 border-white/10 bg-white/[0.03] text-white placeholder:text-zinc-500 focus-visible:ring-[#00dfb6]/30";

export function PartnershipInquiryForm() {
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
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = (await response.json().catch(() => null)) as { message?: string; error?: string } | null;

      if (!response.ok) {
        throw new Error(result?.error ?? "문의 접수 중 문제가 발생했습니다.");
      }

      setStatus("success");
      setMessage(result?.message ?? "문의가 접수되었습니다.");
      setFormData({ ...initialFormState });
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "문의 접수 중 문제가 발생했습니다.");
    }
  };

  return (
    <Card className="rounded-[28px] border-white/10 bg-[#111319]/90 text-white backdrop-blur-xl lg:sticky lg:top-24">
      <CardHeader className="space-y-3 border-b border-white/5 pb-6">
        <div className="inline-flex w-fit rounded-full border border-[#00dfb6]/25 bg-[#00dfb6]/10 px-3 py-1 text-xs font-semibold text-[#00dfb6]">
          Partnership Inquiry
        </div>
        <CardTitle className="text-2xl font-black tracking-tight">제휴 문의 남기기</CardTitle>
        <CardDescription className="text-sm leading-relaxed text-zinc-400">
          대량 구매, 공간 브랜딩, 인테리어 협업, 팝업/전시, 맞춤 제작 문의를 한 번에 접수할 수 있습니다.
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <label htmlFor="companyName" className="text-sm font-medium text-zinc-200">회사명 / 브랜드명</label>
              <Input
                id="companyName"
                value={formData.companyName}
                placeholder="예: baQoo Studio"
                className={fieldClassName}
                onChange={(event) => updateField("companyName", event.target.value)}
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="contactName" className="text-sm font-medium text-zinc-200">담당자 성함</label>
              <Input
                id="contactName"
                value={formData.contactName}
                required
                placeholder="예: 홍길동"
                className={fieldClassName}
                onChange={(event) => updateField("contactName", event.target.value)}
              />
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-zinc-200">이메일</label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                required
                placeholder="hello@company.com"
                className={fieldClassName}
                onChange={(event) => updateField("email", event.target.value)}
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="phone" className="text-sm font-medium text-zinc-200">연락처</label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                required
                placeholder="010-0000-0000"
                className={fieldClassName}
                onChange={(event) => updateField("phone", event.target.value)}
              />
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <label className="text-sm font-medium text-zinc-200">문의 유형</label>
              <Select value={formData.inquiryType} onValueChange={(value) => updateField("inquiryType", value)}>
                <SelectTrigger className="h-11 w-full border-white/10 bg-white/[0.03] text-white">
                  <SelectValue placeholder="문의 유형을 선택해 주세요" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="대량 구매 / 설치 제휴">대량 구매 / 설치 제휴</SelectItem>
                  <SelectItem value="브랜드 협업 / 팝업 제안">브랜드 협업 / 팝업 제안</SelectItem>
                  <SelectItem value="오피스 / 쇼룸 공간 연출">오피스 / 쇼룸 공간 연출</SelectItem>
                  <SelectItem value="맞춤 제작 / 커스텀 보드">맞춤 제작 / 커스텀 보드</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-zinc-200">희망 일정</label>
              <Select value={formData.timeline} onValueChange={(value) => updateField("timeline", value)}>
                <SelectTrigger className="h-11 w-full border-white/10 bg-white/[0.03] text-white">
                  <SelectValue placeholder="희망 일정을 선택해 주세요" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1개월 이내">1개월 이내</SelectItem>
                  <SelectItem value="2~3개월 이내">2~3개월 이내</SelectItem>
                  <SelectItem value="분기 내 검토">분기 내 검토</SelectItem>
                  <SelectItem value="일정 미정">일정 미정</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="quantity" className="text-sm font-medium text-zinc-200">예상 수량 / 적용 범위</label>
            <Input
              id="quantity"
              value={formData.quantity}
              placeholder="예: 10개 매장, 30EA, 쇼룸 1개소"
              className={fieldClassName}
              onChange={(event) => updateField("quantity", event.target.value)}
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="inquiry" className="text-sm font-medium text-zinc-200">문의 내용</label>
            <Textarea
              id="inquiry"
              value={formData.inquiry}
              required
              placeholder="공간 용도, 원하는 무드, 필요한 사이즈, 납기, 예산 범위 등을 자유롭게 적어주세요."
              className="min-h-[160px] border-white/10 bg-white/[0.03] text-white placeholder:text-zinc-500 focus-visible:ring-[#00dfb6]/30"
              onChange={(event) => updateField("inquiry", event.target.value)}
            />
          </div>

          {message ? (
            <div
              className={`rounded-2xl border px-4 py-3 text-sm leading-relaxed ${
                status === "success"
                  ? "border-[#00dfb6]/30 bg-[#00dfb6]/10 text-[#b8fff0]"
                  : "border-red-500/30 bg-red-500/10 text-red-200"
              }`}
            >
              {message}
            </div>
          ) : null}

          <Button
            type="submit"
            size="lg"
            disabled={status === "submitting"}
            className="h-12 w-full rounded-full bg-[#00dfb6] text-base font-semibold text-black hover:bg-[#00dfb6]/90"
          >
            {status === "submitting" ? "문의 접수 중..." : "제휴 문의 접수하기"}
          </Button>

          <p className="text-xs leading-relaxed text-zinc-500">
            접수된 문의는 내부 검토 후 순차적으로 회신됩니다. 급한 일정이라면 문의 내용에 마감 일정을 함께 남겨주세요.
          </p>
        </form>
      </CardContent>
    </Card>
  );
}