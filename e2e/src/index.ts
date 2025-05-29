import dotenv from 'dotenv';
import { env } from './env/parseEnv';

dotenv.config({ path: env('COMMON_CONFIG_FILE') });

const comman = `./src/features/**/*.feature \
                --require-module ts-node/register \
                --require ./src/step-definitions/**/**/*.ts \
                -f json:./reports/report.json \
                --format progress-bar`;

const dev = `${comman} --tags '@dev'`;
const smoke = `${comman} --tags '@smoke'`;
const regression = `${comman} --tags '@regression'`;

export {dev, smoke, regression}