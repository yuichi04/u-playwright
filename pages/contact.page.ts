import { Page, Locator } from "@playwright/test";

class ContactPage {
  private page: Page;
  submitBtn: Locator;
  nameInput: Locator;
  emailInput: Locator;
  phoneInput: Locator;
  messageTextarea: Locator;
  successTxt: Locator;

  constructor(page: Page) {
    this.page = page;
    this.nameInput = this.page.locator(".contact-name input");
    this.emailInput = this.page.locator(".contact-email input");
    this.phoneInput = this.page.locator(".contact-phone input");
    this.messageTextarea = this.page.locator(".contact-message textarea");
    this.submitBtn = this.page.locator("button[type=submit]");
    this.successTxt = page.locator('div[role="alert"]');
  }

  async navigate() {
    await this.page.goto("https://practice.sdetunicorns.com/contact");
  }

  async submitForm(
    name: string,
    email: string,
    phone: string,
    message: string
  ) {
    await this.nameInput.fill(name);
    await this.emailInput.fill(email);
    await this.phoneInput.fill(phone);
    await this.messageTextarea.fill(message);
    await this.submitBtn.click();
  }
}

export default ContactPage;
