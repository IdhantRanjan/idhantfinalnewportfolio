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
          built <Link href="/research/bopcd-northwestern">dlsci</Link> over 1.5 yrs at{" "}
          <strong>northwestern</strong>. bayesian changepoint early-warning for defi
          liquidity stress. recall 1.000, 129h lead time.{" "}
          <strong>iiai cdef 2026</strong>, ieee publication.
        </li>
        <li>
          presented{" "}
          <Link href="/research/deep-learning-abm">
            ml + agent-based modeling for degrowth policy
          </Link>{" "}
          at <strong>esee 2026</strong>, ghent.{" "}
          <a href="/esee-2026-certificate.pdf">certificate</a>.
        </li>
        <li>
          adaptive feature importance for heterogeneous graphs.{" "}
          <strong>ieee iccsic 2026</strong>,{" "}
          <a href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=6375438">ssrn</a>
          .
        </li>
        <li>
          built low-cost <Link href="/research/efget-niu">egfet biosensors</Link> at{" "}
          <strong>niu</strong>.
        </li>
        <li>
          built <Link href="/projects/airaware">airaware</Link> at{" "}
          <strong>lewis university</strong>. real-time air quality forecasting,{" "}
          <Link href="/research/airaware-research">sensor placement optimization</Link>
          .
        </li>
        <li>
          built <Link href="/projects/neurovox">neurovox</Link>, parkinson&apos;s from
          vocal biomarkers. 94.87% accuracy, 100% recall.
        </li>
        <li>
          designed <Link href="/projects/allergx">allergx</Link>, rna aptaswitch
          therapy for ige-mediated allergy. won <strong>tks moonshot</strong>.
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
            <strong>naperville riverwalk commission</strong>
          </Link>
          . 1 of 2 student commissioners, handles $3m/yr.
        </li>
        <li>
          exec officer,{" "}
          <Link href="/work/ipsd-204">
            <strong>ipsd 204</strong> student advisory board
          </Link>
          . 26,000 students. built{" "}
          <a href="https://mosaic-204.vercel.app/">mosaic</a>.
        </li>
        <li>
          teen advisory board, <Link href="/work/alive-center">alive center</Link>.
          surgical volunteer,{" "}
          <Link href="/work/edward-elmhurst">
            <strong>edward-elmhurst</strong>
          </Link>
          . vp,{" "}
          <Link href="/work/alzheimers-foundation">
            <strong>alzheimer&apos;s foundation of america</strong>
          </Link>
          .
        </li>
        <li>
          wrote{" "}
          <Link href="/thoughts/cost-of-knowing">
            the cost of knowing is approaching zero
          </Link>
          ,{" "}
          <Link href="/thoughts/blank-spot">
            we are approaching the end of the blank spot
          </Link>
          , and{" "}
          <Link href="/thoughts/becoming-useful">
            a generalist&apos;s guide to becoming useful
          </Link>
          .
        </li>
      </ul>

    </main>
  );
}
