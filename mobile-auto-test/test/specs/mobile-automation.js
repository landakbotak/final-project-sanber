const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

describe('Diet Meal App Test', () => {
    it('should set the username', async () => {
        let el2 = await browser.$(`android=new UiSelector().resourceId("com.fghilmany.dietmealapp:id/et_name")`);
        if (!(await el2.isDisplayed())) {
            el2 = await browser.$('//android.widget.EditText[@resource-id="com.fghilmany.dietmealapp:id/et_name"]');
        }
        await el2.setValue('Bianca');
    });

    it('should set the weight', async () => {
        let el3 = await browser.$(`android=new UiSelector().resourceId("com.fghilmany.dietmealapp:id/et_weight")`);
        if (!(await el3.isDisplayed())) {
            el3 = await browser.$('//android.widget.EditText[@resource-id="com.fghilmany.dietmealapp:id/et_weight"]');
        }
        await el3.setValue('50');
    });

    it('should set the height', async () => {
        // Coba dengan selector resourceId
        let el4 = await browser.$(`android=new UiSelector().resourceId("com.fghilmany.dietmealapp:id/et_height")`);
        if (!(await el4.isDisplayed())) {
            el4 = await browser.$('//android.widget.EditText[@resource-id="com.fghilmany.dietmealapp:id/et_height"]');
        }
        await el4.setValue('155');
    });

    it('should select a radio button', async () => {
        let el5 = await browser.$(`android=new UiSelector().resourceId("com.fghilmany.dietmealapp:id/rb_female")`);
        await el5.click();
    });

    it('should click the Submit button', async () => {
        let el6 = await browser.$(`android=new UiSelector().resourceId("com.fghilmany.dietmealapp:id/bt_next")`);
        await el6.click();
    });

    it('should select a radio button', async () => {
        let el7 = await browser.$(`android=new UiSelector().resourceId("com.fghilmany.dietmealapp:id/rb_very_very_low")`);
        await el7.click();
    });

    it('should click the Submit button', async () => {
        let el8 = await browser.$(`android=new UiSelector().resourceId("com.fghilmany.dietmealapp:id/bt_finish")`);
        await el8.click();
    });
    
});


// let el1 = await driver.$("~Diet Meal App");
// await el1.click();
// let el2 = await driver.$("com.fghilmany.dietmealapp:id/et_name");
// await el2.click();
// await el2.setValue("Bianca");
// let el3 = await driver.$("com.fghilmany.dietmealapp:id/et_weight");
// await el3.click();
// await el3.setValue("50");
// let el4 = await driver.$("com.fghilmany.dietmealapp:id/et_height");
// await el4.click();
// await el4.setValue("155");
// let packageName = await driver.getCurrentPackage();
// let caps = await driver.getSession();
// let el5 = await driver.$("com.fghilmany.dietmealapp:id/rb_female");
// await el5.click();
// let el6 = await driver.$("com.fghilmany.dietmealapp:id/bt_next");
// await el6.click();
// let el7 = await driver.$("com.fghilmany.dietmealapp:id/rb_very_very_low");
// await el7.click();
// let el8 = await driver.$("com.fghilmany.dietmealapp:id/bt_finish");
// await el8.click();
// let el9 = await driver.$("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[1]/android.view.ViewGroup/android.widget.TextView");
// await el9.click();