import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUp,
  ArrowLeft,
  ArrowRight,
  Undo2,
  Search,
  Mic,
  Video,
  Menu,
  RefreshCcw,
  MapPinned,
} from "lucide-react";
import AndroidBar from "../components/AndroidBar";

// SVG viewBox(363×690) → CSS pixel(584×1260) coordinate helpers.
// Used to position HTML overlay elements on top of the background SVG.
const toX = (svgX) => svgX * (584 / 363);
const toY = (svgY) => svgY * (1260 / 690);

// ─────────────────────────────────────────────
// StatusBarOverlay
// ─────────────────────────────────────────────
function StatusBarOverlay() {
  return (
    <div className="absolute inset-x-0 top-0 z-30 flex h-8 items-center justify-between px-4 pt-1 text-sm font-semibold text-neutral-700">
      <div className="flex items-center gap-1.5">
        <span>SKT</span>
        <span>7:24</span>
        <span className="ml-1 h-3 w-4 rounded-full bg-neutral-500/70" />
      </div>
      <div className="flex items-center gap-1.5 text-xs text-neutral-700">
        <span>5G</span>
        <span className="rounded-md bg-neutral-700/70 px-1.5 py-[1px] text-2xs text-white">
          86
        </span>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// NavHUD
// ─────────────────────────────────────────────
function NavHUD() {
  return (
    <div className="absolute left-0 top-[38px] z-40 w-[250px] overflow-hidden rounded-br-[7px] bg-[#17613f] text-white shadow-[0_2px_6px_rgba(0,0,0,0.25)]">
      <div className="flex items-center gap-3 px-3 pb-1.5 pt-2">
        <svg
          className="h-[40px] w-[48px] shrink-0"
          viewBox="0 0 56 50"
          fill="none"
        >
          <path
            d="M11 44V29C11 18 20 10 31 10H44"
            stroke="white"
            strokeWidth="7"
            strokeLinecap="round"
          />
          <path
            d="M35 3L47 10L35 18"
            stroke="white"
            strokeWidth="7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <div>
          <div className="text-5xl font-black leading-none tracking-[-1px]">
            246m
          </div>
          <div className="mt-1 text-sm font-medium text-white/90">분기점</div>
        </div>
      </div>
      <div className="flex items-center gap-2 border-t border-white/20 bg-[#145735] px-3 py-2">
        <svg
          className="h-5 w-5 shrink-0"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M6 20V10C6 6 9 4 13 4H18" />
          <path d="M15 1L19 4L15 7" />
        </svg>
        <span className="text-lg font-extrabold tracking-[-0.5px]">2.4km</span>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// Layer 1: Map Background SVG (geometry only)
// preserveAspectRatio="none" fills the screen — roads/shapes look fine stretched.
// Text and circles are NOT rendered here to avoid distortion.
// ─────────────────────────────────────────────
function MapBackground() {
  const routeChevrons = [125, 205, 365, 445, 525, 605];
  const localRoads = [
    50, 112, 175, 236, 300, 364, 428, 492, 556, 620, 684, 748,
  ];

  return (
    <svg
      className="absolute inset-0 h-full w-full"
      viewBox="0 0 363 690"
      preserveAspectRatio="none"
    >
      <rect width="363" height="690" fill="#f1eee5" />

      {/* 블록/공원 */}
      <path d="M0 390H174V556H0Z" fill="#d7ead1" opacity="0.8" />
      <path d="M193 420H363V555H193Z" fill="#e1eef4" opacity="0.85" />
      <ellipse cx="72" cy="536" rx="82" ry="48" fill="#cfe9bb" opacity="0.7" />
      <ellipse
        cx="316"
        cy="300"
        rx="44"
        ry="33"
        fill="#d5edc2"
        opacity="0.65"
      />
      {/* 강 */}
      <path
        d="M0 575C95 560 176 580 363 560"
        stroke="#bfe2ea"
        strokeWidth="46"
        opacity="0.7"
      />

      {/* 골목 */}
      {localRoads.map((y) => (
        <path
          key={y}
          d={`M-20 ${y} C95 ${y - 9} 215 ${y + 7} 383 ${y - 5}`}
          stroke="#ddd9c8"
          strokeWidth="7"
          fill="none"
        />
      ))}
      <path
        d="M64  -10C57  170 69  380 60  705"
        stroke="#e3dec8"
        strokeWidth="8"
      />
      <path
        d="M136 -10C130 170 143 380 135 705"
        stroke="#ddd8bf"
        strokeWidth="12"
      />
      <path
        d="M238 -10C230 170 246 395 236 705"
        stroke="#ded9c3"
        strokeWidth="8"
      />
      <path
        d="M315 -10C307 170 325 395 312 705"
        stroke="#ded9c3"
        strokeWidth="7"
      />

      {/* 주요 도로 */}
      <path
        d="M0 330C80 320 210 335 363 320"
        stroke="#ecc866"
        strokeWidth="22"
      />
      <path
        d="M0 330C80 320 210 335 363 320"
        stroke="white"
        strokeWidth="2"
        strokeDasharray="18 12"
        opacity="0.65"
      />
      <path
        d="M262 -15C254 165 270 365 258 705"
        stroke="#edc65b"
        strokeWidth="21"
      />
      <path
        d="M262 -15C254 165 270 365 258 705"
        stroke="white"
        strokeWidth="2"
        strokeDasharray="18 12"
        opacity="0.65"
      />

      {/* 안내 경로 */}
      <path
        d="M181 730L181 145"
        stroke="#0c63dc"
        strokeWidth="11"
        strokeLinecap="round"
      />
      <path
        d="M181 145C181 120 192 106 214 96"
        stroke="#0c63dc"
        strokeWidth="11"
        strokeLinecap="round"
      />
      <path
        d="M181 145C181 120 192 106 214 96"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
        opacity="0.6"
      />
      {/* 주행 완료 구간 */}
      <path
        d="M181 310L181 730"
        stroke="#0a4eae"
        strokeWidth="11"
        strokeLinecap="round"
        opacity="0.5"
      />
      {/* 방향 화살 */}
      {routeChevrons.map((y) => (
        <g key={y} transform={`translate(181 ${y})`}>
          <path
            d="M-6 6L0 -5L6 6"
            stroke="white"
            strokeWidth="2.5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.88"
          />
        </g>
      ))}
    </svg>
  );
}

// ─────────────────────────────────────────────
// Layer 2: Map Overlay — HTML absolute elements
// Positions computed via toX/toY from the same SVG viewBox (363×690).
// HTML divs are always correctly round; text uses true CSS px — no SVG distortion.
// ─────────────────────────────────────────────
function MapOverlay() {
  const pois = [
    { x: 28, y: 105, text: "미쉐린", color: "#f7a33c" },
    { x: 94, y: 82, text: "건대입구", color: "#9ca3af" },
    { x: 150, y: 168, text: "카프라노", color: "#f7a33c" },
    { x: 198, y: 106, text: "국민은행", color: "#f7a33c" },
    { x: 288, y: 82, text: "스타벅스", color: "#8dbb42" },
    { x: 298, y: 152, text: "공두부", color: "#f7a33c" },
    { x: 208, y: 240, text: "포고", color: "#f7a33c" },
    { x: 50, y: 586, text: "스타시티", color: "#f7a33c" },
  ];

  return (
    <>
      {/* ── 도로 라벨 ── */}
      <div
        className="absolute text-xs font-bold tracking-[-0.3px] text-[#8c937e]"
        style={{ left: toX(18), top: toY(164) }}
      >
        노유산로
      </div>
      <div
        className="absolute text-xs font-bold tracking-[-0.3px] text-[#b59a43]"
        style={{ left: toX(240), top: toY(112), transform: "rotate(-3deg)" }}
      >
        천호대로
      </div>
      <div
        className="absolute text-xs font-bold tracking-[-0.3px] text-[#8c937e]"
        style={{ left: toX(66), top: toY(646) }}
      >
        아차산로
      </div>
      <div
        className="absolute text-2xs font-bold text-[#8c937e]"
        style={{ left: toX(268), top: toY(418) }}
      >
        이마트24
      </div>

      {/* ── POI 마커 ── */}
      {pois.map((poi) => (
        <div
          key={poi.text}
          className="absolute flex items-center gap-1"
          style={{ left: toX(poi.x), top: toY(poi.y) - 6 }}
        >
          <div
            className="h-[10px] w-[10px] shrink-0 rounded-full border-[1.5px] border-white shadow-sm"
            style={{ background: poi.color }}
          />
          <span className="text-2xs font-semibold leading-none text-[#8a6e42]">
            {poi.text}
          </span>
        </div>
      ))}

      {/* ── 경로 배지 ── */}
      <div
        className="absolute z-10 flex h-[18px] w-[18px] items-center justify-center rounded-full border-2 border-[#6aae31] bg-white text-2xs font-black text-[#4d8e23]"
        style={{ left: toX(193) - 9, top: toY(236) - 9 }}
      >
        2
      </div>
      <div
        className="absolute z-10 flex h-[18px] w-[18px] items-center justify-center rounded-full bg-[#f0a832] text-2xs font-black text-white"
        style={{ left: toX(169) - 9, top: toY(314) - 9 }}
      >
        5
      </div>
      <div
        className="absolute z-10 flex h-[20px] w-[20px] items-center justify-center rounded-full border-2 border-[#d5c76f] bg-white text-2xs font-black text-[#8a7a13]"
        style={{ left: toX(276) - 10, top: toY(323) - 10 }}
      >
        7
      </div>

      {/* ── 목적지 핀 ── */}
      <div
        className="absolute z-10 h-[14px] w-[14px] rounded-full border-[2.5px] border-white bg-[#f1542f] shadow"
        style={{ left: toX(151) - 7, top: toY(192) - 7 }}
      />

      {/* ── 차량 마커 — 경로 x=181 정중앙 정렬 ── */}
      <div
        className="absolute z-20"
        style={{ left: toX(181) - 33, top: toY(310) - 33 }}
      >
        <div className="relative h-[66px] w-[66px] rounded-full border-[4.5px] border-white bg-white shadow-[0_4px_18px_rgba(0,0,0,0.3)]">
          <svg viewBox="0 0 66 66" className="h-full w-full">
            <polygon points="33,10.5 16.5,51 33,40.5 49.5,51" fill="#4f6fff" />
          </svg>
        </div>
      </div>

      {/* ── 현재 방향 인디케이터 ── */}
      <div
        className="absolute z-20 flex h-6 w-6 items-center justify-center rounded-full border-2 border-[#0080ff] bg-white"
        style={{ left: toX(345) - 12, top: toY(310) - 12 }}
      >
        <ArrowUp className="h-4 w-4 text-[#0080ff]" strokeWidth={3} />
      </div>
    </>
  );
}

// ─────────────────────────────────────────────
// FakeNavMap
// ─────────────────────────────────────────────
function FakeNavMap() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-[#f2f0e8]">
      <MapBackground />
      <MapOverlay />

      {/* 카메라 경고 + 속도 표시 */}
      <div className="absolute left-[15px] top-[398px] z-20 flex flex-col items-center">
        <div className="relative flex h-[81px] w-[81px] items-center justify-center rounded-full border-[5px] border-[#ef2a16] bg-white shadow-[0_2px_6px_rgba(0,0,0,0.16)]">
          <div className="flex flex-col items-center justify-center">
            <Video className="mb-0.5 h-[19px] w-[19px] fill-black text-black" />

            <div className="text-center text-[16px] font-black leading-[1.05] tracking-[-0.9px] text-black">
              끼어들기
            </div>
          </div>
        </div>

        <div className="relative z-10 -mt-[14px] flex h-[36px] w-[87px] items-center justify-center rounded-[3px] bg-[#ef2a16] shadow-[0_2px_5px_rgba(0,0,0,0.2)]">
          <span className="text-[27px] font-black leading-none tracking-[-1px] text-white">
            214m
          </span>
        </div>

        <div className="-mt-[1px] text-[46px] font-black leading-none tracking-[-1.8px] text-black drop-shadow-[0_1px_1px_rgba(255,255,255,0.9)]">
          0
        </div>
      </div>

      {/* 마이크 버튼 */}
      <button className="absolute bottom-[72px] right-4 z-30 flex h-[56px] w-[56px] items-center justify-center rounded-full bg-[#3157ff] shadow-lg">
        <Mic className="h-7 w-7 text-white" strokeWidth={2.3} />
      </button>

      {/* 지도 핀 버튼 */}
      <button className="absolute bottom-[36px] left-4 z-30 flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-md">
        <MapPinned className="h-5 w-5 text-neutral-700" />
      </button>

      {/* 검색 버튼 */}
      <button className="absolute bottom-[35px] right-4 z-30 flex h-[48px] w-[48px] items-center justify-center rounded-full bg-white shadow-md">
        <Search className="h-6 w-6 text-neutral-700" strokeWidth={2.5} />
      </button>
    </div>
  );
}

// ─────────────────────────────────────────────
// Lane Guide
// ─────────────────────────────────────────────
function LaneGuide() {
  const items = [
    { Icon: ArrowLeft, active: false },
    { Icon: Undo2, active: false },
    { Icon: ArrowUp, active: false },
    { Icon: ArrowUp, active: true },
    { Icon: ArrowUp, active: true },
    { Icon: ArrowRight, active: false },
  ];

  return (
    <div className="absolute bottom-[160px] left-1/2 z-40 flex -translate-x-1/2 overflow-hidden rounded-[4px] bg-neutral-900/85 shadow-[0_4px_12px_rgba(0,0,0,0.3)]">
      {items.map(({ Icon, active }, i) => (
        <div
          key={i}
          className="flex h-[56px] w-[47px] items-center justify-center border-r border-white/10"
        >
          <Icon
            className={
              active
                ? "h-[33px] w-[33px] text-[#ff7a00]"
                : "h-[33px] w-[33px] text-white"
            }
            strokeWidth={3.3}
          />
        </div>
      ))}
    </div>
  );
}

// ─────────────────────────────────────────────
// Nav Bottom Bar
// ─────────────────────────────────────────────
function NavBottomBar() {
  return (
    <div className="absolute inset-x-0 bottom-0 z-30 overflow-hidden rounded-t-[12px] bg-white shadow-[0_-3px_12px_rgba(0,0,0,0.18)]">
      <div className="relative flex h-[94px] items-start justify-between px-5 pt-4">
        {/* left */}
        <button className="flex h-12 w-12 items-center justify-center rounded-full active:bg-neutral-100">
          <RefreshCcw
            className="h-[30px] w-[30px] text-neutral-800"
            strokeWidth={2.5}
          />
        </button>

        {/* center */}
        <div className="absolute left-1/2 top-[13px] flex -translate-x-1/2 flex-col items-center">
          <div className="text-[14px] font-bold leading-none tracking-[-0.2px] text-neutral-500">
            2차 산로
          </div>

          <div className="mt-[8px] flex items-end justify-center gap-[8px] whitespace-nowrap">
            <span className="pb-[3px] text-[15px] font-semibold leading-none text-neutral-700">
              오후
            </span>

            <span className="text-[32px] font-black leading-[0.85] tracking-[-1.1px] text-neutral-950">
              07:55
            </span>

            <span className="pb-[3px] text-[22px] font-extrabold leading-none tracking-[-0.3px] text-neutral-950">
              10
            </span>

            <span className="pb-[4px] text-[14px] font-bold leading-none text-neutral-600">
              km
            </span>
          </div>
        </div>

        {/* right */}
        <button className="flex h-12 w-12 items-center justify-center rounded-full active:bg-neutral-100">
          <Menu
            className="h-[31px] w-[31px] text-neutral-800"
            strokeWidth={2.5}
          />
        </button>
      </div>

      <AndroidBar />
    </div>
  );
}

// ─────────────────────────────────────────────
// Gas Station Bottom Sheet
// ─────────────────────────────────────────────
const GAS_STATIONS = [
  {
    title: "추천 주유소",
    name: "S-OIL 자양천 주유소",
    price: "경유 1,990원",
    selected: true,
  },
  {
    title: "가장 저렴한 주유소",
    name: "S-OIL 자양 셀프 주유소",
    price: "경유 1,950원",
    selected: false,
  },
  {
    title: "가장 가까운 주유소",
    name: "현대오일뱅크 자양 주유소",
    price: "경유 2,050원",
    selected: false,
  },
];

function GasStationBottomSheet() {
  return (
    <motion.div
      initial={{ y: 260, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 260, opacity: 0 }}
      transition={{ duration: 0.28, ease: "easeOut" }}
      className="absolute inset-x-0 bottom-0 z-50 rounded-t-[20px] bg-white shadow-[0_-8px_24px_rgba(0,0,0,0.22)]"
    >
      <div className="px-5 pb-4 pt-5">
        {GAS_STATIONS.map((station, i) => (
          <div
            key={i}
            className={`flex items-center gap-4 py-3.5 ${
              i < GAS_STATIONS.length - 1 ? "border-b border-neutral-100" : ""
            }`}
          >
            {/* 라디오 버튼 */}
            <div
              className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 ${
                station.selected ? "border-blue-500" : "border-neutral-300"
              }`}
            >
              {station.selected && (
                <div className="h-2.5 w-2.5 rounded-full bg-blue-500" />
              )}
            </div>

            {/* 텍스트 */}
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-1.5">
                <span className="text-[23px] font-black leading-tight tracking-[-0.8px] text-neutral-900">
                  {station.title}
                </span>

                {i === 0 && (
                  <span className="rounded-[3px] bg-[#0068ff] px-1.5 py-[1px] text-[10px] font-black leading-none text-white">
                    AD
                  </span>
                )}
              </div>

              <div className="mt-0.5 text-[16px] text-neutral-500">
                {station.name}
              </div>
            </div>

            {/* 가격 배지 - 글씨 크기 그대로 유지 */}
            <div className="shrink-0 whitespace-nowrap rounded-[4px] bg-[#0068ff] px-2 py-1 text-sm font-bold text-white">
              {station.price}
            </div>
          </div>
        ))}
      </div>

      <AndroidBar />
    </motion.div>
  );
}

// ─────────────────────────────────────────────
// Main Screen Export
// ─────────────────────────────────────────────
export default function NavigationScreen({ onBack }) {
  const [showGasSheet, setShowGasSheet] = useState(true);

  return (
    <motion.div
      key="navigation"
      initial={{ x: 584, opacity: 0.8 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 584, opacity: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="absolute inset-0 overflow-hidden bg-[#f1eee5]"
    >
      <FakeNavMap />
      <StatusBarOverlay />
      <NavHUD />

      {/* 주유소 버튼 (우측 상단) */}
      <button
        onClick={() => setShowGasSheet(true)}
        className="absolute right-4 top-[52px] z-40 flex h-[66px] w-[66px] items-center justify-center rounded-full bg-white shadow-md active:scale-95"
      >
        <span className="text-[36px] leading-none">⛽</span>
      </button>
      <LaneGuide />
      <NavBottomBar onBack={onBack} />

      {/* dim overlay + bottom sheet */}
      <AnimatePresence>
        {showGasSheet && (
          <>
            <motion.div
              key="dim"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setShowGasSheet(false)}
              className="absolute inset-0 z-[45] bg-black/35 backdrop-blur-[1.5px]"
            />
            <GasStationBottomSheet key="gas-sheet" />
          </>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
