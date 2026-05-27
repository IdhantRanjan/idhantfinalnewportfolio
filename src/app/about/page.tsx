import Image from "next/image";
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
          intersection of deep learning, applied AI in spatial hardware, neural interfaces and
          economics. I am a firm believer of the principle that technology earns its shape from
          the people it&apos;s built for, not the other way around.
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
          research and disease modeling at Northwestern, market-structure work on the HFT paradox
          at Mizzou, and surface-modification studies on transistor behavior at NIU.
        </p>

        <p>
          Outside of development work/research, I sit on the Naperville{" "}
          <a
            href="https://www.naperville.il.us/government/board-and-commissions/riverwalk-commission/"
            target="_blank"
            rel="noopener noreferrer"
            className="link-with-arrow"
          >
            Riverwalk Commission
          </a>{" "}
          and also serve as the executive officer on the IPSD 204{" "}
          <a
            href="https://board.ipsd.org/resources/student-advisory-board-sab"
            target="_blank"
            rel="noopener noreferrer"
            className="link-with-arrow"
          >
            student advisory board
          </a>
          . I also help run{" "}
          <a
            href="https://buildabiz.net/"
            target="_blank"
            rel="noopener noreferrer"
            className="link-with-arrow"
          >
            Build-a-Biz
          </a>
          , a financial literacy nonprofit that has reached a few thousand students. I&apos;m
          always interested in trying new things and in my free time I like to read, run and play
          pickleball.
        </p>

        <div className="signature-wrap">
          <Image
            src="/images/signature.png"
            alt="Idhant's signature"
            width={220}
            height={90}
            className="signature-img"
          />
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
