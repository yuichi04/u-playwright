import { Page } from "@playwright/test";
import UploadComponent from "./component/upload.component";

class CartPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigate() {
    await this.page.goto("https://practice.sdetunicorns.com/cart/");
  }

  uploadComponent() {
    return new UploadComponent(this.page);
  }
}

export default CartPage;
