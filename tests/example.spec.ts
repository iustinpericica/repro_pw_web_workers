import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("http://localhost:3000/");

  await page.route("**/*", (route) => {
    console.log("Intercepted:", route.request().url());
    return route.continue();
  });

  await page.getByLabel("Multiply number 1:").click();
  await page.getByLabel("Multiply number 1:").fill("2");
  await page.getByLabel("Multiply number 2:").click();
  await page.getByLabel("Multiply number 2:").fill("3");
  await page.getByText("Result:").click();
});
