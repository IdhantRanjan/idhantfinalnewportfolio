import Link from "next/link";

export default function Draft() {
  return (
    <main>
      <p>
        hi! i&apos;m idhant ranjan, <a href="https://zfellows.com/">z fellow</a> and
        co-founder of <a href="https://duetlabs.co">duet labs</a>. we&apos;re solving
        collaboration.
      </p>

      <p>
        we think robots can learn a lot by watching people work together.
      </p>

      <p>before duet, i:</p>

      <ul>
        <li>
          won the{" "}
          <a href="https://conrad.spacecenter.org/2026-awards/">conrad challenge</a>,{" "}
          <a href="https://blueoceancompetition.org/2025-2026-winners/">blue ocean</a>,
          and isef sf building{" "}
          <a href="https://www.vocl.dev/">a voice for people with als</a>
        </li>
        <li>
          published in{" "}
          <a href="https://ieeexplore.ieee.org/document/11685081">ieee</a> @
          northwestern
        </li>
        <li>
          <a href="https://labs.feinberg.northwestern.edu/parvez/index.html">
            applied ml to cancer research
          </a>
        </li>
        <li>
          co-founded{" "}
          <a href="https://www.buildabiz.org/">a financial literacy nonprofit</a>,
          4,000+ kids
        </li>
      </ul>

      <p>
        i also <Link href="/writing">write</Link> and{" "}
        <Link href="/previously">build other things</Link>.
      </p>

      <p>the days are long. the decades are short.</p>

      <p>
        <a href="mailto:idhant@duetlabs.co">idhant@duetlabs.co</a> |{" "}
        <a href="https://github.com/IdhantRanjan">github</a> |{" "}
        <a href="https://scholar.google.com/citations?user=Hh1nMCkAAAAJ&hl=en">
          scholar
        </a>
      </p>
    </main>
  );
}
