export const LikeIcon = ({ width, color="#000000" }) => {
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
      <polygon points="7 9 11 2 14 2 13 9 22 9 20 22 7 22 7 9" />
      <rect x="2" y="9" width="5" height="13" />
    </svg>
  )
}
