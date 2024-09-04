import { test, expect } from "@playwright/test";
import HomePage from "../pages/home.page";

test.describe("Home", () => {
  let homePage: HomePage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    await homePage.navigate();
  });

  test("Open HomePage and verify title", async ({ page }) => {
    // verify title
    await expect(page).toHaveTitle("Practice E-Commerce Site – SDET Unicorns");
  });

  test("Click get started button using CSS Selector", async ({ page }) => {
    // click the button
    homePage.getStartedBtn.click();

    // verify url has #get-started
    await expect(page).toHaveURL(/.*#get-started/);
  });

  test("Verify heading text is visible using test selector", async () => {
    // verify heading text is visible
    await expect(homePage.headingText).toBeVisible();
  });

  test("Verify home link is enabled using text and css selector", async () => {
    // verify home text is enabled
    await expect(homePage.homeLink).toBeEnabled();
  });

  test("Verify search icon is visible using epath selector", async () => {
    // verify search icon is visible
    await expect(homePage.searchIcon).toBeVisible();
  });

  test("Verify text of all nav links", async () => {
    const expectedLinks = [
      "Home",
      "About",
      "Shop",
      "Blog",
      "Contact",
      "My account",
    ];

    // verify nav links text
    expect(await homePage.getNavLinksText()).toEqual(expectedLinks);
  });
});
