import { cartReducer } from './cart/reducer';
import { totalNilaiReducer } from './nilai/reducer'; 
function rootReducer(state = {}, action = {}) {
 return {
   cart: cartReducer(state.todos, action),
   nilai: totalNilaiReducer(state.nilai, action)
 };
}
 
export default rootReducer;