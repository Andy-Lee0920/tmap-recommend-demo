import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowUpDown,
  Plus,
  Bus,
  Footprints,
  Layers,
  Crosshair,
  Clock3,
  ChevronDown,
  Star,
} from "lucide-react";
import PhoneStatusBar from "../components/PhoneStatusBar";
import AndroidBar from "../components/AndroidBar";

function RouteHeader({ onBack }) {
  return (
    <div className="relative z-20 bg-white shadow-[0_2px_8px_rgba(0,0,0,0.10)]">
      <PhoneStatusBar time="7:04" battery="47" />
      <div className="grid grid-cols-[46px_1fr_46px] items-center gap-3">
        <button
          onClick={onBack}
          className="flex h-12 w-12 self-start mt-3 items-center justify-center active:scale-95"
        >
          <ArrowLeft className="h-9 w-9 text-neutral-900" strokeWidth={2.4} />
        </button>
        <div className="flex-1 space-y-3">
          <div className="flex h-[66px] items-center rounded-[13px] bg-slate-100 px-8 text-3xl font-medium tracking-[-1.5px] text-neutral-900">
            카이스트 2호관 경영대학원
          </div>
          <div className="flex h-[66px] items-center rounded-[13px] bg-slate-100 px-8 text-3xl font-medium tracking-[-1.5px] text-neutral-900">
            자양우성1차아파트
          </div>
        </div>
        <div className="flex w-12 flex-col items-center gap-7">
          <ArrowUpDown className="h-8 w-8 text-neutral-900" />
          <Plus className="h-8 w-8 text-neutral-900" />
        </div>
      </div>

      <div className="flex h-[82px] items-center justify-between px-9 text-2xl font-semibold">
        <div className="flex h-[54px] min-w-[126px] items-center justify-center gap-2 rounded-full bg-blue-600 px-6 text-white">
          <span className="text-3xl leading-none">🚙</span>
          <span className="text-3xl font-semibold tracking-[-1px]">
            34분
          </span>
        </div>

        <Bus
          className="h-9 w-9 fill-neutral-900 text-neutral-900"
          strokeWidth={2.4}
        />

        <div className="relative flex h-12 w-12 items-center justify-center">
          <Footprints
            className="h-9 w-9 fill-neutral-900 text-neutral-900"
            strokeWidth={2.4}
          />
          <span className="absolute -right-3 top-0 text-md font-black text-red-500">
            N
          </span>
        </div>
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
          className="absolute text-md font-black tracking-[-1px] text-green-700/70 drop-shadow-sm"
        >
          {text}
        </div>
      ))}

      <div className="absolute left-5 top-9 flex h-[52px] w-[290px] items-center gap-3 rounded-full bg-white px-5 shadow-md">
        <span className="text-xs font-black leading-tight">
          KUMHO
          <br />
          TIRE
        </span>
        <span className="whitespace-nowrap text-md font-semibold tracking-[-0.5px] text-neutral-700">
          CRUGEN GT Pro 출시
        </span>
      </div>

      <div className="absolute left-[235px] top-[160px] rounded-lg bg-neutral-800 px-4 py-2 text-lg font-bold text-white shadow-md">
        천호대로
      </div>
      <div className="absolute left-[340px] top-[400px] rounded-lg bg-neutral-800 px-4 py-2 text-lg font-bold text-white shadow-md">
        능동로
      </div>

      <div className="absolute left-[356px] top-[520px] rounded-lg bg-blue-600 px-4 py-2 text-lg font-bold text-white shadow-md">
        도착
      </div>
      <div className="absolute left-[372px] top-[582px] h-16 w-16 rounded-full border-[6px] border-white bg-blue-500 shadow-lg" />
      <div className="absolute left-[407px] top-[612px] h-10 w-10 rounded-full border-[5px] border-white bg-blue-500 shadow-lg" />

      <div className="absolute left-5 top-[330px] space-y-5">
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

      <div className="absolute right-0 top-[520px] flex h-[62px] w-[210px] items-center gap-3 rounded-full bg-white px-4 shadow-xl">
        <div className="text-6xl leading-none">🚙</div>
        <div className="text-2xl font-bold text-blue-600">1234</div>
        <ChevronDown className="h-5 w-5 text-neutral-500" />
      </div>
    </div>
  );
}

function RouteOptionCards() {
  return (
    <div className="absolute bottom-[150px] left-0 right-0 z-10">
      <div className="flex gap-3 overflow-hidden px-7">
        <div className="h-[175px] w-[225px] shrink-0 rounded-[14px] border-[3px] border-blue-600 bg-white p-4 shadow-lg">
          <div className="flex items-center gap-2">
            <span className="whitespace-nowrap text-lg font-extrabold text-blue-600">
              티맵추천
            </span>
            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 border-pink-400 text-2xs font-black text-neutral-900">
              AI
            </span>
            <button className="ml-auto rounded-[8px] border border-slate-200 px-2 py-1 text-sm font-medium text-slate-500">
              상세
            </button>
          </div>
          <div className="mt-2 text-4xl font-black leading-none text-neutral-900">
            30분
          </div>
          <div className="mt-2 text-lg font-bold tracking-[-0.5px] text-neutral-700">
            오후 7:34 도착
          </div>
          <div className="mt-1 text-base font-semibold tracking-[-0.5px] text-neutral-500">
            10km · 통행료 없음
          </div>
        </div>

        <div className="h-[175px] w-[225px] shrink-0 rounded-[14px] border border-slate-200 bg-white p-4 shadow-lg">
          <div className="flex items-center gap-2">
            <span className="whitespace-nowrap text-lg font-extrabold text-neutral-500">
              무료도로 우선
            </span>
            <button className="ml-auto rounded-[8px] border border-slate-200 px-2 py-1 text-sm font-medium text-slate-500">
              상세
            </button>
          </div>
          <div className="mt-3 text-4xl font-black leading-none text-neutral-900">
            30분
          </div>
          <div className="mt-2 text-lg font-bold tracking-[-0.5px] text-neutral-700">
            오후 7:34 도착
          </div>
          <div className="mt-1 text-base font-semibold tracking-[-0.5px] text-neutral-500">
            10km · 통행료 없음
          </div>
        </div>

        <div className="h-[175px] w-[225px] shrink-0 rounded-[14px] border border-slate-200 bg-white p-4 shadow-lg opacity-70">
          <div className="text-lg font-extrabold text-neutral-500">
            최단거리
          </div>
          <div className="mt-3 text-4xl font-black leading-none text-neutral-900">
            29분
          </div>
          <div className="mt-2 text-lg font-bold tracking-[-0.5px] text-neutral-700">
            오후 7:33 도착
          </div>
        </div>
      </div>
    </div>
  );
}

function StartGuideBar({ onStartNav }) {
  return (
    <div className="absolute bottom-0 left-0 right-0 z-20 bg-white/70 pb-[62px] pt-3 backdrop-blur-[2px]">
      <div className="mx-8 flex h-[72px] items-center gap-3">
        <button className="flex h-[68px] w-[76px] items-center justify-center rounded-[12px] bg-slate-400 text-white">
          <Clock3 className="h-8 w-8 fill-slate-400" />
        </button>
        <button
          onClick={onStartNav}
          className="flex h-[68px] flex-1 items-center justify-center gap-5 rounded-[12px] bg-blue-600 text-3xl font-medium tracking-[-1px] text-white active:scale-[0.98]"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white text-lg">
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

export default function RouteScreen({ onBack, onStartNav }) {
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
      <StartGuideBar onStartNav={onStartNav} />
    </motion.div>
  );
}
