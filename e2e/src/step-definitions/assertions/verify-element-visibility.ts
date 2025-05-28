import { Then } from "@cucumber/cucumber";
import { pageFixture } from "../hooks/browserContextFixture";
import { expect } from "playwright/test";

Then(/^I am on the Home Page$/, async function() {
    await pageFixture.page.goto("https://hub.testingtalks.com.au/");
})