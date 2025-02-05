import { test, expect } from '@playwright/test';
import { login } from '../tests/auth';
const config = require('../config'); // Import the config file

// Run this before each test
test.beforeEach(async ({ page }) => {
    await page.goto('https://www.saucedemo.com/'); // Navigate to the login page
    await login(page, config.validUsername, config.validPassword);
});

test('Add a product to the cart', async ({ page }) => {
    await page.click('[name="add-to-cart-sauce-labs-backpack"]');
    await page.click('[data-test="shopping-cart-link"');
    await expect(page.getByText('Sauce Labs Backpack')).toBeVisible();
});