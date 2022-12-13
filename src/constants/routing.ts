import React from "react";
import { MAIN_PATH } from './path'
import { MainLending } from 'pages/Lending/Main'


interface Routes {
    path: string;
    Element: React.FC;
    isAuthValue: boolean;
  }

export const routes: Routes[] = [
    {
        path: MAIN_PATH,
        Element: MainLending,
        isAuthValue: false
    }
]