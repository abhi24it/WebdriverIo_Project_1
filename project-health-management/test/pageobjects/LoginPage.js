class LoginPage {
	get inputUsername() { return $('#username'); }
	get inputPassword() { return $('#password'); }
	get btnLogin() { return $('button[type="submit"]'); }
	get errorMessage() { return $('.error, .error-message'); }

	open() {
		return browser.url('/login');
	}

	async login(username, password) {
		await (await this.inputUsername).setValue(username);
		await (await this.inputPassword).setValue(password);
		await (await this.btnLogin).click();
	}

	async getErrorText() {
		const el = await this.errorMessage;
		return el.isExisting() ? el.getText() : '';
	}
}

module.exports = new LoginPage();