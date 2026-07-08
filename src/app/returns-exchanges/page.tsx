import type { Metadata } from "next";
import { PolicyPage } from "@/components/policy-page";

export const metadata: Metadata = { title: "Returns & Exchanges" };

export default function ReturnsExchangesPage() {
  return <PolicyPage policyKey="returns" />;
}
