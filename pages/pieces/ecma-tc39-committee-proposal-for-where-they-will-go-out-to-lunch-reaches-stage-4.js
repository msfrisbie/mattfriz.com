import Header from "@components/Header";
import PieceLayout from "@components/PieceLayout";
import React from "react";

const LunchProposal = () => (
  <PieceLayout>
    <Header
      title="ECMA TC39 Committee Proposal For Where They Will..."
      description="ECMA TC39 Committee Proposal For Where They Will Go Out To Lunch Reaches
    Stage 4"
      url="https://www.mattfriz.com/pieces/ecma-tc39-committee-proposal-for-where-they-will-go-out-to-lunch-reaches-stage-4"
    ></Header>

    <h2>
      ECMA TC39 Committee Proposal For Where They Will Go Out To Lunch Reaches
      Stage 4
    </h2>
    <h4>July 14, 2017</h4>

    <hr />
    <p>
      In the wake of excitement generated earlier this week from the release of
      the 8th edition of the ECMAScript specification, the ECMA TC39 committee
      announced early this afternoon that a proposal specifying which restaurant
      the committee members will go to for lunch was advanced to its final
      stage. The proposal was championed by Jordan Harband and Andrea Giammarchi
      - also champions for the
      <span className="font-mono">Object.getOwnPropertyDescriptors</span>
      proposal included in the ES8 specification.
    </p>

    <p>
      The committee indicated that the proposal entered Stage 0 mid-morning
      today when Harband and Giammarchi collectively agreed they were getting a
      bit peckish. The esurient duo filed the proposal, and it quickly moved to
      Stage 1 as additional committee members were beset by their growing
      appetites.
    </p>

    <p>
      As the proposal gained momentum, deliberation began to intensify. Upon
      reaching Stage 2, various committee members formed factions aiming to
      detract from the perceived quality of the suggested restaurant. When a
      motion was raised to advance the proposal to the candidate stage, the
      committee descended into a fiery conversation about how to arrange
      transportation to the various restaurants, as a plurality of committee
      members did not have cars.
    </p>

    <p>
      Debate around the destination restaurant further crescendoed as the
      proposal advanced to Stage 3 and the committee became increasingly
      famished and cranky. At one point, fragmentation between the Sandwich
      Party and the Gyros Party seemed irreparable, and it appeared that the
      proposal would perish in Stage 3 deadlock.
    </p>

    <p>
      Teetering over the edge of defeat, a heroic Giammarchi pointed out that
      they had already went to get sandwiches earlier in the week, and it was at
      that point the TC39 committee came together and advanced the proposal to
      Stage 4. At press time, the rapacious committee members were eagerly
      heading out to their cars for a trip to Zorba's.
    </p>

    <hr />
  </PieceLayout>
);

export default LunchProposal;
