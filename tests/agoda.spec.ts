import { test, expect } from '@playwright/test';

test('Test 1', async ({ page }) => {
    await page.goto('https://www.agoda.com');
    await page.getByRole('heading', { name: 'Flights', exact: true }).click();
    await page.getByRole('combobox', { name: 'Flying from' }).fill('jakarta');
    await page.getByText('Jakarta, Indonesia').click();
    await page.getByRole('combobox', { name: 'Flying to' }).fill('singapore');
    await page.getByText('Singapore, Singapore').click();
    await page.getByRole('button', { name: 'Fri Oct 10' }).click();
    await page.getByRole('button', { name: 'Economy', exact: true }).click();
    await page.locator('[data-test="SearchButtonBox"]').click();
    await page.waitForLoadState('networkidle');
    await expect(page.locator('#agoda-splash div')).toBeHidden();
    await expect(page.getByText('Recommended')).toBeVisible();

    const schedules = page.locator('.a2acc-box.a2acc-bg-generic-base-transparent.a2acc-fill-inherit.a2acc-text-inherit.a2acc-items-center.a2acc-cursor-pointer.a2acc-flex.a2acc-px-0.a2acc-border-0   '); // returns Locator, not ElementHandle

    const count = await schedules.count();
    for (let i = 0; i < count; i++) {
        const priceText = await schedules.nth(i).locator('.sc-hLseeU.Typographystyled__TypographyStyled-sc-1uoovui-0.bKjorE.gPcWqz').innerText();
        const normalizedPrice = priceText.replace(/[^\d]/g, '');

        if (normalizedPrice === '1013063') {
            await schedules.nth(i).locator('.sc-dmqHEX.Iconstyled__IconStyled-sc-1fugtov-0.dKHpjo.fhrXgC').click();
            await page.getByTestId('flight-details-expand').getByRole('button', { name: 'Select' }).click();
            console.log('Clicked schedule with price 1.500.000 IDR');
            break; // remove this if you want to click all
        }
    }
});