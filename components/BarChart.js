import { Chart as ChartJS, BarElement, Tooltip, Legend, CategoryScale, LinearScale } from 'chart.js'
import { Bar } from 'react-chartjs-2'
import { useDispatch, useSelector } from 'react-redux'
import { startSetCategory } from '../actions/categoryActions'
import { startSetExpenses } from '../actions/expenseAction'
import { useEffect } from 'react'
// import { startGetUser } from '../actions/userActions'
ChartJS.register(BarElement, Tooltip, Legend, CategoryScale, LinearScale)
const usedAmount = []
const categoryNames = []
const data = {
    labels: categoryNames,
    datasets: [{ label: 'used', data: usedAmount, backgroundColor: 'orange', borderColor: 'black', borderWidth: 1 }]
}

const options = {}
const BarChart = () => {
    const dispatch = useDispatch()
    const category = useSelector((state) => {
        return state.category.data
    });
    const expesne = useSelector((state) => {
        return state.expenses.data
    });
    console.log(expesne);
    useEffect(() => {
        dispatch(startSetExpenses())
        dispatch(startSetCategory())
    }, [dispatch])

    usedAmount.length = 0
    categoryNames.length = 0
    expesne.forEach((ele) => {
        usedAmount.push(`${ele.amount}`)
        category.forEach((e) => {
            if (e._id === ele.categoryId) {
                categoryNames.push(e.name.toUpperCase())
            }
        })
    })
    console.log(usedAmount);
    return (
        <div>
            <Bar data={data} options={options}>

            </Bar>
        </div>
    )
}
export default BarChart