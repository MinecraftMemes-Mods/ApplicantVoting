// This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0. If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.

interface PostAction {
  verdict: string;
  justification: string;
}

export default interface ApplicantDetails {
  basics: {
    username: string;
    discordTag: string;
    timezone: string;
    age: string;
  },
  moderation: {
    platform: string;
    modExperience: string;
    hoursPerDay: string;
    otherDuties: string;
  },
  posts: PostAction[];
  views: {
    opinionOnRules: string;
    highlyUpvotedPost: string;
    bestMeme: string;
  }

}