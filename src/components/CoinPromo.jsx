import { ChevronRight, X } from "lucide-react";

const promoMap = {
  foodie: {
    emoji: "🍽️",
    title: "요즘 뜨는 맛집 모아보기",
    subtitle: "근처 인기 맛집 구경하고 적립받기",
    cta: "맛집 혜택 보기",
    gradient: "from-orange-50 via-white to-amber-50",
    titleColor: "text-orange-700",
    badge: "맛집 탐방형 추천",
    badgeColor: "bg-orange-100 text-orange-700",
    decoration: "bg-orange-200",
  },
  parenting: {
    emoji: "🧸",
    title: "우리 아이를 위한 추천 혜택",
    subtitle: "아동복·장난감·키즈 상품을 만나보세요",
    cta: "육아 혜택 보기",
    gradient: "from-pink-50 via-white to-rose-50",
    titleColor: "text-pink-700",
    badge: "육아 관심 고객 추천",
    badgeColor: "bg-pink-100 text-pink-700",
    decoration: "bg-pink-200",
  },
  night: {
    emoji: "🌙",
    title: "늦은 밤 이동이 잦다면",
    subtitle: "카페인 음료·비타민 혜택을 챙겨보세요",
    cta: "야간 혜택 보기",
    gradient: "from-indigo-50 via-white to-slate-100",
    titleColor: "text-indigo-700",
    badge: "야간 이동형 추천",
    badgeColor: "bg-indigo-100 text-indigo-700",
    decoration: "bg-indigo-200",
  },
  airport: {
    emoji: "🧳",
    title: "여행 준비, 지금 챙기세요",
    subtitle: "캐리어·여행용품·로밍 혜택 추천",
    cta: "여행 혜택 보기",
    gradient: "from-sky-50 via-white to-blue-50",
    titleColor: "text-sky-700",
    badge: "공항 방문 고객 추천",
    badgeColor: "bg-sky-100 text-sky-700",
    decoration: "bg-sky-200",
  },
  worker: {
    emoji: "👷",
    title: "현장 근무자를 위한 추천",
    subtitle: "일자리·작업복·안전화 혜택을 확인하세요",
    cta: "일자리 혜택 보기",
    gradient: "from-yellow-50 via-white to-stone-50",
    titleColor: "text-yellow-700",
    badge: "산업지역 방문 고객 추천",
    badgeColor: "bg-yellow-100 text-yellow-800",
    decoration: "bg-yellow-200",
  },
  shopping: {
    emoji: "🛍️",
    title: "자주 가는 쇼핑 취향에 맞게",
    subtitle: "패션·뷰티·생활용품 특가 추천",
    cta: "쇼핑 혜택 보기",
    gradient: "from-purple-50 via-white to-fuchsia-50",
    titleColor: "text-purple-700",
    badge: "쇼핑 관심 고객 추천",
    badgeColor: "bg-purple-100 text-purple-700",
    decoration: "bg-purple-200",
  },
  health: {
    emoji: "💊",
    title: "건강 관리 혜택 모아보기",
    subtitle: "비타민·건강검진·운동 상품 추천",
    cta: "건강 혜택 보기",
    gradient: "from-emerald-50 via-white to-teal-50",
    titleColor: "text-emerald-700",
    badge: "건강 관심 고객 추천",
    badgeColor: "bg-emerald-100 text-emerald-700",
    decoration: "bg-emerald-200",
  },
  pet: {
    emoji: "🐶",
    title: "반려생활 혜택 추천",
    subtitle: "사료·간식·펫보험·미용 혜택을 만나보세요",
    cta: "펫 혜택 보기",
    gradient: "from-lime-50 via-white to-green-50",
    titleColor: "text-lime-700",
    badge: "반려동물 관심 고객 추천",
    badgeColor: "bg-lime-100 text-lime-700",
    decoration: "bg-lime-200",
  },
};

function CoinPromo({
  segment = "foodie",
  reward = 10,
  partner,
  onClose,
  onClick,
}) {
  const promo = promoMap[segment] || promoMap.foodie;

  return (
    <div className="px-5">
      <div
        onClick={onClick}
        className={`
          relative h-[240px] overflow-hidden rounded-[28px]
          bg-gradient-to-br ${promo.gradient}
          shadow-[0_10px_30px_rgba(0,0,0,0.08)]
          ring-1 ring-black/5
          transition active:scale-[0.99]
        `}
      >
        <div
          className={`absolute -right-10 -top-10 h-32 w-32 rounded-full ${promo.decoration} opacity-50 blur-2xl`}
        />
        <div
          className={`absolute -bottom-12 -left-10 h-36 w-36 rounded-full ${promo.decoration} opacity-40 blur-2xl`}
        />

        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onClose?.();
          }}
          className="absolute right-5 top-5 z-10 rounded-full bg-white/70 p-1.5 text-neutral-400 backdrop-blur transition hover:bg-white hover:text-neutral-600"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="flex h-full flex-col items-center justify-center px-6 pb-2 text-center">
          <div
            className={`mb-4 rounded-full px-3 py-1 text-xs font-bold tracking-[-0.3px] ${promo.badgeColor}`}
          >
            {partner ? `${partner} 제휴 혜택` : promo.badge}
          </div>

          <div className="mb-4 text-7xl leading-none drop-shadow-sm">
            {promo.emoji}
          </div>

          <div
            className={`text-2xl font-extrabold tracking-[-0.8px] ${promo.titleColor}`}
          >
            {promo.title}
          </div>

          <div className="mt-2 text-base font-medium tracking-[-0.5px] text-neutral-500">
            {promo.subtitle}
          </div>

          <div className="mt-5 flex items-center rounded-full bg-white px-5 py-2.5 text-sm font-extrabold tracking-[-0.4px] text-neutral-800 shadow-sm">
            {promo.cta}
            <span className="ml-2 text-blue-600">{reward}원 적립</span>
            <ChevronRight className="ml-1 h-4 w-4 text-neutral-400" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CoinPromo;
