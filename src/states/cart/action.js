function addCartActionCreator({ id, count }) {
    return {
      type: 'ADD_CART',
      payload: {
        id,
        count
      }
    };
}
   
function deleteCartActionCreator(id) {
    return {
      type: 'DELETE_CART',
      payload: {
        id
      }
    };
}
 
export { addCartActionCreator, deleteCartActionCreator };