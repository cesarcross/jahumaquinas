import { ImageResponse } from "next/og";

export const alt = "JAHU Máquinas e Ferramentas: 100% brasileira desde 1988";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "linear-gradient(135deg,#10265a,#3b82f6)",
          color: "white",
        }}
      >
        <div style={{ fontSize: 150, fontWeight: 900, fontStyle: "italic" }}>JAHU</div>
        <div style={{ fontSize: 44, marginTop: 8 }}>Máquinas e Ferramentas para pisos</div>
        <div style={{ fontSize: 34, marginTop: 28, color: "#f2b705" }}>
          100% brasileira desde 1988
        </div>
      </div>
    ),
    size,
  );
}
