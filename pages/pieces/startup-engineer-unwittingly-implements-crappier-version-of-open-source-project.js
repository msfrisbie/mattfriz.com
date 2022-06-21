import Header from "@components/Header";
import PieceLayout from "@components/PieceLayout";
import React from "react";

const CrappierOpenSource = () => (
  <PieceLayout>
    <Header
      title="Startup Engineer Unwittingly Implements Crappier Version..."
      description="Startup Engineer Unwittingly Implements Crappier Version of Open Source
        Project"
      url="https://www.mattfriz.com/pieces/startup-engineer-unwittingly-implements-crappier-version-of-open-source-project"
    ></Header>

    <h1>
      Startup Engineer Unwittingly Implements Crappier Version of Open Source
      Project
    </h1>
    <h4>September 13, 2016</h4>

    <hr />
    <p>
      SAN FRANCISCO - While attempting to neatly rectify problems with his
      company's API, bay area software engineer Kevin Wright discovered Tuesday
      morning that the library he spent the last four days implementing was an
      unintentional rehash of an existing and far superior open source project.
      The 25-year-old developer happened upon the first-rate Github repository
      while reading StackOverflow answers during a debugging session. "Oh what
      the hell", remarked an exasperated Wright as he navigated around the tidy
      and perfectly formatted source code that made a mockery of his efforts.
      Wright discovered that not only does the open source implementation
      accomplish precisely what his library intended to, but also features a
      brilliant architecture and broad extensibility. The full-stack developer
      noticed that his library is much less idiomatic and far sloppier, and also
      lacks a single unit test. The 1000+ starred open source repository
      features prominent "100% test coverage" and "passing continuous
      integration" badges at the top of the README. In stark contrast, Wright's
      README is simply the repository title, for which he spent a concerningly
      long time trying to think of something clever. At press time, Wright was
      seen sheepishly adding the repository to the main application's
      dependencies.
    </p>

    <hr />
  </PieceLayout>
);

export default CrappierOpenSource;
