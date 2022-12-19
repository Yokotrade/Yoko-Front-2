import { IconProps } from "../../IconProps.types";

const TwitterIcon = (props: IconProps) => {
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
        d="M20.1671 4.17585C19.2504 4.62501 18.3521 4.80743 17.4171 5.08335C16.3895 3.92376 14.866 3.8596 13.4021 4.40776C11.9382 4.95593 10.9793 6.2961 11.0004 7.83335V8.75001C8.02582 8.8261 5.37666 7.47126 3.66707 5.08335C3.66707 5.08335 -0.166426 11.8969 7.33374 15.1667C5.61774 16.3098 3.90632 17.0807 1.83374 17C4.86607 18.6528 8.17066 19.2211 11.0316 18.3906C14.3132 17.4373 17.0101 14.9778 18.045 11.2938C18.3537 10.1733 18.507 9.01572 18.5006 7.85351C18.4987 7.62526 19.8847 5.31251 20.1671 4.17493V4.17585Z"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default TwitterIcon;
