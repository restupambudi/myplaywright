import { Page } from '@playwright/test';
import { config } from './config'; // Import credentials from config.ts

export async function login(page: Page) {
    await page.goto('https://www.saucedemo.com/');
    await page.fill('[data-test="username"]', config.validUsername);
    await page.fill('[data-test="password"]', config.validPassword);
    await page.click('[data-test="login-button"]');
}
