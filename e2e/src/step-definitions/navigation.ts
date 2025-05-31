import { Given } from "@cucumber/cucumber";
import { PageID } from "../env/global";
import { navigateToPage } from "../utils/navigation-behavior";

Given(/^I am on the "([^"]*)" Page$/, async function(pageID: PageID) {
    const {
        screen: {page},
        globalConfig,
    }=this;
    await navigateToPage(page, pageID, globalConfig)
    console.log(`I am on the ${pageID} page`)
})