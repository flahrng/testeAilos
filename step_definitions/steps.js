const { I, loginPage, inventoryPage, cartPage, checkoutCompletePage, checkoutUserInformationPage, checkoutOverviewPage} = inject();

Given('que eu acessei a tela de Login', () => {
    I.amOnPage('/');
});

When('eu preencho os dados do usuário bloqueado', () => {
    I.fillField(loginPage.fields.username, loginPage.users.lockedOutUser);
    I.fillField(loginPage.fields.password, loginPage.users.password);
});

When('confirmo o login', () => {
    I.click(loginPage.loginButton);
});

Then('é apresentada uma mensagem de usuario bloqueado', () => {    
    I.seeTextEquals(loginPage.text, loginPage.alert);
});

Given('que realizei o login', () => {
    I.amOnPage('/');
    I.waitForVisible(loginPage.fields.username);
    I.fillField(loginPage.fields.username, loginPage.users.standardUser);        
    I.waitForVisible(loginPage.fields.password);
    I.fillField(loginPage.fields.password, loginPage.users.password);
    I.click(loginPage.loginButton);
});

When('adiciono dois produtos ao carrinho', () => {
    I.click(inventoryPage.products.backpack.button);
    I.click(inventoryPage.products.bikeLight.button);
});

When('acesso a tela de carrinho', () => {
    I.click(inventoryPage.cart);
});

When('vou para a tela de checkout', () => {
    I.click(cartPage.buttons.checkout);
});

When('informo os dados do usuário', () => {
    I.waitForVisible(checkoutUserInformationPage.fields.firstName);
    I.fillField(checkoutUserInformationPage.fields.firstName, 'Fulano');    
    
    I.waitForVisible(checkoutUserInformationPage.fields.lastName);
    I.fillField(checkoutUserInformationPage.fields.lastName, 'De tal');    
    
    I.waitForVisible(checkoutUserInformationPage.fields.postalCode);
    I.fillField(checkoutUserInformationPage.fields.postalCode, '12345678');
});

When('confirmo os dados do usuário', () => {
    I.click(checkoutUserInformationPage.buttons.continue);
});

When('finalizo a compra', () => {
    I.click(checkoutOverviewPage.buttons.finish);
});

Then('a compra será realizada com sucesso', () => {
    I.seeTextEquals(checkoutCompletePage.text, checkoutCompletePage.elements.thankYou);
    I.seeElement(checkoutCompletePage.elements.finish);
});

When('adiciono todos os produtos ao carrinho', () => {
    I.click(inventoryPage.products.backpack.button);
    I.click(inventoryPage.products.bikeLight.button);
    I.click(inventoryPage.products.boltTshirt.button);
    I.click(inventoryPage.products.fleeceJacket.button);
    I.click(inventoryPage.products.onesie.button);
    I.click(inventoryPage.products.tshirtRed.button);
});

Then('serei redirecionado para a tela de overview', () => {    
    I.seeInCurrentUrl('/checkout-step-two.html');
    I.seeTextEquals(checkoutOverviewPage.texts.checkoutOverview, checkoutOverviewPage.elements.checkoutOverview);
});

Then('terei o valor total da compra', () => {
    I.seeTextEquals(checkoutOverviewPage.products.item1.price, checkoutOverviewPage.products.item1.priceElement);
    I.seeTextEquals(checkoutOverviewPage.products.item2.price, checkoutOverviewPage.products.item2.priceElement);
    I.seeTextEquals(checkoutOverviewPage.products.item3.price, checkoutOverviewPage.products.item3.priceElement);
    I.seeTextEquals(checkoutOverviewPage.products.item4.price, checkoutOverviewPage.products.item4.priceElement);
    I.seeTextEquals(checkoutOverviewPage.products.item5.price, checkoutOverviewPage.products.item5.priceElement);
    I.seeTextEquals(checkoutOverviewPage.products.item6.price, checkoutOverviewPage.products.item6.priceElement);
    I.seeTextEquals(checkoutOverviewPage.itemTotal, checkoutOverviewPage.elements.itemTotal);
    I.seeTextEquals(checkoutOverviewPage.taxValue, checkoutOverviewPage.elements.tax);
    I.seeTextEquals(checkoutOverviewPage.total , checkoutOverviewPage.elements.total);
});
