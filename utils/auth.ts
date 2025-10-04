import { Page } from '@playwright/test';
import { config } from './config'; // Import credentials from config.ts
import { loadConfig } from './configLoader';

export async function login(page: Page) {
    const config = loadConfig(); // Load environment-specific config
    await page.goto(`${config.baseUrl}`); // Use baseUrl from config

    await page.fill('[data-test="username"]', config.validUsername);
    await page.fill('[data-test="password"]', config.validPassword);
    await page.click('[data-test="login-button"]');
}
