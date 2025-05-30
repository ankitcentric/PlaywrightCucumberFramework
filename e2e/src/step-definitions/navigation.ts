import { Given } from "@cucumber/cucumber";

Given(/^I am on the "([^"]*)" Page$/, async function(pageID: string) {
    const {
        screen: {page},
    }=this;
    await page.goto("https://ultimateqa.com/automation", {timeout: 60000, waitUntil: "domcontentloaded"});
    console.log(`I am on the ${pageID} page`)
})