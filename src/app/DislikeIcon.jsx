export const DislikeIcon = ({ width, color = '#000000' }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={width}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="miter"
    >
      <polygon points="17 15 13 22 10 22 11 15 2 15 4 2 17 2 17 15" />
      <rect x="17" y="2" width="5" height="13" />
    </svg>
  )
}
