import Image from "next/image";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export default function Home() {
  return (
    <div className="layout">
      <SiteHeader />

      <main>
        <div className="hero-row">
          <div className="hero-text">
            <h1 className="hero">Idhant</h1>
            <div className="intro-stack">
              <p className="intro-line">17</p>
              <p className="intro-line">
                <span className="pin">📍</span> Chicago
              </p>
              <p className="intro-line">developer &amp; researcher</p>
              <p className="intro-line intro-line--soft">Sapere Aude.</p>
            </div>
          </div>
          <Image
            src="/images/idhant-pixel.png"
            alt="Pixel avatar of Idhant"
            width={240}
            height={240}
            className="hero-avatar-corner"
            priority
          />
        </div>

        <p>
          Hi, I&apos;m Idhant. I&apos;m currently interested in bio-intelligence infrastructure,
          deep learning, neural interfaces, and economic systems.
        </p>

        <p>currently:</p>

        <ul>
          <li>
            <a
              href="https://www.vocl.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="link-with-arrow"
            >
              vocl.dev
            </a>{" "}
            emg based thought to speech
          </li>
          <li>
            <a
              href="https://neumeric.xyz/"
              target="_blank"
              rel="noopener noreferrer"
              className="link-with-arrow"
            >
              neumeric.xyz
            </a>{" "}
            biological intelligence infrastructure
          </li>
          <li>
            incoming @{" "}
            <a
              href="https://labs.feinberg.northwestern.edu/parvez/index.html"
              target="_blank"
              rel="noopener noreferrer"
              className="link-with-arrow"
            >
              Northwestern Biomed
            </a>
            , summer 2026
          </li>
        </ul>

        <p>previously:</p>

        <ul>
          <li>
            presented{" "}
            <a
              href="https://www.vocl.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="link-with-arrow"
            >
              vocl
            </a>
            , an EMG-based thought-to-speech system, @{" "}
            <a
              href="https://conrad.spacecenter.org/2026-awards/"
              target="_blank"
              rel="noopener noreferrer"
              className="link-with-arrow"
            >
              NASA
            </a>{" "}
            &amp; won $1.16m
          </li>
          <li>
            co-founded{" "}
            <a
              href="https://buildabiz.net/"
              target="_blank"
              rel="noopener noreferrer"
              className="link-with-arrow"
            >
              a financial literacy organization
            </a>{" "}
            with 2k+ students, $20k+ raised, and 50+ camps
          </li>
          <li>
            finalist @{" "}
            <a
              href="https://conrad.spacecenter.org/2026-awards/"
              target="_blank"
              rel="noopener noreferrer"
              className="link-with-arrow"
            >
              Conrad Challenge
            </a>
            ,{" "}
            <a
              href="https://blueoceancompetition.org/2025-2026-winners/"
              target="_blank"
              rel="noopener noreferrer"
              className="link-with-arrow"
            >
              Blue Ocean Competition
            </a>
            , ISEF, Diamond Challenge
          </li>
          <li>
            <span style={{ whiteSpace: "nowrap" }}>
              researched bayesian change-point detection for crypto prices @ Northwestern, 2x
              accepted{" "}
              <a
                href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=6375438"
                target="_blank"
                rel="noopener noreferrer"
                className="link-with-arrow"
              >
                IEEE
              </a>
            </span>
          </li>
          <li>
            independently researched deep learning applications in agent based modeling, accepted
            to the{" "}
            <a
              href="https://esee2026ghent.be/"
              target="_blank"
              rel="noopener noreferrer"
              className="link-with-arrow"
            >
              European Society for Ecological Economics
            </a>
          </li>
          <li>
            researched{" "}
            <a
              href="https://drive.google.com/file/d/1CFp8l556pllMaE0TpKhbYdBqIqSiA8JD/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="link-with-arrow"
            >
              low-cost EFGET biosensors
            </a>{" "}
            @ NIU
          </li>
          <li>
            built{" "}
            <a
              href="https://airaware-lewis.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="link-with-arrow"
            >
              airaware
            </a>
            , an ML pipeline forecasting campus air quality in real time @ LewisU
          </li>
        </ul>

        <hr />

        <p className="footer-blurb">
          always adding more stuff.
          <br />
          reach me at <a href="mailto:me@idhant.dev">me@idhant.dev</a>
        </p>
      </main>

      <SiteFooter />
    </div>
  );
}
