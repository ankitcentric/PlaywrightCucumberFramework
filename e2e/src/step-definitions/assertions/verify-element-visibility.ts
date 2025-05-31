import { Then } from "@cucumber/cucumber";
import { expect } from "playwright/test";

Then(/^the "([^"]*)" should contains the text "(.*)"$/, async function(elementKey: string, expectedText: string) {
     const {
        screen: {page},
    }=this;
    const result = await page.textContent("h1.contacts");
    console.log(`the ${elementKey} should contain the text- ${expectedText}`);
    expect(result).toBe(expectedText);
});

Then(/^the "([^"]*)" should be displayed$/, async function(elementKey: string) {
     const {
        screen: {page},
    }=this;
    console.log(`the ${elementKey} should Displayed`);
    const locator = page.locator("[data-id='header-logo']")
    await expect(locator).toBeVisible();
});