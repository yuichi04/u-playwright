import { chromium, expect, FullConfig } from "@playwright/test";

async function globalSetup(config: FullConfig) {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  // login
  await page.goto("https://practice.sdetunicorns.com/my-account");
  await page.locator("#username").fill("practiceuser1");
  await page.locator("#password").fill("PracticePass1!");
  await page.locator('[value="Log in"]').click();
  await expect(page.locator('a:has-text("Logout")')).toBeVisible();

  // save signed-in state to 'loggedInState.json'
  await page.context().storageState({ path: "loggedInState.json" });
  await browser.close();
}

export default globalSetup;
