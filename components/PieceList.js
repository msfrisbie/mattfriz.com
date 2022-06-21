import Link from "next/link";

export default function PieceList() {
  return (
    <div className="flex flex-col gap-2">
      <Link href="/pieces/tenacity-of-tech-recruiters">
        The Tenacity of Tech Recruiters
      </Link>

      <Link href="/pieces/tech-interview-torture-chamber">
        Tech Interview Torture Chamber
      </Link>

      <Link href="/pieces/midsize-startup-impulsively-adopts-trendy-js-framework">
        Midsize Startup Impulsively Adopts Trendy JS Framework in Effort to
        Rectify Insurmountable Technical Debt
      </Link>

      <Link href="/pieces/open-home-office-raises-7m-to-bring-office-distractions-to-remote-workers-nationwide">
        Open Home Office (YC S17) Raises $7M To Bring Office Distractions To
        Remote Workers Nationwide
      </Link>

      <Link href="/pieces/startup-engineer-unwittingly-implements-crappier-version-of-open-source-project">
        Startup Engineer Unwittingly Implements Crappier Version of Open Source
        Project
      </Link>

      <Link href="/pieces/ecma-tc39-committee-proposal-for-where-they-will-go-out-to-lunch-reaches-stage-4">
        ECMA TC39 Committee Proposal For Where They Will Go Out To Lunch Reaches
        Stage 4
      </Link>

      <Link href="/pieces/man-horrified-upon-discovering-six-hour-debugging-session-caused-by-string-mismatch">
        Man Horrified Upon Discovering Six Hour Debugging Session Caused By
        String Mismatch
      </Link>

      <Link href="/pieces/study-97-percent-of-nodejs-projects-depend-on-package-containing-npm-creators-shopping-list">
        Study: 97% Of NodeJS Projects Depend On Package Containing npm Creator's
        Shopping List
      </Link>

      <Link href="/pieces/javascript-creator-reveals-brain-hemorrhage-as-cause-of-languages-most-hated-features">
        JavaScript Creator Reveals Brain Hemorrhage As Cause Of Language's Most
        Hated Features
      </Link>

      <Link href="/pieces/software-engineer-entertains-erotic-fantasy-about-rewriting-entire-codebase-from-scratch">
        Software Engineer Entertains Erotic Fantasy About Rewriting Entire
        Codebase From Scratch
      </Link>
    </div>
  );
}
