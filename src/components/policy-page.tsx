import type { PolicyKey } from "@/lib/site-config";
import { siteConfig } from "@/lib/site-config";

export function PolicyPage({ policyKey }: { policyKey: PolicyKey }) {
  const policy = siteConfig.policies[policyKey];

  return (
    <div className="container-soft py-10 sm:py-14">
      <article className="mx-auto max-w-3xl rounded-[2rem] bg-white p-6 shadow-card sm:p-10">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-boutique-cta">Policy</p>
        <h1 className="mt-2 text-3xl font-black text-boutique-text sm:text-5xl">{policy.title}</h1>
        <p className="mt-3 text-sm font-semibold text-boutique-text/55">{policy.updated}</p>
        <div className="mt-8 grid gap-4">
          {policy.sections.map((section, index) => (
            <section key={section} className="rounded-3xl bg-boutique-bg p-5">
              <h2 className="text-lg font-black">Section {index + 1}</h2>
              <p className="mt-2 text-sm leading-7 text-boutique-text/70">{section}</p>
            </section>
          ))}
        </div>
      </article>
    </div>
  );
}
