import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const ogSize = { width: 1200, height: 630 };

export async function loadLogoDataUrl() {
  const buffer = await readFile(join(process.cwd(), "public/logo/logo.png"));
  return `data:image/png;base64,${buffer.toString("base64")}`;
}

export function OgCard({
  title,
  subtitle,
  logoSrc,
}: {
  title: string;
  subtitle: string;
  logoSrc: string;
}) {
  const titleSize = title.length > 42 ? 46 : 58;

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: "#07111F",
        color: "#FFFFFF",
        padding: "68px 72px",
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={logoSrc}
          alt=""
          width={72}
          height={72}
          style={{ borderRadius: 16, marginRight: 22 }}
        />
        <div
          style={{
            display: "flex",
            fontSize: 28,
            letterSpacing: 1.5,
            color: "#F5C542",
            fontWeight: 700,
          }}
        >
          AL MASAR YELLOW
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", width: 1040 }}>
        <div
          style={{
            display: "flex",
            fontSize: titleSize,
            fontWeight: 700,
            lineHeight: 1.15,
            letterSpacing: -1,
          }}
        >
          {title}
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 22,
            fontSize: 28,
            lineHeight: 1.35,
            color: "#C5D0E0",
          }}
        >
          {subtitle}
        </div>
      </div>

      <div style={{ display: "flex", fontSize: 24, color: "#8EB4E8" }}>
        www.almasarelectricals.com
      </div>
    </div>
  );
}
