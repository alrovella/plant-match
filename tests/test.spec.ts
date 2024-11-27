import { expect, test } from "@playwright/test";

test("should be able to do all the search flow", async ({ page }) => {
  await page.goto("http://localhost:5173");

  await page.getByText("Ayudame a encontrar mi planta perfecta").click();

  await expect(page.getByTestId("light-conditions")).toBeVisible();

  await page.getByText("Continuar").click();

  await expect(page.getByTestId("space-available")).toBeVisible();

  await page.getByText("Continuar").click();

  await expect(page.getByTestId("temperature")).toBeVisible();

  await page.getByText("Continuar").click();

  await expect(page.getByTestId("care-level")).toBeVisible();

  await page.getByText("Continuar").click();

  await expect(page.getByTestId("humidity")).toBeVisible();

  await page.getByText("Continuar").click();

  await expect(page.getByTestId("desired-style")).toBeVisible();

  await page.getByText("Continuar").click();

  await expect(page.getByTestId("experience-level")).toBeVisible();

  const searchButton = page.getByRole("button", {
    name: "Buscar mi planta perfecta",
  });

  await expect(searchButton).toBeVisible();
});
