const initialState = { errors: '', data: [] }

const categoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_CATEGORY': {
            return { ...state, data: action.payload }
        }
        case 'ADD_CATEGORY': {
            return { ...state, data: [...state.data, action.payload] }
        }
        case 'DELETE_CATEGORY': {
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
export default categoryReducer