import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import userReducer from '../reducers/userReducers'
import categoryReducer from '../reducers/categoryReducers'
import expenseReducers from '../reducers/expenseReducers'
const configStore = () => {
    const store = createStore(combineReducers({
        user: userReducer,
        category: categoryReducer,
        expenses: expenseReducers
    }), applyMiddleware(thunk))
    return store

}
export default configStore

