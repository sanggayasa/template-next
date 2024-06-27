function cartReducer(cart = [], action = {}) {
    if (action.type === 'ADD_CART') {
      return [...cart, action.payload];
    }
   
    if (action.type === 'DELETE_CART') {
      return cart.filter((cart) => cart.id !== action.payload.id);
    }
   
    return cart;
}
   
export { cartReducer };