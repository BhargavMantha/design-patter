import Environment from './src/environments/environment';
import { logger } from "@deliverysolutions/logger";
declare global {
    var environment: Environment;
    var logger: any | Console;
}

export const setGlobalEnvironment = (environment: Environment, loggerValue: any | Console = logger): void => {
    global.environment = environment;
    global.logger = loggerValue;
};
