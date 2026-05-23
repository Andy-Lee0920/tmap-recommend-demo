import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  Wifi,
  Signal,
  Moon,
  ArrowLeft,
  ArrowUpDown,
  Plus,
  Bus,
  Footprints,
  Fuel,
  Layers,
  Crosshair,
  Clock3,
  ChevronDown,
} from "lucide-react";

function PhoneStatusBar({ time = "7:41", battery = "83" }) {
  return (
    <div className="flex h-9 items-center justify-between px-5 pt-2 text-[13px] font-semibold text-neutral-700">
      <div className="flex items-center gap-1">
        <span>SKT</span>
        <span>{time}</span>
        <span className="ml-1 h-3 w-4 rounded-full bg-neutral-700" />
      </div>
      <div className="flex items-center gap-1 text-neutral-700">
        <Wifi className="h-3.5 w-3.5" />
        <MapPin className="h-3.5 w-3.5 fill-neutral-700" />
        <span className="rounded-[3px] border border-neutral-600 px-[2px] text-[8px] leading-3">
          5G
        </span>
        <Signal className="h-3.5 w-3.5" />
        <div className="flex items-center rounded-md bg-neutral-700 px-1 py-[1px] text-[10px] text-white">
          {battery}
        </div>
      </div>
    </div>
  );
}

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

function AndroidBar() {
  return (
    <div className="flex h-[62px] items-center justify-around px-20 text-neutral-700">
      <div className="text-4xl font-thin">|||</div>
      <div className="h-7 w-7 rounded-[9px] border-2 border-neutral-500" />
      <div className="text-5xl font-thin leading-none">‹</div>
    </div>
  );
}

function HomeScreen({ onNavigate }) {
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

function RouteHeader({ onBack }) {
  return (
    <div className="relative z-20 bg-white shadow-[0_2px_8px_rgba(0,0,0,0.10)]">
      <PhoneStatusBar time="7:04" battery="47" />
      <div className="flex items-center gap-4 px-7 pb-4 pt-8">
        <button
          onClick={onBack}
          className="flex h-12 w-12 items-center justify-center active:scale-95"
        >
          <ArrowLeft className="h-8 w-8 text-neutral-900" strokeWidth={2.5} />
        </button>
        <div className="flex-1 space-y-3">
          <div className="flex h-[66px] items-center rounded-[13px] bg-slate-100 px-8 text-[28px] font-medium tracking-[-1.5px] text-neutral-900">
            카이스트 2호관 경영대학원
          </div>
          <div className="flex h-[66px] items-center rounded-[13px] bg-slate-100 px-8 text-[28px] font-medium tracking-[-1.5px] text-neutral-900">
            자양우성1차아파트
          </div>
        </div>
        <div className="flex w-12 flex-col items-center gap-7">
          <ArrowUpDown className="h-8 w-8 text-neutral-900" />
          <Plus className="h-8 w-8 text-neutral-900" />
        </div>
      </div>
      <div className="flex h-[76px] items-center justify-around px-8 text-[25px] font-semibold">
        <div className="flex h-[50px] items-center gap-2 rounded-full bg-blue-600 px-7 text-white">
          <span>🚙</span>
          <span>30분</span>
        </div>
        <Bus className="h-8 w-8 fill-neutral-900 text-neutral-900" />
        <div className="relative">
          <Footprints className="h-8 w-8 fill-neutral-900 text-neutral-900" />
          <span className="absolute -right-5 -top-2 text-[18px] font-black text-red-500">
            N
          </span>
        </div>
      </div>
    </div>
  );
}

function FakeMap() {
  const roads = [
    "M120,170 C220,155 260,220 340,210 S520,180 600,235",
    "M40,420 C180,360 220,410 310,370 S430,300 560,340",
    "M80,660 C210,600 340,640 520,560",
    "M410,40 C370,160 390,270 350,390 S310,600 370,760",
    "M25,260 C120,295 190,270 260,320 S410,450 570,420",
    "M150,50 C180,190 160,290 220,420 S290,560 260,760",
    "M20,540 C150,500 300,510 560,470",
  ];

  const labels = [
    [90, 150, "IC 정릉"],
    [230, 330, "IC 마장"],
    [300, 400, "IC 사근"],
    [400, 585, "IC 탄천"],
    [115, 690, "IC 한남"],
    [495, 150, "중랑"],
    [435, 210, "상봉역"],
    [55, 470, "금호산"],
    [260, 560, "서울숲"],
  ];

  return (
    <div className="absolute inset-x-0 bottom-[236px] top-[326px] overflow-hidden bg-[#eef5e8]">
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 584 740"
        preserveAspectRatio="none"
      >
        <rect width="584" height="740" fill="#edf5e8" />
        <path
          d="M0 125 C180 105 260 140 584 85"
          stroke="#f2c266"
          strokeWidth="18"
          fill="none"
          opacity="0.85"
        />
        <path
          d="M0 535 C180 500 320 555 584 490"
          stroke="#f2c266"
          strokeWidth="16"
          fill="none"
          opacity="0.85"
        />
        <path
          d="M435 0 C415 180 460 320 420 740"
          stroke="#f2c266"
          strokeWidth="18"
          fill="none"
          opacity="0.85"
        />
        <path
          d="M0 625 C220 610 385 645 584 600"
          stroke="#95d7e8"
          strokeWidth="54"
          fill="none"
          opacity="0.95"
        />
        {roads.map((road, index) => (
          <path
            key={road}
            d={road}
            stroke={index % 2 ? "#cab5ef" : "#b7c9df"}
            strokeWidth="3"
            fill="none"
            opacity="0.9"
          />
        ))}
        <path
          d="M238 215 L250 285 L248 342 L304 405 L388 430"
          stroke="#0aa85f"
          strokeWidth="25"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M238 215 L250 285 L248 342"
          stroke="#f08a00"
          strokeWidth="25"
          fill="none"
          strokeLinecap="round"
          strokeDasharray="40 18"
        />
        <path
          d="M304 405 L388 430"
          stroke="#f08a00"
          strokeWidth="25"
          fill="none"
          strokeLinecap="round"
          strokeDasharray="40 18"
        />
        <path
          d="M250 285 L248 342 L304 405 L388 430"
          stroke="#07552f"
          strokeWidth="4"
          fill="none"
          opacity="0.35"
        />
      </svg>

      {labels.map(([x, y, text]) => (
        <div
          key={text}
          style={{ left: x, top: y }}
          className="absolute text-[18px] font-black tracking-[-1px] text-green-700/70 drop-shadow-sm"
        >
          {text}
        </div>
      ))}

      <div className="absolute left-5 top-9 flex h-[60px] w-[315px] items-center gap-3 rounded-full bg-white px-5 shadow-md">
        <span className="text-[13px] font-black">
          KUMHO
          <br />
          TIRE
        </span>
        <span className="text-[24px] font-semibold tracking-[-1px] text-neutral-700">
          CRUGEN GT Pro 출시
        </span>
      </div>

      <div className="absolute right-4 top-20 flex h-[60px] w-[60px] items-center justify-center rounded-xl bg-white shadow-lg">
        <Fuel className="h-9 w-9 text-neutral-900" strokeWidth={2.5} />
      </div>

      <div className="absolute left-[215px] top-[150px]">
        <div className="relative flex h-[118px] w-[95px] items-start justify-center">
          <div className="absolute top-0 z-10 flex h-[80px] w-[80px] items-center justify-center rounded-full border-[7px] border-red-500 bg-white text-[42px] shadow-lg">
            🛞
          </div>
          <div className="absolute bottom-0 h-16 w-16 rotate-45 rounded-[8px] bg-red-500" />
        </div>
      </div>

      <div className="absolute left-[235px] top-[275px] rounded-lg bg-neutral-800 px-4 py-2 text-[20px] font-bold text-white shadow-md">
        천호대로
      </div>
      <div className="absolute left-[340px] top-[445px] rounded-lg bg-neutral-800 px-4 py-2 text-[20px] font-bold text-white shadow-md">
        능동로
      </div>

      <div className="absolute left-[356px] top-[520px] rounded-lg bg-blue-600 px-4 py-2 text-[20px] font-bold text-white shadow-md">
        도착
      </div>
      <div className="absolute left-[372px] top-[582px] h-16 w-16 rounded-full border-[6px] border-white bg-blue-500 shadow-lg" />
      <div className="absolute left-[407px] top-[612px] h-10 w-10 rounded-full border-[5px] border-white bg-blue-500 shadow-lg" />

      <div className="absolute left-5 top-[360px] space-y-5">
        <MapButton>
          <Star className="h-9 w-9 text-neutral-900" />
        </MapButton>
        <MapButton>
          <Layers className="h-9 w-9 text-neutral-900" />
        </MapButton>
        <MapButton>
          <Crosshair className="h-9 w-9 text-neutral-900" />
        </MapButton>
      </div>

      <div className="absolute right-0 top-[566px] flex h-[75px] w-[245px] items-center gap-4 rounded-full bg-white px-5 shadow-xl">
        <div className="text-[58px] leading-none">🚙</div>
        <div className="text-[29px] font-bold text-blue-600">2243</div>
        <ChevronDown className="h-6 w-6 text-neutral-500" />
      </div>
    </div>
  );
}

function MapButton({ children }) {
  return (
    <div className="flex h-[68px] w-[68px] items-center justify-center rounded-full bg-white shadow-lg">
      {children}
    </div>
  );
}

function RouteOptionCards() {
  return (
    <div className="absolute bottom-[113px] left-0 right-0 z-10">
      <div className="flex gap-4 overflow-hidden px-8">
        <div className="h-[198px] w-[245px] shrink-0 rounded-[16px] border-[3px] border-blue-600 bg-white p-5 shadow-lg">
          <div className="flex items-center gap-2">
            <span className="text-[24px] font-extrabold text-blue-600">
              티맵추천
            </span>
            <span className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-pink-400 text-[13px] font-black text-neutral-900">
              AI
            </span>
            <button className="ml-auto rounded-[10px] border border-slate-200 px-3 py-1 text-[19px] font-medium text-slate-500">
              상세
            </button>
          </div>
          <div className="mt-3 text-[43px] font-black leading-none text-neutral-900">
            30분
          </div>
          <div className="mt-3 text-[24px] font-bold tracking-[-1px] text-neutral-700">
            오후 7:34 도착
          </div>
          <div className="mt-2 text-[22px] font-semibold tracking-[-1px] text-neutral-500">
            10km · 통행료 없음
          </div>
        </div>

        <div className="h-[198px] w-[245px] shrink-0 rounded-[16px] border border-slate-200 bg-white p-5 shadow-lg">
          <div className="flex items-center gap-2">
            <span className="text-[24px] font-extrabold text-neutral-500">
              무료도로 우선
            </span>
            <button className="ml-auto rounded-[10px] border border-slate-200 px-3 py-1 text-[19px] font-medium text-slate-500">
              상세
            </button>
          </div>
          <div className="mt-5 text-[43px] font-black leading-none text-neutral-900">
            30분
          </div>
          <div className="mt-3 text-[24px] font-bold tracking-[-1px] text-neutral-700">
            오후 7:34 도착
          </div>
          <div className="mt-2 text-[22px] font-semibold tracking-[-1px] text-neutral-500">
            10km · 통행료 없음
          </div>
        </div>

        <div className="h-[198px] w-[245px] shrink-0 rounded-[16px] border border-slate-200 bg-white p-5 shadow-lg opacity-70">
          <div className="text-[24px] font-extrabold text-neutral-500">
            최단거리
          </div>
          <div className="mt-5 text-[43px] font-black leading-none text-neutral-900">
            29분
          </div>
          <div className="mt-3 text-[24px] font-bold tracking-[-1px] text-neutral-700">
            오후 7:33 도착
          </div>
        </div>
      </div>
    </div>
  );
}

function StartGuideBar() {
  return (
    <div className="absolute bottom-0 left-0 right-0 z-20 bg-white/70 pb-[62px] pt-4 backdrop-blur-[2px]">
      <div className="mx-8 flex h-[84px] items-center gap-4">
        <button className="flex h-[80px] w-[88px] items-center justify-center rounded-[12px] bg-slate-400 text-white">
          <Clock3 className="h-10 w-10 fill-white" />
        </button>
        <button className="flex h-[80px] flex-1 items-center justify-center gap-7 rounded-[12px] bg-blue-600 text-[32px] font-black tracking-[-1px] text-white">
          <span className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white text-[23px]">
            11
          </span>
          안내시작
        </button>
      </div>
      <div className="absolute bottom-0 left-0 right-0 bg-neutral-500/70 text-white">
        <AndroidBar />
      </div>
    </div>
  );
}

function RouteScreen({ onBack }) {
  return (
    <motion.div
      key="route"
      initial={{ x: 584, opacity: 0.75 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 584, opacity: 0 }}
      transition={{ duration: 0.32, ease: "easeOut" }}
      className="absolute inset-0 bg-white"
    >
      <RouteHeader onBack={onBack} />
      <FakeMap />
      <RouteOptionCards />
      <StartGuideBar />
    </motion.div>
  );
}

const BASE_PHONE_WIDTH = 584;
const BASE_PHONE_HEIGHT = 1260;

function usePhoneScale() {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const updateScale = () => {
      const padding = 16;
      const availableHeight = window.innerHeight - padding;
      const availableWidth = window.innerWidth - padding;

      const heightScale = availableHeight / BASE_PHONE_HEIGHT;
      const widthScale = availableWidth / BASE_PHONE_WIDTH;

      setScale(Math.min(heightScale, widthScale));
    };

    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, []);

  return scale;
}

export default function TmapNextDestinationMobileDemo() {
  const [screen, setScreen] = useState("home");
  const scale = usePhoneScale();

  return (
    <div className="flex h-[100dvh] w-full items-center justify-center overflow-hidden bg-white p-2 font-sans text-neutral-900">
      <div
        className="relative shrink-0"
        style={{
          width: BASE_PHONE_WIDTH * scale,
          height: BASE_PHONE_HEIGHT * scale,
        }}
      >
        <div
          className="absolute left-0 top-0 h-[1260px] w-[584px] origin-top-left overflow-hidden border-[3px] border-neutral-300 bg-slate-50 shadow-sm"
          style={{ transform: `scale(${scale})` }}
        >
          <AnimatePresence mode="wait">
            {screen === "home" ? (
              <HomeScreen key="home" onNavigate={() => setScreen("route")} />
            ) : (
              <RouteScreen key="route" onBack={() => setScreen("home")} />
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
