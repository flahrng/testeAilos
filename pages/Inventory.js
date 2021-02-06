const { I } = inject();

module.exports = {

  cart: '//*[@id="shopping_cart_container"]',
  products: {
    backpack:{
      button: '//*[@id="inventory_container"]/div/div[1]/div[3]/button',
      price: '29.99'      
    },
    bikeLight: {
      button: '//*[@id="inventory_container"]/div/div[2]/div[3]/button',
      price: '9.99'
    },
    boltTshirt: {
      button: '//*[@id="inventory_container"]/div/div[3]/div[3]/button',
      price: '15.99'
    },
    fleeceJacket: {
      button: '//*[@id="inventory_container"]/div/div[4]/div[3]/button',
      price: '49.99'
    },
    onesie: {
      button: '//*[@id="inventory_container"]/div/div[5]/div[3]/button',
      price: '7.99'
    },
    tshirtRed: {
      button: '//*[@id="inventory_container"]/div/div[6]/div[3]/button',
      price: '15.99'
    }
  },
  text: '//*[@id="inventory_filter_container"]/div'
}