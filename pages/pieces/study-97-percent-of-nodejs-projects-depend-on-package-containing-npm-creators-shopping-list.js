import Header from "@components/Header";
import PieceLayout from "@components/PieceLayout";
import React from "react";

const ShoppingList = () => (
  <PieceLayout>
    <Header
      title="Study: 97% Of NodeJS Projects Depend On Package..."
      description="Study: 97% Of NodeJS Projects Depend On Package Containing npm Creator's
    Shopping List"
      url="https://www.mattfriz.com/pieces/study-97-percent-of-nodejs-projects-depend-on-package-containing-npm-creators-shopping-list"
    ></Header>

    <h2>
      Study: 97% Of NodeJS Projects Depend On Package Containing npm Creator's
      Shopping List
    </h2>
    <h4>May 7, 2017</h4>

    <hr />
    <p>
      CAMBRIDGE - In a press conference today, MIT researchers unveiled their
      discovery from an exhaustive analysis of the entire NodeJS package manager
      (npm) repository: nearly every package in existence has a direct or
      indirect dependency on "shopping-list", which is nothing more than a text
      file written by npm creator Isaac Schlueter listing things he needed to
      buy from the supermarket in mid-October of 2010. The month-long study
      found that approximately 462,000 of the nearly half-million available
      entries in the npm catalogue would call into existence a fresh copy of
      stufftobuy.txt upon executing the "npm install" command.
    </p>

    <p>
      Documents released by the research team indicate that the shopping-list
      package was likely an accidental addition by Schlueter to the npm
      repository in its infancy. A careless package.json incorporation by an
      unknown adjunct repository package was all that was needed for
      shopping-list to mushroom into one of the most installed packages on the
      site. One researcher remarked that this outcome was unsurprising, since
      "nobody knows what the hell is inside their node_modules directory anyway,
      everyone just installs a ton of crap without consideration of its
      composition".
    </p>

    <p>
      When questioned by reporters, the research team indicated it was highly
      skeptical of the necessity of a simple text file containing strings like
      "granola bars", "bananas", and "toilet paper", but since the file was not
      even 1 kilobyte in size, it was probably prudent to just leave it be. The
      team made it clear that, although it was out of the purview of their
      study, it would be computationally feasible - though expensive - to
      conclusively determine if any packages in the repository actually required
      the presence of strings like "band aids" and "shaving cream" inside
      stufftobuy.txt to operate properly.{" "}
    </p>
    <hr />
  </PieceLayout>
);

export default ShoppingList;
