import Typography from "@mui/material/Typography";
import upBlockImagePath from "assets/main-lending/up_block.png";
import waveBackgroundImagePath from "assets/main-lending/waveBackground.png";
import styled from "@emotion/styled";
import { wrap } from "module";

export const MainLendingWrapper = styled.div`
  margin: 0 auto;
  position: relative;
  z-index: 2;
  max-width: 1920px;
  background: #fff;
`;

// Start Robot Block
export const RobotMainBlock = styled.div`
  padding: 145px 240px 0 240px;
  position: relative;
  display: flex;
  align-content: center;
  justify-content: space-between;
  box-sizing: border-box;
  gap: 20px;

  @media screen and (max-width: 1200px) {
    padding: 80px 40px 0 40px;
    justify-content: space-around;
    max-width: 1200px;
  }

  @media screen and (max-width: 995px) {
    flex-flow: column nowrap;
    justify-items: center;
    align-items: center;
  }
`;

export const RobotBackgroundImageBlock = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  object-fit: contain;
  max-width: 100%;
`;

export const RobotInformationBlock = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  flex-flow: column nowrap;
  max-width: 800px;
  @media screen and (max-width: 995px) {
    justify-items: center;
    align-items: center;
  }
`;

export const RobotImage = styled.img`
  position: relative;
  z-index: 8;

  @media screen and (max-width: 1445px) {
    width: 400px;
    height: 400px;
  }

  @media screen and (max-width: 540px) {
    width: 350px;
    height: 357px;
  }
`;

export const RobotTitle = styled(Typography)`
  font-weight: 800;
  font-size: 70px;
  line-height: 80px;

  @media screen and (max-width: 1200px) {
    font-size: 54px;
    line-height: 60px;
    width: 550px;
  }

  @media screen and (max-width: 995px) {
    text-align: center;
  }

  @media screen and (max-width: 540px) {
    text-align: center;
    font-size: 37px;
    line-height: 40px;
  }
`;

export const RobotDescription = styled(Typography)`
  margin: 20px 0 20px 0;
  font-weight: 400;
  font-size: 28px;
  line-height: 40px;

  @media screen and (max-width: 1200px) {
    font-weight: 300;
    line-height: 40px;
    width: 450px;
  }

  @media screen and (max-width: 995px) {
    text-align: center;
  }

  @media screen and (max-width: 540px) {
    text-align: center;
    font-weight: 300;
    font-size: 20px;
    line-height: 28px;
  }
`;

// End Robot Block

// Start IncomeBlock

export const PassiveIncomeWrapper = styled.div`
  margin-top: 100px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-flow: column nowrap;

  @media screen and (max-width: 1200px) {
    padding: 80px 40px 0 40px;
    justify-content: space-around;
    max-width: 1200px;
  }

  @media screen and (max-width: 995px) {
    flex-flow: column nowrap;
    justify-items: center;
    align-items: center;
  }
`;

export const PassiveIncomeTitle = styled(Typography)`
  font-weight: 800;
  font-size: 54px;
  line-height: 60px;

  @media screen and (max-width: 1200px) {
    font-size: 40px;
    line-height: 50px;
    text-align: center;
  }

  @media screen and (max-width: 995px) {
    text-align: center;
  }

  @media screen and (max-width: 540px) {
    text-align: center;
    font-size: 30px;
    line-height: 34px;
  }
`;

export const PassiveIncomeDescription = styled(Typography)`
  margin: 25px 0 55px 0;
  font-weight: 400;
  font-size: 24px;
  line-height: 36px;
  color: #9298b8;

  @media screen and (max-width: 1200px) {
    font-size: 22px;
    line-height: 32px;
    text-align: center;
  }

  @media screen and (max-width: 995px) {
    text-align: center;
  }

  @media screen and (max-width: 540px) {
    margin: 10px 0 20px 0;
    text-align: center;
    font-size: 18px;
    line-height: 25px;
  }
`;

export const PassiveIncomeCardsWrapper = styled.div`
  margin-bottom: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 50px;
  position: relative;
  z-index: 25;
  flex-wrap: wrap;

  @media screen and (max-width: 1618px) {
    margin-bottom: 40px;
    padding: 0 40px 0 40px;
    justify-content: space-around;
    gap: 20px 20px;
  }

  @media screen and (max-width: 540px) {
    margin-bottom: 20px;
    padding: 0 20px 0 20px;
  }
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
  box-sizing: border-box;
`;

export const PassiveIncomeCardTitle = styled(Typography)`
  margin: 20px 0 10px 0;
  font-weight: 700;
  font-size: 24px;
  line-height: 30px;
  color: #181938;

  @media screen and (max-width: 540px) {
    font-size: 22px;
  }
`;

export const PassiveIncomeCardDescription = styled(Typography)`
  font-weight: 400;
  font-size: 16px;
  line-height: 25px;
  color: #181938;

  @media screen and (max-width: 540px) {
    line-height: 23px;
  }
`;

export const IncomeCardIcon = styled.div`
  justify-self: flex-start;
  max-width: 90px;
  max-height: 90px;
  background: #f4f7fe;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
`;

// Start IncomeBlock

// Start Jobs block

export const JobsBlock = styled.div`
  padding-top: 125px;
  position: relative;
  margin-top: -80px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-flow: column nowrap;
`;

export const JobsTitle = styled(Typography)`
  font-weight: 800;
  font-size: 54px;
  line-height: 60px;
  color: #181938;

  @media screen and (max-width: 1200px) {
    font-size: 40px;
    line-height: 50px;
    text-align: left;
    align-items: flex-start;
  }

  @media screen and (max-width: 995px) {
    text-align: left;
  }

  @media screen and (max-width: 670px) {
    text-align: center;
    font-size: 30px;
    line-height: 34px;
  }
`;

export const JobsDescription = styled(Typography)`
  font-weight: 400;
  font-size: 24px;
  line-height: 36px;
  color: #9298b8;

  @media screen and (max-width: 1200px) {
    font-size: 22px;
    line-height: 32px;
  }

  @media screen and (max-width: 670px) {
    font-size: 18px;
    line-height: 25px;
    text-align: center;
  }
`;

export const JobsBlockImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: -1;
  min-width: 100%;
  min-height: 810.01px;

  @media screen and (max-width: 1200px) {
    min-height: 590.63px;
  }
`;

export const JobsInfomationWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 187px;
  box-sizing: border-box;
  @media screen and (max-width: 1200px) {
    gap: 1px;
    padding: 0 40px 0 40px;
    justify-content: space-around;
  }

  @media screen and (max-width: 628px) {
    flex-flow: column nowrap;
  }
`;

export const JobsInfomationBlock = styled.div`
  display: flex;
  align-items: flex-start;
  flex-flow: column nowrap;
  gap: 25px;
  width: 576px;
  box-sizing: border-box;

  @media screen and (max-width: 1200px) {
    margin-right: -50px;
    width: 100%;
  }

  @media screen and (max-width: 628px) {
    padding: 0 20px 0 20px;
    width: 100%;
    align-items: center;
    margin-right: -50px;
  }
`;

export const JobsRobotWrapper = styled.div`
  margin-top: 140px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 124px;
  box-sizing: border-box;
  max-width: 100%;
  @media screen and (max-width: 1200px) {
    gap: 88px;
    padding: 0 40px 0 40px;
  }

  @media screen and (max-width: 670px) {
    flex-flow: column nowrap;
  }
`;

export const JobsRobotDescriptionBlock = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-flow: column nowrap;
  max-width: 100%;
  box-sizing: border-box;

  @media screen and (max-width: 1200px) {
    gap: 88px;
    padding: 0 40px 0 40px;
  }

  @media screen and (max-width: 670px) {
    flex-flow: column nowrap;
    align-items: center;
  justify-content: center;
  gap: 15px;

`;

export const JobsRobotDescriptionTitle = styled(Typography)`
  font-weight: 800;
  font-size: 54px;
  line-height: 60px;
  color: #181938;

  @media screen and (max-width: 1200px) {
    font-size: 40px;
    line-height: 50px;
    text-align: left;
    align-items: flex-start;
  }

  @media screen and (max-width: 995px) {
    text-align: center;
  }

  @media screen and (max-width: 540px) {
    text-align: center;
    font-size: 30px;
    line-height: 34px;
  }
`;

export const JobsRobotDescriptionSubTitle = styled(Typography)`
  margin: 25px 0 25px 0;
  font-weight: 400;
  font-size: 24px;
  line-height: 36px;
  color: #9298b8;

  @media screen and (max-width: 1200px) {
    font-size: 22px;
    line-height: 32px;
  }
  @media screen and (max-width: 995px) {
    text-align: center;
    margin: 0;
  }
  @media screen and (max-width: 540px) {
    font-size: 18px;
    line-height: 25px;
    text-align: center;
  }
`;

export const JobsRobotDescriptionSpan = styled(Typography)`
  margin-bottom: 25px;
  font-weight: 400;
  font-size: 13px;
  line-height: 20px;
  color: #5e658d;

  @media screen and (max-width: 1200px) {
    font-size: 22px;
    line-height: 32px;
  }
  @media screen and (max-width: 995px) {
    text-align: center;
  }
  @media screen and (max-width: 540px) {
    font-size: 18px;
    line-height: 25px;
    text-align: center;
  }
`;
// End Jobs block

// Start Transactions Block

export const TransactionsWrapper = styled.div`
  padding-top: 15%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column nowrap;
  box-sizing: border-box;
`;

export const TransactionsBlockImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: -1;
  min-width: 100%;
  min-height: 810.01px;

  @media screen and (max-width: 1200px) {
    min-height: 590.63px;
  }
`;

export const TransactionsTitle = styled(Typography)`
  font-weight: 800;
  font-size: 54px;
  line-height: 60px;
  color: #181938;
  text-align: center;

  @media screen and (max-width: 1200px) {
    font-size: 40px;
    line-height: 50px;
    text-align: left;
  }

  @media screen and (max-width: 995px) {
  }

  @media screen and (max-width: 670px) {
    font-size: 30px;
    line-height: 34px;
  }
`;

export const TransactionsDescription = styled(Typography)`
  margin: 20px 0 55px 0;
  font-weight: 400;
  font-size: 24px;
  line-height: 36px;
  color: #9298b8;

  @media screen and (max-width: 1200px) {
    font-size: 22px;
    line-height: 32px;
  }

  @media screen and (max-width: 670px) {
    font-size: 18px;
    line-height: 25px;
    text-align: center;
  }
`;

export const TransactionsCardsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 30px;
  overflow: hidden;
  max-width: 100%;
  flex-wrap: nowrap;
  box-sizing: border-box;
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

// Start BotTraining Block

export const BotTrainingWrapper = styled.div`
  margin-top: 10%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-flow: column nowrap;
`;

export const BotTrainingTitle = styled(Typography)`
  font-weight: 800;
  font-size: 54px;
  line-height: 60px;
  color: #181938;
  text-align: center;

  span {
    color: #5f5cec;
  }

  @media screen and (max-width: 1200px) {
    font-size: 40px;
    line-height: 50px;
  }

  @media screen and (max-width: 995px) {
  }

  @media screen and (max-width: 670px) {
    font-size: 30px;
    line-height: 34px;
  }
`;

export const BotTrainingDescription = styled(Typography)`
  margin: 20px 0 55px 0;
  font-weight: 400;
  font-size: 24px;
  line-height: 36px;
  color: #9298b8;
  text-align: center;

  @media screen and (max-width: 1200px) {
    font-size: 22px;
    line-height: 32px;
  }

  @media screen and (max-width: 670px) {
    font-size: 18px;
    line-height: 25px;
  }
`;

export const BotTrainingStepsWrapper = styled.div`
  margin-bottom: 55px;
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  gap: 50px;
  width: 100%;
  flex-flow: wrap;

  @media screen and (max-width: 670px) {
    margin-bottom: 20px;
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

// End BotTraining Block

// Start LK Block

export const LKInformationWrapper = styled.div`
  margin-top: -4%;
  padding: 0 40px 0 40px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-around;
  box-sizing: border-box;
  gap: 160px;
  width: 100%;

  @media screen and (max-width: 1200px) {
    gap: 76px;
  }
  @media screen and (max-width: 919px) {
    flex-flow: column nowrap;
  }
`;

export const LKInformationWrapperImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: -1;
  min-width: 100%;
  min-height: 810.01px;

  @media screen and (max-width: 1200px) {
    min-height: 590.63px;
  }
`;

export const LKInformationBlock = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  flex-flow: column nowrap;
  max-width: 800px;
  @media screen and (max-width: 995px) {
    justify-items: center;
    align-items: center;
  }
`;

export const LKInformationTitle = styled(Typography)`
  font-weight: 800;
  font-size: 70px;
  line-height: 80px;
  color: #181938;

  @media screen and (max-width: 1200px) {
    font-size: 40px;
    line-height: 50px;
  }

  @media screen and (max-width: 995px) {
    text-align: center;
  }

  @media screen and (max-width: 670px) {
    font-size: 30px;
    line-height: 34px;
    text-align: center;
  }
`;

export const LKInformationDescription = styled(Typography)`
  margin: 25px 0 0 0;
  font-weight: 400;
  font-size: 28px;
  line-height: 40px;
  color: #181938;

  @media screen and (max-width: 1200px) {
    font-size: 22px;
    line-height: 32px;
    text-align: center;
  }

  @media screen and (max-width: 670px) {
    font-size: 18px;
    line-height: 25px;
    text-align: center;
  }
`;

export const LKInformationImage = styled.img`
  position: relative;
  z-index: 8;

  @media screen and (max-width: 1445px) {
    width: 430px;
    height: 258.2px;
  }

  @media screen and (max-width: 540px) {
    width: 350px;
    height: 210.16px;
  }
`;
// End LK Block

// Start Goals Block

export const GoalsWrapper = styled.div`
  margin-top: 10%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-flow: column nowrap;
  width: 100%;
`;

export const GoalsTitle = styled(Typography)`
  font-weight: 800;
  font-size: 54px;
  line-height: 60px;
  color: #181938;
  text-align: center;

  @media screen and (max-width: 1200px) {
    font-size: 40px;
    line-height: 50px;
  }

  @media screen and (max-width: 670px) {
    font-size: 30px;
    line-height: 34px;
  }
`;
export const GoalsRealisedBlock = styled.div`
  padding: 0 40px 0 40px;
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  gap: 30px;

  @media screen and (max-width: 1024px) {
    flex-flow: column nowrap;
  }
`;

export const GoalsRealisedCard = styled.div`
  margin-top: 5%;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-flow: column nowrap;
  max-width: 446px;
  height: 420px;
  background: #ffffff;
  box-shadow: 0px 10px 20px rgba(20, 25, 143, 0.05);
  border-radius: 5px;
  box-sizing: border-box;

  @media screen and (max-width: 1024px) {
    max-width: 944px;
    flex-flow: row nowrap;
    gap: 20px;
    height: auto;
  }

  @media screen and (max-width: 576px) {
    flex-flow: column nowrap;
    justify-content: center;
    height: auto;
  }
`;

export const GoalsCardIcon = styled.div`
  justify-self: flex-start;
  min-width: 90px;
  min-height: 90px;
  background: #f4f7fe;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  box-sizing: border-box;
`;

export const GoalsFutureBlock = styled.div`
  padding: 0 40px 0 40px;
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  gap: 30px;

  @media screen and (max-width: 1024px) {
    flex-flow: column nowrap;
  }
`;

export const GoalsFutureCard = styled.div`
  margin-top: 5%;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-flow: column nowrap;
  max-width: 685px;
  height: 290px;
  background: #ffffff;
  box-shadow: 0px 10px 20px rgba(20, 25, 143, 0.05);
  border-radius: 5px;
  box-sizing: border-box;

  @media screen and (max-width: 1024px) {
    max-width: 944px;
    flex-flow: row nowrap;
    gap: 20px;
    height: auto;
  }

  @media screen and (max-width: 576px) {
    flex-flow: column nowrap;
    justify-content: center;
    height: auto;
  }
`;

export const GoalsInformationCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-flow: column nowrap;
  box-sizing: border-box;

  @media screen and (max-width: 1024px) {
    align-items: flex-start;
  }
  @media screen and (max-width: 670px) {
    align-items: center;
  }
`;

export const GoalsInformationCardTitle = styled(Typography)`
  margin: 15px 0 20px 0;
  font-weight: 700;
  font-size: 24px;
  line-height: 30px;
  color: #181938;
  text-align: center;

  @media screen and (max-width: 1200px) {
    font-size: 24px;
    line-height: 30px;
  }

  @media screen and (max-width: 670px) {
    font-size: 24px;
    line-height: 30px;
    text-align: center;
  }
`;

export const GoalsInformationCardDescription = styled(Typography)`
  font-weight: 400;
  font-size: 16px;
  line-height: 25px;
  color: #181938;
  text-align: center;

  @media screen and (max-width: 1200px) {
    font-size: 16px;
    line-height: 25px;
    text-align: left;
  }

  @media screen and (max-width: 670px) {
    font-size: 16px;
    line-height: 25px;
    text-align: center;
  }
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

// End Goals Block

// Start Referral Block

export const ReferralWrapper = styled.div`
  margin-top: -4%;
  padding: 0 40px 0 40px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-image: url(${waveBackgroundImagePath});
  box-sizing: border-box;
  gap: 5px;
  width: 100%;

  @media screen and (max-width: 970px) {
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
  }
`;

export const ReferralWrapperImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: -1;
  min-width: 100%;
  min-height: 810.01px;

  @media screen and (max-width: 1200px) {
    min-height: 590.63px;
  }
`;

export const ReferralTitle = styled(Typography)`
  font-weight: 800;
  font-size: 54px;
  line-height: 60px;
  color: #181938;

  @media screen and (max-width: 1200px) {
    font-size: 40px;
    line-height: 50px;
    text-align: left;
  }

  @media screen and (max-width: 670px) {
    font-size: 30px;
    line-height: 34px;
    text-align: center;
  }
`;

export const ReferralDescription = styled(Typography)`
  margin: 25px 0 25px 0;
  font-weight: 400;
  font-size: 24px;
  line-height: 36px;
  color: #9298b8;

  @media screen and (max-width: 1200px) {
    margin: 15px 0 15px 0;
    font-size: 22px;
    line-height: 32px;
    text-align: left;
  }

  @media screen and (max-width: 670px) {
    font-size: 16px;
    line-height: 25px;
    text-align: center;
  }
`;

export const ReferralSubDescription = styled(Typography)`
  margin-bottom: 25px;
  font-weight: 400;
  font-size: 16px;
  line-height: 25px;
  color: #181938;
  box-sizing: border-box;

  @media screen and (max-width: 1200px) {
    margin-bottom: 15px;
    text-align: left;
  }

  @media screen and (max-width: 670px) {
    font-size: 15px;
    line-height: 23px;
    text-align: center;
  }
`;
export const ReferralInformationBlock = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-flow: column nowrap;
  width: 100%;
  box-sizing: border-box;

  @media screen and (max-width: 970px) {
    align-items: center;
    justify-content: center;
  }
`;

// End Referral Block

// Start About Block

export const AboutWrapper = styled.div`
  position: relative;
  margin-top: 10%;
  padding: 0 40px 110px 40px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-flow: column nowrap;
  box-sizing: border-box;
  width: 100%;

  @media screen and (max-width: 670px) {
    padding: 0 15px 0 15px;
  }
`;

export const AboutImageBlock = styled.img`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;

  @media screen and (max-width: 1200px) {
    min-height: 590.63px;
  }
`;

export const AboutReviewsBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-flow: column nowrap;
  position: relative;
  z-index: 10;
  box-sizing: border-box;
  width: 100%;
`;

export const AboutTitle = styled(Typography)`
  font-weight: 800;
  font-size: 54px;
  line-height: 60px;
  color: #181938;
  text-align: center;

  @media screen and (max-width: 1200px) {
    font-size: 40px;
    line-height: 50px;
  }

  @media screen and (max-width: 670px) {
    font-size: 30px;
    line-height: 34px;
  }
`;

export const AboutReviewsCardsBlock = styled.div`
  margin: 55px 0 55px 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 20px;
  box-sizing: border-box;
  width: 100%;

  @media screen and (max-width: 670px) {
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
`;

export const AboutReviewsCardBlock = styled.div`
  padding: 30px 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  background: #ffffff;
  box-shadow: 0px 10px 20px rgba(20, 25, 143, 0.05);
  border-radius: 5px;
  box-sizing: border-box;

  @media screen and (max-width: 1400px) {
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
  }
`;

export const AboutReviewsCardTitle = styled(Typography)`
  font-weight: 400;
  font-size: 16px;
  line-height: 25px;
  color: #5e658d;
  text-align: center;

  @media screen and (max-width: 1200px) {
    font-size: 16px;
    line-height: 25px;
  }
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
  box-sizing: border-box;
  width: auto;

  @media screen and (max-width: 1024px) {
    flex-wrap: wrap;
  }

  @media screen and (max-width: 670px) {
    margin-top: 0;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
  }
`;

export const AboutNotesCardBlock = styled.div`
  padding: 30px 30px;
  align-items: center;
  justify-content: flex-start;
  flex-flow: column nowrap;
  width: 446px;
  height: 571px;
  background: #ffffff;
  box-sizing: border-box;

  @media screen and (max-width: 670px) {
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: auto;
  }
`;

export const AboutNotesCardTitle = styled(Typography)`
  font-weight: 700;
  font-size: 24px;
  line-height: 30px;
  color: #181938;

  @media screen and (max-width: 1200px) {
    font-size: 24px;
    line-height: 30px;
    text-align: left;
  }

  @media screen and (max-width: 670px) {
    font-size: 22px;
    line-height: 28px;
    text-align: left;
  }
`;

export const AboutNotesCardDescription = styled(Typography)`
  margin: 10px 0 10px 0;
  font-weight: 400;
  font-size: 16px;
  line-height: 25px;
  color: #181938;

  @media screen and (max-width: 1200px) {
    text-align: left;
  }

  @media screen and (max-width: 670px) {
    font-size: 15px;
    line-height: 23px;
    text-align: center;
  }
`;

export const AboutNotesCardImage = styled.img`
  width: 100%;
  height: 245.29px;
  border-radius: 5px;

  @media screen and (max-width: 1024px) {
    width: 340px;
    height: 216.06px;
  }

  @media screen and (max-width: 670px) {
    width: 290px;
    height: 184.29px;
  }
`;

// End About Block
