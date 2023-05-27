export default function Boots() {
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
            fill="#a26d3d"
          />
          <path
            d="M4 2h8v1h1v3h1v2h-1v3h-1v1H4v-1H3V8H2V6h1V3h1V2Z"
            fill="#fff"
            fillOpacity=".1"
          />
          <path d="M4 13h1v1h6v-1h1v1h1v2H3v-2h1v-1Z" fill="#88d8b0" />
          <path fill="#fff" fillOpacity=".5" d="M9 15h2v1H9z" />
          <path fill="#fff" d="M12 5H9v3h3zM7 5H4v3h3z" />
          <path fill="#697b94" d="M12 6h-2v1h2zM7 6H5v1h2z" />
          <path fill="#fff" fillOpacity=".7" d="M12 6h-1v1h1zM7 6H6v1h1z" />
          <path d="M6 9v1h3v1h1v-1H9V9H6Z" fill="#e35d6a" />
          <path
            d="M13 1H3v1H2v4h1V3h10v3h1V2h-1V1ZM2 8h1v3h1v1H2V8ZM12 11h1V8h1v4h-2v-1Z"
            fill="#009bbd"
          />
        </g>
      </g>
    </svg>
  );
}
