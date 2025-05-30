import { Then } from "@cucumber/cucumber";
import { expect } from "playwright/test";

Then(/^the "([^"]*)" should contains the text "(.*)"$/, async function(elementKey: string, expectedText: string) {
     const {
        screen: {page},
    }=this;
    const result = await page.textContent("span[id='Automation_Practice'] span strong span span");
    console.log(` the ${elementKey} should contain the text- ${expectedText}`);
    expect(result).toBe(expectedText);
});

Then(/^the "([^"]*)" should be displayed$/, async function(elementKey: string) {
     const {
        screen: {page},
    }=this;
    console.log(` the ${elementKey} should Displayed`);
    const locator = page.locator("div.et_pb_menu__logo img")
    await expect(locator).toBeVisible();
});