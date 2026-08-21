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
  const [displayFont, displayItalicFont, sansFont, handwrittenFont, photo] =
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
      readFile(join(process.cwd(), "public/home/emma-louisiana.png")),
    ]);
  const [displayFontData, displayItalicFontData, sansFontData, handwrittenFontData] =
    [displayFont, displayItalicFont, sansFont, handwrittenFont].map(
      toArrayBuffer,
    );
  const photoDataUrl = `data:image/png;base64,${photo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          position: "relative",
          background: "#f7f4ef",
        }}
      >
        {/* Decorative sparkles sit in the outer margin on purpose — some
            unfurlers (Notion, iMessage) crop this canvas tighter than
            1200x630, so nothing structural can live out here. */}
        <Sparkle top={48} right={64} sizePx={30} rotate={12} />
        <Sparkle bottom={56} right={96} sizePx={22} rotate={-8} />

        <div
          style={{
            display: "flex",
            width: 350,
            height: 460,
            marginLeft: 88,
            borderRadius: 20,
            overflow: "hidden",
            boxShadow: "0 16px 40px rgba(22, 35, 58, 0.22)",
          }}
        >
          <img
            src={photoDataUrl}
            width={350}
            height={460}
            style={{ objectFit: "cover" }}
          />
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            padding: "0 88px 0 56px",
          }}
        >
          <div
            style={{
              display: "flex",
              fontFamily: "Libre Baskerville",
              fontSize: 28,
              color: "#ff1493",
              marginBottom: 22,
            }}
          >
            Emma H. Tandle
          </div>

          <div
            style={{
              display: "flex",
              fontFamily: "DM Sans",
              fontSize: 22,
              color: "#16233a",
              marginBottom: 4,
            }}
          >
            Hi, I&apos;m Emma and I am a
          </div>

          <div
            style={{
              display: "flex",
              fontFamily: "Libre Baskerville",
              fontStyle: "italic",
              fontSize: 56,
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
              fontSize: 28,
              color: "#ff1493",
              marginTop: 26,
              transform: "rotate(-2deg)",
            }}
          >
            welcome to my portfolio
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Libre Baskerville",
          data: displayFontData,
          style: "normal",
          weight: 400,
        },
        {
          name: "Libre Baskerville",
          data: displayItalicFontData,
          style: "italic",
          weight: 400,
        },
        {
          name: "DM Sans",
          data: sansFontData,
          style: "normal",
          weight: 400,
        },
        {
          name: "Caveat",
          data: handwrittenFontData,
          style: "normal",
          weight: 600,
        },
      ],
    },
  );
}
