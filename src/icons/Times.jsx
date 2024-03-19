const TimesIcon = ({ w, color, strokeWidth, ...props }) => (
  <div>
    <svg
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      width={w ? w : 24}
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke={color ? color : "#FFF"}
        strokeWidth={strokeWidth ? strokeWidth : 2}
        d="M6 18 17.94 6M18 18 6.06 6"
      />
    </svg>
  </div>
);
export default TimesIcon;
