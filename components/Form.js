// import { useEffect, useState } from "react"
// import { useDispatch, useSelector } from "react-redux"
// import { startSetCategory } from "../actions/categoryActions"
// import { startAddExpenses, startSetExpenses } from "../actions/expenseAction"

// const Form = (props) => {
//     console.log(props);

//     const [note, setNote] = useState(props.note || '')
//     const [amount, setAmount] = useState(props.amount || '')
//     const [date, setDate] = useState(props.Date || '')
//     const [id, setId] = useState(props.categoryId || '')
//     const dispatch = useDispatch()
//     const category = useSelector((state) => {
//         return state.category.data
//     })

//     useEffect(() => {
//         dispatch(startSetCategory())

//     }, [dispatch])
//     const handlesubmit = (e) => {
//         e.preventDefault()
//         const formData = {
//             note: note,
//             amount: amount,
//             Date: date,
//             categoryId: id
//         }
//         const reset = () => {
//             setNote('')
//             setAmount('')
//             setDate('')
//             setId('')
//         }
//         console.log(formData);
//         dispatch(startAddExpenses(formData, reset))
//         dispatch(startSetExpenses())

//     }
//     return (
//         <form onSubmit={handlesubmit} >
//             <label > Add Note</label> <br />
//             <input className="form-control" value={note} type="text" placeholder="note" onChange={(e) => { setNote(e.target.value) }} /> <br />
//             <label >Amount</label> <br />
//             <input className="form-control" value={amount} type="text" placeholder="amount" onChange={(e) => { setAmount(e.target.value) }} /> <br />
//             <label>Category</label>
//             <select className=" form-control" value={id} onChange={(e) => { setId(e.target.value) }}>
//                 <option className="dropdown-item">Select category</option>
//                 {category.map((e, i) => {
//                     return <option key={i} value={e._id}>{e.name}</option>
//                 })}
//             </select> <br />
//             <label >Date</label>
//             <input className="form-control" value={date} type="Date" onChange={(e) => { setDate(e.target.value) }} /> <br />
//             <center><input type="submit" className="btn btn-sm btn-info" /></center>
//         </form>
//     )
// }
// export default Form
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { startSetCategory } from "../actions/categoryActions"
import { startAddExpenses, startSetExpenses, startUpdateExpense } from "../actions/expenseAction"

const Form = (props) => {
   // console.log(props);
    const [note, setNote] = useState('')
    const [amount, setAmount] = useState('')
    const [date, setDate] = useState('')
    const [id, setId] = useState('')
    const dispatch = useDispatch()
    const category = useSelector((state) => {
        return state.category.data
    })

    useEffect(() => {
        dispatch(startSetExpenses())
        dispatch(startSetCategory())
        if (props.data) {
            setNote(props.data.note || '')
            setAmount(props.data.amount || '')
            setDate(props.data.Date || '')
            setId(props.data.categoryId || '')
        }

    }, [dispatch, props.data])

    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            note: note,
            amount: amount,
            Date: date,
            categoryId: id
        }
        const reset = () => {
            setNote('')
            setAmount('')
            setDate('')
            setId('')
        }
        if (props.data) {
            dispatch(startUpdateExpense(props.data._id, formData))
            props.toggle()

        } else {
            dispatch(startAddExpenses(formData, reset))
        }
        dispatch(startSetExpenses())

    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Add Note</label><br />
            <input className="form-control" value={note} type="text" placeholder="note" onChange={(e) => { setNote(e.target.value) }} /><br />
            <label>Amount</label><br />
            <input className="form-control" value={amount} type="text" placeholder="amount" onChange={(e) => { setAmount(e.target.value) }} /><br />
            <label>Category</label>
            <select className="form-control" value={id} onChange={(e) => { setId(e.target.value) }}>
                <option className="dropdown-item">Select category</option>
                {category.map((e, i) => {
                    return <option key={i} value={e._id}>{e.name}</option>
                })}
            </select><br />
            <label>Date</label>
            <input className="form-control" value={date} type="Date" onChange={(e) => { setDate(e.target.value) }} /><br />
            <center><input type="submit" className="btn btn-sm btn-info" value={props.data ? "Update" : "Add"} /></center>
        </form>
    )
}

export default Form
