import { IconProps } from '../IconProps';

export default function BagIcon({
  className = '',
  width,
  height,
  color = 'currentColor',
}: IconProps) {
  return (
    <svg
      width={width || '24'}
      height={height || '24'}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      preserveAspectRatio="xMidYMid meet"
    >
      {/* Bag body */}
      <rect x="4" y="9" width="16" height="11" rx="2" />
      {/* Handle */}
      <path d="M8 9V7a4 4 0 0 1 8 0v2" />
      {/* Rivets */}
      <circle cx="9" cy="12" r="1" />
      <circle cx="15" cy="12" r="1" />
    </svg>
  );
}
