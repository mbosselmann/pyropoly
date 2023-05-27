export default function Bailey() {
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
            fill="#8d5524"
          />
          <path
            d="M4 2h8v1h1v3h1v2h-1v3h-1v1H4v-1H3V8H2V6h1V3h1V2Z"
            fill="#fff"
            fillOpacity=".1"
          />
          <path d="M13 7h2v2h-2zM1 7h2v2H1z" fill="#d3d3d3" />
          <path d="M10 13h3v1h1v2H2v-2h1v-1h3v1h4v-1Z" fill="#428bca" />
          <path fill="#fff" fillOpacity=".2" d="M11 14h1v2h-1zM4 14h1v2H4z" />
          <path d="M10 5h1v2H9V6h1V5ZM5 5h1v2H4V6h1V5Z" fill="#fff" />
          <path fill="#876658" d="M11 6h-1v1h1zM6 6H5v1h1z" />
          <path d="M7 9v1h1v1H6V9h1Z" fill="#c98276" />
          <path
            d="M4 1h8v1h1v1h1v3h-1V4h-1V3H6v1H3v2H2V3h1V2h1V1ZM2 8h1v3h1v1h3v1H2V8ZM12 12H9v1h5V8h-1v3h-1v1Z"
            fill="#a78961"
          />
        </g>
      </g>
    </svg>
  );
}
