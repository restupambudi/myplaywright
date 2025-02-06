import { test, expect } from '@playwright/test';
// const config = require('../config'); // Import the config file
import { config } from '../utils/config'; // Import credentials from config.ts

// Run this before each test
test.beforeEach(async ({ page }) => {
    await page.goto('https://www.saucedemo.com/'); // Navigate to the login page
});

test('Login with valid credentials', async ({ page }) => {
    await page.fill('[data-test="username"]', config.validUsername);
    await page.fill('[data-test="password"]', config.validPassword);
    await page.click('[data-test="login-button"]');
    await expect(page.getByText('Products')).toBeVisible();
});

test('Login with invalid credentials', async ({ page }) => {
    await page.fill('[data-test="username"]', config.invalidUsername);
    await page.fill('[data-test="password"]', config.invalidPassword);
    await page.click('[data-test="login-button"]');
    await expect(page.getByText('Epic sadface: Username and password do not match any user in this service')).toBeVisible();
});
