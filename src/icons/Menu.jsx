const MenuIcon = ({ w, color, strokeWidth, ...props }) => (
  <div className="flex align-items-center">
    <svg
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width={w ? w : 24}
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        strokeLinecap="round"
        stroke={color ? color : "#FFF"}
        strokeWidth={strokeWidth ? strokeWidth : 2}
        d="M5 7h14M5 12h12M5 17h14"
      />
    </svg>
  </div>
);

export default MenuIcon;
