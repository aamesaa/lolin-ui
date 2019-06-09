export default {
  api: {
    base_path: 'http://localhost:8080',
    login: '/login',
    user: '/user',
    sellItemsByUser: '/items/{userId}',
    sellItemDetail: '/items/detail/{itemId}',
    item: '/items',
    item_single: '/item/{itemId}',
    buyItem: '/items/buy/{userId}',
    bid: '/items/bid',


  },
  getApiPath: function (apiPath) {
    return this.api.base_path + apiPath
  },
  app: {
    pages: {
      sell: '/sell',
      sell_history: '/sell/history',
      buy: '/buy',
      buy_history: '/buy/history',
      register: '/register'
    }
  }
};
