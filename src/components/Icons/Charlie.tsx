export default function Charlie() {
  const description =
    '"Pixel Art" by "Florian Körner", licensed under "CC0 1.0". / Remix of the original. - Created with dicebear.com';

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      fill="none"
      shape-rendering="crispEdges"
      width="512"
      height="512"
    >
      <desc>{description}</desc>
      <mask id="viewboxMask">
        <rect width="16" height="16" rx="0" ry="0" x="0" y="0" fill="#fff" />
      </mask>
      <g mask="url(#viewboxMask)">
        <g transform="translate(0 8)">
          <path
            d="M4 2h8v1h1v3h1v2h-1v3h-1v1H9v1h4v1h1v2H2v-2h1v-1h4v-1H4v-1H3V8H2V6h1V3h1V2Z"
            fill="#b68655"
          />
          <path
            d="M4 2h8v1h1v3h1v2h-1v3h-1v1H4v-1H3V8H2V6h1V3h1V2Z"
            fill="#fff"
            fill-opacity=".1"
          />
          <path d="M10 13h3v1h1v2H2v-2h1v-1h3v1h4v-1Z" fill="#5bc0de" />
          <path fill="#fff" fill-opacity=".2" d="M11 14h1v2h-1zM4 14h1v2H4z" />
          <path fill="#fff" d="M4 5h3v2H4zM9 5h3v2H9z" />
          <path fill="#876658" d="M9 6h1v1H9zM4 6h1v1H4z" />
          <path d="M6 10v1h1v1h2v-1h1v-1H9V9H7v1H6Z" fill="#e35d6a" />
          <path d="M7 10v1h2v-1H7Z" fill="#fff" fill-opacity=".2" />
          <path d="M6 2h4v1H6zM7 3h2v1H7z" fill="#83623b" />
        </g>
      </g>
    </svg>
  );
}
