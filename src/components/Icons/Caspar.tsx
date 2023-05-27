export default function Caspar() {
  const description =
    '"Pixel Art" by "Florian Körner", licensed under "CC0 1.0". / Remix of the original. - Created with dicebear.com';

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      fill="none"
      shapeRendering="crispEdges"
    >
      <desc>{description}</desc>
      <mask id="viewboxMask">
        <rect width="16" height="16" rx="0" ry="0" x="0" y="0" fill="#fff" />
      </mask>
      <g mask="url(#viewboxMask)">
        <g transform="translate(0 8)">
          <path
            d="M4 2h8v1h1v3h1v2h-1v3h-1v1H9v1h4v1h1v2H2v-2h1v-1h4v-1H4v-1H3V8H2V6h1V3h1V2Z"
            fill="#eac393"
          />
          <path
            d="M4 2h8v1h1v3h1v2h-1v3h-1v1H4v-1H3V8H2V6h1V3h1V2Z"
            fill="#fff"
            fillOpacity=".1"
          />
          <path d="M10 13h3v1h1v2H2v-2h1v-1h3v2h4v-2Z" fill="#d11141" />
          <path
            fill="#fff"
            fillOpacity=".2"
            d="M5 14h1v1H5zM4 15h1v1H4zM7 15h1v1H7zM3 13h1v1H3zM2 14h1v1H2zM12 13h1v1h-1zM11 14h1v1h-1zM10 15h1v1h-1zM13 15h1v1h-1z"
          />
          <path fill="#fff" d="M4 5h3v3H4zM9 5h3v3H9z" />
          <path fill="#588387" d="M4 6h2v1H4zM9 6h2v1H9z" />
          <path fill="#fff" fillOpacity=".7" d="M4 6h1v1H4zM9 6h1v1H9z" />
          <path d="M6 10v1h1v1h2v-1h1v-1H9V9H7v1H6Z" fill="#e35d6a" />
          <path d="M7 10v1h2v-1H7Z" fill="#fff" fillOpacity=".2" />
          <path
            d="M5 1H3v1H2v2h1v1h1V4h8v1h1V4h1V2h-1V1h-2v1H5V1Z"
            fill="#83623b"
          />
        </g>
      </g>
    </svg>
  );
}
