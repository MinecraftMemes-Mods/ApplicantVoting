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