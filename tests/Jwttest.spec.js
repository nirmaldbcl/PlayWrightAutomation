import { request, test, expect } from '@playwright/test';

let token;

test.beforeAll(async () => {
  const apiContext = await request.newContext();

  const response = await apiContext.post('https://api.example.com/login', {
    data: {
      username: 'testuser',
      password: 'password123'
    }
  });

  expect(response.ok()).toBeTruthy();

  const responseBody = await response.json();
  token = responseBody.token; // JWT token
});

test('API test with JWT', async ({ request }) => {
  const response = await request.get('https://api.example.com/users', {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  expect(response.status()).toBe(200);
});
