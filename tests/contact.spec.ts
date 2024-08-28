import { test, expect } from "@playwright/test";

test.describe("Contact", () => {
  test("Fill contact form and verify success message", async ({ page }) => {
    // open url
    await page.goto("https://practice.sdetunicorns.com/contact");

    // fill out the inputs fields
    await page.locator(".contact-name input").fill("Test Name");
    await page.locator(".contact-email input").fill("test@mail.com");
    await page.locator(".contact-phone input").fill("123456789");
    await page.locator(".contact-message textarea").fill("This is a test message");

    // click submit
    await page.locator("button[type=submit]").click();

    // verify success message
    const successAlert = page.locator('div[role="alert"]');
    await expect(successAlert).toHaveText("Thanks for contacting us! We will be in touch with you shortly")
  });
});
