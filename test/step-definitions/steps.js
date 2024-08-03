import LoginPage from '../page-objects/LoginPage';
import RegisterPage from '../page-objects/RegisterPage';
const { Given, When, Then } = require('@cucumber/cucumber');
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

Given('I am on the login page', async function () {
    await browser.url('https://kasirdemo.vercel.app/');
    await delay(3000);
});

When('I click register link {string}', async function (link) {
    await RegisterPage.clickRegisterLink(link);
    await delay(3000);
});

When('I input nama toko {string} and email {string} and password {string}', async function (name, email, password) {
    await RegisterPage.registerForm(name, email, password);
})

Then ('I should see the Login Page', async function () {
    await expect(browser).toHaveUrlContaining('/login');
    await delay(3000);
})

When('I login with email {string} and password {string}', async function (email, password) {
    await LoginPage.login(email, password);
});

Then('I should see the dashboard', async function () {
    await expect(browser).toHaveUrlContaining('/dashboard');
});

