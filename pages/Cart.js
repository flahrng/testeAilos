const { I } = inject();

module.exports = {

  buttons: {
    continueShopping: '//*[@id="cart_contents_container"]/div/div[2]/a[1]',
    checkout: '//*[@id="cart_contents_container"]/div/div[2]/a[2]'
  },

  texts: {
    item1Description: '//*[@id="item_4_title_link"]/div',
    item2Description: '//*[@id="item_0_title_link"]/div',
    cartNumber: '//*[@id="shopping_cart_container"]/a/span'
  }
}