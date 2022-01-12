import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import thunk  from 'redux-thunk'
import { categoryReducer } from './categoryDucks';

const rootReducer = combineReducers({
    categories: categoryReducer
})

// Verificar si la extensión redux_devs_tools está instalada.
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function generateStore(){
    const store = createStore(rootReducer, composeEnhancers( applyMiddleware(thunk) ))
    return store
}