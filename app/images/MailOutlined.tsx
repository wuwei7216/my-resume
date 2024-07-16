import React from "react";

interface SvgIconProps {
  className?: string;
  style?: React.CSSProperties;
}

const MailOutlined: React.FC<Readonly<SvgIconProps>> = props => {
  const { className, style } = props;
  return (
    <svg
      style={style}
      className={className}
      focusable={false}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="64 64 896 896"
      fill="currentColor"
      width="1em"
      height="1em"
    >
      <path d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 110.8V792H136V270.8l-27.6-21.5 39.3-50.5 42.8 33.3h643.1l42.8-33.3 39.3 50.5-27.7 21.5zM833.6 232L512 482 190.4 232l-42.8-33.3-39.3 50.5 27.6 21.5 341.6 265.6a55.99 55.99 0 0068.7 0L888 270.8l27.6-21.5-39.3-50.5-42.7 33.2z" />
    </svg>
  );
};

export default MailOutlined;
