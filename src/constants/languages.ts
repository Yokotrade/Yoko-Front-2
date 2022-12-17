import React from "react";
import RUIcon from "icon/languages/RU";

interface CountryType {
  label: string;
  Icon: React.FC;
}

export const languages: CountryType[] = [
  { label: "ru", Icon: RUIcon },
  {
    label: "en",
    Icon: RUIcon,
  },
];
