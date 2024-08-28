import { test, expect } from "@playwright/test";

test.describe("Home", () => {
  test("Open HomePage and verify title", async ({ page }) => {
    // open url
    await page.goto("https://practice.sdetunicorns.com/");

    // verify title
    await expect(page).toHaveTitle("Practice E-Commerce Site – SDET Unicorns");
  });

  test("Open About page and verify title", async ({ page }) => {
    // open url
    await page.goto("https://practice.sdetunicorns.com/about");

    // verify title
    await expect(page).toHaveTitle("About – Practice E-Commerce Site");
  });

  test("Click get started button using CSS Selector", async ({ page }) => {
    // open url
    await page.goto("https://practice.sdetunicorns.com/");

    // click the button
    await page.locator("#get-started").click();

    // verify url has #get-started
    await expect(page).toHaveURL(/.*#get-started/);
  });

  test("Verify heading text is visible using test selector", async ({
    page,
  }) => {
    // open url
    await page.goto("https://practice.sdetunicorns.com/");

    // find the text locator
    const headingText = page.locator(`text="Think different. Make different."`);

    // verify heading text is visible
    await expect(headingText).toBeVisible();
  });

  test("Verify home link is enabled using text and css selector", async ({
    page,
  }) => {
    // open url
    await page.goto("https://practice.sdetunicorns.com/");

    // find the home text
    // const homeText = page.locator('#zak-primary-menu >> text="Home"');
    const homeText = page.locator('#zak-primary-menu:has-text("Home")');

    // verify home text is enabled
    await expect(homeText).toBeEnabled();
  });

  test("Verify search icon is visible using epath selector", async ({
    page,
  }) => {
    // open url
    await page.goto("https://practice.sdetunicorns.com/");

    // find the search icon
    const searchIcon = page.locator(
      '//*[@class="zak-header-actions zak-header-actions--desktop"]//a[@class="zak-header-search__toggle"]'
    );

    // verify search icon is visible
    await expect(searchIcon).toBeVisible();
  });

  test("Verify text of all nav links", async ({ page }) => {
    const expectedLinks = [
      "Home",
      "About",
      "Shop",
      "Blog",
      "Contact",
      "My account",
    ];

    // open url
    await page.goto("https://practice.sdetunicorns.com/");

    // fine the nav links
    const navLinks = page.locator("#zak-primary-menu li[id*=menu]");

    // verify nav links text
    expect(await navLinks.allTextContents()).toEqual(expectedLinks);
  });
});
