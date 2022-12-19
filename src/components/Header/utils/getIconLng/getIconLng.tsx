import RUIcon from "icon/lng/ru";
import ENIcon from "icon/lng/en";

export const getIconLng = (value: string): JSX.Element => {
  switch (value) {
    case "ru":
      return <RUIcon />;
    default:
      return <ENIcon />;
  }
};
