import { Given } from "@cucumber/cucumber";
import { pageFixture } from "./hooks/browserContextFixture";
import { expect } from "@playwright/test";

Given(/^the contacts header should contains the text Contacts$/, async function() {
    const result = await pageFixture.page.textContent("h1.contacts");
    expect(result).toBe("Contacts");
});