import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "./cartConstants";

export const cartReducer = (state = {cartItems : []}, action) =>
{
    switch(action.type)
    {
        case CART_ADD_ITEM:
            const item = action.payload;
            const existItem = state.cartItems.find(x => x.product === item.product);
            if(existItem)
            {
                return{ 
                    ...state, 
                    cartItems: state.cartItems.map((x) => x.product === existItem.product ? item : x),
                };

            }
            else
            {
                return{...state, cartItems:[...state.cartItems, item] };
            }
        default:
            return state;

        case CART_REMOVE_ITEM:
            return {
                ...state,
                error: '',
                cartItems: state.cartItems.filter((x) => x.product !== action.payload),
            };
        case CART_SAVE_SHIPPING_ADDRESS:
            return { ...state, shippingAddress: action.payload };
        case CART_SAVE_PAYMENT_METHOD:
            return { ...state, paymentMethod: action.payload };
        case CART_ADD_ITEM_FAIL:
            return { ...state, error: action.payload };
        case CART_EMPTY:
            return { ...state, error: '', cartItems: [] };
        default:
            return state;
    }
}