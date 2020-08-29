import createDataContext from './createDataContext';
import jsonServer from '../api/jsonServer';

const listReducer = (state, action) => {
  switch (action.type) {
    case 'get_shoppinglist':
      return action.payload;
    case 'delete_shoppinglistitem':
      return state.filter(shoppingListItem => shoppingListItem.id !== action.payload);
    case 'add_shoppinglistitem':
      return [
        ...state,
        {
          quantity: action.payload.quantity,
          name: action.payload.name,
          id: action.payload.id
        }
      ];
    default:
      return state;
  }
};

const getShoppingList = dispatch => {
  return async () => {
    
    const response = await jsonServer.get('/shoppinglist');

    dispatch({ type: 'get_shoppinglist', payload: response.data });
  };
};


const addShoppingListItem = dispatch => {
  return async (name, quantity, callback) => {
    var id = new Date().getTime();
    
    const response = await jsonServer.post('/shoppinglist', { name, quantity, id });
  
    dispatch({ type: 'add_shoppinglistitem', payload: response.data });
  
  };
};

const deleteShoppingListItem = dispatch => {
  return async (id, callback) => {
    await jsonServer.delete(`/shoppinglist/${id}`);

    dispatch({ type: 'delete_shoppinglistitem', payload: id });

    getShoppingList;
  };
};


export const { Context, Provider } = createDataContext(
  listReducer,
  { addShoppingListItem , deleteShoppingListItem , getShoppingList },
  []
);