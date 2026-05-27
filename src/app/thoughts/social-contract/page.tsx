import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export default function SocialContractPage() {
  return (
    <div className="layout">
      <SiteHeader />

      <main>
        <p className="thought-date">May 1, 2026</p>
        <h1 className="page-title" style={{ marginTop: 4 }}>
          social contract
        </h1>
        <p className="page-subtitle">
          on what we owe each other once intelligence stops being scarce.
        </p>

        <p>
          [draft] — placeholder for the essay. write your argument here. once intelligence is
          abundant, what stays scarce? attention, trust, conviction, the willingness to be wrong
          in public. the new social contract probably gets written around those.
        </p>

        <p>
          more soon. this page is the canonical home of the piece — edit{" "}
          <code>src/app/thoughts/social-contract/page.tsx</code> to fill it in.
        </p>

        <hr />

        <p className="thought-read">
          <Link href="/thoughts" className="link-with-arrow">
            back to thoughts
          </Link>
        </p>
      </main>

      <SiteFooter />
    </div>
  );
}
