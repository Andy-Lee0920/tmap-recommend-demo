import { motion } from "framer-motion";
import {
  ArrowUp,
  ArrowLeft,
  ArrowRight,
  Undo2,
  RotateCcw,
  Search,
  Mic,
  User,
  Crosshair,
  Camera,
} from "lucide-react";
import AndroidBar from "../components/AndroidBar";

// ─────────────────────────────────────────────
// Dark Status Bar
// ─────────────────────────────────────────────
function DarkStatusBar() {
  return (
    <div
      className="flex h-9 items-center justify-between px-5 pt-2 text-sm font-semibold"
      style={{ background: "#1a2340" }}
    >
      <div className="flex items-center gap-1.5 text-white/85">
        <span>SKT</span>
        <span>7:04</span>
        <div className="ml-1 h-3 w-4 rounded-full bg-white/55" />
      </div>
      <div className="flex items-center gap-1.5">
        <div className="rounded-[3px] border border-white/40 px-[3px] text-2xs leading-3 text-white/65">
          5G
        </div>
        <div className="rounded-md bg-white/20 px-1.5 py-[1px] text-2xs text-white/90">
          47
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// Navigation HUD
// ─────────────────────────────────────────────
function NavHUD() {
  return (
    <div>
      <DarkStatusBar />

      {/* Main guidance row */}
      <div
        className="flex items-center gap-4 px-5 pb-4 pt-2"
        style={{ background: "#1a2340" }}
      >
        <svg
          className="h-[56px] w-[56px] shrink-0"
          viewBox="0 0 56 56"
          fill="none"
        >
          <line
            x1="28"
            y1="48"
            x2="28"
            y2="10"
            stroke="white"
            strokeWidth="7"
            strokeLinecap="round"
          />
          <polyline
            points="14,26 28,10 42,26"
            stroke="white"
            strokeWidth="7"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </svg>
        <div className="flex-1">
          <div className="text-5xl font-black leading-none tracking-[-1.5px] text-white">
            246m
          </div>
          <div className="mt-1 text-base text-white/60">분기점</div>
        </div>
        <div className="shrink-0 text-right">
          <div className="text-xs text-white/45">잔여</div>
          <div className="text-md font-bold text-white/75">10.2km</div>
        </div>
      </div>

      {/* Sub guidance row */}
      <div
        className="flex items-center gap-3 px-5 py-3"
        style={{ background: "#243050" }}
      >
        <svg
          className="h-5 w-5 shrink-0"
          viewBox="0 0 22 22"
          fill="none"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="6" y1="18" x2="6" y2="9" />
          <path d="M6 9 Q6 4 11 4 L16 4" />
          <polyline points="13,1 16,4 13,7" />
        </svg>
        <span className="text-base font-semibold text-white">
          2.4km 후 우측 방향
        </span>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// Fake Navigation Map
// ─────────────────────────────────────────────
function FakeNavMap() {
  const arrowYs = [120, 235, 345, 420];

  return (
    <div className="relative flex-1 overflow-hidden">
      {/* SVG road network */}
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 584 900"
        preserveAspectRatio="xMidYMid slice"
      >
        <rect width="584" height="900" fill="#f0ece0" />

        {/* Green areas */}
        <ellipse
          cx="78"
          cy="195"
          rx="72"
          ry="52"
          fill="#cce8b0"
          opacity="0.65"
        />
        <ellipse
          cx="505"
          cy="715"
          rx="62"
          ry="46"
          fill="#cce8b0"
          opacity="0.65"
        />

        {/* River */}
        <path
          d="M0,800 C110,784 280,808 584,792"
          stroke="#a8d8e8"
          strokeWidth="58"
          fill="none"
          opacity="0.7"
        />

        {/* Major road: horizontal (아차산로) */}
        <path
          d="M0,312 C110,298 278,320 584,302"
          stroke="#e8c97a"
          strokeWidth="24"
          fill="none"
        />
        <path
          d="M0,312 C110,298 278,320 584,302"
          stroke="white"
          strokeWidth="2"
          fill="none"
          opacity="0.45"
          strokeDasharray="22 14"
        />

        {/* Major road: vertical (천호대로) */}
        <path
          d="M432,0 C420,220 444,440 430,900"
          stroke="#e8c97a"
          strokeWidth="24"
          fill="none"
        />
        <path
          d="M432,0 C420,220 444,440 430,900"
          stroke="white"
          strokeWidth="2"
          fill="none"
          opacity="0.45"
          strokeDasharray="22 14"
        />

        {/* Secondary roads */}
        <path
          d="M0,158 C180,144 362,162 584,147"
          stroke="#ddd8be"
          strokeWidth="13"
          fill="none"
        />
        <path
          d="M0,525 C152,510 335,528 584,512"
          stroke="#ddd8be"
          strokeWidth="13"
          fill="none"
        />
        <path
          d="M188,0 C174,215 192,430 178,900"
          stroke="#ddd8be"
          strokeWidth="13"
          fill="none"
        />
        <path
          d="M0,675 C192,660 375,678 584,662"
          stroke="#ddd8be"
          strokeWidth="10"
          fill="none"
        />

        {/* Minor roads */}
        <path
          d="M0,66 C202,58 405,68 584,55"
          stroke="#e8e2cc"
          strokeWidth="7"
          fill="none"
        />
        <path
          d="M0,445 C172,432 355,447 584,432"
          stroke="#e8e2cc"
          strokeWidth="7"
          fill="none"
        />
        <path
          d="M0,605 C167,592 348,607 584,592"
          stroke="#e8e2cc"
          strokeWidth="7"
          fill="none"
        />
        <path
          d="M90,0 C80,220 95,430 82,900"
          stroke="#e8e2cc"
          strokeWidth="7"
          fill="none"
        />
        <path
          d="M322,0 C312,220 328,430 315,900"
          stroke="#e8e2cc"
          strokeWidth="7"
          fill="none"
        />

        {/* Blue route - full vertical line */}
        <path
          d="M300,900 L300,50"
          stroke="#0068e1"
          strokeWidth="12"
          strokeLinecap="round"
          fill="none"
        />

        {/* Fork branch (right turn ahead) */}
        <path
          d="M300,205 C332,162 380,128 422,100"
          stroke="#0068e1"
          strokeWidth="7"
          strokeLinecap="round"
          fill="none"
          opacity="0.32"
        />

        {/* Direction chevrons on route */}
        {arrowYs.map((y) => (
          <g key={y} transform={`translate(300, ${y})`}>
            <polyline
              points="-11,9 0,-7 11,9"
              stroke="white"
              strokeWidth="3.5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity="0.88"
            />
          </g>
        ))}
      </svg>

      {/* Road labels */}
      <div
        className="absolute text-md font-black tracking-[-0.5px] text-[#b8a258]"
        style={{ left: 70, top: 292 }}
      >
        아차산로
      </div>
      <div
        className="absolute text-md font-black tracking-[-0.5px] text-[#b8a258]"
        style={{ left: 410, top: 110 }}
      >
        천호대로
      </div>

      {/* ① CCTV warning card */}
      <div className="absolute left-3 top-3 flex items-center gap-2.5 rounded-xl bg-white px-3 py-2.5 shadow-[0_2px_14px_rgba(0,0,0,0.18)]">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-red-50">
          <Camera className="h-5 w-5 text-red-500" />
        </div>
        <div>
          <div className="text-sm font-bold text-red-600">끼어들기</div>
          <div className="mt-1">
            <span className="rounded-full bg-red-500 px-2.5 py-0.5 text-xs font-semibold text-white">
              214m
            </span>
          </div>
        </div>
      </div>

      {/* ② Fork icon */}
      <div
        className="absolute flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-md"
        style={{ left: 248, top: 178 }}
      >
        <svg
          className="h-7 w-7"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#444"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="12" y1="20" x2="12" y2="6" />
          <path d="M12 10 C14 7 18 6 20 6" />
          <polyline points="17,3 20,6 17,9" />
        </svg>
      </div>

      {/* ③ Blue info/direction button */}
      <div className="absolute" style={{ right: 14, top: 280 }}>
        <button className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0068e1] shadow-lg">
          <svg
            className="h-6 w-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M13 6L19 12L13 18" />
          </svg>
        </button>
      </div>

      {/* ④ Car/vehicle marker */}
      <div className="absolute" style={{ left: 273, top: 432 }}>
        <div className="relative flex h-[54px] w-[54px] items-center justify-center">
          <div className="absolute inset-0 rounded-full border-[4px] border-white bg-[#0068e1] shadow-[0_4px_18px_rgba(0,104,225,0.5)]" />
          <svg className="relative z-10 h-7 w-7" viewBox="0 0 24 24">
            <polygon points="12,5 5,19 19,19" fill="white" />
          </svg>
        </div>
      </div>

      {/* ⑤ POI card */}
      <div
        className="absolute left-3 flex items-center gap-2.5 rounded-[10px] bg-white px-3 py-2.5 shadow-[0_2px_12px_rgba(0,0,0,0.14)]"
        style={{ bottom: 85 }}
      >
        <span className="text-lg">📍</span>
        <div>
          <div className="text-base font-bold text-neutral-900">이마트</div>
          <div className="text-xs text-neutral-500">직진 227m</div>
        </div>
      </div>

      {/* ⑥ Mic button */}
      <div className="absolute" style={{ right: 14, bottom: 85 }}>
        <button className="flex h-[56px] w-[56px] items-center justify-center rounded-full bg-[#0068e1] shadow-lg">
          <Mic className="h-7 w-7 text-white" strokeWidth={2} />
        </button>
      </div>

      {/* ⑦ Side buttons */}
      <div className="absolute left-3 flex flex-col gap-3" style={{ top: 215 }}>
        <button className="flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-md">
          <Crosshair className="h-5 w-5 text-neutral-700" strokeWidth={2} />
        </button>
        <button className="flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-md">
          <User className="h-5 w-5 text-neutral-700" strokeWidth={2} />
        </button>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// Navigation Bottom Bar
// ─────────────────────────────────────────────
function NavBottomBar() {
  const dirButtons = [
    { Icon: Undo2, orange: false },
    { Icon: ArrowLeft, orange: false },
    { Icon: ArrowUp, orange: true },
    { Icon: ArrowUp, orange: true },
    { Icon: ArrowUp, orange: true },
    { Icon: ArrowRight, orange: false },
    { Icon: RotateCcw, orange: false },
  ];

  return (
    <div className="border-t border-neutral-100 bg-white">
      {/* Road + arrival info */}
      <div className="flex items-center justify-between px-5 py-3">
        <span className="text-base font-medium text-neutral-500">
          ㎞ 아차산로
        </span>
        <div className="flex items-center gap-2">
          <span className="text-md font-bold text-neutral-900">오후 07:55</span>
          <span className="text-sm text-neutral-400">10km</span>
        </div>
      </div>

      {/* Direction buttons */}
      <div className="flex items-center justify-between px-3 pb-3">
        {dirButtons.map(({ Icon, orange }, i) => (
          <button
            key={i}
            className={`flex h-11 w-11 items-center justify-center rounded-full shadow-sm ${
              orange ? "bg-[#ff6b00]" : "border border-neutral-100 bg-white"
            }`}
          >
            <Icon
              className={`h-[22px] w-[22px] ${orange ? "text-white" : "text-neutral-600"}`}
              strokeWidth={orange ? 3 : 2.2}
            />
          </button>
        ))}
        <button className="flex h-11 w-11 items-center justify-center rounded-full border border-neutral-100 bg-white shadow-sm">
          <Search
            className="h-[22px] w-[22px] text-neutral-600"
            strokeWidth={2.2}
          />
        </button>
      </div>

      <AndroidBar />
    </div>
  );
}

// ─────────────────────────────────────────────
// Main Screen Export
// ─────────────────────────────────────────────
export default function NavigationScreen({ onBack }) {
  return (
    <motion.div
      key="navigation"
      initial={{ x: 584, opacity: 0.8 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 584, opacity: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="absolute inset-0 flex flex-col"
    >
      <NavHUD />
      <FakeNavMap />
      <NavBottomBar onBack={onBack} />
    </motion.div>
  );
}
