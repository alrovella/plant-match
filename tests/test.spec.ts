import { expect, test } from "@playwright/test";

test.describe("Search flow", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:5173");
  });

  test("should have correct metadata and home elements", async ({ page }) => {
    await expect(page).toHaveTitle("Plant Match - Busca tu planta ideal");

    await expect(page.getByTestId("brand-name")).toBeVisible();

    await expect(page.getByTestId("logo")).toBeVisible();
  });

  test("should be able to do all the search flow", async ({ page }) => {
    await page.getByText("Ayudame a encontrar mi planta perfecta").click();

    await expect(page.getByTestId("light-conditions")).toBeVisible();

    await page.getByRole("button", { name: "Continuar" }).click();

    await expect(page.getByTestId("space-available")).toBeVisible();

    await page.getByRole("button", { name: "Continuar" }).click();

    await expect(page.getByTestId("temperature")).toBeVisible();

    await page.getByRole("button", { name: "Continuar" }).click();

    await expect(page.getByTestId("care-level")).toBeVisible();

    await page.getByRole("button", { name: "Continuar" }).click();

    await expect(page.getByTestId("humidity")).toBeVisible();

    await page.getByRole("button", { name: "Continuar" }).click();

    await expect(page.getByTestId("desired-style")).toBeVisible();

    await page.getByRole("button", { name: "Continuar" }).click();

    await expect(page.getByTestId("experience-level")).toBeVisible();

    const searchButton = page.getByRole("button", {
      name: "Buscar mi planta perfecta",
    });

    await expect(searchButton).toBeVisible();
  });
});
