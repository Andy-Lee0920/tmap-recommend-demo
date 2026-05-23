import { motion } from "framer-motion";
import {
  Home,
  Building2,
  Mic,
  Navigation,
  X,
  MapPin,
  Star,
  CircleUserRound,
  ChevronRight,
  Moon,
} from "lucide-react";
import PhoneStatusBar from "../components/PhoneStatusBar";
import AndroidBar from "../components/AndroidBar";

function HomeSearchArea() {
  return (
    <div className="px-6 pt-3">
      <div className="flex items-center gap-3">
        <div className="flex h-[58px] flex-1 items-center rounded-full border-2 border-blue-500 bg-white px-7 shadow-sm">
          <span className="flex-1 text-[24px] font-medium tracking-[-1px] text-slate-300">
            장소, 주소, 맛집, 메뉴 검색
          </span>
          <Mic className="h-9 w-9 text-blue-500" strokeWidth={2.5} />
        </div>
        <button className="flex h-[62px] w-[62px] items-center justify-center rounded-full bg-white shadow-[0_4px_12px_rgba(0,0,0,0.16)]">
          <Navigation className="h-9 w-9 fill-blue-600 text-blue-600" />
        </button>
      </div>
    </div>
  );
}

function QuickInfo() {
  return (
    <div className="flex items-center justify-between px-10 py-6 text-[20px] font-semibold tracking-[-0.5px] text-neutral-800">
      <div className="flex items-center gap-2">
        <Home className="h-5 w-5 fill-neutral-900 text-neutral-900" />
        <span>
          집 <b className="text-blue-600">근처</b>
        </span>
      </div>
      <div className="h-5 w-px bg-slate-200" />
      <div className="flex items-center gap-2">
        <Building2 className="h-5 w-5 fill-neutral-800 text-neutral-800" />
        <span>
          회사 <b className="text-blue-600">36분</b>
        </span>
      </div>
      <div className="h-5 w-px bg-slate-200" />
      <div className="flex items-center gap-2">
        <span className="relative flex h-7 w-7 items-center justify-center rounded-full bg-blue-100">
          <Moon className="h-4 w-4 fill-blue-500 text-blue-500" />
          <span className="absolute -right-1 top-0 text-[12px]">✨</span>
        </span>
        <span>24° 맑음</span>
      </div>
    </div>
  );
}

function CoinPromo() {
  return (
    <div className="px-5">
      <div className="relative h-[220px] rounded-[24px] bg-white shadow-sm">
        <button className="absolute right-6 top-6 text-neutral-300">
          <X className="h-6 w-6" />
        </button>
        <div className="flex h-full flex-col items-center justify-center pb-2">
          <div className="mb-6 text-[54px] leading-none">🪙</div>
          <div className="text-center text-[23px] font-extrabold tracking-[-0.7px] text-blue-700">
            내 주변 맛집 한눈에 보기
          </div>
          <div className="mt-2 flex items-center text-[19px] font-medium tracking-[-0.6px] text-neutral-500">
            구경만 해도 10원 적립돼요 <ChevronRight className="h-5 w-5" />
          </div>
        </div>
      </div>
    </div>
  );
}

const menuItems = [
  { icon: "🚗", label: "내비" },
  { icon: "🚌", label: "대중교통" },
  { icon: "📍", label: "티맵랭킹" },
  { icon: "🛞", label: "대리운전" },
  { icon: "❔", label: "오늘의복권" },
  { icon: "🧺", label: "가족나들이" },
  { icon: "🎈", label: "축제·행사" },
  { icon: "💧", label: "데이터를 더 많이!", ad: true },
];

function MenuGrid() {
  return (
    <div className="px-5 pt-5">
      <div className="overflow-hidden rounded-[24px] bg-white shadow-[0_8px_18px_rgba(15,23,42,0.10)]">
        <div className="mx-7 mt-5 grid h-[58px] grid-cols-3 rounded-[12px] bg-slate-100 p-1.5 text-[20px] font-semibold tracking-[-0.5px] text-neutral-700">
          <button className="rounded-[11px] bg-white shadow-sm">
            티맵추천
          </button>
          <button>편리한 이동</button>
          <button className="relative">
            혜택·전체
            <span className="absolute -right-1 -top-3 rounded-full bg-red-500 px-2 py-1 text-[12px] font-bold text-white after:absolute after:-bottom-1 after:right-3 after:h-2 after:w-2 after:rotate-45 after:bg-red-500">
              보험혜택 출시
            </span>
          </button>
        </div>

        <div className="grid grid-cols-4 gap-x-2 gap-y-7 px-7 pb-7 pt-8">
          {menuItems.map((item) => (
            <div
              key={item.label}
              className="relative flex flex-col items-center"
            >
              <div
                className={`${item.ad ? "h-[68px] w-[68px] rounded-[16px] bg-sky-100" : "h-[58px] w-[58px]"} flex items-center justify-center text-[42px] drop-shadow-sm`}
              >
                {item.icon}
              </div>
              {item.ad && (
                <span className="absolute right-1 top-[-7px] rounded-full border border-blue-300 bg-white px-1 text-[12px] font-bold text-blue-500">
                  AD
                </span>
              )}
              <div
                className={`${item.ad ? "mt-1 text-[10px]" : "mt-2 text-[17px]"} text-center font-extrabold tracking-[-0.8px] text-neutral-900`}
              >
                {item.label}
              </div>
            </div>
          ))}
        </div>

        <div className="mb-5 flex justify-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-slate-500" />
          <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
        </div>
      </div>
    </div>
  );
}

function RecommendationCard({ onNavigate }) {
  return (
    <div className="relative px-4 pt-4">
      <motion.div
        initial={{ y: 14, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.45 }}
        className="relative rounded-[15px] border border-slate-200 bg-white p-8 shadow-[0_0_8px_rgba(0,0,0,0.30)]"
      >
        <div className="max-w-[360px] text-[28px] font-medium leading-[1.28] tracking-[-1.5px] text-black">
          평일 오후 6시 30분 이네요!
          <br />
          오늘 하루도 고생하셨어요.
          <br />
          <b>집으로 안내할까요?</b>
        </div>

        <button
          onClick={onNavigate}
          className="mt-5 flex h-[43px] w-[315px] items-center justify-between rounded-md bg-blue-600 px-5 text-[14px] font-bold text-white active:scale-[0.98]"
        >
          <span>자양동 우성아파트로 가기</span>
          <span className="text-2xl leading-none">→</span>
        </button>

        <div className="absolute bottom-5 right-8 text-[112px] leading-none">
          🏠
        </div>
      </motion.div>
    </div>
  );
}

function BottomNav() {
  const items = [
    { icon: Home, label: "홈", active: true },
    { icon: MapPin, label: "어디갈까" },
    { icon: Star, label: "저장" },
    { custom: "86", label: "카라이프" },
    { icon: CircleUserRound, label: "마이", dot: true },
  ];

  return (
    <div className="absolute bottom-0 left-0 right-0 bg-white">
      <div className="grid h-[92px] grid-cols-5 border-t border-slate-100 px-3 pt-3">
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.label}
              className="relative flex flex-col items-center gap-1 text-[14px] font-semibold tracking-[-0.5px] text-neutral-800"
            >
              {item.dot && (
                <span className="absolute right-7 top-0 h-1.5 w-1.5 rounded-full bg-red-500" />
              )}
              {Icon ? (
                <Icon
                  className={`h-8 w-8 ${item.active ? "fill-neutral-900 text-neutral-900" : "text-neutral-900"}`}
                  strokeWidth={2.2}
                />
              ) : (
                <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-neutral-900 text-[13px] font-extrabold">
                  {item.custom}
                </div>
              )}
              <span>{item.label}</span>
            </div>
          );
        })}
      </div>
      <AndroidBar />
    </div>
  );
}

export default function HomeScreen({ onNavigate }) {
  return (
    <motion.div
      key="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, x: -40 }}
      transition={{ duration: 0.25 }}
      className="absolute inset-0 bg-slate-50"
    >
      <PhoneStatusBar />
      <HomeSearchArea />
      <QuickInfo />
      <CoinPromo />
      <MenuGrid />
      <RecommendationCard onNavigate={onNavigate} />
      <BottomNav />
    </motion.div>
  );
}
