const ArrowLeftIcon = (props) => (
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
      d="M20 12H4m0 0 6-6m-6 6 6 6"
    />
  </svg>
);
export default ArrowLeftIcon;
