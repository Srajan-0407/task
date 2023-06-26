import Budget from "./Budget"


const Setting = (props) => {
    return (
        <div className="container">
            <Budget historyProps={props} setLogin={props.setLogin} /> <br />
            {/* <h3>Deleted Expenses</h3> */}

        </div>
    )
}
export default Setting