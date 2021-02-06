const { I } = inject();

module.exports = {

  elements: {
    thankYou: '//*[@id="checkout_complete_container"]/h2',
    finish: '//*[@id="contents_wrapper"]/div[2]'
  },

  text: 'THANK YOU FOR YOUR ORDER'
}