import { IconProps } from "../../IconProps.types";

const TelegramIcon = (props: IconProps) => {
  const { color } = props;
  return (
    <svg
      width="22"
      height="23"
      viewBox="0 0 22 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.75 9.66669L10.0833 13.3334L15.5833 18.8334L19.25 4.16669L2.75 10.5834L6.41667 12.4167L8.25 17.9167L11 14.25"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default TelegramIcon;
