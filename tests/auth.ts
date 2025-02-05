import { Page } from '@playwright/test';

export async function login(page: Page, username: string, password: string) {
    await page.fill('input[name="username"]', username);
    await page.fill('input[name="password"]', password);
    await page.click('[data-test="login-button"]');
}
