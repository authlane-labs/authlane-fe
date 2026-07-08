import { test, expect } from "@playwright/test";

test("AuthLane dashboard renders", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { name: "AuthLane" })).toBeVisible();
  await expect(page.getByRole("img", { name: "D3 trend chart" })).toBeVisible();
});
