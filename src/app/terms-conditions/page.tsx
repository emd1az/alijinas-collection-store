import type { Metadata } from "next";
import { PolicyPage } from "@/components/policy-page";

export const metadata: Metadata = { title: "Terms & Conditions" };

export default function TermsConditionsPage() {
  return <PolicyPage policyKey="terms" />;
}
