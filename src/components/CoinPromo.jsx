import { ChevronRight, X } from "lucide-react";

const promoMap = {
  worker: {
    image: "/image/worker_marketing.png",
    cta: "경량 안전화 보기",
    ctaUrl:
      "https://shinsegaemall.ssg.com/search.ssg?query=%EC%B4%88%EA%B2%BD%EB%9F%89%EC%95%88%EC%A0%84%ED%99%94",
    defaultBit: "left",
  },
  parenting: {
    image: "/image/baby_marketing.png",
    cta: "육아 혜택 보기",
    ctaUrl:
      "https://www.coupang.com/vp/products/8789611743?itemId=25581555461&searchId=b54087f289194ef0ad6e19c4949b201b&sourceType=brandstore_sdp_atf-best_products&storeId=202863&subSourceType=brandstore_sdp_atf-best_products&vendorId=A01236924&vendorItemId=92572508617",
    defaultBit: "right",
  },
  airport: {
    image: "/image/flight_marketing.png",
    cta: "여행 혜택 보기",
    ctaUrl: "https://branden.shop/",
    defaultBit: "right",
  },
  night: {
    image: "/image/night_marketing.png",
    cta: "야간 운전자 혜택 보기",
    ctaUrl:
      "https://company.lottechilsung.co.kr/kor/brand/hot6/contentsid/625/index.do",
    defaultBit: "left",
  },
  electronic: {
    image: "/image/electronic_marketing.png",
    cta: "무공해차 통합누리집",
    ctaUrl:
      "https://www.gihoo.or.kr/gallery.es?mid=a11701000000&bid=0001&act=view&list_no=1492&cid=0033",
    defaultBit: "right",
  },
};

function CoinPromo({
  segment = "worker",
  reward = 20,
  bit,
  onClose,
  onClick,
  active = false,
}) {
  const promo = promoMap[segment] || promoMap.worker;
  const buttonPosition = bit || promo.defaultBit || "right";

  const positionClass =
    buttonPosition === "left" ? "bottom-4 left-4" : "bottom-4 right-4";

  return (
    <div className="px-5">
      <div
        onClick={onClick}
        className={`
          relative h-[240px] overflow-hidden rounded-[28px]
          bg-white shadow-[0_10px_30px_rgba(0,0,0,0.08)]
          ${active ? "ring-[1px] ring-offset-2" : "ring-1 ring-black/5"}
          transition active:scale-[0.99]
        `}
      >
        <img
          src={promo.image}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />

        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onClose?.();
          }}
          className="
            absolute right-5 top-5 z-20 rounded-full
            bg-white/85 p-1.5 text-neutral-500 shadow-sm backdrop-blur
            transition hover:bg-white hover:text-neutral-700
          "
        >
          <X className="h-5 w-5" />
        </button>

        <a
          href={promo.ctaUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className={`
            absolute ${positionClass} z-20
            flex items-center rounded-full bg-white/95
            px-4 py-2.5 text-sm font-extrabold tracking-[-0.4px]
            text-neutral-800 shadow-[0_8px_20px_rgba(0,0,0,0.16)]
            backdrop-blur
          `}
          id="coin-promo-cta"
        >
          {promo.cta}
          <span className="ml-2 text-blue-600">{reward}원 적립</span>
          <ChevronRight className="ml-1 h-4 w-4 text-neutral-400" />
        </a>
      </div>
    </div>
  );
}

export default CoinPromo;
