import { useState } from "react";
import { useNavigate } from "react-router";
import './Register.scss'
import { postRegister } from "../../service/apiService";
import { toast } from "react-toastify";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";


const Register = () => {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);

    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
        ;
    }

    const handleRegister = async () => {
        const isValidEmail = validateEmail(email);
        if (isValidEmail) {
            toast.error('Invalid email');
            return;
        }
        if (!username) {
            toast.error('Invalid username');
            return;
        }
        if (!password) {
            toast.error('Invalid password');
            return;
        }

        let res = await postRegister(email, username, password);
        if (res.EC === 0) {
            toast.success(res.EM);
            navigate('/login');
        }
        if (res.EC !== 0) {
            toast.error(res.EM);
        }
    }

    // const [type, setType] = useState('password');
    // const [icon, setIcon] = useState(eyeOff);
    // const handleToggle = () => {
    //     if (type === 'password') {
    //         setIcon(eye);
    //         setType('text')
    //     } else {
    //         setIcon(eyeOff)
    //         setType('password')
    //     }
    // }

    return (

        <div className="register-container">
            <div className="header">
                <span> Already have an account? </span>
                <button onClick={() => { navigate('/login') }}>Login</button>
            </div>
            <div className="title col-2 mx-auto">
                Hieppu
            </div>
            <div className="welcome col-2 mx-auto">
                Create a new account?
            </div>
            <div className="content-form col-2 mx-auto">
                <div className="form-group pass-group">
                    <label>Email (*)</label>
                    <input
                        type="email"
                        className="form-control"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)} />
                    <label>Username (*)</label>
                    <input
                        type="text"
                        className="form-control"
                        value={username}
                        onChange={(event) => setUsername(event.target.value)} />
                    <label>Password (*)</label>
                    <input
                        type={showPassword ? 'text' : 'password'}
                        className="form-control" value={password}
                        onChange={(event) => setPassword(event.target.value)} />
                    {showPassword ?
                        <span className="icons-eye" onClick={() => setShowPassword(false)}><FaEye /></span>

                        :
                        <span className="icons-eye" onClick={() => setShowPassword(true)}><FaEyeSlash /></span>
                    }


                </div>
                <div>
                    <button
                        className="btn-submit"
                        onClick={() => handleRegister()}
                    >Register</button>
                </div>
                <div className="text-center">
                    <span role="button" onClick={() => { navigate('/') }}>&#60; &#60;Go to HomePage</span>
                </div>
            </div>
        </div >


    )
}

export default Register;