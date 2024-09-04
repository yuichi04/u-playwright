import { test, expect } from "@playwright/test";
import CartPage from "../pages/cart.page";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

test.describe("Upload File", () => {
  let cartPage: CartPage;
  test("should upload a test file", async ({ page }) => {
    cartPage = new CartPage(page);

    // Open url
    await cartPage.navigate();

    // provice test file path
    const filePath = path.join(__dirname, "../data/dummy.pdf");

    // upload test file
    await cartPage.uploadComponent().uploadFile(filePath);

    // assertion
    await expect(cartPage.uploadComponent().successTxt).toContainText(
      "uploaded successfully",
      { timeout: 10000 }
    );
  });
});
