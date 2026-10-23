import { ImageResponse } from "next/og";
import { SITE_CONFIG } from "@/data/site-config";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";
export const alt =
  "Webntric Software — Practical Technology & Digital Growth Partner";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#0b2545",
          color: "#f8fafc",
          padding: "64px 72px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <div
              style={{
                width: "44px",
                height: "44px",
                borderRadius: "10px",
                backgroundColor: "#1d4ed8",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "24px",
                fontWeight: 800,
                color: "#ffffff",
              }}
            >
              W
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span
                style={{
                  fontSize: "22px",
                  fontWeight: 800,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                }}
              >
                WEBNTRIC SOFTWARE
              </span>
              <span
                style={{
                  fontSize: "12px",
                  color: "#94a3b8",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                }}
              >
                SOFTWARE ENGINEERING • DIGITAL GROWTH
              </span>
            </div>
          </div>

          <div
            style={{
              padding: "8px 16px",
              borderRadius: "6px",
              border: "1px solid #334155",
              fontSize: "14px",
              color: "#cbd5e1",
            }}
          >
            www.webntric.com
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            maxWidth: "960px",
          }}
        >
          <div
            style={{
              fontSize: "54px",
              fontWeight: 800,
              lineHeight: 1.12,
              letterSpacing: "-0.02em",
              color: "#ffffff",
            }}
          >
            Technology that makes your business easier to run and easier to trust.
          </div>
          <div
            style={{
              fontSize: "24px",
              lineHeight: 1.45,
              color: "#cbd5e1",
            }}
          >
            Business Websites • Custom Software • Offline Windows POS & Inventory • Mobile Apps • Technical SEO
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid #1e293b",
            paddingTop: "24px",
            fontSize: "16px",
            color: "#94a3b8",
          }}
        >
          <span>Clear guidance before development. Dependable support after launch.</span>
          <span style={{ color: "#f8fafc", fontWeight: 600 }}>
            {SITE_CONFIG.phone} • {SITE_CONFIG.email}
          </span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
