import { Wifi, MapPin, Signal } from "lucide-react";

export default function PhoneStatusBar({ time = "7:41", battery = "83" }) {
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
