export type MetricKey = "signin_success_rate" | "refresh_retry_rate" | "phone_token_reuse_blocks";

export type DashboardMetric = { key: MetricKey; label: string; value: number; unit: string; target: number };
export type WorkflowEvent = { id: string; title: string; status: string; severity: "low" | "medium" | "high"; updatedAt: string };
export type TrendPoint = { day: string; value: number };
