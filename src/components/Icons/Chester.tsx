export default function Chester() {
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
            fill="#ffdbac"
          />
          <path
            d="M4 2h8v1h1v3h1v2h-1v3h-1v1H4v-1H3V8H2V6h1V3h1V2Z"
            fill="#fff"
            fill-opacity=".1"
          />
          <path d="M4 13h1v1h6v-1h1v3H4v-3Z" fill="#428bca" />
          <path fill="#fff" fill-opacity=".3" d="M9 15h2v1H9z" />
          <g fill-rule="evenodd" clip-rule="evenodd">
            <path d="M11 5h-1v2h2V6h-1V5ZM6 5H5v2h2V6H6V5Z" fill="#fff" />
            <path d="M10 5v1h1v1H9V5h1ZM5 5v1h1v1H4V5h1Z" fill="#5b7c8b" />
            <path
              d="M10 5v1H9V5h1Zm1 1v1h-1V6h1ZM5 5v1H4V5h1Zm1 1v1H5V6h1Z"
              fill="#fff"
              fill-opacity=".5"
            />
          </g>
          <path d="M10 11v-1H7V9H6v1h1v1h3Z" fill="#d29985" />
          <g fill="#cab188">
            <path d="M4 2h8v1H4zM3 1h1v1H3zM2 2h1v1H2zM2 3h1v1H2zM2 4h1v1H2zM2 5h1v1H2zM1 3h1v1H1zM1 1h1v1H1zM1 5h1v1H1zM1 6h1v1H1zM0 7h1v1H0zM1 8h1v1H1zM5 1h1v1H5zM6 0h1v1H6zM4 0h1v1H4zM6 1h1v1H6zM7 1h1v1H7zM8 0h1v1H8zM9 1h1v1H9zM9 0h1v1H9zM11 0h1v1h-1zM10 1h1v1h-1zM12 1h1v1h-1zM13 2h1v1h-1zM13 3h1v1h-1zM13 4h1v1h-1zM13 5h1v1h-1zM14 6h1v1h-1zM15 4h1v1h-1z" />
            <path d="M15 4h1v1h-1zM14 3h1v1h-1zM14 8h1v1h-1zM15 6h1v1h-1zM15 7h1v1h-1zM13 2h1v1h-1zM2 2h1v1H2zM3 1h1v1H3z" />
          </g>
        </g>
      </g>
    </svg>
  );
}
