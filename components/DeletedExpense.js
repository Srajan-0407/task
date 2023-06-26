// import { useDispatch, useSelector } from "react-redux"
// import { startGetDeletedExpense, stratUndoExpense } from "../actions/expenseAction"
// import { useEffect } from "react"


// const DeletedExpense = (props) => {
//     const dispath = useDispatch()
//     useEffect(() => {
//         dispath(startGetDeletedExpense())

//     }, [dispath])
//     const expesne = useSelector((state) => {
//         console.log(state);
//         return state.expenses.data
//     })
//     let count = 1
//     const handleClick = (id) => {

//         dispath(stratUndoExpense(id))
//     }
//     return <div>

//         {expesne.length > 0 &&
//             <table className="table table-bordered table-striped shadow">
//                 <thead >
//                     <tr>
//                         <th>Sl.No</th>
//                         <th>Note </th>
//                         <th>Date</th>
//                         <th>Amount</th>
//                         <th>Action</th>
//                     </tr>
//                 </thead>
//                 <tbody >
//                     {expesne.map((ele, i) => {
//                         return (
//                             <tr key={i}>
//                                 <td>{count++}</td>
//                                 <td>{ele.note}</td>
//                                 <td>{ele.Date}</td>
//                                 <td>{ele.amount}</td>
//                                 <td> <button className="btn btn-sm btn-success" onClick={() => {
//                                     handleClick(ele._id)
//                                 }}>Undo</button></td>
//                             </tr>
//                         )
//                     })}
//                 </tbody>
//             </table>}

//     </div >
// }
// export default DeletedExpense