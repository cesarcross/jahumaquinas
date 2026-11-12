import { ImageResponse } from "next/og";
import { getProduct, products } from "@/data/products";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const name = getProduct(slug)?.fullName ?? "JAHU Máquinas";
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
          background: "linear-gradient(135deg,#10265a,#1f7a4d)",
          color: "white",
        }}
      >
        <div style={{ fontSize: 40, color: "#f2b705" }}>JAHU Máquinas e Ferramentas</div>
        <div style={{ fontSize: 88, fontWeight: 800, marginTop: 16, lineHeight: 1.1 }}>{name}</div>
        <div style={{ fontSize: 34, marginTop: 28 }}>100% brasileira desde 1988</div>
      </div>
    ),
    size,
  );
}
