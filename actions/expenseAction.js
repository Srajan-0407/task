import axios from "axios";
// import Swal from 'sweetalert2'
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const setExpense = (data) => {
    return {
        type: "SET_EXPENSE",
        payload: data,
    };
};
export const undoExpense = (data) => {
    console.log(data);
    return {
        type: "undoExpense",
        payload: data,
    };
};
export const setDeleteExpense = (data) => {
    return {
        type: "SET_DELETE_EXPENSE",
        payload: data,
    };
};
export const addExpense = (data) => {
    return {
        type: "ADD_EXPENSE",
        payload: data,
    };
};
export const removeExpense = (data) => {
    return {
        type: "REMOVE_EXPENSE",
        payload: data,
    };
};
export const updateExpense = (data) => {
    return {
        type: "UPDATE_EXPENSE",
        payload: data,
    };
};
export const startSetExpenses = () => {
    return (dispatch) => {
        (async () => {
            try {
                const expense = await axios.get(
                    "http://localhost:3025/api/show/expense",
                    { headers: { authorization: localStorage.getItem("token") } }
                );
                //  console.log(expense.data);
                dispatch(setExpense(expense.data));
            } catch (error) { }
        })();
    };
};
export const startAddExpenses = (formData, reset) => {
    return (dispatch) => {
        (async () => {
            try {
                const addExpenses = await axios.post(
                    "http://localhost:3025/api/add/expense",
                    formData,
                    { headers: { authorization: localStorage.getItem("token") } }
                );
                // console.log(addExpenses);
                dispatch(addExpense(addExpenses));
                reset();
                toast.success("Added expense", {
                    position: "top-right",
                    autoClose: 390,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
            } catch (error) {
                alert(error.messagae);
            }
        })();
    };
};
export const stratRemoveExpense = (id) => {
    return (dispatch) => {
        (async () => {
            try {
                const removeExp = await axios.delete(
                    `http://localhost:3025/api/remove/${id}`,
                    { headers: { authorization: localStorage.getItem("token") } }
                );
                dispatch(removeExpense(removeExp.data));
                toast.error("Deleted", {
                    position: "top-right",
                    autoClose: 190,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
            } catch (error) {
                alert(error.messagae);
            }
        })();
    };
};
export const stratUndoExpense = (id) => {
    return (dispatch) => {
        (async () => {
            try {
                const UndoExp = await axios.put(
                    `http://localhost:3025/api/undo/${id}`, {},
                    { headers: { authorization: localStorage.getItem("token") } }
                );
                console.log(UndoExp);
                dispatch(undoExpense(UndoExp.data));
                toast.success("Restored", {
                    position: "top-right",
                    autoClose: 190,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
            } catch (error) {
                alert(error.messagae);
            }
        })();
    };
};
export const startGetDeletedExpense = () => {
    return (dispatch) => {
        (
            async () => {
                try {
                    const exp = await axios.get('http://localhost:3025/api/showDeleted/expense', { headers: { authorization: localStorage.getItem("token") } })
                    console.log(exp);
                    dispatch(setDeleteExpense(exp.data))
                } catch (error) {
                    console.log(error);
                }
            }
        )()
    }
}
export const startUpdateExpense = (id, data) => {
    return (dispatch) => {
        (async () => {
            try {
                const updateExpense = await axios.put(
                    `http://localhost:3025/api/update/${id}`,
                    data,
                    { headers: { authorization: localStorage.getItem("token") } }
                );
                console.log(updateExpense);
            } catch (error) {
                alert(error.messagae);
            }
        })();
    };
};
