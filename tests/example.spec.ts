import { test, expect } from '@playwright/test';

// test('has title', async ({ page }) => {
//   await page.goto('https://playwright.dev/');
//
//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle(/Playwright/);
// });
//
// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');
//
//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();
//
//   // Expects the URL to contain intro.
//   await expect(page).toHaveURL(/.*intro/);
// });

test('/auth/login/email', async ({ page, context, baseURL, request }) => {

  const response = await request.post(`https://calday-stage.herokuapp.com/api/v1/auth/login/email`, {data:{
      "email": "yuriigospodaryshyn+5@gmail.com",
      "password": "123456"
    }     });
  await expect(response.status()).toEqual(200)

  const responseBody = JSON.parse(await response.text())
    console.log(responseBody)
    console.log('asdsadasdasdasd')
});