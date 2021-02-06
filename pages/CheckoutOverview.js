const { I } = inject();

module.exports = {

  buttons: {
    cancel: '//*[@id="checkout_summary_container"]/div/div[2]/div[8]/a[1]',
    finish: '//*[@id="checkout_summary_container"]/div/div[2]/div[8]/a[2]'
  },

  elements: {
    cartNumber: '//*[@id="shopping_cart_container"]/a/span',
    itemTotal: '//*[@id="checkout_summary_container"]/div/div[2]/div[5]',
    tax: '//*[@id="checkout_summary_container"]/div/div[2]/div[6]',
    total: '//*[@id="checkout_summary_container"]/div/div[2]/div[7]',
    checkoutOverview: '//*[@id="contents_wrapper"]/div[2]'
  },

  products: {
    item1: {      
      priceElement: '//*[@id="checkout_summary_container"]/div/div[1]/div[3]/div[2]/div[2]',
      price: '$29.99'
    },
    item2: {
      priceElement: '//*[@id="checkout_summary_container"]/div/div[1]/div[4]/div[2]/div[2]',
      price: '$9.99'
    },
    item3: {
      priceElement: '//*[@id="checkout_summary_container"]/div/div[1]/div[5]/div[2]/div[2]',
      price: '$15.99'
    },
    item4: {
      priceElement: '//*[@id="checkout_summary_container"]/div/div[1]/div[6]/div[2]/div[2]',
      price: '$49.99'
    },
    item5: {
      priceElement: '//*[@id="checkout_summary_container"]/div/div[1]/div[7]/div[2]/div[2]',
      price: '$7.99'
    },
    item6: {
      priceElement: '//*[@id="checkout_summary_container"]/div/div[1]/div[8]/div[2]/div[2]',
      price: '$15.99'
    }
  },
  
  itemTotal: 'Item total: $129.94',
  taxValue: 'Tax: $10.40',
  total: 'Total: $140.34',

  texts: {
    checkoutOverview: 'Checkout: Overview'
  }
}