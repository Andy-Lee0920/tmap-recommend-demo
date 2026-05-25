import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  Building2,
  Mic,
  Navigation,
  // X,
  MapPin,
  Star,
  CircleUserRound,
  ChevronRight,
  Moon,
} from "lucide-react";
import PhoneStatusBar from "../components/PhoneStatusBar";
import AndroidBar from "../components/AndroidBar";
import CoinPromo from "../components/CoinPromo";

function HomeSearchArea({ onSubmit }) {
  const [value, setValue] = useState("");

  const handleSubmit = () => {
    if (value.trim()) onSubmit?.(value);
  };

  return (
    <div className="px-6 pt-3">
      <div className="flex items-center gap-3">
        <div className="flex h-[58px] flex-1 items-center rounded-full border-2 border-blue-500 bg-white px-7 shadow-sm">
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
            placeholder="장소, 주소, 맛집, 메뉴 검색"
            className="flex-1 bg-transparent text-2xl font-medium tracking-[-1px] text-neutral-900 outline-none placeholder:text-slate-300"
          />
          <Mic className="h-9 w-9 shrink-0 text-blue-500" strokeWidth={2.5} />
        </div>
        <button
          onClick={handleSubmit}
          className="flex h-[62px] w-[62px] shrink-0 items-center justify-center rounded-full bg-white shadow-[0_4px_12px_rgba(0,0,0,0.16)] active:scale-95"
        >
          <Navigation className="h-9 w-9 fill-blue-600 text-blue-600" />
        </button>
      </div>
    </div>
  );
}

function QuickInfo() {
  return (
    <div className="flex items-center justify-between px-10 py-6 text-lg font-semibold tracking-[-0.5px] text-neutral-800">
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
          <span className="absolute -right-1 top-0 text-xs">✨</span>
        </span>
        <span>24° 맑음</span>
      </div>
    </div>
  );
}

// function CoinPromo() {
//   return (
//     <div className="px-5">
//       <div className="relative h-[220px] rounded-[24px] bg-white shadow-sm">
//         <button className="absolute right-6 top-6 text-neutral-300">
//           <X className="h-6 w-6" />
//         </button>
//         <div className="flex h-full flex-col items-center justify-center pb-2">
//           <div className="mb-6 text-7xl leading-none">🪙</div>
//           <div className="text-center text-2xl font-extrabold tracking-[-0.7px] text-blue-700">
//             내 주변 맛집 한눈에 보기
//           </div>
//           <div className="mt-2 flex items-center text-lg font-medium tracking-[-0.6px] text-neutral-500">
//             구경만 해도 10원 적립돼요 <ChevronRight className="h-5 w-5" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

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
        <div className="mx-7 mt-5 grid h-[58px] grid-cols-3 rounded-[12px] bg-slate-100 p-1.5 text-lg font-semibold tracking-[-0.5px] text-neutral-700">
          <button className="rounded-[11px] bg-white shadow-sm">
            티맵추천
          </button>
          <button>편리한 이동</button>
          <button className="relative">
            혜택·전체
            <span className="absolute -right-1 -top-3 rounded-full bg-red-500 px-2 py-1 text-xs font-bold text-white after:absolute after:-bottom-1 after:right-3 after:h-2 after:w-2 after:rotate-45 after:bg-red-500">
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
                className={`${item.ad ? "h-[68px] w-[68px] rounded-[16px] bg-sky-100" : "h-[58px] w-[58px]"} flex items-center justify-center text-5xl drop-shadow-sm`}
              >
                {item.icon}
              </div>
              {item.ad && (
                <span className="absolute right-1 top-[-7px] rounded-full border border-blue-300 bg-white px-1 text-xs font-bold text-blue-500">
                  AD
                </span>
              )}
              <div
                className={`${item.ad ? "mt-1 text-2xs" : "mt-2 text-md"} text-center font-extrabold tracking-[-0.8px] text-neutral-900`}
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

const reviewData = [
  {
    id: 1,
    avatar: "👨‍💼",
    name: "김**",
    similarity: "94%",
    stars: 5,
    label: "고속도로 진입 회피",
    text: "고속도로 진입 전 우회로 추천이 딱 맞았어요. 퇴근길 시간 많이 아꼈어요!",
    time: "2시간 전",
  },
  {
    id: 2,
    avatar: "👩‍💻",
    name: "이**",
    similarity: "91%",
    stars: 4,
    label: "러시아워 우회",
    text: "퇴근 시간대 막히는 구간 자동 우회가 정말 편해요.",
    time: "5시간 전",
  },
  {
    id: 3,
    avatar: "🧑",
    name: "박**",
    similarity: "88%",
    stars: 5,
    label: "야간 운전 주의",
    text: "비슷한 운전 패턴인 분들 추천 경로가 실제로 도움이 됐어요.",
    time: "1일 전",
  },
];

function SimilarReviews() {
  return (
    <div className="px-5 pt-5">
      <div className="overflow-hidden rounded-[24px] bg-white shadow-[0_8px_18px_rgba(15,23,42,0.10)]">
        <div className="flex items-center justify-between px-7 pb-4 pt-6">
          <div>
            <div className="text-lg font-extrabold tracking-[-0.8px] text-neutral-900">
              나와 비슷한 취약의 리뷰
            </div>
            <div className="mt-1 text-sm font-medium tracking-[-0.4px] text-neutral-400">
              유사 운전 패턴 사용자들의 후기
            </div>
          </div>
          <button className="flex items-center text-base font-semibold text-blue-500">
            전체보기
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>

        <div className="flex gap-4 overflow-x-auto px-7 pb-7 [scrollbar-width:none]">
          {reviewData.map((review) => (
            <div
              key={review.id}
              className="w-[240px] shrink-0 rounded-[16px] border border-slate-100 bg-slate-50 p-5"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-3xl shadow-sm">
                  {review.avatar}
                </div>
                <div>
                  <div className="text-md font-bold tracking-[-0.5px] text-neutral-900">
                    {review.name}
                  </div>
                  <div className="text-xs font-semibold text-blue-500">
                    유사도 {review.similarity}
                  </div>
                </div>
              </div>

              <div className="mt-3 inline-block rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600">
                {review.label}
              </div>

              <div className="mt-2 flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${i < review.stars ? "fill-yellow-400 text-yellow-400" : "fill-slate-200 text-slate-200"}`}
                  />
                ))}
              </div>

              <div className="mt-2 text-sm font-medium leading-[1.45] tracking-[-0.4px] text-neutral-700">
                {review.text}
              </div>

              <div className="mt-3 text-xs text-neutral-400">{review.time}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function RecommendationCard({ onNavigate }) {
  return (
    <motion.div
      initial={{ y: 80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 80, opacity: 0 }}
      transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
      className="absolute bottom-[160px] left-0 right-0 z-10 px-4"
    >
      <div className="relative rounded-[15px] border border-slate-200 bg-white p-8 shadow-[0_0_8px_rgba(0,0,0,0.30)]">
        <div className="max-w-[360px] text-3xl font-medium leading-[1.28] tracking-[-1.5px] text-black">
          평일 오후 6시 30분 이네요!
          <br />
          오늘 하루도 고생하셨어요.
          <br />
          <b>집으로 안내할까요?</b>
        </div>

        <button
          onClick={onNavigate}
          className="mt-5 flex h-[43px] w-[315px] items-center justify-between rounded-md bg-blue-600 px-5 text-sm font-bold text-white active:scale-[0.98]"
        >
          <span>자양동 우성아파트로 가기</span>
          <span className="text-2xl leading-none">→</span>
        </button>

        <div className="absolute bottom-5 right-8 text-[112px] leading-none">
          🏠
        </div>
      </div>
    </motion.div>
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
              className="relative flex flex-col items-center gap-1 text-sm font-semibold tracking-[-0.5px] text-neutral-800"
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
                <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-neutral-900 text-xs font-extrabold">
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

export default function HomeScreen({ onNavigate, onSearch, showCard }) {
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
      <HomeSearchArea onSubmit={onSearch} />
      <QuickInfo />
      <CoinPromo segment="parenting" reward={30} partner="쿠팡" />
      <CoinPromo segment="night" reward={20} partner="편의점" />
      <CoinPromo segment="airport" reward={50} partner="여행용품몰" />
      <CoinPromo segment="worker" reward={40} partner="일자리 플랫폼" />
      <MenuGrid />
      <SimilarReviews />

      <AnimatePresence>
        {showCard && <RecommendationCard onNavigate={onNavigate} />}
      </AnimatePresence>

      <BottomNav />
    </motion.div>
  );
}
