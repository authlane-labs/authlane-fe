import { Activity, CheckCircle2, ShieldAlert } from "lucide-react";
import { useEffect, useRef } from "react";
import { renderTrend } from "../chart/d3-trend";
import { useDashboard } from "./hooks";

const fallback = {
  metrics: [
    { key: "signin_success", label: "signin success", value: 96, unit: "%", target: 95 },
    { key: "refresh_retries", label: "refresh retries", value: 14, unit: "req", target: 20 },
    { key: "phone_blocks", label: "phone token blocks", value: 7, unit: "cases", target: 5 }
  ],
  events: [
    { id: "auth-731", title: "Expired refresh token retry", status: "blocked", severity: "high", updatedAt: "2026-07-08" },
    { id: "auth-644", title: "Phone verification resend", status: "verified", severity: "medium", updatedAt: "2026-07-08" },
    { id: "auth-602", title: "Legacy form cookie check", status: "synced", severity: "low", updatedAt: "2026-07-07" }
  ],
  trend: [{ day: "Mon", value: 91 }, { day: "Tue", value: 94 }, { day: "Wed", value: 92 }, { day: "Thu", value: 96 }, { day: "Fri", value: 97 }],
} as const;

export const Dashboard = () => {
  const query = useDashboard();
  const data = query.data ?? fallback;
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (svgRef.current) renderTrend(svgRef.current, [...data.trend]);
  }, [data.trend]);

  return (
    <main className="shell">
      <section className="header">
        <div>
          <p>Frontend / Product Engineer project</p>
          <h1>AuthLane</h1>
          <span>React auth screens and legacy login forms need the same token, refresh, and phone verification semantics.</span>
        </div>
        <CheckCircle2 aria-hidden />
      </section>
      <section className="metrics">
        {data.metrics.map((metric) => (
          <article key={metric.key}>
            <Activity aria-hidden />
            <strong>{metric.value}{metric.unit}</strong>
            <span>{metric.label}</span>
          </article>
        ))}
      </section>
      <section className="workbench">
        <div>
          <h2>Live workflow</h2>
          {data.events.map((event) => (
            <button key={event.id} className={event.severity}>
              <ShieldAlert aria-hidden />
              <span>{event.title}</span>
              <small>{event.status} · {event.updatedAt}</small>
            </button>
          ))}
        </div>
        <svg ref={svgRef} role="img" aria-label="D3 trend chart" />
      </section>
    </main>
  );
};
