import { motion } from "framer-motion";
import {
  ArrowLeft,
  X,
  Star,
  Navigation,
  ChevronDown,
  Info,
  Clock,
  Car,
  Tag,
  Sparkles,
} from "lucide-react";
import PhoneStatusBar from "../components/PhoneStatusBar";
import AndroidBar from "../components/AndroidBar";

// ─────────────────────────────────────────────
// Map Background
// ─────────────────────────────────────────────
function DimMapBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-[#8a9180]">
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 460 240"
        preserveAspectRatio="none"
      >
        <rect width="460" height="240" fill="#869087" />
        <path
          d="M0 62 C120 55 240 48 460 70"
          stroke="#d9b47a"
          strokeWidth="22"
          fill="none"
        />
        <path
          d="M0 150 C120 135 240 158 460 128"
          stroke="#c9d0c8"
          strokeWidth="8"
          fill="none"
        />
        <path
          d="M370 0 C345 80 362 140 340 240"
          stroke="#e2be7d"
          strokeWidth="20"
          fill="none"
        />
        <path
          d="M0 210 C150 195 300 218 460 192"
          stroke="#d9b47a"
          strokeWidth="15"
          fill="none"
        />
        <path
          d="M60 0 C80 60 72 130 100 240"
          stroke="#b9c8d7"
          strokeWidth="3"
          fill="none"
        />
        <path
          d="M185 0 C200 65 192 130 220 240"
          stroke="#aa99cf"
          strokeWidth="3"
          fill="none"
        />
      </svg>

      <div className="absolute left-3 top-[38px] rounded-[10px] bg-black/52 px-2.5 py-1.5 text-[11px] font-semibold leading-[1.4] text-white">
        세림라이브
        <br />
        아파트
      </div>
      <div className="absolute left-[72px] top-[38px] rounded-lg bg-yellow-400 px-2 py-1 text-[11px] font-bold text-yellow-900">
        도착피자
      </div>

      <div className="absolute left-[38%] top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="absolute -left-[7px] -top-[7px] h-[28px] w-[28px] rounded-full border-2 border-blue-500/35" />
        <div className="h-[14px] w-[14px] rounded-full border-[2.5px] border-white bg-blue-600" />
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// Search Box
// ─────────────────────────────────────────────
function SearchBox({ onBack }) {
  return (
    <div className="absolute left-3 right-3 top-[42px] z-30">
      <div className="flex h-[64px] items-center gap-3 rounded-[32px] bg-[#f4f4f6] px-5 shadow-[0_2px_12px_rgba(0,0,0,0.18)]">
        <button
          onClick={onBack}
          className="flex h-[32px] w-[32px] shrink-0 items-center justify-center rounded-full bg-white/80 active:scale-95"
        >
          <ArrowLeft
            className="h-[19px] w-[19px] text-neutral-800"
            strokeWidth={2.5}
          />
        </button>
        <span className="flex-1 text-[24px] font-black tracking-[-0.8px] text-neutral-900">
          롯데마트
        </span>
        <button className="flex h-[24px] w-[24px] items-center justify-center rounded-full bg-neutral-400">
          <X className="h-[14px] w-[14px] text-white" strokeWidth={2.5} />
        </button>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// Filter Tabs
// ─────────────────────────────────────────────
function FilterTabs() {
  return (
    <div className="sticky top-0 z-10 border-b border-neutral-100 bg-white">
      <div className="mx-auto mt-2 h-1 w-9 rounded-full bg-neutral-200" />
      <div className="flex h-[62px] items-center justify-between px-4">
        <div className="flex h-full items-center gap-6 text-[16px] font-semibold">
          <div className="flex h-full items-center border-b-2 border-neutral-900 text-neutral-900">
            장소
          </div>
          <div className="text-neutral-400">버스</div>
          <div className="text-neutral-400">정류장</div>
        </div>
        <div className="flex items-center gap-4 text-[13px] font-semibold text-neutral-600">
          <button className="flex items-center gap-0.5">
            지도중심 <ChevronDown className="h-4 w-4" />
          </button>
          <button className="flex items-center gap-0.5">
            정확도순 <ChevronDown className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// Place Card
// ─────────────────────────────────────────────
function PlaceCard({ variant = "primary" }) {
  const isAlt = variant === "alternative";

  return (
    <div className="bg-white px-4 py-4">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0 flex-1">
          <div className="flex items-baseline gap-1.5">
            <h3 className="text-[20px] font-black tracking-[-0.7px] text-neutral-950">
              {isAlt ? "이마트 왕십리점" : "롯데마트 강변점"}
            </h3>
            <span className="text-[12px] font-medium text-neutral-400">
              대형마트
            </span>
          </div>
          <div className="mt-1 text-[15px] font-medium tracking-[-0.3px] text-neutral-500">
            2km · 서울 광진구 광나루로56길 85
          </div>
          <div className="mt-1 flex items-center gap-1.5 text-[15px] font-semibold">
            <span className="text-emerald-600">영업중</span>
            <Star className="h-[14px] w-[14px] fill-emerald-400 text-emerald-400" />
            <span className="text-neutral-800">4.4</span>
            <span className="font-normal text-neutral-400">(17)</span>
          </div>
          <div className="mt-1 text-[13px] font-medium text-red-500">
            휴무 05.24(일)
          </div>
          <div className="mt-2.5 flex items-center gap-1.5">
            <span className="inline-flex items-center gap-1 rounded-[6px] bg-neutral-100 px-2 py-[3px] text-[12px] font-medium text-neutral-500">
              <Car className="h-[12px] w-[12px]" /> 주차
            </span>
            {!isAlt && (
              <span className="inline-flex items-center gap-1 rounded-[6px] bg-neutral-100 px-2 py-[3px] text-[12px] font-medium text-neutral-500">
                <Clock className="h-[12px] w-[12px]" /> 24시간
              </span>
            )}
          </div>
        </div>
        <button className="mt-0.5 flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-full bg-blue-600 text-white">
          <Navigation className="h-5 w-5 fill-white text-white" />
        </button>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// Parking Box
// ─────────────────────────────────────────────
function ParkingBox({ count = 4, name = "1주차장" }) {
  return (
    <div className="mx-3.5 mb-4 overflow-hidden rounded-[12px] border border-neutral-200 bg-white">
      <div className="flex h-[56px] items-center gap-2.5 px-4">
        <div className="flex h-[20px] w-[20px] shrink-0 items-center justify-center rounded-full bg-neutral-600 text-[11px] font-bold text-white">
          1
        </div>
        <span className="flex-1 text-[16px] font-bold tracking-[-0.3px] text-neutral-800">
          {name}
        </span>
        <button className="flex h-[34px] w-[34px] items-center justify-center rounded-full border border-blue-200 text-blue-600">
          <Navigation className="h-4 w-4" />
        </button>
      </div>
      <div className="flex h-[44px] items-center justify-center gap-1 border-t border-neutral-100 bg-neutral-50 text-[15px] font-medium text-neutral-500">
        진입장소 더보기{" "}
        <span className="font-semibold text-blue-600">{count}</span>
        <ChevronDown className="h-4 w-4 text-blue-500" />
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// Ad Strip
// ─────────────────────────────────────────────
function PayAd() {
  return (
    <div className="flex items-center gap-3 border-y border-neutral-100 bg-neutral-50 px-4 py-3">
      <div className="min-w-0 flex-1">
        <div className="text-[12px] font-semibold text-blue-600">
          Npay앱 다운받기 ›
        </div>
        <div className="mt-0.5 text-[17px] font-black tracking-[-0.5px] text-neutral-800">
          네이버페이 X 삼성페이
        </div>
        <div className="mt-1 text-[11px] text-neutral-400">
          <span className="rounded bg-neutral-300 px-1 py-px text-[10px] text-white">
            AD
          </span>{" "}
          Moloco 광고입니다.
        </div>
      </div>
      <div className="flex h-[50px] w-[96px] shrink-0 items-center justify-center rounded-[10px] bg-neutral-900">
        <span className="text-[18px] font-black text-white">
          <span className="text-[#03c75a]">N</span> pay
        </span>
      </div>
      <Info className="h-[18px] w-[18px] shrink-0 text-neutral-300" />
    </div>
  );
}

// ─────────────────────────────────────────────
// Recommendation Banner
// ─────────────────────────────────────────────
function RecommendationBanner() {
  return (
    <div className="mx-3 mb-2.5 mt-3 flex items-center gap-3 rounded-[14px] border-[1.5px] border-blue-500 bg-white px-4 py-3">
      <div className="flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-[10px] bg-blue-50">
        <Sparkles className="h-[18px] w-[18px] text-blue-600" />
      </div>
      <div>
        <div className="text-[16px] font-bold tracking-[-0.4px] text-neutral-900">
          잠깐! 근처 이마트는 어떠세요?
        </div>
        <div className="mt-0.5 text-[13px] font-medium text-blue-500">
          성격 기반 대체 목적지 추천
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// Coupon / Info Buttons
// ─────────────────────────────────────────────
function CouponButtons() {
  return (
    <div className="grid grid-cols-2 gap-2 px-3.5 pb-2 pt-1">
      <button className="flex items-center gap-1.5 rounded-[8px] bg-blue-600 px-3 py-2">
        <Clock className="h-3.5 w-3.5 shrink-0 text-blue-200" />
        <span className="text-left text-[13px] font-semibold leading-[1.35] text-white">
          롯데마트보다
          <br />
          5분 더 걸려요
        </span>
      </button>
      <button className="flex items-center gap-1.5 rounded-[8px] bg-emerald-600 px-3 py-2">
        <Tag className="h-3.5 w-3.5 shrink-0 text-emerald-200" />
        <span className="text-left text-[13px] font-semibold leading-[1.35] text-white">
          소고기 10% 할인
          <br />
          쿠폰 지급 중!
        </span>
      </button>
    </div>
  );
}

// ─────────────────────────────────────────────
// Results Bottom Sheet
// ─────────────────────────────────────────────
function ResultsSheet() {
  return (
    <motion.div
      initial={{ y: 80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="absolute bottom-[62px] left-0 right-0 top-[118px] z-20 overflow-hidden rounded-t-[20px] bg-white shadow-[0_-4px_20px_rgba(0,0,0,0.18)]"
    >
      <FilterTabs />
      <div className="h-full overflow-y-auto overflow-x-hidden bg-[#f2f3f5] pb-12">
        <div className="mb-[7px] bg-white">
          <PlaceCard />
          <ParkingBox />
        </div>

        <div className="mb-[7px] bg-white">
          <PayAd />
        </div>

        <div className="bg-white">
          <RecommendationBanner />
          <CouponButtons />
          <div className="mx-3.5 my-2 h-px bg-neutral-100" />
          <PlaceCard variant="alternative" />
          <ParkingBox count={6} name="옥외지상주차장" />
        </div>
      </div>
    </motion.div>
  );
}

// ─────────────────────────────────────────────
// Main Screen Export
// ─────────────────────────────────────────────
export default function SearchResultScreen({ onBack }) {
  return (
    <motion.div
      key="search"
      initial={{ x: 584, opacity: 0.8 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 584, opacity: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="absolute inset-0"
    >
      <DimMapBackground />
      <div className="absolute left-0 right-0 top-0 z-30 bg-white">
        <PhoneStatusBar time="8:25" battery="82" />
      </div>
      <SearchBox onBack={onBack} />
      <ResultsSheet />
      <div className="absolute bottom-0 left-0 right-0 z-40 bg-white">
        <AndroidBar />
      </div>
    </motion.div>
  );
}
