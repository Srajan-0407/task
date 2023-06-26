import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { startAddCategory, startSetCategory } from "../actions/categoryActions"
import AddExpense from "./AddExpense"
import { startSetExpenses, stratRemoveExpense } from "../actions/expenseAction"
import { toast, ToastContainer } from 'react-toastify';
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import Form from "./Form"
const Dashboard = () => {
    const [category, setCategory] = useState('')
    const expenses = useSelector((state) => state.expenses.data)
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    const dispatch = useDispatch()
    const [edit, setEditItem] = useState({})

    useEffect(() => {
        dispatch(startSetExpenses())

    }, [dispatch])

    const handleSubmit = (e) => {
        e.preventDefault()
        if (category.length === 0) {
            toast.warn('Please add category', {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        } else {
            const formData = { name: category }
            const reset = () => {
                setCategory('')
            }
            dispatch(startSetCategory())
            dispatch(startAddCategory(formData, reset))
        }
    }
    const handleRemove = (id) => {
        dispatch(stratRemoveExpense(id))
    }
    let count = 1


    const handleEdit = (item) => {
        toggle()
        setEditItem(item)
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-8">
                    <div className="card mt-2">
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3 ">
                                    <label className="form-label">Add Category</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={category}
                                        onChange={(e) => { setCategory(e.target.value) }}
                                    />
                                </div>
                                <button type="submit" className="btn btn-success">+</button>
                            </form>
                            {expenses.length > 0 && <>
                                <h3>Expense Table</h3>
                                <table className="table table-bordered table-striped shadow">
                                    <thead>
                                        <tr>
                                            <th>Sl.No</th>
                                            <th>Amount</th>
                                            <th>Note</th>
                                            <th>Date</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {expenses.map((e, i) => (
                                            <tr key={i}>
                                                <td>{count++}</td>
                                                <td>{e.amount}</td>
                                                <td>{e.note}</td>
                                                <td>{e.Date}</td>
                                                <td>
                                                    <button className="btn btn-sm btn-danger" onClick={() => { handleRemove(e._id) }}>X</button> &nbsp;
                                                    <button className="btn btn-sm btn-danger" onClick={() => { handleEdit(e) }}>edit</button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table> </>}
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <h3>Add Expense</h3>
                    <div className="card shadow ">
                        <div className="card-body">
                            <AddExpense />

                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer
                position="top-right"
                autoClose={1000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
            <Modal isOpen={modal} toggle={toggle} >
                <ModalHeader toggle={toggle}>Modal title</ModalHeader>
                <ModalBody>
                    <div className="col-md-12">
                        <Form data={edit} toggle={toggle} />

                    </div>
                </ModalBody>

            </Modal>
        </div>
    )
}

export default Dashboard
