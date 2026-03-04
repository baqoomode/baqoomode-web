# 바꿔모드 (baQoo MODE) 기술 아키텍처 및 스택 가이드

이 문서는 AI 어시스턴트와 개발자가 프로젝트의 전체적인 기술 구조와 선택된 스택의 목적을 명확히 이해하고, 일관성 있는 코드를 작성하기 위한 **핵심 참고 문서**입니다.

---

## 🏗️ 1. 핵심 기술 스택 (Tech Stack Summary)

**프론트엔드 (Frontend & UI)**
*   **프레임워크:** Next.js (App Router 기반, SSR/SSG 혼용)
*   **언어:** TypeScript (엄격한 타입 시스템 적용)
*   **스타일링:** Tailwind CSS
*   **컴포넌트 라이브러리:** shadcn/ui (비제어 컴포넌트, 접근성, 커스터마이징 용이)
*   **애니메이션:** Framer Motion (모드 스위칭, 프리미엄 UI 효과 구현용)
*   **아이콘:** Lucide React

**백엔드 & 데이터베이스 (Backend & DB)**
*   **데이터베이스:** Neon Database (Serverless PostgreSQL)
    *   *선택 이유: Cloudflare Edge 환경과의 완벽한 호환성, 스케일링 유연성, PostgreSQL의 강력한 기능 활용.*
*   **ORM:** Drizzle ORM
    *   *선택 이유: 매우 가벼운 번들 사이즈 콜드스타트 최적화 등 Cloudflare Pages(Edge) 환경에 가장 적합. 완벽한 타입스크립트 지원.*
*   **미디어 스토리지:** Cloudflare R2
    *   *목적: 프리미엄 인화 사진 원본, 고용량 AI 영상/음성 스트리밍 (데이터 전송 비용 무료/최소화).*

**인증 & 결제 (Auth & Payment)**
*   **인증 솔루션:** Better Auth (또는 Neon Auth)
    *   *주요 정책: **카카오, 네이버, 구글 소셜 로그인 전용** (이메일/비밀번호 기반의 일반 회원가입 불가).*
    *   *선택 이유: 카카오/네이버 공식 지원, Drizzle/Neon 인프라와의 빠르고 직관적인 연동, Edge 환경 호환성 우수.*
*   **결제 시스템:** 토스페이먼츠 (브랜드페이)
    *   *연동 방향:* Better Auth에서 생성된 사용자 고유 ID(`user.id`)를 토스페이먼츠의 `customerKey` (고객 고유 식별자)로 매핑하여 안전한 결제 환경 구축.

**인프라 & 배포 (Infrastructure & Deploy)**
*   **배포 플랫폼:** Cloudflare Pages (Full-stack 엣지 배포)

---

## 📐 2. 주요 개발 원칙 (Development Principles)

1.  **엣지(Edge) 우선 설계:** 
    *   모든 API Route와 데이터베이스 연결 로직은 Cloudflare Workers 환경(Edge Runtime)에서 완벽히 동작해야 합니다. 무거운 Node.js 전용 모듈 사용은 회피합니다.
2.  **모바일 최우선 & 프리미엄 UI (Mobile-First & Premium Experience):**
    *   QR 코드 기반의 스캔 접속이 핵심이므로, 완벽한 모바일 반응형 디자인은 기본입니다. 
    *   '빛', '전환', '프레임'의 감성을 살리기 위한 고품질 CSS (글래스모피즘, 그라데이션)와 스무스한 애니메이션 처리를 우선합니다.
3.  **Strict Typing:** 
    *   6가지 보드 스펙, 4가지 모드 타입 등 비즈니스 로직이 명확히 타입화(Interface/Type/Zod Schema) 되어야 합니다. `any` 타입 사용을 극도로 제한합니다.

---

## 🔐 3. 구현 시 핵심 주의사항 (For AI Assistant)

*   **Auth 구현 시:** Better Auth 설정 시 `socialProviders`에만 집중하고, 기본 credential(이메일 DB 가입) 로직은 구성하지 마세요. 한국 시장 특성에 맞춰 `kakao`, `naver` 세팅에 신경 써야 합니다.
*   **DB 스키마 구성 시 (Drizzle):** 모델링할 때 User 테이블의 Primary Key 필드는 향후 결제(Toss Payments)의 `customerKey`로 활용될 생명줄이므로, 타입(UUID 혹은 고유 문자열)을 명확히 하고 길이를 고려하여 설계해야 합니다.
*   **UI/스타일 작업 시:** shadcn/ui 컴포넌트를 설치하고 사용할 때, 기본 색상(Base theme)을 프로젝트의 아이덴티티에 맞게 커스텀하는 작업을 선행하세요. 단순한 복붙이 아니라 브랜드 가이드에 맞는 고급스러운 변형이 필요합니다.
