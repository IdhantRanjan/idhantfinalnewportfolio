import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export default function AboutPage() {
  return (
    <div className="layout">
      <SiteHeader />

      <main>
        <h1 className="page-title">About</h1>

        <p>
          I&apos;m a developer and researcher based in Chicago. Most of my work sits at the
          intersection of biology, software, and the systems that decide which technologies
          actually leave the lab.
        </p>

        <p>
          Right now I&apos;m building{" "}
          <a
            href="https://www.vocl.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="link-with-arrow"
          >
            vocl
          </a>
          , an EMG-based system that turns subvocal muscle activity into speech, and{" "}
          <a
            href="https://neumeric.xyz/"
            target="_blank"
            rel="noopener noreferrer"
            className="link-with-arrow"
          >
            neumeric
          </a>
          , infrastructure for biological intelligence. Before that I did change-point detection
          research at Northwestern, market-structure work on the HFT paradox at Mizzou, and
          surface-modification studies on transistor behavior at NIU.
        </p>

        <p>
          Outside of building, I sit on the Naperville Riverwalk Commission and was previously
          on the IPSD 204 student advisory board. I also helped run Build-a-Biz, a financial
          literacy nonprofit that reached a few thousand students. I&apos;m mostly trying to
          figure out which problems are worth a decade and which are worth a weekend.
        </p>

        <ul>
          <li>
            <a
              href="https://www.linkedin.com/in/idhant-ranjan-078104254"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/idhant-ranjan
            </a>
          </li>
          <li>
            <a href="https://github.com/idhantranjan" target="_blank" rel="noopener noreferrer">
              github.com/idhantranjan
            </a>
          </li>
        </ul>
      </main>

      <SiteFooter />
    </div>
  );
}
