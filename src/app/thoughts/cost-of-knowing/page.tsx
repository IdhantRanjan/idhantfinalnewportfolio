import Link from "next/link";

export default function CostOfKnowingPage() {
  return (
    <main className="detail essay">
      <p className="back">
        <Link href="/">← back</Link>
      </p>

      <p>
        <strong>the cost of knowing is approaching zero</strong>
      </p>

      <p>For most of history, knowing was expensive.</p>

      <p>
        You had to live near a library, apprentice under someone who already knew, or
        be born close enough to a university to walk there. Access was the bottleneck.
        Credentials, institutions, expertise as a career: all of it existed to ration
        something genuinely scarce.
      </p>

      <p>Now an answer costs four seconds and a fraction of a cent.</p>

      <p>Not cheaper. Effectively zero.</p>

      <p>
        When something falls that far, it stops being the constraint. The constraint
        moves somewhere else.
      </p>

      <p>
        This has happened before. Every technology that makes one thing abundant
        relocates the expensive part somewhere upstream. Printing made copies cheap,
        and attention became the thing worth fighting over. Search made retrieval
        free, and knowing what to look for started mattering more than knowing.
      </p>

      <p>
        Whatever becomes abundant stops being the prize. Whatever it was gating
        becomes the new scarcity.
      </p>

      <p>So what is cheap intelligence gating?</p>

      <p>Judgment about where to aim it.</p>

      <p>
        An answer inherits the value of the question that produced it. Ask a bad
        question with a good model and you get a confident, well-structured,
        worthless response. The model has no opinion about whether the question
        deserved asking. That part is still yours.
      </p>

      <p>
        I run into this constantly. The models beat me at most individual steps of a
        research problem. They do not beat me at knowing which problem is worth two
        years of my life.
      </p>

      <p>
        That gap isn&apos;t closing fast. It might not be the kind of gap that closes.
      </p>

      <p>
        There&apos;s a lazy version of this argument that goes &quot;AI does the work,
        humans provide the vision.&quot; I don&apos;t mean that. Vision is usually a
        story told afterward by whoever happened to be right.
      </p>

      <p>
        I mean something narrower. Choosing what to work on was always the
        highest-leverage decision available to you. It just became a much larger
        fraction of the total work.
      </p>

      <p>
        If answers cost nothing and questions cost everything, most of your effort
        belongs in the questions.
      </p>

      <p>
        Most people are doing the reverse. Using cheap intelligence to generate more
        answers, faster, to things nobody needed answered.
      </p>

      <p>The uncomfortable part: taste doesn&apos;t scale like compute.</p>

      <p>
        You can buy more inference. You cannot buy discernment. It comes from building
        things, being wrong in public, and paying attention to why.
      </p>

      <p>
        The bottleneck is now the one thing that only arrives slowly, in a world where
        everything else got fast.
      </p>

      <p className="back">
        <Link href="/">← back</Link>
      </p>
    </main>
  );
}
