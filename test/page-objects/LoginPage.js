class LoginPage {
    get emailField() { return $('#email'); }
    get passwordField() { return $('#password'); }
    get loginButton() { return $('button[type="submit"]'); }

    async login(email, password) {
        await this.emailField.setValue(email);
        await this.passwordField.setValue(password);
        await this.loginButton.click();
    }
}

export default new LoginPage();