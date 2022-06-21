import Header from "@components/Header";
import PieceLayout from "@components/PieceLayout";
import React from "react";

const StringMismatch = () => (
  <PieceLayout>
    <Header
      title="Man Horrified Upon Discovering Six Hour Debugging..."
      description="Man Horrified Upon Discovering Six Hour Debugging Session Caused By String
    Mismatch"
      url="https://www.mattfriz.com/pieces/man-horrified-upon-discovering-six-hour-debugging-session-caused-by-string-mismatch"
    ></Header>

    <h1>
      Man Horrified Upon Discovering Six Hour Debugging Session Caused By String
      Mismatch
    </h1>
    <h4>May 5, 2017</h4>

    <hr />
    <p>
      LOS ANGELES - Software engineer Brian Waterman concluded a grueling
      debugging session this afternoon when he realized that a JSON RPC his code
      was attempting to invoke was failing due to a single character
      transposition in a property name. The expedition began at roughly 10 A.M.
      this morning, when Waterman's initial assessment of the error messages was
      that it would be a quick and unremarkable fix.{" "}
    </p>
    <p>
      According to witnesses, after no progress towards a resolution was made
      for an hour, the situation quickly deteriorated into a bout of temporary
      insanity for the two-year company veteran, who began to question
      everything he knew about computing and networking. After a total rundown
      of every relevant line of code in the codebase besides the one containing
      the typo, Waterman began to question the integrity of the codebase's
      various library dependencies. When that did not bear fruit, he began to
      hypothesize ludicrous edge cases in their server configuration, the
      compiler, and even the Transport Control Protocol itself.{" "}
    </p>
    <p>
      It was only after Waterman's code blindness was complete and he let out a
      shriek of exasperation that a coworker wandered over to his desk, asked a
      handful of questions, and corrected the spelling mistake in about three
      minutes. Waterman admitted to reporters that he came close to weeping with
      joy as the RPC success message popped into his terminal. At press time, a
      mentally exhausted Waterman could be seen slumped into his chair with an
      expression of utter relief painted across his face.
    </p>

    <hr />
  </PieceLayout>
);

export default StringMismatch;
