// @ts-check
const { test, expect } = require('@playwright/test');

test('has title', async ({ page }) => {
  await page.goto('http://localhost:9000');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/My Workshop Blog/);
});

test('blog post contains submit comment', async ({ page }) => {
  await page.goto('http://localhost:9000');

  // Click the example post
  await page.getByText(/Example Post/).click();

  await page.locator('#i-comment-name').click();
  await page.locator('#i-comment-name').fill('test name');
  await page.locator('#i-comment-field').click();
  await page.locator('#i-comment-field').fill('test comment');
  await page.getByRole('button', { name: 'Submit Comment' }).click();
  await page.getByText('test name: test comment').click();
});
