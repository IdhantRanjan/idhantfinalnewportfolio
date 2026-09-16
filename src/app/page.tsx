import Link from "next/link";

export default function Home() {
  return (
    <main className="home">
      <p>
        hi, i&apos;m <strong>idhant ranjan</strong>, co-founder @{" "}
        <strong>impulse labs</strong>, building the event log for physical work
        on factory floors. i work on physical ai, bio-intelligence infrastructure,
        neural interfaces, and the ml layer underneath.
      </p>

      <p>right now i&apos;m:</p>

      <ul>
        <li>
          building @{" "}
          <Link href="/projects/impulse-labs">
            <strong>impulse labs</strong>
          </Link>
          . worn and fixed cameras, $13 ble/imu nodes, torque and plc/mes feeds onto
          a jetson-class box on site. one row per step, queried for cycle time,
          bottleneck drift, and standard vs actual work.
        </li>
        <li>
          building <Link href="/projects/vocl">vocl</Link>. surface emg to speech.
          cnn-lstm decodes subvocal activation into phonemes, real-time tts output.
          built for als, laryngeal cancer, severe dysarthria.
        </li>
        <li>
          for it:{" "}
          <a href="https://conrad.spacecenter.org/2026-awards/">
            <strong>pete conrad scholar</strong>
          </a>{" "}
          (1st globally, $1.16m),{" "}
          <a href="https://blueoceancompetition.org/2025-2026-winners/">
            <strong>blue ocean</strong>
          </a>{" "}
          (2nd in n. america), isef semi-finalist.
        </li>
        <li>
          <a href="https://scholar.google.com/citations?user=Hh1nMCkAAAAJ&hl=en">
            <strong>northwestern</strong>
          </a>
          , cell + dev bio. crispr screen across 600+ e3 ligases in zebrafish,
          hierarchical clustering of developmental expression.
        </li>
        <li>
          <Link href="/research/hft-mizzou">
            <strong>mizzou</strong>
          </Link>
          , quant finance. multimodal ipo prediction from s-1 filings. finbert over
          text, clip vit-l/14 over embedded images, financial ratios, cross-attention
          fusion. ~1,800 us ipos 2010&ndash;2024 against crsp with delisting
          adjustments. negative out-of-sample r², significant text-channel rank ics
          at 3/6/12/24mo.
        </li>
        <li>
          co-president, <Link href="/work/build-a-biz">build-a-biz</Link>. 1,300+
          kids, two wgn segments (
          <a href="https://wgnradio.com/your-money-matters/learning-financial-literacy-through-build-a-biz/">
            1
          </a>
          ,{" "}
          <a href="https://wgnradio.com/your-money-matters/build-a-biz-financial-literacy-from-illinois-to-zambia/">
            2
          </a>
          ), illinois to zambia.
        </li>
      </ul>

      <p>previously i:</p>

      <ul>
        <li>
          built <Link href="/research/bopcd-northwestern">dlsci</Link> at{" "}
          <strong>northwestern</strong>. bayesian changepoint early-warning for defi
          liquidity stress. 9/9 events, 129h median lead time, brier 0.055.{" "}
          <a href="https://ieeexplore.ieee.org/document/11685081">
            <strong>ieee, iiai-aai 2026</strong>
          </a>
          .
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
          adaptive feature importance scoring for heterogeneous graphs.{" "}
          <strong>ieee iccsic 2026</strong>,{" "}
          <a href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=6375438">ssrn</a>
          .
        </li>
        <li>
          built low-cost <Link href="/research/efget-niu">egfet biosensors</Link> at{" "}
          <strong>niu</strong>. characterized how surface functionalization shifts
          transconductance against gate voltage, via double-layer capacitance
          protocols and modified gate sweeps.
        </li>
        <li>
          built <Link href="/projects/airaware">airaware</Link> at{" "}
          <strong>lewis university</strong>. xgboost and lstm ensembles over pm2.5,
          no2, o3, co2 sensor feeds plus weather and temporal features. deployed
          dashboard,{" "}
          <Link href="/research/airaware-research">sensor placement optimization</Link>
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

      <p className="more">
        and much, much <Link href="/previously">more</Link>.
      </p>

      <p>questions that interest me:</p>

      <ul>
        <li>what changes when models get bodies, sensors, and consequences?</li>
        <li>how much of physical work is legible to a sensor?</li>
        <li>can expertise be captured, compressed, and handed to someone else?</li>
        <li>what is the ml layer underneath human capability and development?</li>
        <li>where is the bandwidth limit between a nervous system and a machine?</li>
        <li>what does biology compute that we have not learned to copy?</li>
      </ul>

      <p>things i believe:</p>

      <ul>
        <li>chase asymmetric bets</li>
        <li>build things that matter</li>
        <li>optimize for usefulness</li>
        <li>ship relentlessly</li>
        <li>range is leverage</li>
        <li>think in systems</li>
      </ul>

      <p className="footer">
        <a href="mailto:me@idhant.dev">me@idhant.dev</a> ·{" "}
        <a href="https://github.com/IdhantRanjan">github</a> ·{" "}
        <a href="https://scholar.google.com/citations?user=Hh1nMCkAAAAJ&hl=en">
          scholar
        </a>{" "}
        · <a href="https://www.linkedin.com/in/idhant-ranjan-078104254">linkedin</a>
      </p>
    </main>
  );
}
