import dotenv from 'dotenv';
import { env, getJsonFromFile } from './env/parseEnv';
import {
    GlobalConfig,
    HostsConfig,
    PagesConfig,
} from './env/global'


dotenv.config({ path: env('COMMON_CONFIG_FILE') });

const hostsConfig: HostsConfig = getJsonFromFile(env('HOST_URLS_PATH'));
console.log(`Host config = ${hostsConfig}`);
const pagesConfig: PagesConfig = getJsonFromFile(env('PAGE_URLS_PATH'));
console.log(`pages config = ${pagesConfig}`);

const worldParameters: GlobalConfig = {
    hostsConfig,
    pagesConfig,
}

const comman = `./src/features/**/*.feature \
                --require-module ts-node/register \
                --require ./src/step-definitions/**/**/*.ts \
                --world-parameters ${JSON.stringify(worldParameters)} \
                -f json:./reports/report.json \
                --format progress-bar`;

const dev = `${comman} --tags '@dev'`;
const smoke = `${comman} --tags '@smoke'`;
const regression = `${comman} --tags '@regression'`;

export {dev, smoke, regression}