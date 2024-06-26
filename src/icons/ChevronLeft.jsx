const ChevronLeftIcon = ({ w, color, ...props }) => (
  <div className="flex align-items-center">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={w ? w : 24}
      viewBox="-19.04 0 75.803 75.803"
      {...props}
    >
      <g data-name="Group 64">
        <path
          fill={color ? color : "#FFF"}
          d="M36.231 0a1.5 1.5 0 0 1 1.06 2.561L3.735 36.121a2.528 2.528 0 0 0 0 3.564l33.556 33.558a1.5 1.5 0 0 1-2.121 2.121L1.618 41.806a5.527 5.527 0 0 1 0-7.807L35.174.44A1.5 1.5 0 0 1 36.231 0Z"
          data-name="Path 56"
        />
      </g>
    </svg>
  </div>
);
export default ChevronLeftIcon;
