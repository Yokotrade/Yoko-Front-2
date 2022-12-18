import upBlockImagePath from "assets/main-lending/up_block.png";
import waveBackgroundImagePath from "assets/main-lending/waveBackground.png";
import styled from "@emotion/styled";

export const MainLendingWrapper = styled.div`
  margin: 0 auto;
  position: relative;
  z-index: 2;
  width: 1920px;
  background: #fff;
`;

export const RobotMainBlock = styled.div`
  position: relative;
  background-image: url(${upBlockImagePath});
  height: 830px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const RobotInformationBlock = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  flex-flow: column nowrap;
  max-width: 800px;
`;

export const RobotImage = styled.img`
  position: relative;
  z-index: 8;
`;

export const PassiveIncomeWrapper = styled.div`
  margin-top: 100px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-flow: column nowrap;
`;

export const PassiveIncomeCardsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 50px;
  position: relative;
  z-index: 25;
`;

export const PassiveIncomeCard = styled.div`
  position: relative;
  z-index: 25;
  padding: 30px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-flow: column nowrap;
  box-shadow: 0px 10px 20px rgba(20, 25, 143, 0.05);
  border-radius: 5px;
  width: 312px;
  height: 404px;
`;

export const IncomeCardIcon = styled.div`
  justify-self: flex-start;
  width: 90px;
  height: 90px;
  background: #f4f7fe;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
`;

export const JobsBlock = styled.div`
  position: relative;
  margin-top: -80px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-flow: column nowrap;
`;

export const JobsBlockImage = styled.img`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
`;

export const JobsInfomationWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 187px;
`;

export const JobsInfomationBlock = styled.div`
  display: flex;
  align-items: flex-start;
  flex-flow: column nowrap;
  gap: 25px;
  width: 576px;
`;

export const JobsRobotWrapper = styled.div`
  margin-top: 140px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 124px;
`;

export const JobsRobotDescriptionBlock = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-flow: column nowrap;
  width: 765px;
`;

export const TransactionsWrapper = styled.div`
  padding-top: 15%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column nowrap;
  background-image: url(${waveBackgroundImagePath});
  box-sizing: border-box;
`;

export const TransactionsCardsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 30px;
`;

export const TransactionsCard = styled.div`
  padding: 30px 38px;
  width: 256px;
  height: 196px;
  box-shadow: 0px 10px 20px rgba(20, 25, 143, 0.05);
  border-radius: 5px;
  display: flex;
  flex-flow: column nowrap;
  box-sizing: border-box;
  background: #fff;
`;

export const TransactionsCardDateBlock = styled.div`
  margin-top: 23px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 173px;
  height: 53px;
  background: #f4f7fe;
  border-radius: 5px;
`;

export const TransactionsCardDateInformationBlock = styled.div`
  display: flex;
  flex-flow: column nowrap;
`;

export const BotTrainingWrapper = styled.div`
  margin-top: 10%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-flow: column nowrap;
`;

export const BotTrainingSpan = styled.span`
  color: #5f5cec;
`;

export const BotTrainingStepsWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  gap: 50px;
`;

export const BotTrainingStepCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-flow: column nowrap;
  width: 312px;
  box-sizing: border-box;
`;

export const BotTrainingStepIconBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-flow: column nowrap;
`;

export const LKInformationWrapper = styled.div`
  margin-top: -4%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-image: url(${waveBackgroundImagePath});
  box-sizing: border-box;
  gap: 160px;
  height: 810.01px;
`;

export const GoalsWrapper = styled.div`
  margin-top: 10%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-flow: column nowrap;
`;

export const GoalsRealisedBlock = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  gap: 30px;
`;

export const GoalsRealisedCard = styled.div`
  margin-top: 5%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-flow: column nowrap;
  width: 446px;
  height: 420px;
  background: #ffffff;
  box-shadow: 0px 10px 20px rgba(20, 25, 143, 0.05);
  border-radius: 5px;
`;

export const GoalsFutureBlock = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  gap: 30px;
`;

export const GoalsFutureCard = styled.div`
  margin-top: 5%;
  padding: 30px 30px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-flow: column nowrap;
  width: 685px;
  height: 290px;
  background: #ffffff;
  box-shadow: 0px 10px 20px rgba(20, 25, 143, 0.05);
  border-radius: 5px;
  box-sizing: border-box;
`;

export const FutureCardIcon = styled.div`
  justify-self: flex-start;
  min-width: 90px;
  min-height: 90px;
  background: #f4f7fe;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  position: relative;
  box-sizing: border-box;
`;

export const GoalsCheckFutureSpanBlock = styled.span`
  padding: 0;
  position: absolute;
  background: #05cd99;
  border-radius: 15px;
  top: -5px;
  right: -20px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 58px;
  height: 20px;
`;

export const GoalsCheckFutureSpan = styled.span`
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  line-height: 14px;
  color: #ffffff;
  text-align: center;
`;

export const ReferralWrapper = styled.div`
  margin-top: -4%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-image: url(${waveBackgroundImagePath});
  box-sizing: border-box;
  gap: 5px;
  height: 810.01px;
`;

export const ReferralInformationBlock = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-flow: column nowrap;
  width: 800px;
`;

export const AboutWrapper = styled.div`
  margin-top: 10%;
  padding-bottom: 8%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-flow: column nowrap;
  position: relative;
`;

export const AboutImageBlock = styled.img`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
`;

export const AboutReviewsBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-flow: column nowrap;
  position: relative;
  z-index: 10;
`;

export const AboutReviewsCardsBlock = styled.div`
  margin-top: 55px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 20px;
`;

export const AboutReviewsCardBlock = styled.div`
  padding: 30px 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  width: 675px;
  height: 235px;
  background: #ffffff;
  box-shadow: 0px 10px 20px rgba(20, 25, 143, 0.05);
  border-radius: 5px;
  box-sizing: border-box;
`;

export const AboutReviewsCardAvatar = styled.img`
  width: 120px;
  height: 120px;
  border: 5px solid #9298b8;
  border-radius: 50%;
  box-sizing: border-box;
`;

export const AboutNotesCardsBlock = styled.div`
  margin-top: 55px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 30px;
  position: relative;
  z-index: 10;
`;

export const AboutNotesCardBlock = styled.div`
  padding: 30px 30px;
  align-items: center;
  justify-content: flex-start;
  flex-flow: column nowrap;
  width: 446px;
  height: 571px;
  background: #FFFFFF;
  box-sizing: border-box;
`;

export const AboutNotesCardImage = styled.img`
  width: 100%;
  height: 245.29px;
  border-radius: 5px;
`;
