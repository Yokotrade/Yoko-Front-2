import React from "react";
import HomeIcon from '@mui/icons-material/Home';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import PeopleIcon from '@mui/icons-material/People';
import PercentIcon from '@mui/icons-material/Percent';
import MainLending from "pages/Lending/Main";
import Main from 'pages/Main'
import General from 'pages/General'
import Statistics from 'pages/Statistics'
import Referral from 'pages/Referral'
import Commission from 'pages/Commission'
import { MAIN_PATH, GENERAL_PATH, STATISTICS_PATH, REFERRAL_PATH, COMMISSION_PATH } from "./path";
interface Routes {
  path: string;
  Element: React.FC;
  isAuthValue: boolean;
  childrenRoutes?: Routes[];
  name?: string;
  Icon?: React.FC;
}

export const mainRoutes: Routes[] = [
  {
    path: GENERAL_PATH,
    Element: General,
    isAuthValue: true,
    Icon: HomeIcon,
    name: "Главная",
  },
  {
    path: STATISTICS_PATH,
    Element: Statistics,
    isAuthValue: true,
    Icon: SignalCellularAltIcon,
    name: "Статистика"
  },
  {
    path: REFERRAL_PATH,
    Element: Referral,
    isAuthValue: true,
    Icon: PeopleIcon,
    name: "Реферальная программа"
  },
  {
    path: COMMISSION_PATH,
    Element: Commission,
    isAuthValue: true,
    Icon: PercentIcon,
    name: "Комиссия"
  },
]

export const routes: Routes[] = [
  {
    path: MAIN_PATH,
    Element: MainLending,
    isAuthValue: false,
  },
  {
    path: MAIN_PATH,
    Element: Main,
    isAuthValue: true,
    childrenRoutes: mainRoutes
  },
];