/**
 * HelloPrint dashboard component — minimal on-brand Recharts example.
 *
 * Tokens referenced:
 * - color.brand.charmed-green   #008539  (primary series, KPI accent)
 * - color.neutral.digital-black #191919  (text, secondary series)
 * - color.brand.snowflake       #F0F0F0  (page background, zebra even rows)
 * - color.brand.orochimaru      #D9D9D9  (gridlines, borders)
 * - color.accent.seaside        #67A5B1  (tertiary series)
 * - font.family.primary         Inter
 * - font.scale.desktop.h2       24/32 Bold
 * - font.scale.desktop.body     14/22 Regular
 * - font.scale.desktop.label    10 Uppercase 0.04em
 * - space.md / space.lg         16px / 24px
 * - radius.md                   8px  (card corners)
 */
import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const tokens = {
  charmedGreen: "#008539",
  digitalBlack: "#191919",
  snowflake:    "#F0F0F0",
  orochimaru:   "#D9D9D9",
  seaside:      "#67A5B1",
  font:         "'Inter', system-ui, -apple-system, sans-serif",
};

const data = [
  { week: "W14", orders: 1240, gp: 6100 },
  { week: "W15", orders: 1380, gp: 6820 },
  { week: "W16", orders: 1510, gp: 7340 },
  { week: "W17", orders: 1590, gp: 7910 },
];

export default function OrdersDashboard() {
  const card = {
    background: "#FFFFFF",
    border: `1px solid ${tokens.orochimaru}`,
    borderRadius: 8,
    padding: 24,
    fontFamily: tokens.font,
    color: tokens.digitalBlack,
  };
  const label = {
    textTransform: "uppercase",
    fontSize: 10,
    letterSpacing: "0.04em",
    fontWeight: 600,
    color: tokens.digitalBlack,
    opacity: 0.7,
    marginBottom: 8,
  };
  const h2 = { fontSize: 24, lineHeight: "32px", fontWeight: 700, margin: 0, color: tokens.digitalBlack };
  return (
    <div style={{ background: tokens.snowflake, padding: 24, fontFamily: tokens.font }}>
      <div style={card}>
        <div style={label}>This week</div>
        <h2 style={h2}>Orders &amp; GP — rolling 4 weeks</h2>
        <div style={{ height: 260, marginTop: 16 }}>
          <ResponsiveContainer>
            <LineChart data={data} margin={{ top: 8, right: 16, bottom: 8, left: 0 }}>
              <CartesianGrid stroke={tokens.orochimaru} strokeOpacity={0.6} vertical={false} />
              <XAxis dataKey="week" stroke={tokens.digitalBlack} tick={{ fontSize: 12, fill: tokens.digitalBlack, opacity: 0.7 }} />
              <YAxis stroke={tokens.digitalBlack} tick={{ fontSize: 12, fill: tokens.digitalBlack, opacity: 0.7 }} />
              <Tooltip contentStyle={{ background: "#022B07", color: "#FFFFFF", border: "none", fontFamily: tokens.font }} />
              <Line type="monotone" dataKey="orders" stroke={tokens.charmedGreen} strokeWidth={2.5} dot={false} name="Orders" />
              <Line type="monotone" dataKey="gp"     stroke={tokens.digitalBlack} strokeWidth={2}   dot={false} name="Gross profit (€)" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
