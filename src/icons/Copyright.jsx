const CopyrightIcon = ({ w, color, strokeWidth, ...props }) => (
  <div>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={w ? w : 24}
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        stroke={color ? color : "#FFF"}
        strokeLinecap="round"
        strokeWidth={strokeWidth ? strokeWidth : 1.5}
        d="M14 15.667a4.535 4.535 0 0 1-1.714.333C9.919 16 8 14.21 8 12s1.919-4 4.286-4c.61 0 1.189.119 1.714.333"
      />
      <path
        stroke={color ? color : "#FFF"}
        strokeLinecap="round"
        strokeWidth={strokeWidth ? strokeWidth : 1.5}
        d="M7 3.338A9.954 9.954 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5"
      />
    </svg>
  </div>
);
export default CopyrightIcon;
