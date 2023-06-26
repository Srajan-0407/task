import axios from "axios";
// import Swal from 'sweetalert2'
import { toast } from "react-toastify";
export const addCategory = (data) => {
    return {
        type: "ADD_CATEGORY",
        payload: data,
    };
};
export const setCategory = (data) => {
    return {
        type: "SET_CATEGORY",
        payload: data,
    };
};
export const deleteCategory = (data) => {
    return {
        type: "DELETE_CATEGORY",
        payload: data
    }
}
export const stratDeleteCategory = (id) => {
    return (dispatch) => {
        (
            async () => {
                try {
                    const res = await axios.delete(`http://localhost:3025/api/category/delete/${id}`, {
                        headers: { authorization: localStorage.getItem("token") },
                    })
                    dispatch(deleteCategory(res.data))
                } catch (error) {
                    alert(error)
                }
            }
        )()
    }
}
export const startSetCategory = () => {
    return (dispatch) => {
        (async () => {
            try {
                const category = await axios.get("http://localhost:3025/api/category", {
                    headers: { authorization: localStorage.getItem("token") },
                });
                //console.log(category);
                dispatch(setCategory(category.data));
            } catch (error) {
                alert(error.messagae);
            }
        })();
    };
};
export const startAddCategory = (formData, reset) => {
    return (dispatch) => {
        (async () => {
            try {
                const category = await axios.post(
                    "http://localhost:3025/api/add/category",
                    formData,
                    { headers: { authorization: localStorage.getItem("token") } }
                );
                reset();
                dispatch(addCategory(category.data));
                toast.success("Added category", {
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
                console.log(error);
            }
        })();
    };
};
