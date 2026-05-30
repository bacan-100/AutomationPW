import { test, expect } from '@playwright/test';

test('Login Successfully @login @positive @regression @smoke', async ({ page }) => {
  await page.goto('https://www.emra.chat/login');
  await page.getByRole('textbox', { name: 'Email' }).fill('testingemrachat@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).fill('tester!3');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.waitForLoadState('networkidle');
  await expect(page.getByRole('heading', { name: 'Welcome to Emra! 🎉' })).toBeVisible();
  await page.getByRole('button', { name: 'Fadhli test 1 testingemrachat' }).click();
  await page.getByRole('menuitem', { name: 'Logout' }).click();
  await page.waitForLoadState('networkidle');
  await expect(page.getByText('Welcome Back')).toBeVisible();
});

test('Login with Invalid Credentials @login @negative @regression @smoke', async ({ page }) => {
  await page.goto('https://www.emra.chat/login');
  await page.getByRole('textbox', { name: 'Email' }).fill('testingemrachat@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).fill('12345678');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.waitForLoadState('networkidle');
  await expect(page.getByRole('listitem')).toBeVisible();
  await page.getByText('Invalid credentials').click();
});