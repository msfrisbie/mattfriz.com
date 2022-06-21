import Header from "@components/Header";
import PieceLayout from "@components/PieceLayout";
import React from "react";

const HatedFeatures = () => (
  <PieceLayout>
    <Header
      title="JavaScript Creator Reveals Brain Hemorrhage As..."
      description="JavaScript Creator Reveals Brain Hemorrhage As Cause Of
    Language's Most Hated Features"
      url="https://www.mattfriz.com/pieces/javascript-creator-reveals-brain-hemorrhage-as-cause-of-languages-most-hated-features"
    ></Header>

    <h1>
      EXCLUSIVE: JavaScript Creator Reveals Brain Hemorrhage As Cause Of
      Language's Most Hated Features
    </h1>
    <h4>May 18, 2017</h4>

    <hr />
    <p>
      In an interview with Brendan Eich, creator of the first version of
      JavaScript, the distinguished software engineer revealed that the worst
      parts of the language were actually borne out of delusions caused by a
      bleed in his brain. While working on the Netscape Navigator browser in May
      1995, the engineer famously spent ten consecutive days cranking out the
      initial prototype. Unbeknownst to Eich, a massive aneurysm he suffered
      while creating the language coincided with major architectural decisions -
      the consequences of which the JavaScript community still suffers from to
      this day.
    </p>

    <p>
      Eich described how - up until the injury occurred - he initially planned
      for JavaScript to feature typing, classical inheritance, and block
      scoping, among a host of normative language elements. As history shows,
      none of these survived the injury. On the afternoon of the third day
      developing the language, an artery near his prefrontal cortex ruptured
      without warning, and growing intracranial pressure quickly caused the
      engineer to enter a delusional state. From the outside, Eich appeared to
      be relatively normal, working diligently on the exciting new experimental
      language. However, anyone realizing the degree to which he was tearing up
      the language and injecting wholly demented ideas would quickly have
      identified his descent into utter madness.
    </p>

    <p>
      As the pressure inside his head gradually increased, Eich detailed how he
      became more and more unhinged with his design decisions. By the start of
      the fourth day, he had straight-up ditched classical inheritance in favor
      of prototypal. By the sixth day, his grip on reality had weakened to the
      degree that hoisting, different flavors of equality, the concept of being
      "truthy", and variable execution contexts when evaluating the "this"
      keyword all seemed like good ideas. Eich's mental condition progressively
      worsened through to the tenth day, which is when his eminently disturbed
      mind concocted the grotesque interplay between [], {} and various
      arithmetic operators.
    </p>

    <p>
      Upon completing the language and presenting his work to the team, Marc
      Andreessen had Eich immediately rushed to the nearest hospital, where he
      was treated and made a full recovery. The company, though, was stuck with
      the mutilated language while Eich recovered, and was forced to ship it
      with the next release of Netscape Navigator. The rest, is history.
    </p>
    <hr />
  </PieceLayout>
);

export default HatedFeatures;
