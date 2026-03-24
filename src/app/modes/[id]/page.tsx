import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { notFound } from "next/navigation";

import { ModeDetailClient, type ModeData } from "./mode-detail-client";
import { FadeUpInView } from "@/components/ui/fade-up-in-view";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const MODES_DATA: Record<string, ModeData> = {
    pet: {
        id: "pet",
        title: "Pet Mode",
        koreanLabel: "반려의 기억을 오래 켜두는 패키지",
        slogan: "영원히 빛나는 나의 가족",
        signal: "사진 한 장이 아니라 목소리와 표정까지 남기는 펫 메모리 오브제",
        description: "반려동물의 가장 사랑스러운 장면을 빛나는 프레임과 QR 콘텐츠로 오래 간직할 수 있게 설계한 모드입니다. 추억 보존과 선물 수요가 가장 강한 감성 패키지로, 매일 보는 자리에서 기억이 자연스럽게 켜지도록 만듭니다.",
        themeColor: "from-amber-500/18 via-[#050505] to-[#050505]",
        accentColor: "text-amber-400",
        accentRgb: "245, 158, 11",
        price: 189000,
        priceNote: "기본 패키지에는 라이트 프레임, 사진 구성, QR 연결용 가이드가 포함됩니다. 업로드 자료의 양과 최종 사이즈에 따라 옵션 가격이 추가될 수 있습니다.",
        leadTime: "사진과 영상 자료가 모두 확인되면 보통 4~6영업일 안에 제작 방향이 정리되고, 최종 확정 후 순차 출고됩니다.",
        deliveryNote: "선물 일정이 있는 경우 주문 전 QnA에서 먼저 확인해 주세요. 반려 추억 보존용 주문은 일정 상담 비중이 높아 미리 확인할수록 안전합니다.",
        features: [
            "반려 사진만이 아니라 영상·음성까지 연결되는 QR 구성",
            "거실·침실에 자연스럽게 두기 좋은 감성형 프레임 무드",
            "기념일 선물이나 추억 보존용으로 많이 선택되는 패키지",
            "자료가 부족할 때도 먼저 검수 후 가능한 범위를 안내하는 흐름",
        ],
        idealFor: [
            "반려동물의 사진만으로는 아쉽고 목소리나 움직임까지 오래 간직하고 싶은 보호자",
            "무지개다리 이후에도 일상에서 자연스럽게 추억을 켜두고 싶은 가족",
            "생일, 입양기념일, 추모 선물처럼 감정 밀도가 높은 선물을 찾는 사람",
            "침실 서랍장이나 거실 콘솔 위에 따뜻한 무드 오브제를 두고 싶은 고객",
        ],
        packageItems: [
            "면발광 라이트 프레임 본체 1점",
            "프리미엄 사진 인화 세트 및 기본 보정 안내",
            "영상·음성 연결을 위한 QR 콘텐츠 세팅 가이드",
            "선물용 보관 패키지 및 기본 전달 안내",
        ],
        deliverables: [
            "완성된 펫 모드 프레임 1점",
            "QR 연결 페이지 1식",
            "최종 인화 사진 세트",
            "보관용 패키지 및 전달 체크 안내",
        ],
        processSteps: [
            { title: "장면 선택", description: "가장 남기고 싶은 사진과 영상, 목소리 자료를 고르고 공간 크기에 맞는 사이즈를 정합니다." },
            { title: "QR 구성", description: "짧은 영상, 음성, 메시지 가운데 어떤 추억을 연결할지 정리해 실제 사용 흐름에 맞게 구성합니다." },
            { title: "제작·전달", description: "디자인과 자료가 확정되면 프레임 제작 후 순차 출고하며, 선물 일정이 있으면 그에 맞춰 확인합니다." },
        ],
        trustPoints: [
            "원본 화질이 낮거나 자료가 적은 경우에도 먼저 확인 후 제작 가능 여부를 안내합니다.",
            "펫 모드는 감정적 의미가 큰 주문이 많아 과한 옵션보다 오래 보기 좋은 조합을 우선 추천합니다.",
            "QR 콘텐츠는 사용 목적에 맞춰 너무 길지 않게 구성할수록 실제 만족도가 높습니다.",
        ],
        sizeOptions: [
            { label: "A4 데일리", note: "침대 옆, 책상, 콘솔 위처럼 가까이 두기 좋은 기본 사이즈", priceDelta: 0, recommended: true },
            { label: "A3 시그니처", note: "거실이나 포인트 벽에 존재감을 주는 대표 선택", priceDelta: 42000 },
            { label: "선물형 세트", note: "포장 연출과 기념 선물 사용을 고려한 상위 구성", priceDelta: 69000 },
        ],
        frameOptions: [
            { label: "Soft Ivory", note: "따뜻하고 부드러운 홈 무드", swatchClass: "bg-stone-100", priceDelta: 0 },
            { label: "Matte Black", note: "사진 대비를 또렷하게 살리는 모던 톤", swatchClass: "bg-zinc-900", priceDelta: 12000 },
            { label: "Champagne Gold", note: "선물용으로 선호도가 높은 포인트 톤", swatchClass: "bg-amber-200", priceDelta: 18000 },
        ],
        heroHighlights: ["음성·영상 연결", "선물 수요 높음", "추억 보존형"],
    },
    biz: {
        id: "biz",
        title: "Biz/Office Mode",
        koreanLabel: "오피스·매장 신뢰를 밝히는 패키지",
        slogan: "당신의 가치는 더 밝은 곳에서 증명되어야 합니다",
        signal: "인증서와 브랜드 메시지를 가장 깔끔하게 보여주는 공간 신뢰 장치",
        description: "오피스, 매장, 상담 공간에서 브랜드 신뢰를 바로 보여주기 위한 실용형 모드입니다. 인증서, 수상 내역, 대표 이미지, 소개 메시지를 빛나는 오브제로 정리해 첫인상과 체류 경험을 동시에 끌어올립니다.",
        themeColor: "from-blue-500/18 via-[#050505] to-[#050505]",
        accentColor: "text-blue-400",
        accentRgb: "59, 130, 246",
        price: 145000,
        priceNote: "기본가는 A4 기준이며, 로비·상담실처럼 더 눈에 띄는 연출이 필요하면 A3 이상 구성을 추천합니다. 브랜드 톤에 맞춘 프레임 선택이 인상 차이를 크게 만듭니다.",
        leadTime: "브랜드 이미지와 문구가 정리되어 있으면 보통 3~5영업일 안에 제작 방향이 확정됩니다. 오픈 일정이 있으면 먼저 문의해 주세요.",
        deliveryNote: "매장 오픈, 리뉴얼, 촬영 일정과 맞물리는 경우가 많아 수령일이 중요합니다. 일정이 정해져 있다면 주문 전에 QnA에서 먼저 확인하는 편이 안전합니다.",
        features: [
            "인증서·브랜드 메시지를 한눈에 보여주는 신뢰형 디스플레이",
            "상담실, 데스크, 로비처럼 첫인상에 영향이 큰 구간에 강한 모드",
            "브랜드 컬러와 공간 마감재에 맞춘 프레임 선택이 쉬운 구조",
            "리뉴얼·오픈 일정에 맞춰 빠르게 판단할 수 있는 실무형 구성",
        ],
        idealFor: [
            "고객이 처음 들어오는 순간 신뢰 요소를 명확하게 보여주고 싶은 매장이나 오피스",
            "인증서, 수상 내역, 대표 메시지를 더 세련되게 정리하고 싶은 전문직 공간",
            "벽면 공사가 아닌 가벼운 오브제 방식으로 분위기를 개선하고 싶은 사업자",
            "브랜드 고급감을 비용 대비 효율적으로 끌어올리고 싶은 소규모 매장",
        ],
        packageItems: [
            "슬림 라이트 프레임 본체 1점",
            "인증서·브랜드 아트워크 맞춤 인쇄 구성",
            "QR 연결형 브랜드 소개 또는 캠페인 링크 가이드",
            "설치 위치에 맞춘 기본 사용 안내",
        ],
        deliverables: [
            "완성된 비즈 모드 프레임 1점",
            "브랜드/인증서 인쇄 결과물",
            "QR 연결 페이지 또는 링크 가이드",
            "수령 후 배치 체크 포인트 안내",
        ],
        processSteps: [
            { title: "공간 파악", description: "데스크, 로비, 상담실, 매장 벽면 등 어디에 둘지 먼저 정하고 가장 잘 보이는 사이즈를 고릅니다." },
            { title: "콘텐츠 정리", description: "인증서, 브랜드 메시지, 캠페인 문구 중 무엇을 강조할지 정리해 첫인상 목적에 맞춰 우선순위를 잡습니다." },
            { title: "배치·출고", description: "최종 인쇄와 프레임 조합이 확정되면 일정에 맞춰 출고하고, 수령 후 어떤 위치에 두면 좋은지 가이드를 제공합니다." },
        ],
        trustPoints: [
            "비즈 모드는 장식보다 신뢰 전달이 핵심이라 복잡한 그래픽보다 읽히는 구성으로 정리할수록 효과가 좋습니다.",
            "오피스·매장 사진이 있으면 실제 배치감에 맞춘 사이즈 추천이 훨씬 정확해집니다.",
            "QR은 브랜드 소개, 예약 링크, 메뉴 안내 등 실제 행동으로 이어지는 콘텐츠일수록 전환력이 높습니다.",
        ],
        sizeOptions: [
            { label: "A4 카운터", note: "데스크, 카운터, 접수대에 바로 올리기 좋은 기본형", priceDelta: 0 },
            { label: "A3 시선집중", note: "로비나 벽면에서 인지도를 높이는 대표 선택", priceDelta: 35000, recommended: true },
            { label: "와이드 연출형", note: "촬영존·대기공간까지 고려한 상위 구성", priceDelta: 62000 },
        ],
        frameOptions: [
            { label: "Clean White", note: "병원·클리닉·화이트톤 인테리어에 안정적", swatchClass: "bg-white", priceDelta: 0 },
            { label: "Silver Edge", note: "전문성과 정돈감을 주는 스탠다드 톤", swatchClass: "bg-zinc-300", priceDelta: 10000 },
            { label: "Matte Black", note: "브랜드 대비를 강하게 잡는 선명한 톤", swatchClass: "bg-zinc-900", priceDelta: 15000 },
        ],
        heroHighlights: ["신뢰 연출", "브랜드 메시지", "오픈/리뉴얼 대응"],
    },
    fandom: {
        id: "fandom",
        title: "Fandom Mode",
        koreanLabel: "최애의 순간을 소장하는 팬 컬렉션 패키지",
        slogan: "내 방 안의 작은 콘서트",
        signal: "최애의 한 장면을 내 방 안의 무드 오브제로 바꾸는 팬 컬렉션",
        description: "좋아하는 아티스트의 이미지, 메시지, 숏폼 장면을 감도 있게 소장하고 싶은 팬을 위한 모드입니다. 단순 굿즈가 아니라, 방 안의 분위기를 바꾸면서도 매일 보고 싶은 순간을 빛으로 남기는 방식에 초점을 맞췄습니다.",
        themeColor: "from-purple-500/18 via-[#050505] to-[#050505]",
        accentColor: "text-violet-400",
        accentRgb: "168, 85, 247",
        price: 128000,
        priceNote: "기본가는 데스크형 기준이며, 벽면 연출이나 선물 포장 비중이 높으면 상위 옵션이 잘 맞습니다. 팬덤 모드는 프레임 톤이 전체 무드 인상에 크게 작용합니다.",
        leadTime: "이미지와 문구가 정리된 상태라면 보통 3~5영업일 안에 제작 방향이 확정됩니다. 기념일이나 컴백 일정이 있다면 여유 있게 준비하는 편이 좋습니다.",
        deliveryNote: "팬덤 굿즈 특성상 특정 날짜 수령 요청이 많습니다. 생일카페, 이벤트 선물, 컴백 일정에 맞추고 싶다면 먼저 문의해 주세요.",
        features: [
            "방 안 분위기와 굿즈 감성을 동시에 살리는 팬 컬렉션형 라이트 프레임",
            "영상, 음성, 메시지 링크를 QR에 연결해 몰입감을 높이는 구조",
            "사진 교체가 아니라 전체 무드 오브제로 오래 두기 좋은 구성이 강점",
            "생일카페 선물, 최애 데뷔일, 컴백 기념처럼 이벤트성과 궁합이 좋음",
        ],
        idealFor: [
            "굿즈를 단순 수집하는 수준을 넘어 방 분위기 자체를 최애 중심으로 꾸미고 싶은 팬",
            "포토카드, 인화사진보다 더 존재감 있는 소장 방식을 찾는 사람",
            "생일 선물이나 이벤트 기념으로 감도 높은 팬 선물을 준비하는 경우",
            "책상 위보다 벽면, 선반, 침대 옆처럼 무드가 중요한 공간에 두고 싶은 고객",
        ],
        packageItems: [
            "팬덤 무드형 라이트 프레임 본체 1점",
            "대표 이미지 인쇄 구성 및 톤 확인 가이드",
            "최애 영상·메시지 연결용 QR 콘텐츠 세팅 안내",
            "보관 및 선물 전달용 기본 패키지",
        ],
        deliverables: [
            "완성된 팬덤 모드 프레임 1점",
            "인쇄 결과물 및 기본 포장 구성",
            "QR 연결 페이지 또는 링크 구성 1식",
            "보관·세팅 가이드",
        ],
        processSteps: [
            { title: "무드 선택", description: "최애의 어떤 장면을 남기고 싶은지, 방 안에서 어떤 분위기로 보이고 싶은지부터 정리합니다." },
            { title: "콘텐츠 연결", description: "짧은 인사 영상, 무대 장면, 음성, 메시지 링크 중 실제로 자주 보고 싶은 구성을 QR에 연결합니다." },
            { title: "연출 완성", description: "사이즈와 프레임 톤을 확정한 뒤 방 안 배치에 맞는 형태로 제작·출고합니다." },
        ],
        trustPoints: [
            "팬덤 모드는 과한 장식보다 한 장면의 집중도를 높여 주는 구성이 실제 만족도가 높습니다.",
            "벽 컬러, 조명 톤, 기존 굿즈 색감과 잘 맞는 프레임을 고르면 방 전체 완성도가 달라집니다.",
            "QR은 링크만 많이 넣기보다 가장 자주 열어볼 콘텐츠 한 가지를 중심으로 두는 편이 좋습니다.",
        ],
        sizeOptions: [
            { label: "Desk Pick", note: "책상·선반 위에 가볍게 두기 좋은 기본형", priceDelta: 0 },
            { label: "Room Signature", note: "방 안 무드 오브제로 존재감이 확실한 대표 선택", priceDelta: 28000, recommended: true },
            { label: "Wall Spotlight", note: "포인트 벽 연출까지 고려한 상위 구성", priceDelta: 52000 },
        ],
        frameOptions: [
            { label: "Pearl White", note: "포스터·굿즈와 가장 무난하게 어울리는 밝은 톤", swatchClass: "bg-zinc-50", priceDelta: 0 },
            { label: "Midnight Black", note: "최애 이미지를 더 선명하게 띄우는 시그니처 톤", swatchClass: "bg-zinc-950", priceDelta: 12000 },
            { label: "Violet Edge", note: "팬덤 무드를 한층 더 강조하는 포인트 톤", swatchClass: "bg-violet-400", priceDelta: 17000 },
        ],
        heroHighlights: ["팬 컬렉션형", "QR 몰입감", "이벤트 선물"],
    },
    memory: {
        id: "memory",
        title: "Memory Mode",
        koreanLabel: "기념일과 가족의 순간을 선물로 남기는 패키지",
        slogan: "가장 찬란한 순간을 켜다",
        signal: "웨딩·가족·기념일 장면을 감성 선물로 완성하는 메모리 오브제",
        description: "웨딩 사진, 가족사진, 육아 기록, 부모님 선물처럼 오래 남겨야 하는 순간을 더 특별하게 보여주는 모드입니다. 단순 액자보다 현대적이고, QR 콘텐츠로 영상과 메시지까지 더해 선물 만족도를 높이는 데 초점을 맞췄습니다.",
        themeColor: "from-rose-500/18 via-[#050505] to-[#050505]",
        accentColor: "text-rose-400",
        accentRgb: "244, 63, 94",
        price: 210000,
        priceNote: "기본가는 메모리 시그니처 기준입니다. 선물 포장, 사이즈 업그레이드, 공간 연출 비중에 따라 최종 금액이 달라질 수 있으며, 기념일 주문은 일정 확보가 중요합니다.",
        leadTime: "기념일 날짜가 있는 주문이 많아 보통 5~7영업일 전에는 제작 방향을 확정하는 편이 좋습니다. 웨딩·돌잔치용은 더 여유 있게 준비해 주세요.",
        deliveryNote: "부모님 선물, 웨딩 기념일, 출산 축하처럼 수령 날짜가 중요한 경우가 많습니다. 정확한 일정이 있다면 주문 전에 먼저 확인하는 편이 가장 안전합니다.",
        features: [
            "웨딩, 가족, 육아 기록을 선물형 무드 오브제로 완성하는 감성 패키지",
            "사진만 남기는 것이 아니라 영상, 메시지, 성장 기록까지 QR로 확장 가능",
            "부모님 선물이나 기념일 선물처럼 감정 전달이 중요한 상황에서 강한 전환력",
            "너무 클래식하지 않고 지금의 인테리어에 어울리는 현대적 무드가 장점",
        ],
        idealFor: [
            "웨딩 기념일이나 신혼집에 오래 둘 수 있는 선물을 찾는 커플",
            "부모님 결혼기념일, 생신 선물처럼 감정 밀도가 높은 선물을 준비하는 가족",
            "아이 성장 기록을 사진과 영상으로 함께 남기고 싶은 육아 가정",
            "기억을 단순 보관이 아니라 생활 공간 안에서 자연스럽게 켜두고 싶은 고객",
        ],
        packageItems: [
            "메모리 무드형 라이트 프레임 본체 1점",
            "대표 장면 인쇄 구성 및 기본 톤 조정 안내",
            "영상·메시지 연결용 QR 세팅 가이드",
            "선물 전달을 고려한 기본 포장 및 보관 패키지",
        ],
        deliverables: [
            "완성된 메모리 모드 프레임 1점",
            "최종 인쇄 결과물 및 포장 구성",
            "QR 연결 페이지 또는 링크 구성 1식",
            "선물 전달 및 수령 체크 가이드",
        ],
        processSteps: [
            { title: "기억 정리", description: "남기고 싶은 대표 장면과 함께 영상, 메시지, 기념 문구를 정리해 어떤 감정으로 전달할지 먼저 결정합니다." },
            { title: "선물 구성", description: "집에 둘 오브제인지, 부모님 선물인지, 이벤트 선물인지에 따라 사이즈와 프레임 톤을 맞춥니다." },
            { title: "제작·수령", description: "기념일 일정에 맞춰 제작을 진행하고, 수령 후 바로 전달할 수 있도록 보관 및 사용 가이드를 함께 안내합니다." },
        ],
        trustPoints: [
            "메모리 모드는 장기 보관성과 선물 만족도가 중요해 너무 유행 타는 조합보다 오래 보기 좋은 톤을 추천합니다.",
            "영상이나 메시지는 길이보다 감정의 밀도가 중요해 한 번 눌렀을 때 바로 전달되는 구성이 좋습니다.",
            "부모님 선물이나 웨딩 선물은 날짜 변동이 적기 때문에 미리 일정 확인 후 주문하면 훨씬 안정적입니다.",
        ],
        sizeOptions: [
            { label: "Memory Basic", note: "선반·협탁 위에 두기 좋은 기본형", priceDelta: 0 },
            { label: "Memory Signature", note: "선물 만족도와 존재감이 가장 좋은 대표 선택", priceDelta: 38000, recommended: true },
            { label: "Gallery Gift", note: "웨딩·가족 선물용 상위 구성", priceDelta: 72000 },
        ],
        frameOptions: [
            { label: "Warm Beige", note: "가족 사진과 가장 편안하게 어울리는 톤", swatchClass: "bg-stone-200", priceDelta: 0 },
            { label: "Rose Sand", note: "웨딩·기념일 무드를 부드럽게 살리는 포인트 톤", swatchClass: "bg-rose-300", priceDelta: 14000 },
            { label: "Classic Black", note: "사진 대비를 강하게 살리는 안정적 선택", swatchClass: "bg-zinc-900", priceDelta: 16000 },
        ],
        heroHighlights: ["선물 전환형", "웨딩·가족", "감정 전달"],
    },
};

interface PageProps {
    params: Promise<{ id: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
    return Object.keys(MODES_DATA).map((id) => ({ id }));
}

export default async function ModePage({ params }: PageProps) {
    const resolvedParams = await params;
    const modeData = MODES_DATA[resolvedParams.id];

    if (!modeData) {
        notFound();
    }

    const accentPanelStyle = {
        borderColor: `rgba(${modeData.accentRgb}, 0.2)`,
        background: `linear-gradient(180deg, rgba(${modeData.accentRgb}, 0.12), rgba(255,255,255,0.04))`,
    };

    return (
        <div className={`min-h-screen bg-gradient-to-b ${modeData.themeColor} text-white`}>
            <section className="border-b border-white/6 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.08),_transparent_35%)]">
                <div className="container mx-auto max-w-6xl px-4 py-16 md:py-24">
                    <Link href="/modes" className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-zinc-400 transition-colors hover:text-white">
                        <ArrowLeft className="size-4" />
                        라이프 모드 전체로 돌아가기
                    </Link>

                    <div className="grid items-end gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
                        <FadeUpInView>
                            <p className={`mb-4 text-sm font-semibold uppercase tracking-[0.32em] ${modeData.accentColor}`}>For Your Mode Detail</p>
                            <p className="mb-3 text-sm font-medium text-zinc-300">{modeData.koreanLabel}</p>
                            <h1 className="text-3xl font-black tracking-tight text-white md:text-5xl">{modeData.title}</h1>
                            <p className={`mt-5 text-xl font-semibold md:text-2xl ${modeData.accentColor}`}>{modeData.signal}</p>
                            <p className="mt-5 max-w-3xl text-lg leading-8 text-zinc-300 md:text-xl">{modeData.description}</p>

                            <div className="mt-7 flex flex-wrap gap-2">
                                {modeData.heroHighlights.map((item) => (
                                    <span key={`${modeData.id}-hero-${item}`} className="rounded-full border px-3 py-1 text-sm font-medium text-zinc-100" style={accentPanelStyle}>
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </FadeUpInView>

                        <Card className="overflow-hidden rounded-[28px] border py-0 text-white" style={accentPanelStyle}>
                            <CardContent className="px-6 py-7 md:px-8 md:py-8">
                                <p className={`mb-3 text-sm font-semibold uppercase tracking-[0.28em] ${modeData.accentColor}`}>Quick Fit</p>
                                <h2 className="text-xl font-black tracking-tight text-white">이 모드가 특히 잘 맞는 고객</h2>

                                <div className="mt-6 space-y-4">
                                    {modeData.idealFor.slice(0, 3).map((item) => (
                                        <div key={`${modeData.id}-quickfit-${item}`} className="border-b border-white/8 pb-4 last:border-b-0 last:pb-0">
                                            <p className="text-base font-medium leading-7 text-zinc-100">{item}</p>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-7 space-y-3 rounded-[24px] border border-white/10 bg-black/20 p-5">
                                    <div className="flex items-center justify-between text-sm text-zinc-400">
                                        <span>기본 시작가</span>
                                        <span className="font-semibold text-white">{`${new Intl.NumberFormat("ko-KR").format(modeData.price)}원부터`}</span>
                                    </div>
                                    <div className="flex items-center justify-between text-sm text-zinc-400">
                                        <span>제작 안내</span>
                                        <span className="font-semibold text-white">자료 확정 후 순차 제작</span>
                                    </div>
                                </div>

                                <div className="mt-7 flex flex-wrap gap-3">
                                    <Button asChild size="lg" className="rounded-full bg-white px-6 text-black hover:bg-zinc-200">
                                        <Link href="/cart">
                                            구매 흐름 이어가기
                                            <ArrowRight className="size-4" />
                                        </Link>
                                    </Button>
                                    <Button asChild size="lg" variant="outline" className="rounded-full border-white/15 bg-transparent px-6 text-white hover:bg-white/10">
                                        <Link href="/reviews">리얼스토리 보기</Link>
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            <div className="container mx-auto max-w-6xl px-4 py-16 md:py-20">
                <ModeDetailClient mode={modeData} />
            </div>
        </div>
    );
}