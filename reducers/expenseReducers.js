const initialState = { errors: '', data: [] }
const expenseReducers = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_EXPENSE': {
            return { ...state, data: action.payload }
        }
        case 'SET_DELETE_EXPENSE': {
            return { ...state, data: action.payload }
        }
        case 'ADD_EXPENSE': {

            return { ...state, data: [...state.data, action.payload] }
        }
        case 'REMOVE_EXPENSE': {
            return {
                ...state, data: state.data.filter((ele) => {
                    return ele._id !== action.payload._id
                })
            }
        }
        default: {
            return { ...state }

        }
    }
}
export default expenseReducers