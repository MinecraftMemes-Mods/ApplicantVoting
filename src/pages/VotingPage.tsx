// This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0. If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.

import * as React from "react";
import { Container, Header, Content } from "rsuite";

import AppNavbar from "../components/Navbar";
import Applicant from "../components/Applicant";
import ApplicantDetails from "../interfaces/ApplicantDetails";

const testApplicant: ApplicantDetails = {
  basics: {
    username: "test",
    discordTag: "aaa#1235",
    timezone: "5",
    age: "11",
  },
  moderation: {
    platform: "microwave",
    modExperience: "none",
    hoursPerDay: "1-2",
    otherDuties: "fix",
  },
  posts: [{ verdict: "AAA", justification: "BBB" },{ verdict: "AAA", justification: "BBB" },{ verdict: "AAA", justification: "BBB" },{ verdict: "AAA", justification: "BBB" },{ verdict: "AAA", justification: "BBB" }],
  views: {
    opinionOnRules: "no",
    highlyUpvotedPost: "aaa",
    bestMeme: "1111",
  },
};

function VotingPage() {
  return (
    <>
      <Container>
        <Header>
          <AppNavbar />
        </Header>
        <Content>
          <Applicant applicantDetails={testApplicant} />
        </Content>
      </Container>
    </>
  );
}

export default VotingPage;
