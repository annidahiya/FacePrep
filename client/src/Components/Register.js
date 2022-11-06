import React, { useState } from 'react'
import "./mix.css"
import { NavLink } from 'react-router-dom';

const Register = () => {

    const [passShow, setPassShow] = useState(false);
    const [cpassShow, setCPassShow] = useState(false);

    const [inpval, setInpval] = useState({
        fname: "",
        email: "",
        password: "",
        cpassword: ""
    });


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

    const addUserData = (el) => {
        el.preventDefault()

        const { fname, email, password, cpassword } = inpval;

        if (fname === "" && email === "" && password === "" && cpassword === "") {
            alert("Please Enter Details Below")
        }

        else if (fname === "") {
            alert("Please Enter Your Name")
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
        else if (cpassword === "") {
            alert("Please Enter Confirm Password")
        }
        else if (cpassword.length < 6) {
            alert("Password Must Conatin Atleast 6 character")
        }
        else if (password !== cpassword) {
            alert("Your  Anil Password Does Not Match")
        }
        else {
            // alert("Registration Successfully Done")
        }

    }



    return (
        <>
            <section>
                <div className='form_data'>
                    <div className='form_heading'>
                        <h1>Sign Up</h1>
                        <p style={{ textAlign: "center" }}>We are glad that you will be using Project Cloud to manage your tasks!
                            We  hope that you will get like it.</p>
                    </div>
                    <form >

                        <div className='form_input'>
                            <label htmlFor='fname'>Name</label>
                            <input type="text" onChange={setVal} value={inpval.fname} name="fname" id="fname" placeholder='Enter your Name' />
                        </div>


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

                        <div className='form_input'>
                            <label htmlFor='password'>Confirm Password</label>
                            <div className='two'>
                                <input type={!cpassShow ? "password" : "text"} value={inpval.cpassword} onChange={setVal} name="cpassword" id="cpassword" placeholder='Confirm Password' />
                                <div className='showpass' onClick={() => setCPassShow(!cpassShow)}>
                                    {!cpassShow ? "Show" : "Hide"}
                                </div>
                            </div>
                        </div>

                        <button className='btn' onClick={addUserData}> Sign up</button>
                        <p>Already have an Account?<NavLink to={"/"}> Log In</NavLink></p>
                    </form>
                </div>
            </section>
        </>
    )
}

export default Register