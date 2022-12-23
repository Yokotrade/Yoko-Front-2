import { isDesktop, isTablet } from "react-device-detect";

interface Returnvalue {
  width: number;
  height: number;
}

export const getGraficWidthHeigth = (): Returnvalue => {
  if (isDesktop) return { width: 2073, height: 259 };
  if (isTablet) return { width: 310, height: 238 };
  return { width: 310, height: 238 };
};
