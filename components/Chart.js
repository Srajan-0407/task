import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { useEffect } from 'react'
import { Pie } from 'react-chartjs-2'
import { useDispatch, useSelector } from 'react-redux'
import { startGetUser } from '../actions/userActions'
import { startSetExpenses } from '../actions/expenseAction'
import BarChart from './BarChart'

ChartJS.register(ArcElement, Tooltip, Legend,)


const data = {
    labels: ['Remaining Budget', 'Used Budget'],
    datasets: []
}
const options = {}


const Chart = () => {
    const dispatch = useDispatch()
    const user = useSelector((state) => {
        return state.user.data
    });
    const expesne = useSelector((state) => {
        return state.expenses.data
    });
    const res = expesne.reduce((iv, cv) => {
        return iv + cv.amount
    }, 0)
    useEffect(() => {
        dispatch(startGetUser())
        dispatch(startSetExpenses())

    }, [dispatch])
    data.datasets = []
    data.datasets.push({ data: [user.budget - res, res], backgroundColor: ['green', 'red'] })

    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-6">
                    <div style={{ padding: '20px', width: '70%' }} >
                        <div className="d-grid gap-2">
                            <button className="btn  shadow" type="button"><b>Budget Chart   </b></button>
                        </div>
                        <Pie data={data} options={options} >
                        </Pie>
                    </div>

                </div>
                <div className="col-md-6">
                    <br />
                    <div className="d-grid gap-2">
                        <button className="btn  shadow" type="button"> <b>Category Wise Chart</b></button>
                    </div>
                    <BarChart />
                </div>
            </div>
        </div>
    )
}
export default Chart