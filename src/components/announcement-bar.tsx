import { Sparkles } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export function AnnouncementBar() {
  return (
    <div className="bg-boutique-footer px-4 py-2 text-center text-xs font-semibold text-white sm:text-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-center gap-2">
        <Sparkles size={15} className="text-boutique-pink" />
        <span>{siteConfig.announcement}</span>
      </div>
    </div>
  );
}
