export const initialState = {
    basket: [],
    user: null,
}; 
export const getBasketTotal = (basket) =>
    basket?.reduce((amount, item) => item.price + amount, 0);
    
const reducer=(state, action) =>{
    console.log(action);
    // action.type is listening to event
    switch(action.type){
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }
            break;
        case 'ADD_TO_BASKET':
            // Logic for adding item to basket
            return {
                ...state,
            basket: [...state.basket, action.item],}
            break;
        case 'REMOVE_FROM_BASKET':
            // Logic for removing item from basket
            return {state}
            break;
        default:
            return state;
    }
};
export default reducer;