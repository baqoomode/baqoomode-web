export type StoryCategory = "pet" | "biz" | "fandom" | "memory";

export type StoryFilter = StoryCategory | "all";

export const STORY_FILTERS: { id: StoryFilter; label: string }[] = [
  { id: "all", label: "전체" },
  { id: "pet", label: "펫" },
  { id: "biz", label: "오피스/매장" },
  { id: "fandom", label: "팬덤" },
  { id: "memory", label: "메모리" },
];

export const FEATURED_STORIES = [
  {
    id: "pet-story",
    category: "pet" as const,
    categoryLabel: "Pet",
    modeLabel: "펫 모드",
    eyebrow: "반려의 기억을 조금 더 오래 곁에 두고 싶을 때",
    title: "떠난 아이의 사진과 목소리를 매일 다시 켜두는 이야기",
    summary:
      "사진 한 장에서 끝나지 않도록, 짖는 소리와 함께 걷던 순간의 감정을 빛나는 프레임 안에 담아두는 대표 스토리입니다.",
    quote: "“아침마다 불을 켜면, 그날 하루를 견디는 마음이 조금은 편안해져요.”",
    keywords: ["반려 추억", "QR 음성", "위로의 빛"],
    panelClass:
      "border-amber-500/20 bg-gradient-to-br from-amber-500/18 via-[#111214] to-[#090909]",
  },
  {
    id: "biz-story",
    category: "biz" as const,
    categoryLabel: "Biz/Office",
    modeLabel: "오피스 모드",
    eyebrow: "사무실과 매장의 분위기를 작지만 확실하게 바꾸고 싶을 때",
    title: "사업자등록증, 인증서, POP를 더 보기 좋게 켜두는 이야기",
    summary:
      "오피스 벽면의 증서, 카운터 옆 메뉴 안내, 신메뉴 POP처럼 일상적인 공간에서도 바꿔모드는 충분히 B2C의 실사용 장면이 됩니다.",
    quote: "“작은 프레임 하나 바꿨을 뿐인데 공간의 신뢰감과 분위기가 함께 달라졌어요.”",
    keywords: ["인증서 연출", "매장 POP", "작은 공간 개선"],
    panelClass:
      "border-emerald-500/20 bg-gradient-to-br from-emerald-500/16 via-[#111214] to-[#090909]",
  },
  {
    id: "fandom-story",
    category: "fandom" as const,
    categoryLabel: "Fandom",
    modeLabel: "팬덤 모드",
    eyebrow: "굿즈를 넘어 나만의 공간 연출까지 하고 싶을 때",
    title: "최애의 순간을 내 방 안의 작은 무대로 바꾸는 이야기",
    summary:
      "응원봉이나 포토카드처럼 모아두는 것에서 한 걸음 더 나아가, 방 전체 분위기를 최애 중심으로 바꾸는 팬덤 사용 사례입니다.",
    quote: "“불을 끄고 켜두는 순간, 그냥 방이 아니라 제 취향이 완성된 공간이 돼요.”",
    keywords: ["최애 공간", "무드 연출", "콘서트 감성"],
    panelClass:
      "border-fuchsia-500/20 bg-gradient-to-br from-fuchsia-500/16 via-[#111214] to-[#090909]",
  },
  {
    id: "memory-story",
    category: "memory" as const,
    categoryLabel: "Memory",
    modeLabel: "메모리 모드",
    eyebrow: "선물과 기념일을 평범한 액자 이상으로 남기고 싶을 때",
    title: "부모님 선물과 기념일 사진을 분위기 있는 빛으로 남기는 이야기",
    summary:
      "웨딩 사진, 가족사진, 기념일 선물처럼 한 번의 이벤트로 끝나지 않도록 매일 켜볼 수 있는 방식으로 기억을 남기는 이야기입니다.",
    quote: "“거실 불을 끄고 사진을 켜는 순간, 선물보다 감정이 먼저 전해졌어요.”",
    keywords: ["기념일 선물", "가족사진", "감성 인테리어"],
    panelClass:
      "border-rose-500/20 bg-gradient-to-br from-rose-500/16 via-[#111214] to-[#090909]",
  },
];

export const CUSTOMER_REVIEWS = [
  {
    id: 1,
    category: "pet" as const,
    name: "김** 님",
    modeLabel: "펫 모드",
    rating: 5,
    location: "거실 선반",
    purpose: "무지개다리 추억 보관",
    useCase: "반려 사진 + QR 음성",
    summary:
      "우리 아이가 짖던 소리를 다시 들을 수 있다는 것만으로도 위로가 되더라고요. 사진만 보는 것과는 전혀 다르게 느껴졌어요.",
    accentClass: "bg-amber-500/10 text-amber-200 border-amber-500/20",
  },
  {
    id: 2,
    category: "biz" as const,
    name: "박** 대표님",
    modeLabel: "오피스 모드",
    rating: 5,
    location: "사무실 인포데스크",
    purpose: "사업자등록증·인증서 디스플레이",
    useCase: "오피스 신뢰감 연출",
    summary:
      "방문하는 분들이 액자 자체보다도 공간 분위기를 먼저 좋게 봐주세요. 증서가 훨씬 정돈돼 보이고 브랜드 이미지도 또렷해졌습니다.",
    accentClass: "bg-emerald-500/10 text-emerald-200 border-emerald-500/20",
  },
  {
    id: 3,
    category: "fandom" as const,
    name: "최** 님",
    modeLabel: "팬덤 모드",
    rating: 5,
    location: "침실 헤드월",
    purpose: "최애 공간 꾸미기",
    useCase: "포토 중심 무드 연출",
    summary:
      "그냥 굿즈를 진열하는 느낌이 아니라, 방 전체가 제 취향으로 정리되는 기분이라 만족도가 훨씬 높았습니다.",
    accentClass: "bg-fuchsia-500/10 text-fuchsia-200 border-fuchsia-500/20",
  },
  {
    id: 4,
    category: "memory" as const,
    name: "이** 님",
    modeLabel: "메모리 모드",
    rating: 5,
    location: "부모님 거실",
    purpose: "칠순 선물",
    useCase: "가족사진 선물",
    summary:
      "일반 액자였다면 한 번 보고 끝났을 텐데, 이건 밤마다 켜보게 된다고 하셔서 선물한 사람 입장에서도 더 뿌듯했어요.",
    accentClass: "bg-rose-500/10 text-rose-200 border-rose-500/20",
  },
  {
    id: 5,
    category: "biz" as const,
    name: "송** 사장님",
    modeLabel: "오피스 모드",
    rating: 5,
    location: "카페 카운터",
    purpose: "신메뉴 POP 안내",
    useCase: "매장 안내용 연출",
    summary:
      "메뉴판을 종이로 세워둘 때보다 훨씬 눈에 잘 띄고, 매장 무드도 더 고급스럽게 정리돼서 손님 반응이 좋았습니다.",
    accentClass: "bg-cyan-500/10 text-cyan-200 border-cyan-500/20",
  },
  {
    id: 6,
    category: "memory" as const,
    name: "정** 고객님",
    modeLabel: "메모리 모드",
    rating: 5,
    location: "침실 협탁",
    purpose: "웨딩 사진 보관",
    useCase: "기념일 무드 연출",
    summary:
      "사진을 그냥 보관하는 게 아니라 분위기까지 남기는 느낌이라서, 결혼기념일 선물로 정말 잘 골랐다고 생각했어요.",
    accentClass: "bg-violet-500/10 text-violet-200 border-violet-500/20",
  },
];