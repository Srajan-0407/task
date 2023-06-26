import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    startAddBudget,
    startGetUser,
    stratDeleteAccount,
}
    from "../actions/userActions";
import { startSetCategory, stratDeleteCategory } from "../actions/categoryActions";
import { startSetExpenses } from "../actions/expenseAction";
import { toast, ToastContainer } from "react-toastify";
// import DeletedExpense from "./DeletedExpense";
const Budget = (props) => {
    const { historyProps } = props;
    console.log(props);
    const [deleteAcc, setDeleteAcc] = useState(false);
    const [pass, setPass] = useState("");
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(startGetUser());
        dispatch(startSetCategory());
        dispatch(startSetExpenses());
    }, [dispatch]);

    const [amt, setAmt] = useState("");
    const user = useSelector((state) => {
        return state.user.data;
    });
    const expesne = useSelector((state) => {
        return state.expenses.data;
    });
    console.log(expesne);
    const res = expesne.reduce((iv, cv) => {
        return iv + cv.amount;
    }, 0);

    //  console.log(user);
    const categorys = useSelector((state) => state.category.data);
    //console.log(user);

    const handleSubmit = (e) => {
        e.preventDefault();
        const budgetAmt = { budget: Number(amt) };
        dispatch(startAddBudget(budgetAmt));
    };
    const handleAccountDelete = (e) => {
        e.preventDefault();
        if (pass.length === 0) {
            toast.warn("Please enter password", {
                position: "top-right",
                autoClose: 290,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        } else {
            const inputPass = {
                password: pass,
            };
            console.log(inputPass);
            dispatch(stratDeleteAccount(inputPass, historyProps, props.setLogin));
        }
    };
    const handleCategory = (id) => {
        dispatch(stratDeleteCategory(id))
    };
    let count = 1;
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className="mt-4">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label>Add Budget:</label>
                                <div className="input-group">
                                    <input
                                        type="text"
                                        id="budgetInput"
                                        className="form-control"
                                        value={amt}
                                        onChange={(e) => setAmt(e.target.value)}
                                    />
                                    <div className="input-group-append">
                                        <button className="btn btn-info" type="submit">
                                            Submit
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="card mt-4 shadow">
                        <div className="card-body">
                            <h3>TOTAL: {user.budget}</h3>
                            <h3>USED: {res}</h3>
                            <h3>REMANING: {user.budget - res}</h3>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <h3>Categories</h3>
                    <table className="table table-striped table-bordered shadow">
                        <thead>
                            <tr>
                                <th>Sl.NO</th>
                                <th>Category name</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {categorys.map((ele, i) => (
                                <tr key={i}>
                                    <td>{count++}</td>
                                    <td>{ele.name}</td>
                                    <td>
                                        <button
                                            className="btn btn-sm btn-danger"
                                            onClick={() => {
                                                handleCategory(ele._id);
                                            }}
                                        >
                                            X
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <input
                        type="submit"
                        className="btn btn-sm bg-danger"
                        value="delete"
                        onClick={() => {
                            setDeleteAcc(true);
                        }}
                    />
                    <br />
                    {deleteAcc && (
                        <form onSubmit={handleAccountDelete}>
                            <input
                                type="text"
                                placeholder="Enter Password"
                                className="form-contorl"
                                onChange={(e) => {
                                    setPass(e.target.value);
                                }}
                            />
                            <br />
                            <input type="submit" className="btn btn-sm bg-danger" />
                        </form>
                    )}
                </div>
                {/* <DeletedExpense /> */}
            </div>
            <ToastContainer
                position="top-right"
                autoClose={290}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
        </div>
    );
};

export default Budget;
