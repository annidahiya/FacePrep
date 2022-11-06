import React, { useState } from 'react'
import "./mix.css"
import { NavLink } from 'react-router-dom';

const Login = () => {

    const [inpval, setInpval] = useState({

        email: "",
        password: "",

    });
    // console.log(inpval)

    const setVal = (el) => {
        // console.log(el.target.value);
        const { name, value } = el.target;

        setInpval(() => {
            return {
                ...inpval,
                [name]: value
            }
        })
    }

    const loginUser = (el) => {
        el.preventDefault();

        const { email, password } = inpval;

        if (email === "" && password === "") {
            alert("Please Enter Details Below")
        }

        else if (email === "") {
            alert("Please Enter Your Email")
        }
        else if (!email.includes("@") === "") {
            alert("Please Enter Valid Email")
        }
        else if (password === "") {
            alert("Please Enter Your Password")
        }
        else if (password.length < 6) {
            alert("Password Must Conatin Atleast 6 character")
        }
        else {
            alert("Login Successfully Done")
        }
    }

    const [passShow, setPassShow] = useState(false);

    return (
        <>
            <section>
                <div className='form_data'>
                    <div className='form_heading'>
                        <h1>Welcome Back, Log In</h1>
                        <p>Hi, we are you glad you are back. please login.</p>
                    </div>
                    <form >
                        <div className='form_input'>
                            <label htmlFor='email'>Email</label>
                            <input type="email" onChange={setVal} value={inpval.email} name="email" id="email" placeholder='Enter your Email Address' />
                        </div>

                        <div className='form_input'>
                        <label htmlFor='password'>Password</label>
                        <div className='two'>
                            <input type={!passShow ? "password" : "text"} value={inpval.password} onChange={setVal} name="password" id="password" placeholder='Enter your Password' />
                            <div className='showpass' onClick={() => setPassShow(!passShow)}>
                                {!passShow ? "Show" : "Hide"}
                            </div>
                        </div>
                    </div>

                        

                        <button className='btn' onClick={loginUser}> Login</button>
                        <p>Don't have an Account? <NavLink to={"/register"}>Sign Up</NavLink></p>
                    </form>


                </div>
            </section>
        </>
    )
}

export default Login