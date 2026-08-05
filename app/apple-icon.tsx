import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

// Hex values mirror --canvas / --ink in app/globals.css. ImageResponse
// renders outside the app's normal CSS pipeline, so tokens can't be
// referenced directly here.
export default async function AppleIcon() {
  const fontData = await readFile(
    join(process.cwd(), "app/assets/fonts/AlexBrush-Regular.ttf"),
  );

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#f7f4ef",
          color: "#16233a",
          fontSize: 50,
          fontFamily: "Alex Brush",
        }}
      >
        EHT
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Alex Brush",
          data: fontData,
          style: "normal",
          weight: 400,
        },
      ],
    },
  );
}
