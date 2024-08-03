class RegisterPage {
    get link() { return $('a[href="/register"]') }
    get namaToko() { return $('#name'); }
    get email() { return $('#email'); }
    get password() { return $('#password'); }
    get registerBtn() { return $('button[type="submit"]'); }

    async clickRegisterLink() {
        await this.link.click();
    }
    
    async registerForm(name, email, password) {
        await this.namaToko.setValue(name);
        await this.email.setValue(email);
        await this.password.setValue(password);
        await this.registerBtn.click();
    }
}

export default new RegisterPage();
