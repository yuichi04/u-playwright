import { Locator, Page } from "@playwright/test";

class HomePage {
  page: Page;
  getStartedBtn: Locator;
  homeLink: Locator;
  headingText: Locator;
  searchIcon: Locator;
  navLinks: Locator;

  constructor(page: Page) {
    this.page = page;
    this.getStartedBtn = page.locator("#get-started");
    this.headingText = page.locator("text=Think different. Make different.");
    this.homeLink = page.locator('#primary-menu:has-text("Home")');
    this.searchIcon = page.locator(
      '//*[@id="primary-menu"]//*[@class="tg-icon tg-icon-search"]'
    );
    this.navLinks = page.locator("#primary-menu li[id*=menu]");
  }
}

export default HomePage;
