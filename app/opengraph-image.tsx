import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Emma H. Tandle — UX & Product Designer";

// Hex values mirror the color/font tokens in app/globals.css. ImageResponse
// renders outside the app's normal CSS pipeline, so tokens can't be
// referenced directly here, and Google-font files are downloaded locally
// (matching app/icon.tsx's approach) since next/font vars aren't usable here.
// Satori's style-value parser doesn't tolerate keys present with an
// `undefined` value (e.g. `{ left: undefined }`), so unused position props
// must be left out of the style object entirely rather than passed through.
function Sparkle({
  top,
  left,
  right,
  bottom,
  sizePx,
  rotate,
}: {
  top?: number;
  left?: number;
  right?: number;
  bottom?: number;
  sizePx: number;
  rotate: number;
}) {
  return (
    <svg
      style={{
        position: "absolute",
        ...(top !== undefined ? { top } : {}),
        ...(left !== undefined ? { left } : {}),
        ...(right !== undefined ? { right } : {}),
        ...(bottom !== undefined ? { bottom } : {}),
        transform: `rotate(${rotate}deg)`,
      }}
      width={sizePx}
      height={sizePx}
      viewBox="0 0 24 24"
    >
      <path
        d="M12 2 L14 9 L21 11 L14 13 L12 21 L10 13 L3 11 L10 9 Z"
        fill="#ff1493"
      />
    </svg>
  );
}

// Satori's `fonts[].data` expects an ArrayBuffer; a Node Buffer is a view
// over one and isn't always accepted as-is, so copy out the exact byte range.
function toArrayBuffer(buffer: Buffer): ArrayBuffer {
  return buffer.buffer.slice(
    buffer.byteOffset,
    buffer.byteOffset + buffer.byteLength,
  ) as ArrayBuffer;
}

export default async function Image() {
  const [displayFont, displayItalicFont, sansFont, handwrittenFont] = (
    await Promise.all([
      readFile(
        join(
          process.cwd(),
          "app/assets/fonts/LibreBaskerville-Static-Regular.ttf",
        ),
      ),
      readFile(
        join(
          process.cwd(),
          "app/assets/fonts/LibreBaskerville-Static-Italic.ttf",
        ),
      ),
      readFile(
        join(process.cwd(), "app/assets/fonts/DMSans-Static-Regular.ttf"),
      ),
      readFile(
        join(process.cwd(), "app/assets/fonts/Caveat-Static-SemiBold.ttf"),
      ),
    ])
  ).map(toArrayBuffer);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          position: "relative",
          background: "#f7f4ef",
          padding: "90px",
        }}
      >
        <Sparkle top={64} right={110} sizePx={44} rotate={12} />
        <Sparkle top={140} right={64} sizePx={26} rotate={-8} />
        <Sparkle bottom={90} left={620} sizePx={30} rotate={6} />

        <div
          style={{
            display: "flex",
            fontFamily: "Libre Baskerville",
            fontSize: 40,
            color: "#ff1493",
            marginBottom: 56,
          }}
        >
          Emma H. Tandle
        </div>

        <div
          style={{
            display: "flex",
            fontFamily: "DM Sans",
            fontSize: 30,
            color: "#16233a",
            marginBottom: 8,
          }}
        >
          Hi, I&apos;m Emma and I am a
        </div>

        <div
          style={{
            display: "flex",
            fontFamily: "Libre Baskerville",
            fontStyle: "italic",
            fontSize: 94,
            lineHeight: 1.1,
            color: "#16233a",
          }}
        >
          UX &amp; Product Designer
        </div>

        <div
          style={{
            display: "flex",
            fontFamily: "Caveat",
            fontSize: 36,
            color: "#ff1493",
            marginTop: 40,
            transform: "rotate(-2deg)",
          }}
        >
          welcome to my portfolio
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Libre Baskerville",
          data: displayFont,
          style: "normal",
          weight: 400,
        },
        {
          name: "Libre Baskerville",
          data: displayItalicFont,
          style: "italic",
          weight: 400,
        },
        {
          name: "DM Sans",
          data: sansFont,
          style: "normal",
          weight: 400,
        },
        {
          name: "Caveat",
          data: handwrittenFont,
          style: "normal",
          weight: 600,
        },
      ],
    },
  );
}
