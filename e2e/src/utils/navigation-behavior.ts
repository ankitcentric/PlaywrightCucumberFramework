import { Page } from "playwright";
import { GlobalConfig, PageID } from "../env/global";

export const navigateToPage = async(

    page: Page,
    pageId: PageID,
    { pagesConfig, hostsConfig }: GlobalConfig
):Promise<void> => {
    const {
        UI_AUTOMATION_HOST: hostName = 'localhost',   // if UI_AUTOMATION_HOST is not define in env then it's value will be localhost
    } = process.env

    const hostPath = hostsConfig[`${hostName}`];
    console.log(`Host path = ${hostPath}`);
    const url = new URL(hostPath);
    console.log(`url = ${url}`);
    const pagesConfigItem = pagesConfig[pageId];
    console.log(`pagesConfigItem = ${JSON.stringify(pagesConfigItem)}`);
    url.pathname = pagesConfigItem.route;
    console.log(`pages route = ${JSON.stringify(url.pathname)}`);
    await page.goto(url.href);
}