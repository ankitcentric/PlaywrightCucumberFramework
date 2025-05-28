import { BeforeAll, Before, AfterAll, After} from '@cucumber/cucumber';
import { chromium, Browser, Page } from "@playwright/test";
import { pageFixture } from './browserContextFixture';

let browserInstance: Browser;

BeforeAll(async() => {
    browserInstance = await chromium.launch({
        headless:false,
    })
});

AfterAll(async() => {
    await browserInstance.close();
});

Before(async() => {
    pageFixture.context = await browserInstance.newContext();
    pageFixture.page = await pageFixture.context.newPage();
});

After(async() => {
    await pageFixture.page.close();
});