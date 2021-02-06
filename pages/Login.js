const { I } = inject();

module.exports = {

  alert: '//*[@id="login_button_container"]/div/form/h3',

  fields: {
    username: '//*[@id="user-name"]',
    password: '//*[@id="password"]'    
  },

  loginButton: '//*[@id="login-button"]',

  text: 'Epic sadface: Sorry, this user has been locked out.',

  users: {
    standardUser:'standard_user',
    lockedOutUser:'locked_out_user',
    problemUser: 'problem_user',
    performanceGlitchUser: 'performance_glitch_user',
    password: 'secret_sauce'
  }
}