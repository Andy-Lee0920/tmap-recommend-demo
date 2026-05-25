import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Clock, Users } from "lucide-react";

const clusterOptions = [
  { value: "parenting", label: "육아 관심 고객", emoji: "🧸" },
  { value: "night", label: "야간 이동형 고객", emoji: "🌙" },
  { value: "airport", label: "공항 방문 고객", emoji: "🧳" },
  { value: "worker", label: "현장 근무 고객", emoji: "👷" },
  { value: "electronic", label: "전기차 고객", emoji: "🚘" },
];
import HomeScreen from "./screens/HomeScreen";
import RouteScreen from "./screens/RouteScreen";
import SearchResultScreen from "./screens/SearchResultScreen";
import NavigationScreen from "./screens/NavigationScreen";

const BASE_PHONE_WIDTH = 584;
const BASE_PHONE_HEIGHT = 1260;
const PANEL_WIDTH = 220;
const PANEL_GAP = 24;

function usePhoneScale() {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const updateScale = () => {
      const padding = 16;
      const availableHeight = window.innerHeight - padding;
      const availableWidth =
        window.innerWidth - padding - PANEL_WIDTH - PANEL_GAP;

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
  const [showCard, setShowCard] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [cluster, setCluster] = useState("parenting");
  const scale = usePhoneScale();

  const handleSearch = (query) => {
    setSearchQuery(query);
    setScreen("search");
  };

  return (
    <div className="flex h-[100dvh] w-full items-center justify-center gap-6 overflow-hidden bg-[#0f172a] p-2 font-sans text-neutral-900">
      <div
        className="relative shrink-0"
        style={{
          width: BASE_PHONE_WIDTH * scale,
          height: BASE_PHONE_HEIGHT * scale,
        }}
      >
        <div
          className="absolute left-0 top-0 h-[1260px] w-[584px] origin-top-left overflow-hidden border-[3px] border-neutral-600 bg-slate-50 shadow-2xl"
          style={{ transform: `scale(${scale})` }}
        >
          <AnimatePresence mode="wait">
            {screen === "home" && (
              <HomeScreen
                key="home"
                showCard={showCard}
                cluster={cluster}
                onSearch={handleSearch}
                onNavigate={() => setScreen("route")}
              />
            )}
            {screen === "search" && (
              <SearchResultScreen
                key="search"
                query={searchQuery}
                onBack={() => setScreen("home")}
                onNavigate={() => setScreen("route")}
              />
            )}
            {screen === "route" && (
              <RouteScreen
                key="route"
                onBack={() => setScreen("home")}
                onStartNav={() => setScreen("navigate")}
              />
            )}
            {screen === "navigate" && (
              <NavigationScreen
                key="navigate"
                onBack={() => setScreen("home")}
              />
            )}
          </AnimatePresence>
        </div>
      </div>

      <div className="flex w-[220px] shrink-0 flex-col gap-4 rounded-2xl border border-slate-700 bg-[#1e293b] p-6 shadow-xl">
        <div className="text-2xs font-bold uppercase tracking-widest text-slate-400">
          시나리오 제어
        </div>

        <button
          onClick={() => setShowCard((v) => !v)}
          disabled={screen !== "home"}
          className={`flex w-full items-center gap-3 rounded-xl p-4 text-left transition-all ${
            screen !== "home"
              ? "cursor-not-allowed opacity-30"
              : showCard
                ? "bg-blue-600 text-white shadow-lg shadow-blue-900/40"
                : "bg-slate-700 text-slate-200 hover:bg-slate-600"
          }`}
        >
          <Clock className="h-5 w-5 shrink-0" />
          <div>
            <div
              className={`text-2xs font-semibold ${showCard ? "text-blue-200" : "text-slate-400"}`}
            >
              시간 트리거
            </div>
            <div className="text-sm font-bold">오후 6:30 도착</div>
          </div>
        </button>

        <div className="rounded-xl bg-slate-700 p-4">
          <div className="mb-2.5 flex items-center gap-2">
            <Users className="h-4 w-4 text-slate-400" />
            <div className="text-2xs font-semibold text-slate-400">
              고객 군집별 추천
            </div>
          </div>
          <select
            value={cluster}
            onChange={(e) => setCluster(e.target.value)}
            className="w-full cursor-pointer rounded-lg bg-slate-600 px-3 py-2 text-sm font-semibold text-slate-100 outline-none"
          >
            {clusterOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.emoji} {opt.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}
