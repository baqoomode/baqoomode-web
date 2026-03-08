export const dashboardMetrics = [
  { label: "신규 문의", value: "18건", description: "오늘 오전 9시 이후 유입된 신규 문의 기준", tone: "mint" as const },
  { label: "진행 중 작업", value: "27건", description: "사진/영상/이모티콘 제작이 현재 진행 중인 건수", tone: "violet" as const },
  { label: "전달 대기", value: "9건", description: "최종본은 준비됐지만 카톡 또는 이메일 발송이 남은 건수", tone: "amber" as const },
  { label: "공개 승인", value: "11건", description: "유튜브/인스타/틱톡 게시 동의를 받은 이번 주 누적 건수", tone: "rose" as const },
];

export const recentInquiries = [
  { id: "INQ-240318", customer: "김서연", type: "펫모드 제작 문의", channel: "홈페이지", target: "Pet Mode", status: "신규", createdAt: "10분 전" },
  { id: "INQ-240317", customer: "오하린", type: "가족 기념 영상 제작", channel: "인스타 DM", target: "Memory Mode", status: "검토중", createdAt: "42분 전" },
  { id: "INQ-240316", customer: "박현우", type: "카페 이미지조명 B2B", channel: "제품 상세", target: "이미지조명", status: "견적발송", createdAt: "1시간 전" },
  { id: "INQ-240315", customer: "이민정", type: "이모티콘 포함 선물 패키지", channel: "카카오채널", target: "Fandom Mode", status: "연락완료", createdAt: "2시간 전" },
  { id: "INQ-240314", customer: "장유진", type: "비공개 전달 요청", channel: "이메일", target: "Biz Mode", status: "완료", createdAt: "오늘 09:10" },
  { id: "INQ-240313", customer: "모어카페", type: "매장 조명 6세트 제휴", channel: "제휴문의", target: "발광보드", status: "협의중", createdAt: "어제" },
];

export const workItems = [
  { id: "WK-1028", customer: "김서연", mode: "Pet Mode", packageType: "액자 + 사진 + 추억 영상", production: "영상 편집중", delivery: "전달 대기", publishing: "비게시", dueDate: "오늘", owner: "지현" },
  { id: "WK-1027", customer: "오하린", mode: "Memory Mode", packageType: "액자 + 사진 + 이모티콘", production: "시안 검토중", delivery: "미준비", publishing: "동의 대기", dueDate: "내일", owner: "민수" },
  { id: "WK-1026", customer: "박현우", mode: "Biz Mode", packageType: "B2B 이미지조명", production: "최종본 완료", delivery: "카톡 발송 완료", publishing: "유튜브 일부공개", dueDate: "완료", owner: "수빈" },
  { id: "WK-1025", customer: "이민정", mode: "Fandom Mode", packageType: "액자 + 영상 + 숏클립", production: "홍보 클립 제작중", delivery: "이메일 발송 완료", publishing: "인스타 대기", dueDate: "3/10", owner: "지현" },
  { id: "WK-1024", customer: "모어카페", mode: "B2B", packageType: "라운드보드 4세트", production: "견적/도면 정리중", delivery: "미대상", publishing: "비게시", dueDate: "3/12", owner: "대표" },
  { id: "WK-1023", customer: "장유진", mode: "Biz Mode", packageType: "액자 + 영상", production: "완료", delivery: "카톡/이메일 완료", publishing: "비공개", dueDate: "완료", owner: "민수" },
];

export const deliveries = [
  { id: "DL-884", customer: "김서연", channel: "카카오톡", content: "최종 영상 MP4", status: "발송 예정", expiresAt: "3/30", note: "완성본 승인 직후 발송" },
  { id: "DL-883", customer: "오하린", channel: "이메일", content: "이모티콘 ZIP", status: "재전달 요청", expiresAt: "4/01", note: "메일함 누락으로 재발송 필요" },
  { id: "DL-882", customer: "박현우", channel: "카카오톡 + 이메일", content: "홍보 영상 + 대표 썸네일", status: "전달 완료", expiresAt: "4/10", note: "유튜브 링크 별도 안내 완료" },
  { id: "DL-881", customer: "이민정", channel: "카카오톡", content: "숏클립 MP4", status: "발송 실패", expiresAt: "3/28", note: "수신 번호 재확인 필요" },
];

export const consentItems = [
  { id: "CS-771", customer: "김서연", publicSharing: "비동의", promotionalUse: "비동의", youtube: "미게시", sns: "미게시", updatedAt: "오늘 10:12" },
  { id: "CS-770", customer: "오하린", publicSharing: "재확인 필요", promotionalUse: "재확인 필요", youtube: "미정", sns: "미정", updatedAt: "오늘 09:45" },
  { id: "CS-769", customer: "박현우", publicSharing: "동의", promotionalUse: "동의", youtube: "일부공개", sns: "인스타 허용", updatedAt: "어제" },
  { id: "CS-768", customer: "이민정", publicSharing: "동의", promotionalUse: "인스타만 동의", youtube: "미게시", sns: "릴스 허용", updatedAt: "어제" },
];

export const modeCatalog = [
  { name: "Pet Mode", summary: "반려동물 추억 영상과 사진을 결합한 감성 패키지", price: "189,000원~", status: "운영중", accent: "from-amber-500/25 to-transparent" },
  { name: "Biz Mode", summary: "인증서/브랜딩용 액자와 기업 소개 영상 패키지", price: "145,000원~", status: "운영중", accent: "from-blue-500/25 to-transparent" },
  { name: "Fandom Mode", summary: "최애 이미지와 숏폼 영상 중심의 팬덤 패키지", price: "128,000원~", status: "프로모션", accent: "from-violet-500/25 to-transparent" },
  { name: "Memory Mode", summary: "웨딩·육아·가족 선물용 추억 보관 패키지", price: "210,000원~", status: "운영중", accent: "from-rose-500/25 to-transparent" },
];

export const productCatalog = [
  { name: "발광보드", type: "B2B", summary: "이미지 교체형 면발광 보드", spec: "슬림 프로파일 / 커스텀 그래픽", status: "노출중" },
  { name: "다각형보드", type: "B2B", summary: "조형적 포인트형 라이팅", spec: "비규격 형상 협의 가능", status: "노출중" },
  { name: "라운드보드", type: "B2B", summary: "곡면 구조 대응 플렉시블 보드", spec: "맞춤 곡률 제작", status: "노출중" },
  { name: "한지보드", type: "B2B", summary: "한지 질감의 은은한 발광 보드", spec: "글레어 프리 / 감성 라인업", status: "준비중" },
  { name: "띠보드", type: "B2B", summary: "코너·기둥용 라인 조명", spec: "8000lux / 5.1mm", status: "노출중" },
  { name: "이미지조명", type: "B2B", summary: "브랜드 메시지용 맞춤형 이미지 조명", spec: "완전 커스텀 오더", status: "운영중" },
];

export const contentItems = [
  { id: "CT-501", name: "김서연_펫모드_최종영상.mp4", type: "최종 영상", owner: "김서연", state: "승인 완료", expiresAt: "3/30" },
  { id: "CT-500", name: "오하린_이모티콘_1차.zip", type: "이모티콘", owner: "오하린", state: "검토중", expiresAt: "4/01" },
  { id: "CT-499", name: "박현우_유튜브썸네일.png", type: "홍보 썸네일", owner: "박현우", state: "게시 완료", expiresAt: "장기 보관" },
  { id: "CT-498", name: "이민정_인스타릴스.mp4", type: "홍보 숏클립", owner: "이민정", state: "업로드 대기", expiresAt: "3/29" },
];

export const customerItems = [
  { name: "김서연", contact: "010-2***-1184", email: "seoyeon@sample.com", login: "kakao", works: 2, preference: "비공개 선호" },
  { name: "오하린", contact: "010-9***-4412", email: "harin@sample.com", login: "google", works: 1, preference: "검토 후 결정" },
  { name: "박현우", contact: "010-4***-9982", email: "hwpark@sample.com", login: "naver", works: 3, preference: "브랜드 활용 동의" },
  { name: "이민정", contact: "010-1***-2274", email: "mijeong@sample.com", login: "kakao", works: 1, preference: "인스타만 허용" },
];

export const activityFeed = [
  "김서연 고객 작업건이 전달 대기로 이동했습니다.",
  "오하린 고객 건의 공개 동의 상태가 재확인 필요로 변경되었습니다.",
  "박현우 고객 유튜브 일부공개 링크가 등록되었습니다.",
  "이민정 고객 카카오톡 발송이 실패하여 재전송 확인이 필요합니다.",
];