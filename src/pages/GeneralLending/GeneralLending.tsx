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

import "./assets/css/style.css";
import "./assets/css/blocks/block_image.css";
import "./assets/css/blocks/block_item.css";
import "./assets/css/blocks/blog.css";
import "./assets/css/blocks/buttons.css";
import "./assets/css/blocks/choice.css";
import "./assets/css/blocks/connect.css";
import "./assets/css/blocks/desk.css";
import "./assets/css/blocks/enter.css";
import "./assets/css/blocks/footer.css";
import "./assets/css/blocks/hamburger.css";
import "./assets/css/blocks/header.css";
import "./assets/css/blocks/headers.css";
import "./assets/css/blocks/income.css";
import "./assets/css/blocks/overlay.css";
import "./assets/css/blocks/referal.css";
import "./assets/css/blocks/target.css";
import "./assets/css/blocks/transaction.css";
import "./assets/css/blocks/trial.css";
import "./assets/css/blocks/watch.css";

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
                Робот для торговли криптовалютами
              </h1>
              <div className="main-subheader trial__description_subtitle">
                Помогаем новичкам и простым людям{" "}
                <br className="trial-mobile-off" />
                зарабатывать, как профессиональные трейдеры
              </div>
              <div
                onClick={() => handleOpenAuthModal()}
                className="button trial__description_button"
              >
                Начать пробный период
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
              Создайте пасивный доход с криптовалюты
            </h2>
            <div className="section-subheader income_subtitle">
              Занимайтесь своими делами, умный Yoko робот все сделает за вас
            </div>
            <div className="income__info-block">
              <div className="income__info-block_item block_item">
                <div className="income__info-block_image block_item_image">
                  <img src={LoopIcon} alt="loop" />
                </div>
                <div className="income__info-block_item-description">
                  <div className="income__info-block_title block_item_title">
                    Анализ монет
                  </div>
                  <div className="income__info-block_description block_item_description">
                    Робот сам анализирует графики и выбирает успешные монеты для
                    торговли.
                  </div>
                </div>
              </div>
              <div className="income__info-block_item block_item">
                <div className="income__info-block_image block_item_image">
                  <img src={CompIcon} alt="comp" />
                </div>
                <div className="income__info-block_item-description">
                  <div className="income__info-block_title block_item_title">
                    Покупка и продажа
                  </div>
                  <div className="income__info-block_description block_item_description">
                    Сам знает в каком месте покупать и продавать. Закрывает
                    только прибыльные сделки.
                  </div>
                </div>
              </div>
              <div className="income__info-block_item block_item">
                <div className="income__info-block_image block_item_image">
                  <img src={ClockIcon} alt="clock" />
                </div>
                <div className="income__info-block_item-description">
                  <div className="income__info-block_title block_item_title">
                    Работает 24/7
                  </div>
                  <div className="income__info-block_description block_item_description">
                    Роботу не нужен сон или отдых, он работает и следит за
                    ситуацией на рынке без перерывов и выходных, пока вы
                    отдыхаете
                  </div>
                </div>
              </div>
              <div className="income__info-block_item block_item">
                <div className="income__info-block_image block_item_image">
                  <img src={ProtectIcon} alt="protect" />
                </div>
                <div className="income__info-block_item-description">
                  <div className="income__info-block_title block_item_title">
                    Безопасно
                  </div>
                  <div className="income__info-block_description block_item_description">
                    Ваши деньги - это только Ваши деньги! Ваши средства
                    храняться на бирже и только у вас есть к ним доступ. Робот
                    не может вводить или вывожить деньги, он может только
                    открываться и закрывать торговые сделки.
                  </div>
                </div>
              </div>
            </div>
            <div
              onClick={() => handleOpenAuthModal()}
              className="button income_button"
            >
              Создать пасивный доход
            </div>
          </div>
          <div className="income__exchange-block">
            <div className="income__exchange-block_description">
              <h2 className="section-header exchange-block_header">
                Работаем с самыми крупными биржами
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
                Нам выгодно, чтобы вы зарабатывали!
              </h2>
              <div className="section-subheader connect__block_subheader">
                Мы подключаем робота абсолютно бесплатно. Никакой абонентской
                платы. Мы берем только % с вашей прибыли, заработанной при
                торговле с нашим Yoko роботом. При первом подключении процент на
                прибыль будет рассчитываться после пробного периода, поэтому у
                вас есть целых 14 дней, чтобы полностью бесплатно протестировать
                Yoko робота. Далее вам нужно будет оплачивать только процент с
                заработанной прибыли. Наша прибыль зависит от вашей.
              </div>
              <div className="connect__block_point">
                * размер процента на прибыль рассчитывается исходя из размера
                вашего депозита и срока торговли, подробнее указано в личном
                кабинете
              </div>
              <div
                onClick={() => handleOpenAuthModal()}
                className="button connect__block_button"
              >
                Подключить робота
              </div>
            </div>
          </div>
        </div>

        <div className="container transaction-container">
          <div className="transaction__wrapper">
            <h2 className="section-header transaction_header">
              Последние закрытые сделки Yoko роботом
            </h2>
            <div className="section-subheader transaction_subheader">
              Следите за самыми последними сделками робота
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
                      <div className="date__block_title">Доход получен</div>
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
                      <div className="date__block_title">Доход получен</div>
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
                      <div className="date__block_title">Доход получен</div>
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
                      <div className="date__block_title">Доход получен</div>
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
                      <div className="date__block_title">Доход получен</div>
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
              Обновить последние сделки
            </div>
          </div>
        </div>
      </section>
      <section className="watch">
        <div className="container watch-container">
          <div className="watch__wrapper">
            <h2 className="section-header watch__header">
              Криптовалюты это сложно,
              <br />
              но с<span className="watch__header_span"> Yoko ботом</span> все
              станет простым и понятным
            </h2>
            <div className="section-subheader">
              Подключите робота в 4 простых шага
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
                    Регистрация
                  </div>

                  <div className="block_item_description watch___item_description">
                    Пройдите регистрацию на нашем сайте и получите личный
                    кабинет
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
                    Аккаунт на бирже
                  </div>
                  <div className="block_item_description watch___item_description">
                    Если у вас ещё нет аккаунта на бирже, вы можете
                    зарегестрировать его по нашей реферальной ссылке и получить
                    бонуст
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
                    Подключить робота
                  </div>

                  <div className="block_item_description watch___item_description">
                    Вы получите подробную инструкцию по подключению робота к
                    вашему аккаунту на бирже
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
                    Торгуйте и получайте прибыль
                  </div>
                  <div className="block_item_description watch___item_description">
                    Теперь робот торгует, а вы следите за сделками в личном
                    кабинете и зарабатываете
                  </div>
                </div>
              </div>
            </div>
            <div
              onClick={() => handleOpenAuthModal()}
              className="button watch_button"
            >
              Создать аккаунт
            </div>
          </div>

          <div className="desk">
            <div className="desk__block">
              <h2 className="section-header desk__block_header">
                Следите за своими сделками в удобном личном кабинете
              </h2>
              <div className="section-subheader color-blk desk__block-subheader">
                Следите за полной статистикой торговли с Yoko роботом с любого
                устройства и где бы вы не находились.
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
              Твоя цель - прибыль, а мы в этом поможем
            </h2>
            <div className="target__up-blocks">
              <div className="block_item target__block">
                <div className="block_item_image target__image brain"></div>
                <div className="block_item-texts terget-item-texts">
                  <div className="block_item_title target__block_header">
                    Умный торговый алгоритм
                  </div>
                  <div className="block_item_description target_item_description">
                    Мы объединили две лучшие торговые стратегии в одном. Умная
                    торговля по усреднениям в сочетании с лучшим на рынке
                    анализом пампа монет. Все это вместе позволяет торговать с
                    максимальной эффективностью.
                    <br />
                    <div
                      onClick={() => handleOpenAuthModal()}
                      className="target__link"
                    >
                      Изучить стратегию подробнее..
                    </div>
                  </div>
                </div>
              </div>

              <div className="block_item target__block">
                <div className="block_item_image target__image coins"></div>
                <div className="block_item-texts terget-item-texts">
                  <div className="block_item_title target__block_header">
                    Неограниченный список монет
                  </div>
                  <div className="block_item_description target_item_description">
                    Робот может торговать одновременно по неограниченному числу
                    монет и сам автоматически переключаться между торговыми
                    парами.
                  </div>
                </div>
              </div>
              <div className="block_item target__block">
                <div className="block_item_image target__image mech"></div>
                <div className="block_item-texts terget-item-texts">
                  <div className="block_item_title target__block_header">
                    Большой выбор настроек
                  </div>
                  <div className="block_item_description target_item_description">
                    Мы увеличили ваши возможности и добавили в панель управления
                    роботом больше 30 торговых настроек, что ползволит
                    эффективно торговать при любом поведении рынка. Так же мы
                    добавили готовые шаблоны настроек индивидуально под размер
                    вашего депозита. Настроивайте своего Yoko робота и улучшайте
                    свою торговлю.
                  </div>
                </div>
              </div>
            </div>
            <div className="target__down-blocks">
              <div className="block_item target__down-block">
                <div className="block_item_image target__image super-bot">
                  <div className="targer__image_green-block">Скоро</div>
                </div>
                <div className="block_item-texts terget-item-texts">
                  <div className="block_item_title target__block_header">
                    Telegram бот
                  </div>
                  <div className="block_item_description target_item_description">
                    Подключите телеграм бота к своему аккаунту, и он будет
                    оповещать вас каждый раз о новых сделках.
                  </div>
                </div>
              </div>
              <div className="block_item target__down-block">
                <div className="block_item_image target__image degree">
                  <div className="targer__image_green-block">Скоро</div>
                </div>
                <div className="block_item-texts terget-item-texts">
                  <div className="block_item_title target__block_header">
                    Режим симуляции
                  </div>
                  <div className="block_item_description target_item_description target__block-descr">
                    Теперь в личном кабинете вы можете включить режим симуляции
                    торговли и проверить, как торговал бы робот с вашим
                    депозитом последние 60 дней, и узнать сколько вы бы
                    заработали, если бы торговали этот период с Yoko роботом.
                  </div>
                </div>
              </div>
            </div>
            <div className="button target__button">Начать торговать</div>
          </div>
          <div className="referal">
            <div className="referal__block">
              <h2 className="section-header referal-header">
                Реферальная программа
              </h2>
              <div className="section-subheader">
                Приглашай друзей и зарабатывай
              </div>
              <div className="block_item_description referal__desscription">
                Присоединяйтесь к нашем партнерской программе и зарабатывайте
                30% с нашей комисси на прибыль за каждого привлеченного тобой
                пользователя. Быстро выводит ваш процент с каждого реферала на
                ваш криптокошелек.
              </div>
              <div className="button referal__button">Стать рефералом</div>
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
              Почему клиенты выбирают нас?
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
                    <i>
                      Внезапно, сделанные на базе интернет-аналитики выводы и по
                      сей день остаются уделом либералов, которые жаждут быть
                      объявлены нарушающими общечеловеческие нормы этики и
                      морали. Современные технологии достигли такого уровня, что
                      понимание сути ресурсосберегающих технологий создаёт
                      необходимость включения в производственный план целого
                      ряда внеочередных мероприятий.
                    </i>
                  </div>
                </div>
                <div className="choice__carousel_item">
                  <div className="choice__image">
                    <img src={GirlImagePath} alt="image" />
                  </div>
                  <div className="choice__description">
                    <i>
                      Внезапно, сделанные на базе интернет-аналитики выводы и по
                      сей день остаются уделом либералов, которые жаждут быть
                      объявлены нарушающими общечеловеческие нормы этики и
                      морали. Современные технологии достигли такого уровня, что
                      понимание сути ресурсосберегающих технологий создаёт
                      необходимость включения в производственный план целого
                      ряда внеочередных мероприятий.
                    </i>
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
                Следите за нашим блогом
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
                      The Best Cryptocurrency Trading Bots in 2022
                    </div>
                    <div className="block_item_description">
                      Cryptocurrency is a rapidly changing market – so
                      information about trading bots changes frequently. Prices
                      change, features are added, and ratings sway. There are
                      three main changes that we’ve made to this version of our
                      article:
                    </div>
                    <div className="blog__button">Подробнее</div>
                  </div>
                  <div className="block_item blog__item">
                    <div className="block_item_image">
                      <img src={NewRobotImagePath} alt="robot" />
                    </div>
                    <div className="block_item_title blog__item-title">
                      The Best Cryptocurrency Trading Bots in 2022
                    </div>
                    <div className="block_item_description">
                      Cryptocurrency is a rapidly changing market – so
                      information about trading bots changes frequently. Prices
                      change, features are added, and ratings sway. There are
                      three main changes that we’ve made to this version of our
                      article:
                    </div>
                    <div className="blog__button">Подробнее</div>
                  </div>
                  <div className="block_item blog__item">
                    <div className="block_item_image">
                      <img src={NewRobotImagePath} alt="robot" />
                    </div>
                    <div className="block_item_title blog__item-title">
                      The Best Cryptocurrency Trading Bots in 2022
                    </div>
                    <div className="block_item_description">
                      Cryptocurrency is a rapidly changing market – so
                      information about trading bots changes frequently. Prices
                      change, features are added, and ratings sway. There are
                      three main changes that we’ve made to this version of our
                      article:
                    </div>
                    <div className="blog__button">Подробнее</div>
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
      {/* <Styled.PassiveIncomeWrapper>
        <Styled.PassiveIncomeTitle>
          {t("dictionary.create_passive_income_cryptocurrency")}
        </Styled.PassiveIncomeTitle>
        <Styled.PassiveIncomeDescription>
          {t("dictionary.mind_business_smart_yoko_robot_everything_you")}
        </Styled.PassiveIncomeDescription>
        <Styled.PassiveIncomeCardsWrapper>
          <Styled.PassiveIncomeCard>
            <Styled.IncomeCardIcon>
              <MagnifierIcon />
            </Styled.IncomeCardIcon>
            <Styled.PassiveIncomeCardTitle>
              {t("dictionary.coin_analysis")}
            </Styled.PassiveIncomeCardTitle>
            <Styled.PassiveIncomeCardDescription>
              {t(
                "dictionary.robot_nalyzes_charts_selects_successful_coins_trading"
              )}
            </Styled.PassiveIncomeCardDescription>
          </Styled.PassiveIncomeCard>
          <Styled.PassiveIncomeCard>
            <Styled.IncomeCardIcon>
              <StatisticIcon />
            </Styled.IncomeCardIcon>
            <Styled.PassiveIncomeCardTitle>
              {t("dictionary.buying_selling")}
            </Styled.PassiveIncomeCardTitle>
            <Styled.PassiveIncomeCardDescription>
              {t("dictionary.knows_buy_sell_closes_profitable_trades")}
            </Styled.PassiveIncomeCardDescription>
          </Styled.PassiveIncomeCard>
          <Styled.PassiveIncomeCard>
            <Styled.IncomeCardIcon>
              <ClockIcon />
            </Styled.IncomeCardIcon>
            <Styled.PassiveIncomeCardTitle>
              {t("dictionary.works_24_7")}
            </Styled.PassiveIncomeCardTitle>
            <Styled.PassiveIncomeCardDescription>
              {t(
                "dictionary.robot_not_need_sleep_works_monitors_situation_breaks_days_while_rest"
              )}
            </Styled.PassiveIncomeCardDescription>
          </Styled.PassiveIncomeCard>
          <Styled.PassiveIncomeCard>
            <Styled.IncomeCardIcon>
              <ShildIcon />
            </Styled.IncomeCardIcon>
            <Styled.PassiveIncomeCardTitle>
              {t("dictionary.safely")}
            </Styled.PassiveIncomeCardTitle>
            <Styled.PassiveIncomeCardDescription>
              {t(
                "dictionary.your_money_your_money_your_stored_exchange_have_access_them_robot_cannot_deposit_withdraw_money_open_close_trades"
              )}
            </Styled.PassiveIncomeCardDescription>
          </Styled.PassiveIncomeCard>
        </Styled.PassiveIncomeCardsWrapper>
        <Button
          sx={{ zIndex: 100 }}
          startIcon={<AttachMoneyIcon />}
          variant="contained"
          onClick={() => handleOpenAuthModal()}
        >
          {t("dictionary.create_passive_income")}
        </Button>
      </Styled.PassiveIncomeWrapper>
      <Styled.JobsBlock>
        <Styled.JobsBlockImage
          src={waveBackgroundImagePath}
          alt="waveBackgroundImagePath"
        />
        <Styled.JobsInfomationWrapper>
          <Styled.JobsInfomationBlock>
            <Styled.JobsTitle>
              {t("dictionary.we_work_largest_exchanges")}
            </Styled.JobsTitle>
            <Styled.JobsDescription>
              Binance, Huobi, OKX, ByBit
            </Styled.JobsDescription>
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
            <Styled.JobsRobotDescriptionTitle>
              {t("dictionary.we_want_you_earn")}
            </Styled.JobsRobotDescriptionTitle>
            <Styled.JobsRobotDescriptionSubTitle>
              {t(
                "dictionary.we_connect_robot_absolutely_charge._subscription_fees"
              )}
            </Styled.JobsRobotDescriptionSubTitle>
            <Styled.JobsRobotDescriptionSpan>
              {t(
                "dictionary.percentage_profit_calculated_size_deposit_trading_period"
              )}
            </Styled.JobsRobotDescriptionSpan>
            <Button
              startIcon={<BotIcon />}
              variant="contained"
              onClick={() => handleOpenAuthModal()}
            >
              {t("dictionary.connect_robot")}
            </Button>
          </Styled.JobsRobotDescriptionBlock>
        </Styled.JobsRobotWrapper>
      </Styled.JobsBlock>
      <Styled.TransactionsWrapper>
        <Styled.TransactionsBlockImage
          src={waveBackgroundImagePath}
          alt="waveBackgroundImagePath"
        />
        <Styled.TransactionsTitle>
          {t("dictionary.last_closed_deals_Yoko_robot")}
        </Styled.TransactionsTitle>
        <Styled.TransactionsDescription>
          {t("dictionary.keep_track_latest_robot_trades")}
        </Styled.TransactionsDescription>
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
        <Styled.BotTrainingTitle>
          {t("dictionary.cryptocurrencies_hard")}, <br /> {t("dictionary.nose")}
          <span>{` ${t("dictionary.Yoko_botom")} `}</span>
          {t("dictionary.everything_become_simple_understandable")}
        </Styled.BotTrainingTitle>
        <Styled.BotTrainingDescription>
          {t("dictionary.connect_robot_easy_steps")}
        </Styled.BotTrainingDescription>
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
          sx={{ zIndex: 100 }}
          startIcon={<PersonOutlineIcon />}
          variant="contained"
          size="large"
          onClick={() => handleOpenAuthModal()}
        >
          {t("dictionary.create_account")}
        </Button>
      </Styled.BotTrainingWrapper>
      <Styled.LKInformationWrapper>
        <Styled.LKInformationWrapperImage
          src={waveBackgroundImagePath}
          alt="waveBackgroundImagePath"
        />
        <Styled.LKInformationBlock>
          <Styled.LKInformationTitle>
            {t(
              "dictionary.keep_track_transactions_convenient_personal_account"
            )}
          </Styled.LKInformationTitle>
          <Styled.LKInformationDescription>
            {t("dictionary.follow_full_statistics_trading_device_wherever")}
          </Styled.LKInformationDescription>
        </Styled.LKInformationBlock>
        <Styled.LKInformationImage src={lkScreen} alt="lkScreen" />
      </Styled.LKInformationWrapper>
      <Styled.GoalsWrapper>
        <Styled.GoalsTitle>
          {t("dictionary.your_goal_profit_will_help_this")}
        </Styled.GoalsTitle>
        <Styled.GoalsRealisedBlock>
          <Styled.GoalsRealisedCard>
            <Styled.GoalsCardIcon>
              <AlgoritmIcon />
            </Styled.GoalsCardIcon>
            <Styled.GoalsInformationCard>
              <Styled.GoalsInformationCardTitle>
                {t("dictionary.smart_trading_algorithm")}
              </Styled.GoalsInformationCardTitle>
              <Styled.GoalsInformationCardDescription>
                {t(
                  "dictionary.combined_trading_strategies_trading_combined_together_efficiency_strategy"
                )}
              </Styled.GoalsInformationCardDescription>
            </Styled.GoalsInformationCard>
          </Styled.GoalsRealisedCard>
          <Styled.GoalsRealisedCard>
            <Styled.GoalsCardIcon>
              <MoneyIcon />
            </Styled.GoalsCardIcon>
            <Styled.GoalsInformationCard>
              <Styled.GoalsInformationCardTitle>
                {t("dictionary.unlimited_list_coins")}
              </Styled.GoalsInformationCardTitle>
              <Styled.GoalsInformationCardDescription>
                {t(
                  "dictionary.robot_simultaneously_unlimited_automatically_trading_pairs"
                )}
              </Styled.GoalsInformationCardDescription>
            </Styled.GoalsInformationCard>
          </Styled.GoalsRealisedCard>
          <Styled.GoalsRealisedCard>
            <Styled.GoalsCardIcon>
              <LotSettingsIcon />
            </Styled.GoalsCardIcon>
            <Styled.GoalsInformationCard>
              <Styled.GoalsInformationCardTitle>
                {t("dictionary.large_selection_settings")}
              </Styled.GoalsInformationCardTitle>
              <Styled.GoalsInformationCardDescription>
                {t(
                  "dictionary.capabilities_control_panel_trading_settings_effectively_individually_robot_improve_trading"
                )}
              </Styled.GoalsInformationCardDescription>
            </Styled.GoalsInformationCard>
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
            <Styled.GoalsInformationCard>
              <Styled.GoalsInformationCardTitle>
                {t("dictionary.telegram_bot")}
              </Styled.GoalsInformationCardTitle>
              <Styled.GoalsInformationCardDescription>
                {t("dictionary.connect_telegram_account_notify_transactions")}
              </Styled.GoalsInformationCardDescription>
            </Styled.GoalsInformationCard>
          </Styled.GoalsFutureCard>
          <Styled.GoalsFutureCard>
            <Styled.FutureCardIcon>
              <Styled.GoalsCheckFutureSpanBlock>
                <Styled.GoalsCheckFutureSpan>Скоро</Styled.GoalsCheckFutureSpan>
              </Styled.GoalsCheckFutureSpanBlock>
              <SimulateIcon />
            </Styled.FutureCardIcon>
            <Styled.GoalsInformationCard>
              <Styled.GoalsInformationCardTitle>
                {t("dictionary.simulation_mode")}
              </Styled.GoalsInformationCardTitle>
              <Styled.GoalsInformationCardDescription>
                {t(
                  "dictionary.personal_account_simulation_mode_deposit_traded_period_yoko_robot"
                )}
              </Styled.GoalsInformationCardDescription>
            </Styled.GoalsInformationCard>
          </Styled.GoalsFutureCard>
        </Styled.GoalsFutureBlock>
        <Button
          sx={{ marginTop: "55px", zIndex: 100 }}
          startIcon={<RocketLaunchIcon />}
          variant="contained"
          onClick={() => handleOpenAuthModal()}
        >
          {t("dictionary.start_trading")}
        </Button>
      </Styled.GoalsWrapper>
      <Styled.ReferralWrapper>
        <Styled.ReferralWrapperImage
          src={waveBackgroundImagePath}
          alt="waveBackgroundImagePath"
        />
        <Styled.ReferralInformationBlock>
          <Styled.ReferralTitle>
            {t("dictionary.referral_program")}
          </Styled.ReferralTitle>
          <Styled.ReferralDescription>
            {t("dictionary.invite_friends_earn")}
          </Styled.ReferralDescription>
          <Styled.ReferralSubDescription>
            {t(
              "dictionary.affiliate_program_profit_commission_withdraws_percentage_referral_crypto_profit_commission_withdraws_referral_wallet"
            )}
          </Styled.ReferralSubDescription>
          <Button
            startIcon={<PeopleAltIcon />}
            variant="contained"
            size="large"
            onClick={() => handleOpenAuthModal()}
          >
            {t("dictionary.become_referral")}
          </Button>
        </Styled.ReferralInformationBlock>
        <Styled.RobotImage src={yokoTradePolitic} alt="yokoTradePolitic" />
      </Styled.ReferralWrapper>
      <Styled.AboutWrapper>
        <Styled.AboutReviewsBlock>
          <Styled.AboutTitle>
            {t("dictionary.clients_choose_us")}
          </Styled.AboutTitle>
          <Styled.AboutReviewsCardsBlock>
            <Styled.AboutReviewsCardBlock>
              <Styled.AboutReviewsCardAvatar
                src={userAvatarFix}
                alt="userAvatarFix"
              />
              <Styled.AboutReviewsCardTitle>
                {t("dictionary.example_riviews")}
              </Styled.AboutReviewsCardTitle>
            </Styled.AboutReviewsCardBlock>
            <Styled.AboutReviewsCardBlock>
              <Styled.AboutReviewsCardAvatar
                src={userAvatarFix}
                alt="userAvatarFix"
              />
              <Styled.AboutReviewsCardTitle>
                {t("dictionary.example_riviews")}
              </Styled.AboutReviewsCardTitle>
            </Styled.AboutReviewsCardBlock>
          </Styled.AboutReviewsCardsBlock>
          <Styled.AboutTitle>
            {t("dictionary.follow_our_blog")}
          </Styled.AboutTitle>
        </Styled.AboutReviewsBlock>
        <Styled.AboutNotesCardsBlock>
          <Styled.AboutNotesCardBlock>
            <Styled.AboutNotesCardImage src={notesFix} alt="notesFix" />
            <Styled.AboutNotesCardTitle>
              {t("dictionary.best_cryptocurrency_trading")}
            </Styled.AboutNotesCardTitle>
            <Styled.AboutNotesCardDescription>
              {t(
                "dictionary.cryptocurrency_changing_market _change_ratings_changes _version_article"
              )}
            </Styled.AboutNotesCardDescription>
          </Styled.AboutNotesCardBlock>
          <Styled.AboutNotesCardBlock>
            <Styled.AboutNotesCardImage src={notesFix} alt="notesFix" />
            <Styled.AboutNotesCardTitle>
              {t("dictionary.best_cryptocurrency_trading")}
            </Styled.AboutNotesCardTitle>
            <Styled.AboutNotesCardDescription>
              {t(
                "dictionary.cryptocurrency_changing_market _change_ratings_changes _version_article"
              )}
            </Styled.AboutNotesCardDescription>
          </Styled.AboutNotesCardBlock>
          <Styled.AboutNotesCardBlock>
            <Styled.AboutNotesCardImage src={notesFix} alt="notesFix" />
            <Styled.AboutNotesCardTitle>
              {t("dictionary.best_cryptocurrency_trading")}
            </Styled.AboutNotesCardTitle>
            <Styled.AboutNotesCardDescription>
              {t(
                "dictionary.cryptocurrency_changing_market _change_ratings_changes _version_article"
              )}
            </Styled.AboutNotesCardDescription>
          </Styled.AboutNotesCardBlock>
        </Styled.AboutNotesCardsBlock>
        <Styled.AboutImageBlock src={aboutDownPath} alt="aboutDownPath" />
      </Styled.AboutWrapper> */}
    </Styled.MainLendingWrapper>
  );
};

export default GeneralLending;
