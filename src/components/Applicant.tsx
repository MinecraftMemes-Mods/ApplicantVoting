import * as React from "react";
import {
  ButtonGroup,
  Col,
  Divider,
  FlexboxGrid,
  Grid,
  IconButton,
  Panel,
  PanelGroup,
  Row,
} from "rsuite";
import ApplicantDetails from "../interfaces/ApplicantDetails";
import BlockRound from "@rsuite/icons/BlockRound";
import CheckRound from "@rsuite/icons/CheckRound";
import MinusRound from "@rsuite/icons/MinusRound";

import "../scss/applicant.scss";

interface ApplicantProps {
  applicantDetails: ApplicantDetails;
}

const Applicant: React.FunctionComponent<ApplicantProps> = (props) => {
  const { basics, moderation, posts, views } = props.applicantDetails;
  return (
    <div className="applicant">
      <Divider children="Basics" />
      <FlexboxGrid justify="space-around">
        <FlexboxGrid.Item colspan={6} md={6} xs={24} as={Col}>
          <Panel bordered header="Username">
            {basics.username}
          </Panel>
        </FlexboxGrid.Item>
        <FlexboxGrid.Item colspan={6} md={6} xs={24} as={Col}>
          <Panel bordered header="Discord Tag">
            {basics.discordTag}
          </Panel>
        </FlexboxGrid.Item>
        <FlexboxGrid.Item colspan={6} md={6} xs={24} as={Col}>
          <Panel bordered header="Timezone">
            {basics.timezone}
          </Panel>
        </FlexboxGrid.Item>
        <FlexboxGrid.Item colspan={6} md={6} xs={24} as={Col}>
          <Panel bordered header="Age">
            {basics.age}
          </Panel>
        </FlexboxGrid.Item>
      </FlexboxGrid>
      <Divider children="Moderation"/>
      <FlexboxGrid justify="space-around">
        <FlexboxGrid.Item colspan={6} md={6} xs={24} as={Col}>
        <Panel bordered header="Preferred platform">
              {moderation.platform}
            </Panel>
        </FlexboxGrid.Item>
        <FlexboxGrid.Item colspan={6} md={6} xs={24} as={Col}>
        <Panel bordered header="Mod experience">
              {moderation.modExperience}
            </Panel>
        </FlexboxGrid.Item>
        <FlexboxGrid.Item colspan={6} md={6} xs={24} as={Col}>
        <Panel bordered header="Hours per day">
              {moderation.hoursPerDay}
            </Panel>
        </FlexboxGrid.Item>
        <FlexboxGrid.Item colspan={6} md={6} xs={24} as={Col}>
        <Panel bordered header="Other Duties">
              {moderation.otherDuties}
            </Panel>
        </FlexboxGrid.Item>
      </FlexboxGrid>
      <Divider children="Posts" />
      <FlexboxGrid>
        <FlexboxGrid.Item as={Col} md={24} xs={24}>
        <PanelGroup accordion bordered>
          {
            posts.map((post, index) => (
              <Panel header={`Post ${index} -  (${post.verdict})`}> {/* TODO: Add OK/Wrong & Colors */}
              {post.justification}
              </Panel> 
            ))
          }
        </PanelGroup>
        </FlexboxGrid.Item>
      
      </FlexboxGrid>
      <Divider children="Views" />
      <FlexboxGrid justify="space-between">
        <FlexboxGrid.Item cospan={6} md={8} xs={24} as={Col}>
          <Panel bordered header="Opinion on rules">
            {views.opinionOnRules}
          </Panel>
        </FlexboxGrid.Item>
        <FlexboxGrid.Item cospan={6} md={8} xs={24} as={Col}>
          <Panel bordered header="Removal of highly upvoted post">
            {views.highlyUpvotedPost}
          </Panel>
        </FlexboxGrid.Item>
        <FlexboxGrid.Item cospan={6} md={8} xs={24} as={Col}>
          <Panel bordered header="Best Meme">
            {views.bestMeme}
          </Panel>
        </FlexboxGrid.Item>
      </FlexboxGrid>
      <div className="approvalButtons">
        <FlexboxGrid justify="center">
          <IconButton appearance="primary" color="green" icon={<CheckRound/>}>Vote Up</IconButton>
          <IconButton appearance="primary" color="blue" icon={<MinusRound/>}>Neutral</IconButton>
          <IconButton appearance="primary" color="red" icon={<BlockRound/>}>Vote Down</IconButton>
        </FlexboxGrid>
      </div>
    </div>
  );
};

export default Applicant;
