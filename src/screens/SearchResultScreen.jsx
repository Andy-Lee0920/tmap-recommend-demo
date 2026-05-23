import { motion } from "framer-motion";
import {
  ArrowLeft,
  X,
  Star,
  Navigation,
  ChevronDown,
  Info,
  MapPin,
  Wifi,
  Signal,
  CircleAlert,
} from "lucide-react";

function PhoneStatusBar() {
  return (
    <div className="absolute left-0 right-0 top-0 z-30 flex h-[34px] items-center justify-between px-5 text-[12px] font-semibold text-neutral-900">
      <div className="flex items-center gap-1">
        <span>SKT</span>
        <span>8:25</span>
        <span className="ml-1 flex h-5 w-5 items-center justify-center rounded-full bg-yellow-200 text-[13px]">
          🏛
        </span>
        <span className="flex h-5 w-5 items-center justify-center rounded-md bg-yellow-400 text-[12px]">
          🚕
        </span>
      </div>
      <div className="flex items-center gap-1">
        <Wifi className="h-3.5 w-3.5" />
        <MapPin className="h-3.5 w-3.5 fill-neutral-900" />
        <span className="rounded-[3px] border border-neutral-700 px-[2px] text-[8px] leading-3">
          5G
        </span>
        <Signal className="h-3.5 w-3.5" />
        <div className="rounded-md bg-neutral-800 px-1 py-[1px] text-[10px] text-white">
          82
        </div>
      </div>
    </div>
  );
}

function AndroidBar() {
  return (
    <div className="absolute bottom-0 left-0 right-0 z-40 flex h-[58px] items-center justify-around bg-neutral-500/80 px-20 text-white">
      <div className="text-3xl font-thin">|||</div>
      <div className="h-5 w-5 rounded-md border-2 border-white" />
      <div className="text-5xl font-thin leading-none">‹</div>
    </div>
  );
}

function DimMapBackground() {
  const roads = [
    "M-40,100 C80,70 160,85 260,48 S410,40 520,75",
    "M20,250 C130,210 220,260 340,220 S480,185 610,240",
    "M10,420 C110,390 240,430 370,390 S500,340 610,370",
    "M470,-20 C420,130 450,260 410,410 S370,590 430,760",
    "M-20,620 C160,570 320,640 610,565",
    "M120,-10 C150,150 130,280 190,430 S260,570 240,760",
  ];

  const labels = [
    [22, 64, "세림라이브"],
    [8, 92, "아파트"],
    [6, 145, "구의3동"],
    [190, 101, "구의사거리"],
    [330, 75, "광진구청"],
    [435, 93, "자양사거리"],
    [78, 210, "강변역"],
    [320, 210, "동서울터미널"],
  ];

  return (
    <div className="absolute inset-0 overflow-hidden bg-[#8e958e]">
      <svg
        className="absolute inset-0 h-full w-full opacity-70"
        viewBox="0 0 460 1000"
        preserveAspectRatio="none"
      >
        <rect width="460" height="1000" fill="#869087" />
        <path
          d="M0 100 C155 102 280 80 460 105"
          stroke="#d9b47a"
          strokeWidth="24"
          fill="none"
        />
        <path
          d="M20 220 C170 180 280 220 460 170"
          stroke="#c9d0d0"
          strokeWidth="8"
          fill="none"
        />
        <path
          d="M430 0 C390 180 430 260 390 390 S340 640 380 1000"
          stroke="#e2be7d"
          strokeWidth="22"
          fill="none"
        />
        <path
          d="M0 585 C135 560 285 600 460 540"
          stroke="#d9b47a"
          strokeWidth="18"
          fill="none"
        />
        {roads.map((road, index) => (
          <path
            key={road}
            d={road}
            stroke={index % 2 ? "#aa99cf" : "#b9c8d7"}
            strokeWidth="3"
            fill="none"
          />
        ))}
      </svg>

      {labels.map(([x, y, text]) => (
        <div
          key={text}
          style={{ left: x, top: y }}
          className="absolute text-[14px] font-bold tracking-[-0.5px] text-white/80 drop-shadow"
        >
          {text}
        </div>
      ))}

      <div className="absolute left-[22px] top-[34px] rounded-full bg-black/55 px-3 py-1 text-[11px] font-semibold text-white">
        세림라이브
        <br />
        아파트
      </div>
      <div className="absolute left-[138px] top-[10px] rounded-lg bg-yellow-400 px-2 py-1 text-[11px] font-bold text-neutral-900">
        도착피자
      </div>
    </div>
  );
}

function SearchBox({ onBack }) {
  return (
    <div className="absolute left-4 right-4 top-[58px] z-30">
      <div className="flex h-[72px] items-center rounded-full bg-white px-5 shadow-lg">
        <button
          onClick={onBack}
          className="mr-4 flex shrink-0 items-center justify-center active:scale-95"
        >
          <ArrowLeft className="h-7 w-7 text-neutral-900" strokeWidth={2.5} />
        </button>
        <span className="flex-1 text-[28px] font-semibold tracking-[-1.2px] text-neutral-900">
          롯데마트
        </span>
        <X className="h-7 w-7 text-neutral-900" />
      </div>
    </div>
  );
}

function FilterTabs() {
  return (
    <div className="sticky top-0 z-10 border-b border-slate-200 bg-white">
      <div className="mx-auto mt-2 h-1 w-10 rounded-full bg-slate-200" />
      <div className="flex h-[74px] items-center justify-between px-4 text-[16px] font-semibold tracking-[-0.4px] text-neutral-600">
        <div className="flex h-full items-center gap-7">
          <div className="flex h-full items-center border-b-2 border-neutral-900 text-neutral-900">
            장소
          </div>
          <div>버스</div>
          <div>정류장</div>
        </div>
        <div className="flex items-center gap-5 text-[13px] font-semibold text-neutral-700">
          <button className="flex items-center gap-1">
            지도중심 <ChevronDown className="h-4 w-4" />
          </button>
          <button className="flex items-center gap-1">
            정확도순 <ChevronDown className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

function PlaceCard({ variant = "primary" }) {
  const isAlt = variant === "alternative";

  return (
    <div className="bg-white px-5 py-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="flex items-baseline gap-1">
            <h3 className="text-[20px] font-black tracking-[-0.7px] text-neutral-950">
              {isAlt ? "이마트 왕십리점" : "롯데마트 강변점"}
            </h3>
            <span className="text-[12px] font-semibold text-neutral-400">
              대형마트
            </span>
          </div>
          <div className="mt-1 text-[15px] font-medium tracking-[-0.4px] text-neutral-500">
            2km · 서울 광진구 광나루로56길 85
          </div>
          <div className="mt-1 flex items-center gap-1 text-[15px] font-semibold text-neutral-800">
            <span>영업중</span>
            <Star className="h-4 w-4 fill-teal-400 text-teal-400" />
            <span>4.4</span>
            <span className="text-neutral-500">(17)</span>
          </div>
          <div className="mt-1 text-[15px] font-medium text-neutral-700">
            휴무 05.24(일)
          </div>
          <div className="mt-3 inline-flex rounded-sm bg-slate-100 px-1.5 py-1 text-[11px] font-medium text-neutral-500">
            주차
          </div>
        </div>

        <button className="mt-0 flex h-[46px] w-[72px] items-center justify-center rounded-full bg-blue-600 text-white shadow-sm">
          <Navigation className="h-6 w-6 fill-white text-white" />
        </button>
      </div>
    </div>
  );
}

function ParkingBox({ count = 4, name = "1주차장" }) {
  return (
    <div className="mx-4 mb-5 overflow-hidden rounded-md border border-slate-200 bg-white">
      <div className="flex h-[58px] items-center justify-between px-5">
        <div className="flex items-center gap-2 text-[16px] font-black tracking-[-0.4px] text-neutral-800">
          <span className="flex h-[18px] w-[18px] items-center justify-center rounded-full bg-neutral-600 text-[11px] text-white">
            1
          </span>
          {name}
        </div>
        <button className="flex h-10 w-10 items-center justify-center rounded-full border border-blue-300 text-blue-600">
          <Navigation className="h-5 w-5" />
        </button>
      </div>
      <div className="flex h-[45px] items-center justify-center border-t border-slate-100 bg-slate-50 text-[15px] font-medium text-neutral-500">
        진입장소 더보기 <span className="ml-1 text-blue-600">{count}</span>{" "}
        <ChevronDown className="h-4 w-4" />
      </div>
    </div>
  );
}

function PayAd() {
  return (
    <div className="flex h-[98px] items-center border-y border-slate-100 bg-slate-50 px-14">
      <div className="mr-5 flex-1">
        <div className="text-[11px] font-medium text-neutral-500">
          Npay앱 다운받기 ›
        </div>
        <div className="mt-1 text-[18px] font-black tracking-[-0.6px] text-neutral-700">
          네이버페이 X 삼성페이
        </div>
        <div className="mt-1 text-[10px] text-neutral-400">
          <span className="rounded-full bg-neutral-300 px-1 text-white">
            AD
          </span>{" "}
          Moloco 광고입니다.
        </div>
      </div>
      <div className="flex h-[64px] w-[120px] items-center justify-center rounded-md bg-gradient-to-r from-neutral-900 to-green-700 text-[18px] font-bold text-white">
        N pay
      </div>
      <Info className="ml-6 h-5 w-5 text-neutral-300" />
    </div>
  );
}

function RecommendationBanner() {
  return (
    <div className="relative z-20 mx-3 -mb-2 mt-2 rounded-sm bg-white shadow-[0_0_12px_rgba(0,0,0,0.25)]">
      <div className="flex h-[39px] items-center gap-3 px-4">
        <CircleAlert className="h-5 w-5 fill-neutral-300 text-white" />
        <div className="text-[20px] font-black tracking-[-0.8px] text-neutral-900">
          잠깐! 근처 이마트는 어떠세요?
        </div>
      </div>
    </div>
  );
}

function CouponButtons() {
  return (
    <div className="grid grid-cols-2 gap-2 px-5 pb-2 pt-5">
      <button className="h-[26px] rounded bg-blue-600 px-2 text-[12px] font-bold tracking-[-0.3px] text-white">
        롯데마트 보다 5분 더 걸려요
      </button>
      <button className="h-[26px] rounded bg-blue-600 px-2 text-[12px] font-bold tracking-[-0.3px] text-white">
        소고기 10% 할인 쿠폰 지급 중!
      </button>
    </div>
  );
}

function ResultsSheet() {
  return (
    <motion.div
      initial={{ y: 80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="absolute bottom-[58px] left-0 right-0 top-[132px] z-20 overflow-hidden rounded-t-[16px] bg-white shadow-[0_-3px_16px_rgba(0,0,0,0.22)]"
    >
      <FilterTabs />
      <div className="h-full overflow-hidden bg-white pb-12">
        <PlaceCard />
        <ParkingBox />
        <PayAd />
        <RecommendationBanner />
        <CouponButtons />
        <PlaceCard variant="alternative" />
        <ParkingBox count={6} name="옥외지상주차장" />
      </div>
    </motion.div>
  );
}

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
      <PhoneStatusBar />
      <SearchBox onBack={onBack} />
      <ResultsSheet />
      <AndroidBar />
    </motion.div>
  );
}
