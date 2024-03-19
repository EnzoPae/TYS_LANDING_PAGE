const ArrowRightIcon = ({ w, color, strokeWidth, ...props }) => (
  <div>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      width={w ? w : 24}
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke={color ? color : "#FFF"}
        strokeWidth={strokeWidth ? strokeWidth : 1.5}
        d="M4 12h16m0 0-6-6m6 6-6 6"
      />
    </svg>
  </div>
);
export default ArrowRightIcon;
