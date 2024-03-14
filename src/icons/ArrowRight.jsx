const ArrowRightIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke={props.stroke ? props.stroke : "#FFF"}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={props.strokeWidth ? props.strokeWidth : 1.5}
      d="M4 12h16m0 0-6-6m6 6-6 6"
    />
  </svg>
);
export default ArrowRightIcon;
