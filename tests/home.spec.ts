import { test, expect, Page } from "@playwright/test";
import HomePage from "../pages/home.page";

test.describe("Home", () => {
  let homePage: HomePage;
  test("Open HomePage and verify title", async ({ page }) => {
    homePage = new HomePage(page);

    // open url
    await homePage.navigate();

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
    homePage = new HomePage(page);

    // open url
    await homePage.navigate();

    // click the button
    // await page.locator("#get-started").click();
    homePage.getStartedBtn.click();

    // verify url has #get-started
    await expect(page).toHaveURL(/.*#get-started/);
  });

  test("Verify heading text is visible using test selector", async ({
    page,
  }) => {
    homePage = new HomePage(page);

    // open url
    await homePage.navigate();

    // find the text locator
    // const headingText = page.locator(`text="Think different. Make different."`);
    const headingText = homePage.headingText;

    // verify heading text is visible
    await expect(headingText).toBeVisible();
  });

  test("Verify home link is enabled using text and css selector", async ({
    page,
  }) => {
    homePage = new HomePage(page);

    // open url
    await homePage.navigate();

    // find the home text
    // const homeText = page.locator('#zak-primary-menu >> text="Home"');
    // const homeText = page.locator('#zak-primary-menu:has-text("Home")');
    const homeText = homePage.homeLink;

    // verify home text is enabled
    await expect(homeText).toBeEnabled();
  });

  test("Verify search icon is visible using epath selector", async ({
    page,
  }) => {
    homePage = new HomePage(page);

    // open url
    await homePage.navigate();

    // find the search icon
    // const searchIcon = page.locator(
    //   '//*[@class="zak-header-actions zak-header-actions--desktop"]//a[@class="zak-header-search__toggle"]'
    // );
    const searchIcon = homePage.searchIcon;

    // verify search icon is visible
    await expect(searchIcon).toBeVisible();
  });

  test("Verify text of all nav links", async ({ page }) => {
    homePage = new HomePage(page);

    const expectedLinks = [
      "Home",
      "About",
      "Shop",
      "Blog",
      "Contact",
      "My account",
    ];

    // open url
    await homePage.navigate();

    // verify nav links text
    expect(await homePage.getNavLinksText()).toEqual(expectedLinks);
  });
});
