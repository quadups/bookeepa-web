import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#f6f7fb",
          color: "#0b0d12",
          padding: 72,
          fontFamily: "Georgia",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 32,
              height: 28,
              background: "#3438f4",
              clipPath: "polygon(34% 0, 100% 0, 66% 100%, 0 100%)",
            }}
          />
          <div style={{ fontFamily: "Arial", fontSize: 34, fontWeight: 700 }}>
            Bookeepa
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 84, lineHeight: 0.95, maxWidth: 920 }}>
            Track money. Follow up on WhatsApp.
          </div>
          <div
            style={{
              marginTop: 34,
              fontFamily: "Arial",
              fontSize: 28,
              color: "#516071",
              maxWidth: 760,
              lineHeight: 1.35,
            }}
          >
            Simple bookkeeping, debt tracking, invoices, and reminders for
            African SMEs.
          </div>
        </div>
        <div
          style={{
            fontFamily: "Arial",
            fontSize: 24,
            color: "#3438f4",
          }}
        >
          bookeepa.com
        </div>
      </div>
    )
  );
}
