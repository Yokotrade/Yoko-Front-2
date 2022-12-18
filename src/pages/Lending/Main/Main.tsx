import { useTranslation } from "react-i18next";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import CachedIcon from "@mui/icons-material/Cached";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import MagnifierIcon from "icon/Magnifier";
import StatisticIcon from "icon/Statistic";
import BotIcon from "icon/Bot";
import ClockIcon from "icon/Clock";
import ShildIcon from "icon/Shild";
import AccountBotTrainingIcon from "icon/AccountBotTraining";
import ProfitBotTrainingIcon from "icon/ProfitBotTraining";
import RegisterBotTrainingIcon from "icon/RegisterBotTraining";
import RobotBotTrainingIcon from "icon/RobotBotTraining";
import LotSettingsIcon from "icon/LotSettings";
import MoneyIcon from "icon/Money";
import AlgoritmIcon from "icon/Algoritm";
import TelegrammBotIcon from "icon/TelegrammBot";
import SimulateIcon from "icon/Simulate";
import waveBackgroundImagePath from "assets/main-lending/waveBackground.png";
import staticTradeImagePath from "assets/main-lending/staticTrade.png";
import yokoTradeImagePath from "assets/main-lending/yokoTrade.png";
import lkScreen from "assets/main-lending/lkScreen.png";
import yokoTradePolitic from "assets/main-lending/yokoTradePolitic.png";
import robotPath from "assets/main-lending/robot.png";
import userAvatarFix from "assets/main-lending/userAvatarFix.png";
import notesFix from "assets/main-lending/notesFix.png";
import aboutDownPath from "assets/main-lending/aboutDown.png";
import * as Styled from "./Main.styled";

export const MainLending = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <Styled.MainLendingWrapper>
      <Styled.RobotMainBlock>
        <Styled.RobotInformationBlock>
          <Typography
            sx={{
              fontWeight: "800",
              fontSize: "70px",
              lineHeight: "80px",
            }}
          >
            {t("dictionary.cryptocurrency_trading_robot")}
          </Typography>
          <Typography
            sx={{
              fontWeight: "400",
              fontSize: "28px",
              lineHeight: "40px",
              margin: "40px 0 40px 0",
            }}
          >
            {t("dictionary.beginners_ordinary_people_professionals_traders")}
          </Typography>
          <Button startIcon={<RocketLaunchIcon />} variant="contained">
            {t("dictionary.start_trial")}
          </Button>
        </Styled.RobotInformationBlock>
        <Styled.RobotImage src={robotPath} alt="upBlockImagePath" />
      </Styled.RobotMainBlock>
      <Styled.PassiveIncomeWrapper>
        <Typography
          sx={{
            fontWeight: "800",
            fontSize: "54px",
            lineHeight: "60px",
          }}
        >
          {t("dictionary.create_passive_income_cryptocurrency")}
        </Typography>
        <Typography
          sx={{
            margin: "25px 0 55px 0",
            fontWeight: "400",
            fontSize: "24px",
            lineHeight: "36px",
            color: "#9298B8",
          }}
        >
          {t("dictionary.mind_business_smart_yoko_robot_everything_you")}
        </Typography>
        <Styled.PassiveIncomeCardsWrapper>
          <Styled.PassiveIncomeCard>
            <Styled.IncomeCardIcon>
              <MagnifierIcon />
            </Styled.IncomeCardIcon>
            <Typography
              sx={{
                fontWeight: "700",
                fontSize: "24px",
                lineHeight: "30px",
                color: "#181938",
                margin: "20px 0 10px 0",
              }}
            >
              {t("dictionary.coin_analysis")}
            </Typography>
            <Typography
              sx={{
                fontWeight: "400",
                fontSize: "16px",
                lineHeight: "25px",
                color: "#181938",
              }}
            >
              {t(
                "dictionary.robot_nalyzes_charts_selects_successful_coins_trading"
              )}
            </Typography>
          </Styled.PassiveIncomeCard>
          <Styled.PassiveIncomeCard>
            <Styled.IncomeCardIcon>
              <StatisticIcon />
            </Styled.IncomeCardIcon>
            <Typography
              sx={{
                fontWeight: "700",
                fontSize: "24px",
                lineHeight: "30px",
                color: "#181938",
                margin: "20px 0 10px 0",
              }}
            >
              {t("dictionary.buying_selling")}
            </Typography>
            <Typography
              sx={{
                fontWeight: "400",
                fontSize: "16px",
                lineHeight: "25px",
                color: "#181938",
              }}
            >
              {t("dictionary.knows_buy_sell_closes_profitable_trades")}
            </Typography>
          </Styled.PassiveIncomeCard>
          <Styled.PassiveIncomeCard>
            <Styled.IncomeCardIcon>
              <ClockIcon />
            </Styled.IncomeCardIcon>
            <Typography
              sx={{
                fontWeight: "700",
                fontSize: "24px",
                lineHeight: "30px",
                color: "#181938",
                margin: "20px 0 10px 0",
              }}
            >
              {t("dictionary.works_24_7")}
            </Typography>
            <Typography
              sx={{
                fontWeight: "400",
                fontSize: "16px",
                lineHeight: "25px",
                color: "#181938",
              }}
            >
              {t(
                "dictionary.robot_not_need_sleep_works_monitors_situation_breaks_days_while_rest"
              )}
            </Typography>
          </Styled.PassiveIncomeCard>
          <Styled.PassiveIncomeCard>
            <Styled.IncomeCardIcon>
              <ShildIcon />
            </Styled.IncomeCardIcon>
            <Typography
              sx={{
                fontWeight: "700",
                fontSize: "24px",
                lineHeight: "30px",
                color: "#181938",
                margin: "20px 0 10px 0",
              }}
            >
              {t("dictionary.safely")}
            </Typography>
            <Typography
              sx={{
                fontWeight: "400",
                fontSize: "16px",
                lineHeight: "25px",
                color: "#181938",
              }}
            >
              {t(
                "dictionary.your_money_your_money_your_stored_exchange_have_access_them_robot_cannot_deposit_withdraw_money_open_close_trades"
              )}
            </Typography>
          </Styled.PassiveIncomeCard>
        </Styled.PassiveIncomeCardsWrapper>
      </Styled.PassiveIncomeWrapper>
      <Styled.JobsBlock>
        <Button
          sx={{ marginTop: "125px" }}
          startIcon={<AttachMoneyIcon />}
          variant="contained"
        >
          {t("dictionary.create_passive_income")}
        </Button>
        <Styled.JobsBlockImage
          src={waveBackgroundImagePath}
          alt="waveBackgroundImagePath"
        />
        <Styled.JobsInfomationWrapper>
          <Styled.JobsInfomationBlock>
            <Typography
              sx={{
                fontWeight: "800",
                fontSize: "54px",
                lineHeight: "60px",
                color: "#181938",
              }}
            >
              {t("dictionary.we_work_largest_exchanges")}
            </Typography>
            <Typography
              sx={{
                fontWeight: "400",
                fontSize: "24px",
                lineHeight: "36px",
                color: "#9298B8",
              }}
            >
              Binance, Huobi, OKX, ByBit
            </Typography>
          </Styled.JobsInfomationBlock>
          <Styled.RobotImage
            src={staticTradeImagePath}
            alt="staticTradeImagePath"
          />
        </Styled.JobsInfomationWrapper>
        <Styled.JobsRobotWrapper>
          <Styled.RobotImage
            src={yokoTradeImagePath}
            alt="yokoTradeImagePath"
          />
          <Styled.JobsRobotDescriptionBlock>
            <Typography
              sx={{
                fontWeight: "800",
                fontSize: "54px",
                lineHeight: "60px",
                color: "#181938",
              }}
            >
              {t("dictionary.we_want_you_earn")}
            </Typography>
            <Typography
              sx={{
                margin: "25px 0 25px 0",
                fontWeight: "400",
                fontSize: "24px",
                lineHeight: "36px",
                color: "#181938",
              }}
            >
              {t(
                "dictionary.we_connect_robot_absolutely_charge._subscription_fees"
              )}
            </Typography>
            <Typography
              sx={{
                fontWeight: "400",
                fontSize: "13px",
                lineHeight: "20px",
                color: "#5E658D",
              }}
            >
              *{" "}
              {t(
                "dictionary.percentage_profit_calculated_size_deposit_trading_period"
              )}
            </Typography>
            <Button
              sx={{ marginTop: "25px" }}
              startIcon={<BotIcon />}
              variant="contained"
            >
              {t("dictionary.connect_robot")}
            </Button>
          </Styled.JobsRobotDescriptionBlock>
        </Styled.JobsRobotWrapper>
      </Styled.JobsBlock>
      <Styled.TransactionsWrapper>
        <Typography
          sx={{
            fontWeight: "800",
            fontSize: "54px",
            lineHeight: "60px",
            color: "#181938",
          }}
        >
          {t("dictionary.last_closed_deals_Yoko_robot")}
        </Typography>
        <Typography
          sx={{
            margin: "20px 0 55px 0",
            fontWeight: "400",
            fontSize: "24px",
            lineHeight: "36px",
            color: "#9298B8",
          }}
        >
          {t("dictionary.keep_track_latest_robot_trades")}
        </Typography>
        <Styled.TransactionsCardsWrapper>
          <Styled.TransactionsCard>
            <Typography
              sx={{
                fontWeight: "900",
                fontSize: "30px",
                lineHeight: "35px",
                color: "#181938",
                marginBottom: "13px",
              }}
            >
              +11 USDT
            </Typography>
            <Chip label="BTC/USDT" color="success" />
            <Styled.TransactionsCardDateBlock>
              <CalendarMonthIcon />
              <Styled.TransactionsCardDateInformationBlock>
                <Typography
                  sx={{
                    marginBottom: "5px",
                    fontWeight: "500",
                    fontSize: "12px",
                    lineHeight: "12px",
                    color: "#5E658D",
                    letterSpacing: "0.3px",
                  }}
                >
                  {t("dictionary.income_received")}
                </Typography>
                <Typography
                  sx={{
                    fontWeight: "800",
                    fontSize: "14px",
                    lineHeight: "16px",
                    color: "#181938",
                  }}
                >
                  13:24 21.03.2022
                </Typography>
              </Styled.TransactionsCardDateInformationBlock>
            </Styled.TransactionsCardDateBlock>
          </Styled.TransactionsCard>
          <Styled.TransactionsCard>
            <Typography
              sx={{
                fontWeight: "900",
                fontSize: "30px",
                lineHeight: "35px",
                color: "#181938",
                marginBottom: "13px",
              }}
            >
              +38 USDT
            </Typography>
            <Chip label="BTC/USDT" color="success" />
            <Styled.TransactionsCardDateBlock>
              <CalendarMonthIcon />
              <Styled.TransactionsCardDateInformationBlock>
                <Typography
                  sx={{
                    marginBottom: "5px",
                    fontWeight: "500",
                    fontSize: "12px",
                    lineHeight: "12px",
                    color: "#5E658D",
                    letterSpacing: "0.3px",
                  }}
                >
                  {t("dictionary.income_received")}
                </Typography>
                <Typography
                  sx={{
                    fontWeight: "800",
                    fontSize: "14px",
                    lineHeight: "16px",
                    color: "#181938",
                  }}
                >
                  13:24 21.03.2022
                </Typography>
              </Styled.TransactionsCardDateInformationBlock>
            </Styled.TransactionsCardDateBlock>
          </Styled.TransactionsCard>
          <Styled.TransactionsCard>
            <Typography
              sx={{
                fontWeight: "900",
                fontSize: "30px",
                lineHeight: "35px",
                color: "#181938",
                marginBottom: "13px",
              }}
            >
              +0,98 USDT
            </Typography>
            <Chip label="BTC/USDT" color="success" />
            <Styled.TransactionsCardDateBlock>
              <CalendarMonthIcon />
              <Styled.TransactionsCardDateInformationBlock>
                <Typography
                  sx={{
                    marginBottom: "5px",
                    fontWeight: "500",
                    fontSize: "12px",
                    lineHeight: "12px",
                    color: "#5E658D",
                    letterSpacing: "0.3px",
                  }}
                >
                  {t("dictionary.income_received")}
                </Typography>
                <Typography
                  sx={{
                    fontWeight: "800",
                    fontSize: "14px",
                    lineHeight: "16px",
                    color: "#181938",
                  }}
                >
                  13:24 21.03.2022
                </Typography>
              </Styled.TransactionsCardDateInformationBlock>
            </Styled.TransactionsCardDateBlock>
          </Styled.TransactionsCard>
          <Styled.TransactionsCard>
            <Typography
              sx={{
                fontWeight: "900",
                fontSize: "30px",
                lineHeight: "35px",
                color: "#181938",
                marginBottom: "13px",
              }}
            >
              +7 USDT
            </Typography>
            <Chip label="BTC/USDT" color="success" />
            <Styled.TransactionsCardDateBlock>
              <CalendarMonthIcon />
              <Styled.TransactionsCardDateInformationBlock>
                <Typography
                  sx={{
                    marginBottom: "5px",
                    fontWeight: "500",
                    fontSize: "12px",
                    lineHeight: "12px",
                    color: "#5E658D",
                    letterSpacing: "0.3px",
                  }}
                >
                  {t("dictionary.income_received")}
                </Typography>
                <Typography
                  sx={{
                    fontWeight: "800",
                    fontSize: "14px",
                    lineHeight: "16px",
                    color: "#181938",
                  }}
                >
                  13:24 21.03.2022
                </Typography>
              </Styled.TransactionsCardDateInformationBlock>
            </Styled.TransactionsCardDateBlock>
          </Styled.TransactionsCard>
          <Styled.TransactionsCard>
            <Typography
              sx={{
                fontWeight: "900",
                fontSize: "30px",
                lineHeight: "35px",
                color: "#181938",
                marginBottom: "13px",
              }}
            >
              +14,22 USDT
            </Typography>
            <Chip label="BTC/USDT" color="success" />
            <Styled.TransactionsCardDateBlock>
              <CalendarMonthIcon />
              <Styled.TransactionsCardDateInformationBlock>
                <Typography
                  sx={{
                    marginBottom: "5px",
                    fontWeight: "500",
                    fontSize: "12px",
                    lineHeight: "12px",
                    color: "#5E658D",
                    letterSpacing: "0.3px",
                  }}
                >
                  {t("dictionary.income_received")}
                </Typography>
                <Typography
                  sx={{
                    fontWeight: "800",
                    fontSize: "14px",
                    lineHeight: "16px",
                    color: "#181938",
                  }}
                >
                  13:24 21.03.2022
                </Typography>
              </Styled.TransactionsCardDateInformationBlock>
            </Styled.TransactionsCardDateBlock>
          </Styled.TransactionsCard>
        </Styled.TransactionsCardsWrapper>
        <Button
          sx={{ marginTop: "55px" }}
          startIcon={<CachedIcon />}
          variant="contained"
        >
          {t("dictionary.update_latest_deals")}
        </Button>
      </Styled.TransactionsWrapper>
      <Styled.BotTrainingWrapper>
        <Typography
          sx={{
            fontWeight: "800",
            fontSize: "54px",
            lineHeight: "60px",
            color: "#181938",
            textAlign: "center",
          }}
        >
          {t("dictionary.cryptocurrencies_hard")}, <br /> {t("dictionary.nose")}{" "}
          {
            <Styled.BotTrainingSpan>
              {t("dictionary.Yoko_botom")}{" "}
            </Styled.BotTrainingSpan>
          }{" "}
          {t("dictionary.everything_become_simple_understandable")}
        </Typography>
        <Typography
          sx={{
            margin: "20px 0 55px 0",
            fontWeight: "400",
            fontSize: "24px",
            lineHeight: "36px",
            color: "#9298B8",
            textAlign: "center",
          }}
        >
          {t("dictionary.connect_robot_easy_steps")}
        </Typography>
        <Styled.BotTrainingStepsWrapper>
          <Styled.BotTrainingStepCard>
            <Styled.BotTrainingStepIconBlock>
              <Chip
                sx={{
                  marginBottom: "-10px",
                  position: "relative",
                  zIndex: "100",
                }}
                label="1"
                color="success"
              />
              <Styled.IncomeCardIcon>
                <AccountBotTrainingIcon />
              </Styled.IncomeCardIcon>
            </Styled.BotTrainingStepIconBlock>
            <Typography
              sx={{
                margin: "10px 0 20px 0",
                fontWeight: "700",
                fontSize: "24px",
                lineHeight: "30px",
                color: "#181938",
                textAlign: "center",
              }}
            >
              {t("register.title")}
            </Typography>
            <Typography
              sx={{
                fontWeight: "400",
                fontSize: "16px",
                lineHeight: "25px",
                color: "#181938",
                textAlign: "center",
              }}
            >
              {t("dictionary.register_website_get_personal_account")}
            </Typography>
          </Styled.BotTrainingStepCard>
          <Styled.BotTrainingStepCard>
            <Styled.BotTrainingStepIconBlock>
              <Chip
                sx={{
                  marginBottom: "-10px",
                  position: "relative",
                  zIndex: "100",
                }}
                label="2"
                color="success"
              />
              <Styled.IncomeCardIcon>
                <ProfitBotTrainingIcon />
              </Styled.IncomeCardIcon>
            </Styled.BotTrainingStepIconBlock>
            <Typography
              sx={{
                margin: "10px 0 20px 0",
                fontWeight: "700",
                fontSize: "24px",
                lineHeight: "30px",
                color: "#181938",
                textAlign: "center",
              }}
            >
              {t("dictionary.exchange_account")}
            </Typography>
            <Typography
              sx={{
                fontWeight: "400",
                fontSize: "16px",
                lineHeight: "25px",
                color: "#181938",
                textAlign: "center",
              }}
            >
              {t("dictionary.account_exchange_register_referral_bonus")}
            </Typography>
          </Styled.BotTrainingStepCard>
          <Styled.BotTrainingStepCard>
            <Styled.BotTrainingStepIconBlock>
              <Chip
                sx={{
                  marginBottom: "-10px",
                  position: "relative",
                  zIndex: "100",
                }}
                label="3"
                color="success"
              />
              <Styled.IncomeCardIcon>
                <RegisterBotTrainingIcon />
              </Styled.IncomeCardIcon>
            </Styled.BotTrainingStepIconBlock>
            <Typography
              sx={{
                margin: "10px 0 20px 0",
                fontWeight: "700",
                fontSize: "24px",
                lineHeight: "30px",
                color: "#181938",
                textAlign: "center",
              }}
            >
              {t("dictionary.connect_robot")}
            </Typography>
            <Typography
              sx={{
                fontWeight: "400",
                fontSize: "16px",
                lineHeight: "25px",
                color: "#181938",
                textAlign: "center",
              }}
            >
              {t(
                "dictionary.receive_detailed_instructions_connecting_robot_account_exchange"
              )}
            </Typography>
          </Styled.BotTrainingStepCard>
          <Styled.BotTrainingStepCard>
            <Styled.BotTrainingStepIconBlock>
              <Chip
                sx={{
                  marginBottom: "-10px",
                  position: "relative",
                  zIndex: "100",
                }}
                label="4"
                color="success"
              />
              <Styled.IncomeCardIcon>
                <RobotBotTrainingIcon />
              </Styled.IncomeCardIcon>
            </Styled.BotTrainingStepIconBlock>

            <Typography
              sx={{
                margin: "10px 0 20px 0",
                fontWeight: "700",
                fontSize: "24px",
                lineHeight: "30px",
                color: "#181938",
                textAlign: "center",
              }}
            >
              {t("dictionary.trade_profit")}
            </Typography>
            <Typography
              sx={{
                fontWeight: "400",
                fontSize: "16px",
                lineHeight: "25px",
                color: "#181938",
                textAlign: "center",
              }}
            >
              {t(
                "dictionary.robot_trades_follow_transactions_personal_account_earn"
              )}
            </Typography>
          </Styled.BotTrainingStepCard>
        </Styled.BotTrainingStepsWrapper>
        <Button
          sx={{ marginTop: "55px" }}
          startIcon={<PersonOutlineIcon />}
          variant="contained"
          size="large"
        >
          {t("dictionary.create_account")}
        </Button>
      </Styled.BotTrainingWrapper>
      <Styled.LKInformationWrapper>
        <Styled.RobotInformationBlock>
          <Typography
            sx={{
              fontWeight: "800",
              fontSize: "70px",
              lineHeight: "80px",
            }}
          >
            {t(
              "dictionary.keep_track_transactions_convenient_personal_account"
            )}
          </Typography>
          <Typography
            sx={{
              fontWeight: "400",
              fontSize: "28px",
              lineHeight: "40px",
              margin: "25px 0 0 0",
            }}
          >
            {t("dictionary.follow_full_statistics_trading_device_wherever")}
          </Typography>
        </Styled.RobotInformationBlock>
        <Styled.RobotImage src={lkScreen} alt="lkScreen" />
      </Styled.LKInformationWrapper>
      <Styled.GoalsWrapper>
        <Typography
          sx={{
            fontWeight: "800",
            fontSize: "54px",
            lineHeight: "60px",
            color: "#181938",
          }}
        >
          {t("dictionary.your_goal_profit_will_help_this")}
        </Typography>
        <Styled.GoalsRealisedBlock>
          <Styled.GoalsRealisedCard>
            <Styled.IncomeCardIcon>
              <AlgoritmIcon />
            </Styled.IncomeCardIcon>
            <Typography
              sx={{
                margin: "15px 0 20px 0",
                fontWeight: "700",
                fontSize: "24px",
                lineHeight: "30px",
                color: "#181938",
                textAlign: "center",
              }}
            >
              {t("dictionary.smart_trading_algorithm")}
            </Typography>
            <Typography
              sx={{
                fontWeight: "400",
                fontSize: "16px",
                lineHeight: "25px",
                color: "#181938",
                textAlign: "center",
              }}
            >
              {t(
                "dictionary.combined_trading_strategies_trading_combined_together_efficiency_strategy"
              )}
            </Typography>
          </Styled.GoalsRealisedCard>
          <Styled.GoalsRealisedCard>
            <Styled.IncomeCardIcon>
              <MoneyIcon />
            </Styled.IncomeCardIcon>
            <Typography
              sx={{
                margin: "15px 0 20px 0",
                fontWeight: "700",
                fontSize: "24px",
                lineHeight: "30px",
                color: "#181938",
                textAlign: "center",
              }}
            >
              {t("dictionary.unlimited_list_coins")}
            </Typography>
            <Typography
              sx={{
                fontWeight: "400",
                fontSize: "16px",
                lineHeight: "25px",
                color: "#181938",
                textAlign: "center",
              }}
            >
              {t(
                "dictionary.robot_simultaneously_unlimited_automatically_trading_pairs"
              )}
            </Typography>
          </Styled.GoalsRealisedCard>
          <Styled.GoalsRealisedCard>
            <Styled.IncomeCardIcon>
              <LotSettingsIcon />
            </Styled.IncomeCardIcon>
            <Typography
              sx={{
                margin: "15px 0 20px 0",
                fontWeight: "700",
                fontSize: "24px",
                lineHeight: "30px",
                color: "#181938",
                textAlign: "center",
              }}
            >
              {t("dictionary.large_selection_settings")}
            </Typography>
            <Typography
              sx={{
                fontWeight: "400",
                fontSize: "16px",
                lineHeight: "25px",
                color: "#181938",
                textAlign: "center",
              }}
            >
              {t(
                "dictionary.capabilities_control_panel_trading_settings_effectively_individually_robot_improve_trading"
              )}
            </Typography>
          </Styled.GoalsRealisedCard>
        </Styled.GoalsRealisedBlock>
        <Styled.GoalsFutureBlock>
          <Styled.GoalsFutureCard>
            <Styled.FutureCardIcon>
              <Styled.GoalsCheckFutureSpanBlock>
                <Styled.GoalsCheckFutureSpan>Скоро</Styled.GoalsCheckFutureSpan>
              </Styled.GoalsCheckFutureSpanBlock>
              <TelegrammBotIcon />
            </Styled.FutureCardIcon>
            <Typography
              sx={{
                margin: "15px 0 20px 0",
                fontWeight: "700",
                fontSize: "24px",
                lineHeight: "30px",
                color: "#181938",
                textAlign: "center",
              }}
            >
              {t("dictionary.telegram_bot")}
            </Typography>
            <Typography
              sx={{
                fontWeight: "400",
                fontSize: "16px",
                lineHeight: "25px",
                color: "#181938",
                textAlign: "center",
              }}
            >
              {t("dictionary.connect_telegram_account_notify_transactions")}
            </Typography>
          </Styled.GoalsFutureCard>
          <Styled.GoalsFutureCard>
            <Styled.FutureCardIcon>
              <Styled.GoalsCheckFutureSpanBlock>
                <Styled.GoalsCheckFutureSpan>Скоро</Styled.GoalsCheckFutureSpan>
              </Styled.GoalsCheckFutureSpanBlock>
              <SimulateIcon />
            </Styled.FutureCardIcon>
            <Typography
              sx={{
                margin: "15px 0 20px 0",
                fontWeight: "700",
                fontSize: "24px",
                lineHeight: "30px",
                color: "#181938",
                textAlign: "center",
              }}
            >
              {t("dictionary.simulation_mode")}
            </Typography>
            <Typography
              sx={{
                fontWeight: "400",
                fontSize: "16px",
                lineHeight: "25px",
                color: "#181938",
                textAlign: "center",
              }}
            >
              {t(
                "dictionary.personal_account_simulation_mode_deposit_traded_period_yoko_robot"
              )}
            </Typography>
          </Styled.GoalsFutureCard>
        </Styled.GoalsFutureBlock>
        <Button
          sx={{ marginTop: "55px" }}
          startIcon={<RocketLaunchIcon />}
          variant="contained"
        >
          {t("dictionary.start_trading")}
        </Button>
      </Styled.GoalsWrapper>
      <Styled.ReferralWrapper>
        <Styled.ReferralInformationBlock>
          <Typography
            sx={{
              fontWeight: "800",
              fontSize: "54px",
              lineHeight: "60px",
              color: "#181938",
            }}
          >
            {t("dictionary.referral_program")}
          </Typography>
          <Typography
            sx={{
              margin: "25px 0 25px 0",
              fontWeight: "400",
              fontSize: "24px",
              lineHeight: "36px",
              color: "#9298B8",
            }}
          >
            {t("dictionary.invite_friends_earn")}
          </Typography>
          <Typography
            sx={{
              fontWeight: "400",
              fontSize: "16px",
              lineHeight: "25px",
              color: "#181938",
            }}
          >
            {t(
              "dictionary.affiliate_program_profit_commission_withdraws_percentage_referral_crypto_profit_commission_withdraws_referral_wallet"
            )}
          </Typography>
          <Button
            sx={{ marginTop: "25px" }}
            startIcon={<PeopleAltIcon />}
            variant="contained"
          >
            {t("dictionary.become_referral")}
          </Button>
        </Styled.ReferralInformationBlock>
        <Styled.RobotImage src={yokoTradePolitic} alt="yokoTradePolitic" />
      </Styled.ReferralWrapper>
      <Styled.AboutWrapper>
        <Styled.AboutReviewsBlock>
          <Typography
            sx={{
              fontWeight: "800",
              fontSize: "54px",
              lineHeight: "60px",
              color: "#181938",
            }}
          >
            {t("dictionary.clients_choose_us")}
          </Typography>
          <Styled.AboutReviewsCardsBlock>
            <Styled.AboutReviewsCardBlock>
              <Styled.AboutReviewsCardAvatar
                src={userAvatarFix}
                alt="userAvatarFix"
              />
              <Typography
                sx={{
                  fontWeight: "400",
                  fontSize: "16px",
                  lineHeight: "25px",
                  color: "#5E658D",
                }}
              >
                {t("dictionary.example_riviews")}
              </Typography>
            </Styled.AboutReviewsCardBlock>
            <Styled.AboutReviewsCardBlock>
              <Styled.AboutReviewsCardAvatar
                src={userAvatarFix}
                alt="userAvatarFix"
              />
              <Typography
                sx={{
                  fontWeight: "400",
                  fontSize: "16px",
                  lineHeight: "25px",
                  color: "#5E658D",
                }}
              >
                {t("dictionary.example_riviews")}
              </Typography>
            </Styled.AboutReviewsCardBlock>
          </Styled.AboutReviewsCardsBlock>
          <Typography
            sx={{
              marginTop: "15%",
              fontWeight: "800",
              fontSize: "54px",
              lineHeight: "60px",
              color: "#181938",
            }}
          >
            {t("dictionary.follow_our_blog")}
          </Typography>
        </Styled.AboutReviewsBlock>
        <Styled.AboutNotesCardsBlock>
          <Styled.AboutNotesCardBlock>
            <Styled.AboutNotesCardImage src={notesFix} alt="notesFix" />
            <Typography
              sx={{
                marginTop: "20px",
                fontWeight: "700",
                fontSize: "24px",
                lineHeight: "30px",
                color: "#181938",
              }}
            >
              {t("dictionary.best_cryptocurrency_trading")}
            </Typography>
            <Typography
              sx={{
                marginTop: "10px",
                fontWeight: "400",
                fontSize: "16px",
                lineHeight: "25px",
                color: "#181938",
              }}
            >
              {t(
                "cryptocurrency_changing_market _change_ratings_changes _version_article"
              )}
            </Typography>
          </Styled.AboutNotesCardBlock>
          <Styled.AboutNotesCardBlock>
            <Styled.AboutNotesCardImage src={notesFix} alt="notesFix" />
            <Typography
              sx={{
                marginTop: "20px",
                fontWeight: "700",
                fontSize: "24px",
                lineHeight: "30px",
                color: "#181938",
              }}
            >
              {t("dictionary.best_cryptocurrency_trading")}
            </Typography>
            <Typography
              sx={{
                marginTop: "10px",
                fontWeight: "400",
                fontSize: "16px",
                lineHeight: "25px",
                color: "#181938",
              }}
            >
              {t(
                "cryptocurrency_changing_market _change_ratings_changes _version_article"
              )}
            </Typography>
          </Styled.AboutNotesCardBlock>
          <Styled.AboutNotesCardBlock>
            <Styled.AboutNotesCardImage src={notesFix} alt="notesFix" />
            <Typography
              sx={{
                marginTop: "20px",
                fontWeight: "700",
                fontSize: "24px",
                lineHeight: "30px",
                color: "#181938",
              }}
            >
              {t("dictionary.best_cryptocurrency_trading")}
            </Typography>
            <Typography
              sx={{
                marginTop: "10px",
                fontWeight: "400",
                fontSize: "16px",
                lineHeight: "25px",
                color: "#181938",
              }}
            >
              {t(
                "cryptocurrency_changing_market _change_ratings_changes _version_article"
              )}
            </Typography>
          </Styled.AboutNotesCardBlock>
        </Styled.AboutNotesCardsBlock>
        <Styled.AboutImageBlock src={aboutDownPath} alt="aboutDownPath" />
      </Styled.AboutWrapper>
    </Styled.MainLendingWrapper>
  );
};
