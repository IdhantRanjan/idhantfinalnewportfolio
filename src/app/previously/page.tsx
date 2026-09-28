import Link from "next/link";

export default function PreviouslyPage() {
  return (
    <main className="detail previously">
      <p className="back">
        <Link href="/">← back</Link>
      </p>

      <p>previously i:</p>

      <ul>
        <li>
          presented{" "}
          <Link href="/research/deep-learning-abm">
            ml + agent-based modeling for degrowth policy
          </Link>{" "}
          at esee 2026, ghent.{" "}
          <a href="/esee-2026-certificate.pdf">certificate</a>.
        </li>
        <li>
          adaptive feature importance for heterogeneous graphs.{" "}
          ieee iccsic 2026,{" "}
          <a href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=6375438">ssrn</a>
          .
        </li>
        <li>
          built low-cost <Link href="/research/efget-niu">egfet biosensors</Link> at{" "}
          niu.
        </li>
        <li>
          built <Link href="/projects/airaware">airaware</Link> at{" "}
          lewis university. real-time air quality forecasting,{" "}
          <Link href="/research/airaware-research">sensor placement optimization</Link>
          .
        </li>
        <li>
          built <Link href="/projects/neurovox">neurovox</Link>, parkinson&apos;s from
          vocal biomarkers. 94.87% accuracy, 100% recall.
        </li>
        <li>
          designed <Link href="/projects/allergx">allergx</Link>, rna aptaswitch
          therapy for ige-mediated allergy. won tks moonshot.
        </li>
        <li>
          built <Link href="/projects/cropsia">cropsia</Link> (cnn, 87k drone images,
          38 diseases) and <Link href="/projects/bambiotic">bambiotic</Link>.
          hackathons.
        </li>
        <li>
          swe at <Link href="/work/plasnomic">plasnomic</Link>, building prism. also{" "}
          <Link href="/projects/neumeric">neumeric</Link>, bio-intelligence
          infrastructure.
        </li>
        <li>
          also built <Link href="/projects/credix">credix</Link> (p2p microlending),{" "}
          <Link href="/projects/orbyt">orbyt</Link> (compliance automation),{" "}
          <Link href="/projects/ar-x-finlit">ar-x-finlit</Link> (gen-z retention for
          cibc), and <Link href="/projects/edufin">edufin</Link> (defi incubator,
          ghana).
        </li>
        <li>
          <Link href="/work/commissioner-naperville">
            naperville riverwalk commission
          </Link>
          . 1 of 2 student commissioners, handles $3m/yr.
        </li>
        <li>
          exec officer,{" "}
          <Link href="/work/ipsd-204">
            ipsd 204 student advisory board
          </Link>
          . 26,000 students. built{" "}
          <a href="https://mosaic-204.vercel.app/">mosaic</a>.
        </li>
        <li>
          teen advisory board, <Link href="/work/alive-center">alive center</Link>.
          surgical volunteer,{" "}
          <Link href="/work/edward-elmhurst">
            edward-elmhurst
          </Link>
          . vp,{" "}
          <Link href="/work/alzheimers-foundation">
            alzheimer&apos;s foundation of america
          </Link>
          .
        </li>
      </ul>

    </main>
  );
}
