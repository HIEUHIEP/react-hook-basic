import { useState } from 'react';
import './Login.scss'
import { useNavigate } from 'react-router';
import { postLogin } from '../../service/apiService';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { doLogin } from '../../redux/action/userAction';
import { AiOutlineLoading3Quarters } from "react-icons/ai";



const Login = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [isLoadingData, setIsLoadingData] = useState(false);

    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
        ;
    }

    const handleLogin = async () => {
        setIsLoadingData(true);
        //validate
        const isValidEmail = validateEmail(email);
        if (false) {
            toast.error('Invalid email');
            return;
        }
        if (!password) {
            toast.error('Invalid password');
            // toast.success();
            // toast.info();
            return;
        }

        //call API
        let data = await postLogin(email, password);
        if (data.EC === 0) {
            dispatch(doLogin(data))
            toast.success(data.EM);
            setIsLoadingData(false)
            navigate('/');
        }
        if (data.EC !== 0) {
            toast.error(data.EM);
            setIsLoadingData(false);
        }

    }
    return (

        <div className="login-container">
            <div className="header">
                <span> Don't have an account yet? </span>
                <button onClick={() => { navigate('/register') }}>Sign up</button>
            </div>
            <div className="title col-2 mx-auto">
                Hieppu
            </div>
            <div className="welcome col-2 mx-auto">
                Hello, who's this?
            </div>
            <div className="content-form col-2 mx-auto">
                <div className="form-group">
                    <label>Email</label>
                    <input
                        type="email"
                        className="form-control"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)} />
                    <label>Password</label>
                    <input
                        type="password"
                        className="form-control" value={password}
                        onChange={(event) => setPassword(event.target.value)} />
                </div>

                <span className="forget-password">Forgot password ?</span>
                <div>
                    <button
                        className="btn-submit"
                        onClick={() => handleLogin()}
                        disabled={isLoadingData}
                    >
                        {isLoadingData && <AiOutlineLoading3Quarters className="loader-icon" />}
                        <span>Login</span>
                    </button>
                </div>
                <div className="text-center">
                    <span role="button" onClick={() => { navigate('/') }}>&#60; &#60;Go to HomePage</span>
                </div>
            </div>
        </div>


    )
}

export default Login;