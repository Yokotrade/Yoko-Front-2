import { useTranslation } from "react-i18next";
import { useAppDispatch } from "store/hook";
import { activeModal } from "store/Modals";
import * as Styled from "./GeneralLending.styled";

import RobotBgPath from "./assets/img/bg/robot.svg";
import RobotTabletBgPath from "./assets/img/bg/robot-tablet.svg";
import IncomImagePath from "./assets/img/main/income.svg";
import IncomTabletImagePath from "./assets/img/main/income-tablet.svg";
import PhoneImagePath from "./assets/img/main/phone.svg";
import DeskImagePath from "./assets/img/main/desk.svg";
import RuporImagePath from "./assets/img/main/rupor.svg";
import GirlImagePath from "./assets/img/main/girl.svg";
import NewRobotImagePath from "./assets/img/main/newrobot.svg";

import LoopIcon from "./assets/icons/violet/loop.svg";
import CompIcon from "./assets/icons/violet/comp.svg";
import ClockIcon from "./assets/icons/violet/clock.svg";
import ProtectIcon from "./assets/icons/violet/protect.svg";
import CalandarIcon from "./assets/icons/signs/Calandar.svg";
import ArrowChevronForward2Icon from "./assets/icons/signs/ArrowChevronForward-2.svg";
import ArrowChevronForwardIcon from "./assets/icons/signs/ArrowChevronForward.svg";
import "./assets/css/blocks/header.css";
import "./assets/css/blocks/block_image.css";
import "./assets/css/blocks/buttons.css";
import "./assets/css/blocks/headers.css";
import "./assets/css/blocks/block_item.css";
import "./assets/css/blocks/footer.css";
import "./assets/css/blocks/overlay.css";
import "./assets/css/blocks/trial.css";
import "./assets/css/blocks/income.css";
import "./assets/css/blocks/transaction.css";
import "./assets/css/blocks/connect.css";
import "./assets/css/blocks/watch.css";
import "./assets/css/blocks/desk.css";
import "./assets/css/blocks/target.css";
import "./assets/css/blocks/referal.css";
import "./assets/css/blocks/choice.css";
import "./assets/css/blocks/blog.css";
import "./assets/css/blocks/enter.css";
import "./assets/css/blocks/hamburger.css";
import "./assets/css/style.css";

const GeneralLending = (): JSX.Element => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const handleOpenAuthModal = () => {
    dispatch(activeModal("auth"));
  };
  return (
    <Styled.MainLendingWrapper>
      <section className="trial">
        <div className="container">
          <div className="trial__wrapper">
            <div className="trial__description">
              <h1 className="main-header trial__description_title">
                {t("dictionary.cryptocurrency_trading_robot")}
              </h1>
              <div className="main-subheader trial__description_subtitle">
                {t(
                  "dictionary.beginners_ordinary_people_professionals_traders"
                )}
              </div>
              <div
                onClick={() => handleOpenAuthModal()}
                className="button trial__description_button"
              >
                {t("dictionary.start_trial")}
              </div>
            </div>
            <div className="trial__description-robot">
              <img className="full-screen" src={RobotBgPath} alt="robot" />
              <img
                src={RobotTabletBgPath}
                alt="robot"
                className="tablet-screen"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="income">
        <div className="container">
          <div className="income__wrapper">
            <h2 className="section-header income__header">
              {t("dictionary.create_passive_income_cryptocurrency")}
            </h2>
            <div className="section-subheader income_subtitle">
              {t("dictionary.mind_business_smart_yoko_robot_everything_you")}
            </div>
            <div className="income__info-block">
              <div className="income__info-block_item block_item">
                <div className="income__info-block_image block_item_image">
                  <img src={LoopIcon} alt="loop" />
                </div>
                <div className="income__info-block_item-description">
                  <div className="income__info-block_title block_item_title">
                    {t("dictionary.coin_analysis")}
                  </div>
                  <div className="income__info-block_description block_item_description">
                    {t(
                      "dictionary.robot_nalyzes_charts_selects_successful_coins_trading"
                    )}
                  </div>
                </div>
              </div>
              <div className="income__info-block_item block_item">
                <div className="income__info-block_image block_item_image">
                  <img src={CompIcon} alt="comp" />
                </div>
                <div className="income__info-block_item-description">
                  <div className="income__info-block_title block_item_title">
                    {t("dictionary.buying_selling")}
                  </div>
                  <div className="income__info-block_description block_item_description">
                    {t("dictionary.knows_buy_sell_closes_profitable_trades")}
                  </div>
                </div>
              </div>
              <div className="income__info-block_item block_item">
                <div className="income__info-block_image block_item_image">
                  <img src={ClockIcon} alt="clock" />
                </div>
                <div className="income__info-block_item-description">
                  <div className="income__info-block_title block_item_title">
                    {t("dictionary.works_24_7")}
                  </div>
                  <div className="income__info-block_description block_item_description">
                    {t(
                      "dictionary.robot_not_need_sleep_works_monitors_situation_breaks_days_while_rest"
                    )}
                  </div>
                </div>
              </div>
              <div className="income__info-block_item block_item">
                <div className="income__info-block_image block_item_image">
                  <img src={ProtectIcon} alt="protect" />
                </div>
                <div className="income__info-block_item-description">
                  <div className="income__info-block_title block_item_title">
                    {t("dictionary.safely")}
                  </div>
                  <div className="income__info-block_description block_item_description">
                    {t(
                      "dictionary.your_money_your_money_your_stored_exchange_have_access_them_robot_cannot_deposit_withdraw_money_open_close_trades"
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div
              onClick={() => handleOpenAuthModal()}
              className="button income_button"
            >
              {t("dictionary.create_passive_income")}
            </div>
          </div>
          <div className="income__exchange-block">
            <div className="income__exchange-block_description">
              <h2 className="section-header exchange-block_header">
                {t("dictionary.we_work_largest_exchanges")}
              </h2>
              <div className="section-subheader exchange-block_subheader">
                Binance, Huobi, OKX, ByBit
              </div>
            </div>
            <div className="income__exchange-block_image">
              <img
                className="full-screen income-full-screen"
                src={IncomImagePath}
                alt="income"
              />
              <img
                src={IncomTabletImagePath}
                alt="income"
                className="tablet-screen income-tablet"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="transaction">
        <div className="container">
          <div className="connect__wrapper">
            <div className="block_image transaction-block__image">
              <img
                src={PhoneImagePath}
                alt="phone"
                className="transaction-image"
              />
            </div>
            <div className="connect__block_description">
              <h2 className="section-header connect__block_header">
                {t("dictionary.we_want_you_earn")}
              </h2>
              <div className="section-subheader connect__block_subheader">
                {t(
                  "dictionary.we_connect_robot_absolutely_charge_subscription_fees"
                )}
              </div>
              <div className="connect__block_point">
                *{" "}
                {t(
                  "dictionary.percentage_profit_calculated_size_deposit_trading_period"
                )}
              </div>
              <div
                onClick={() => handleOpenAuthModal()}
                className="button connect__block_button"
              >
                {t("dictionary.connect_robot")}
              </div>
            </div>
          </div>
        </div>

        <div className="container transaction-container">
          <div className="transaction__wrapper">
            <h2 className="section-header transaction_header">
              {t("dictionary.last_closed_deals_Yoko_robot")}
            </h2>
            <div className="section-subheader transaction_subheader">
              {t("dictionary.keep_track_latest_robot_trades")}
            </div>
            <div className="transaction__carousel_wrapper">
              <div className="transaction__carousel-left-arrow">
                <img src={ArrowChevronForward2Icon} alt="left" />
              </div>
              <div className="transaction__carousel-content">
                <div className="transaction__carousel_item block_item off-tablet-1400">
                  <div className="transaction__carousel_title block_item_title">
                    +11 USDT
                  </div>
                  <div className="transaction__carousel_exhange">BTC/USDT</div>
                  <div className="transaction__carousel_date-block">
                    <div className="date__block_calendar">
                      <img src={CalandarIcon} alt="calendar" />
                    </div>
                    <div className="date__block_date-wrapper">
                      <div className="date__block_title">
                        {" "}
                        {t("dictionary.income_received")}
                      </div>
                      <div className="date__block_date">13:24 21.03.2022</div>
                    </div>
                  </div>
                </div>
                <div className="transaction__carousel_item block_item off-screen-1700">
                  <div className="transaction__carousel_title block_item_title">
                    +38 USDT
                  </div>
                  <div className="transaction__carousel_exhange">BTC/USDT</div>
                  <div className="transaction__carousel_date-block">
                    <div className="date__block_calendar">
                      <img src={CalandarIcon} alt="calendar" />
                    </div>
                    <div className="date__block_date-wrapper">
                      <div className="date__block_title">
                        {t("dictionary.income_received")}
                      </div>
                      <div className="date__block_date">13:24 21.03.2022</div>
                    </div>
                  </div>
                </div>
                <div className="transaction__carousel_item block_item">
                  <div className="transaction__carousel_title block_item_title">
                    +0,98 USDT
                  </div>
                  <div className="transaction__carousel_exhange">BTC/USDT</div>
                  <div className="transaction__carousel_date-block">
                    <div className="date__block_calendar">
                      <img src={CalandarIcon} alt="calendar" />
                    </div>
                    <div className="date__block_date-wrapper">
                      <div className="date__block_title">
                        {t("dictionary.income_received")}
                      </div>
                      <div className="date__block_date">13:24 21.03.2022</div>
                    </div>
                  </div>
                </div>
                <div className="transaction__carousel_item block_item">
                  <div className="transaction__carousel_title block_item_title">
                    +7 USDT
                  </div>
                  <div className="transaction__carousel_exhange">BTC/USDT</div>
                  <div className="transaction__carousel_date-block">
                    <div className="date__block_calendar">
                      <img src={CalandarIcon} alt="calendar" />
                    </div>
                    <div className="date__block_date-wrapper">
                      <div className="date__block_title">
                        {t("dictionary.income_received")}
                      </div>
                      <div className="date__block_date">13:24 21.03.2022</div>
                    </div>
                  </div>
                </div>
                <div className="transaction__carousel_item block_item">
                  <div className="transaction__carousel_title block_item_title">
                    +14,22 USDT
                  </div>
                  <div className="transaction__carousel_exhange">BTC/USDT</div>
                  <div className="transaction__carousel_date-block">
                    <div className="date__block_calendar">
                      <img src={CalandarIcon} alt="calendar" />
                    </div>
                    <div className="date__block_date-wrapper">
                      <div className="date__block_title">
                        {t("dictionary.income_received")}
                      </div>
                      <div className="date__block_date">13:24 21.03.2022</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="transaction__carousel-right-arrow">
                <img src={ArrowChevronForwardIcon} alt="right" />
              </div>
              <div className="mobile-dots"></div>
            </div>
            <div
              onClick={() => handleOpenAuthModal()}
              className="button transaction__block_button"
            >
              {t("dictionary.update_latest_deals")}
            </div>
          </div>
        </div>
      </section>
      <section className="watch">
        <div className="container watch-container">
          <div className="watch__wrapper">
            <h2 className="section-header watch__header">
              {t("dictionary.cryptocurrencies_hard")}
              <br />
              {t("dictionary.nose")}
              <span className="watch__header_span">
                {t("dictionary.Yoko_botom")}
              </span>
              {t("dictionary.everything_become_simple_understandable")}
            </h2>
            <div className="section-subheader">
              {t("dictionary.connect_robot_easy_steps")}
            </div>
            <div className="watch__subscription-block_wrapper">
              <div className="block_item subscription-block__item">
                <div className="subscription-block__item_image">
                  <div className="subscription-block__item-circle reg">
                    <div className="subscription-block__item-num">1</div>
                  </div>
                </div>
                <div className="watch__subscription-block_column">
                  <div className="block_item_title watch___item_title">
                    {t("register.title")}
                  </div>

                  <div className="block_item_description watch___item_description">
                    {t("dictionary.register_website_get_personal_account")}
                  </div>
                </div>
              </div>
              <div className="block_item subscription-block__item">
                <div className="subscription-block__item_image">
                  <div className="subscription-block__item-circle account">
                    <div className="subscription-block__item-num">2</div>
                  </div>
                </div>
                <div className="watch__subscription-block_column">
                  <div className="block_item_title watch___item_title">
                    {t("dictionary.exchange_account")}
                  </div>
                  <div className="block_item_description watch___item_description">
                    {t("dictionary.account_exchange_register_referral_bonus")}
                  </div>
                </div>
              </div>
              <div className="block_item subscription-block__item">
                <div className="subscription-block__item_image">
                  <div className="subscription-block__item-circle robo">
                    <div className="subscription-block__item-num">3</div>
                  </div>
                </div>
                <div className="watch__subscription-block_column">
                  <div className="block_item_title watch___item_title">
                    {t("dictionary.connect_robot")}
                  </div>

                  <div className="block_item_description watch___item_description">
                    {t(
                      "dictionary.receive_detailed_instructions_connecting_robot_account_exchange"
                    )}
                  </div>
                </div>
              </div>
              <div className="block_item subscription-block__item">
                <div className="subscription-block__item_image">
                  <div className="subscription-block__item-circle money">
                    <div className="subscription-block__item-num">4</div>
                  </div>
                </div>
                <div className="watch__subscription-block_column">
                  <div className="block_item_title watch___item_title">
                    {t("dictionary.trade_profit")}
                  </div>
                  <div className="block_item_description watch___item_description">
                    {t(
                      "dictionary.robot_trades_follow_transactions_personal_account_earn"
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div
              onClick={() => handleOpenAuthModal()}
              className="button watch_button"
            >
              {t("dictionary.create_account")}
            </div>
          </div>

          <div className="desk">
            <div className="desk__block">
              <h2 className="section-header desk__block_header">
                {t(
                  "dictionary.keep_track_transactions_convenient_personal_account"
                )}
              </h2>
              <div className="section-subheader color-blk desk__block-subheader">
                {t("dictionary.follow_full_statistics_trading_device_wherever")}
              </div>
            </div>
            <div className="block_image watch-image desk_image-block">
              <img src={DeskImagePath} alt="desk" />
            </div>
          </div>
        </div>
      </section>
      <section className="target">
        <div className="container">
          <div className="target__wrapper">
            <h2 className="section-header target__header">
              {t("dictionary.your_goal_profit_will_help_this")}
            </h2>
            <div className="target__up-blocks">
              <div className="block_item target__block">
                <div className="block_item_image target__image brain"></div>
                <div className="block_item-texts terget-item-texts">
                  <div className="block_item_title target__block_header">
                    {t("dictionary.smart_trading_algorithm")}
                  </div>
                  <div className="block_item_description target_item_description">
                    {t(
                      "dictionary.combined_trading_strategies_trading_combined_together_efficiency_strategy"
                    )}
                    <br />
                    <div
                      onClick={() => handleOpenAuthModal()}
                      className="target__link"
                    >
                      {t("dictionary.learn_more_strategy")}
                    </div>
                  </div>
                </div>
              </div>

              <div className="block_item target__block">
                <div className="block_item_image target__image coins"></div>
                <div className="block_item-texts terget-item-texts">
                  <div className="block_item_title target__block_header">
                    {t("dictionary.unlimited_list_coins")}
                  </div>
                  <div className="block_item_description target_item_description">
                    {t(
                      "dictionary.robot_simultaneously_unlimited_automatically_trading_pairs"
                    )}
                  </div>
                </div>
              </div>
              <div className="block_item target__block">
                <div className="block_item_image target__image mech"></div>
                <div className="block_item-texts terget-item-texts">
                  <div className="block_item_title target__block_header">
                    {t("dictionary.large_selection_settings")}
                  </div>
                  <div className="block_item_description target_item_description">
                    {t(
                      "dictionary.capabilities_control_panel_trading_settings_effectively_individually_robot_improve_trading"
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="target__down-blocks">
              <div className="block_item target__down-block">
                <div className="block_item_image target__image super-bot">
                  <div className="targer__image_green-block">
                    {t("dictionary.soon")}
                  </div>
                </div>
                <div className="block_item-texts terget-item-texts">
                  <div className="block_item_title target__block_header">
                    {t("dictionary.telegram_bot")}
                  </div>
                  <div className="block_item_description target_item_description">
                    {t(
                      "dictionary.connect_telegram_account_notify_transactions"
                    )}
                  </div>
                </div>
              </div>
              <div className="block_item target__down-block">
                <div className="block_item_image target__image degree">
                  <div className="targer__image_green-block">
                    {t("dictionary.soon")}
                  </div>
                </div>
                <div className="block_item-texts terget-item-texts">
                  <div className="block_item_title target__block_header">
                    {t("dictionary.simulation_mode")}
                  </div>
                  <div className="block_item_description target_item_description target__block-descr">
                    {t(
                      "dictionary.personal_account_simulation_mode_deposit_traded_period_yoko_robot"
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="button target__button">
              {t("dictionary.start_trading")}
            </div>
          </div>
          <div className="referal">
            <div className="referal__block">
              <h2 className="section-header referal-header">
                {t("dictionary.referral_program")}
              </h2>
              <div className="section-subheader">
                {t("dictionary.invite_friends_earn")}
              </div>
              <div className="block_item_description referal__desscription">
                {t(
                  "dictionary.affiliate_program_profit_commission_withdraws_percentage_referral_crypto_profit_commission_withdraws_referral_wallet"
                )}
              </div>
              <div className="button referal__button">
                {t("dictionary.become_referral")}
              </div>
            </div>
            <div className="block_image referal-block__image">
              <img
                src={RuporImagePath}
                alt="rupor"
                className="referal__image"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="choice">
        <div className="container choice__container">
          <div className="choice__wrapper">
            <h2 className="section-header chioce__header">
              {t("dictionary.clients_choose_us")}
            </h2>
            <div className="choice__carousel_wrapper">
              <div className="transaction__carousel-left-arrow choice__arrow">
                <img src={ArrowChevronForward2Icon} alt="left" />
              </div>
              <div className="choice__carousel_items">
                <div className="choice__carousel_item">
                  <div className="choice__image">
                    <img src={GirlImagePath} alt="image" />
                  </div>
                  <div className="choice__description">
                    <i>{t("dictionary.example_riviews")}</i>
                  </div>
                </div>
                <div className="choice__carousel_item">
                  <div className="choice__image">
                    <img src={GirlImagePath} alt="image" />
                  </div>
                  <div className="choice__description">
                    <i>{t("dictionary.example_riviews")}</i>
                  </div>
                </div>
              </div>

              <div className="transaction__carousel-right-arrow choice__arrow">
                <img src={ArrowChevronForwardIcon} alt="right" />
              </div>
              <div className="mobile-dots"></div>
            </div>
            <div className="blog">
              <h2 className="section-header chioce__header">
                {t("dictionary.follow_our_blog")}
              </h2>
              <div className="blog__carousel_wrapper">
                <div className="transaction__carousel-left-arrow blog__arrow">
                  <img src={ArrowChevronForward2Icon} alt="left" />
                </div>
                <div className="blog__items">
                  <div className="block_item blog__item">
                    <div className="block_item_image">
                      <img src={NewRobotImagePath} alt="robot" />
                    </div>
                    <div className="block_item_title blog__item-title">
                      {t("dictionary.best_cryptocurrency_trading")}
                    </div>
                    <div className="block_item_description">
                      {t(
                        "dictionary.cryptocurrency_changing_market_change_ratings_changes_version_article"
                      )}
                    </div>
                    <div className="blog__button">
                      {t("dictionary.more_detailed")}
                    </div>
                  </div>
                  <div className="block_item blog__item">
                    <div className="block_item_image">
                      <img src={NewRobotImagePath} alt="robot" />
                    </div>
                    <div className="block_item_title blog__item-title">
                      {t("dictionary.best_cryptocurrency_trading")}2
                    </div>
                    <div className="block_item_description">
                      {t(
                        "dictionary.cryptocurrency_changing_market_change_ratings_changes_version_article"
                      )}
                    </div>
                    <div className="blog__button">
                      {t("dictionary.more_detailed")}
                    </div>
                  </div>
                  <div className="block_item blog__item">
                    <div className="block_item_image">
                      <img src={NewRobotImagePath} alt="robot" />
                    </div>
                    <div className="block_item_title blog__item-title">
                      {t("dictionary.best_cryptocurrency_trading")}
                    </div>
                    <div className="block_item_description">
                      {t(
                        "dictionary.cryptocurrency_changing_market_change_ratings_changes_version_article"
                      )}
                    </div>
                    <div className="blog__button">
                      {t("dictionary.more_detailed")}
                    </div>
                  </div>
                </div>

                <div className="transaction__carousel-right-arrow blog__arrow">
                  <img src={ArrowChevronForwardIcon} alt="left" />
                </div>
                <div className="mobile-dots"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Styled.MainLendingWrapper>
  );
};

export default GeneralLending;
