import axios from 'axios'

export const setUser = (data) => {
    return {
        type: 'SET_USER',
        payload: data,
    };
};
export const getUser = (data) => {
    return {
        type: "GET_BUDGET",
        payload: data,
    }
}
// export const deleteAccount = (data) => {
//     return {
//         type: 'DELETE-ACC',
//         payload: data
//     }
// }
export const stratDeleteAccount = (data, props, setLogin) => {
    console.log(props);
    return (dispatch) => {
        (
            async () => {
                try {
                    const deleteAcc = await axios.post('http://localhost:3025/api/account/delete', data, { headers: { "authorization": localStorage.getItem('token') } })
                    localStorage.removeItem('token')
                    setLogin(false)
                    props.history.push('/home')
                } catch (error) {
                    console.log(error);
                }

            }
        )()
    }
}
export const startGetUser = () => {
    return (dispatch) => {
        (
            async () => {
                try {
                    const user = await axios.get('http://localhost:3025/api/users/account', { headers: { "authorization": localStorage.getItem('token') } })
                    console.log('getting', user.data);
                    dispatch(setUser(user.data))

                } catch (error) {
                    alert(error)
                }
            }
        )()
    }
}

export const startRegisterUser = (formData, props) => {
    return (dispatch) => {
        (
            async () => {
                try {
                    const user = await axios.post('http://localhost:3025/api/user', formData)
                    dispatch(setUser(user.data))
                    props.history.push('/login')
                } catch (error) {
                    alert(error)
                }
            }
        )()
    };

};
export const startLogin = (formData, props, setlogin) => {
    return (dispatch) => {
        (
            async () => {
                try {
                    const user = await axios.post('http://localhost:3025/api/user/login', formData)
                    if (user.data.hasOwnProperty('error')) {
                        alert(user.data.error)
                    } else {
                        localStorage.setItem('token', user.data.token)
                        props.history.push('/home')
                        setlogin(true)
                    }

                } catch (error) {
                    alert(error.message)
                }
            }
        )()
    };
};
export const startAddBudget = (formData) => {
    //console.log(formData);
    return (dispatch) => {
        (
            async () => {
                try {
                    const updatedUser = await axios.put('http://localhost:3025/api/users/budget', formData, { headers: { "authorization": localStorage.getItem('token') } })
                    //console.log(updatedUser.data);
                    dispatch(setUser(updatedUser.data))
                } catch (error) {
                    alert(error.message)
                }
            }
        )()
    };
}



