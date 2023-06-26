import { Link, Route } from 'react-router-dom'
import Register from './Register'

import { useEffect, useState } from 'react'
import Login from './Login'
import Dashboard from './Dashboard'
import Setting from './Setting'
import Chart from './Chart'
import Home from './Home'

const NavBar = (props) => {
    const [login, setLogin] = useState(false)
    useEffect(() => {
        if (localStorage.getItem('token')) {
            setLogin(true)
        }
    }, [])
    return (
        <>
            {login ?
                <div className='container-fluid'><div className="row">


                    <nav className=" navbar navbar-expand-lg bg-body-tertiary" >
                        <div className="container-fluid " >
                            <h3 className="navbar-brand">Expense App</h3>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <Link className="nav-link" to='/home'>Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to='/dashboard'>Dashboard</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to='/account'>Account</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to='/logout' onClick={() => {
                                            localStorage.removeItem('token')
                                            setLogin(false)
                                        }}>Logout</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to='/settings'>Settings</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
                    <Route path='/register' exact={true} component={Register} />
                    <Route path='/home' exact={true} component={Home} />
                    <Route path='/' exact={true} component={Home} />
                    <Route path='/dashboard' exact={true} component={Dashboard} />
                    <Route path='/settings' render={(props) => <Setting {...props} setLogin={setLogin} />} />
                    <Route path='/account' exact={true} component={Chart} />

                </div>
                : <div className='container-fluid '>
                    <div className="row " >
                        {/* <div className="col-md-12"> */}
                        <nav className="navbar navbar-expand-lg bg-body-tertiary shadow-lg " style={{ borderBottom: "0.5px solid blue" }}>
                            <div className="container-fluid bg-light">

                                <h3 className="navbar-brand">Expense App</h3>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarNav">
                                    <ul className="navbar-nav">
                                        <li className="nav-item">
                                            <Link className="nav-link" to='/home'>Home</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to='/register'>Register</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to='/login'>Login</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                        {/* </di    v> */}
                    </div>

                    <Route path='/register' exact={true} component={Register} />
                    <Route path='/home' exact={true} component={Home} />
                    <Route path='/' exact={true} component={Home} />
                    <Route path='/login' render={(props) => <Login {...props} setLogin={setLogin} />} />
                </div>
            }
        </>
    )
}
export default NavBar

