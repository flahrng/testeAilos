const { I } = inject();

module.exports = {

  buttons: {
    cancel: '//*[@id="checkout_info_container"]/div/form/div[2]/a',
    continue: '//*[@id="checkout_info_container"]/div/form/div[2]/input'
  },

  fields: {
    firstName: '//*[@id="first-name"]',
    lastName: '//*[@id="last-name"]',
    postalCode: '//*[@id="postal-code"]'
  }
}