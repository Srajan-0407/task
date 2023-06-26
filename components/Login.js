import { useState } from "react";
import { useDispatch } from "react-redux";
import { startLogin } from "../actions/userActions";

const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = {
            email: email,
            password: password
        };
        dispatch(startLogin(formData, props, props.setLogin));
    };

    return (
        <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-4">
                <div className="card mt-3">
                    <div className="card-body">
                        <h2 className="text-center mb-4">Login</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email:</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">Password:</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <center>  <button type="submit" className="btn btn-success btn-block">Login</button></center>
                        </form>
                    </div>
                </div>
            </div>
            <div className="col-md-4"></div>
        </div>
    );
};

export default Login;
