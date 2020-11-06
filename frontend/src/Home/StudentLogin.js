import React, { useState } from 'react'
import { studentSignUp, studentSignIn, sendOTPOnmail } from '../auth/studenthelper/StudentIndex';
import '../css/main.css'
import '../css/util.css'
import '../fonts/font-awesome-4.7.0/css/font-awesome.min.css'
import '../fonts/iconic/css/material-design-iconic-font.min.css'



const StudentLogin = () => {

    //State for Student 
    const [Student, setStudent] = useState({
        name: "",
        email: "",
        enrollment_id: "",
        branch: "",
        mobile_number: "",
        year_of_passing: "",
        password: "",
        Cpassword: "",
        condition: "login",
        success: false,
        error: false,
        loading: false,
        msg: "",
        emailverification: true,
        otpverification: false,
        registrationformdisplay: false,
    });

    const { name, email, enrollment_id, branch, mobile_number, year_of_passing, password, Cpassword, success, error, loading, msg, emailverification, otpverification, registrationformdisplay } = Student;

    /*******************************************************************************
    * ---------- Handle Function -------------------------
    *********************************************************************************/
    const handleChange = (val) => (event) => {
        setStudent({ ...Student, error: false, success: false, loading: false, [val]: event.target.value });
    }
    const conditionchange = (event) => {
        event.preventDefault();
        setStudent({ ...Student, condition: "signUp" });
    }
    const conditionchange2 = (event) => {
        event.preventDefault();
        setStudent({ ...Student, condition: "login", error: false, success: false, enrollment_id: "", password: "", registrationformdisplay: false, emailverification: true });
    }

    /** ----------------------------------
     * Message Functions
    -------------------------------------- */
    const successmsg = () => {
        return (
            success && (
                <div className="row">
                    <div className="col-md-12 alert alert-success">
                        <h5 className="text-white">
                            {Student.msg}
                        </h5>
                    </div>
                </div>
            )
        )
    }

    const loadingmsg = () => {
        return (
            loading && (
                <div className="row">
                    <div className="col-md-12">
                        <h5 className="text-success">Loading....<i class='bx bx-loader bx-spin' ></i></h5>
                    </div>
                </div>
            )
        )
    }

    const errormsg = () => {
        return (
            error && (
                <div className="row">
                    <div className="col-md-12 alert alert-danger">
                        <h4>
                            {Student.msg}
                        </h4>
                    </div>
                </div>
            )
        )
    }

    /**********************************************************************
     * OnSubmit Button
     **********************************************************************/
    const onSubmit = (event) => {
        event.preventDefault();
        if (Student.condition === "login") {
            if (enrollment_id === "") {
                alert("please enter your Email address");
            } else if (password === "") {
                alert("please enter password");
            } else {
                setStudent({ ...Student, loading: true });
                studentSignIn({ enrollment_id, password })
                    .then(data => {
                        console.log("login Data", data);
                        if (data.status === true) {
                            alert(data.msg);
                        } else {
                            setStudent({
                                ...Student,
                                error: true,
                                msg: data.msg,
                                enrollment_id: "",
                                password: ""
                            })
                        }
                    })
            }

        } else if (Student.condition === "signUp") {

            if (name === "") {
                alert("please enter Name");
            } else if (email === "") {
                alert("please enter Email");
            } else if (enrollment_id === "") {
                alert("please enter enrollment id");
            } else if (branch === "") {
                alert("please select branch");
            } else if (mobile_number.length !== 10) {
                alert("please enter valid mobile number");
            } else if (year_of_passing === "") {
                alert("please enter your year of passing");
            } else if (password === "") {
                alert("please enter password");
            } else if (Cpassword === "") {
                alert("please enter conform password");
            } else if (password !== Cpassword) {
                alert("password and conform password NOT match");
            } else {
                studentSignUp({ name, email, enrollment_id, branch, mobile_number, year_of_passing, password })
                    .then(data => {
                        console.log("Student Data", data);
                        if (data.status === true) {
                            setStudent({
                                ...Student,
                                name: "",
                                email: "",
                                enrollment_id: "",
                                branch: "",
                                mobile_number: "",
                                year_of_passing: "",
                                password: "",
                                Cpassword: "",
                                condition: "login",
                                success: true,
                                error: false,
                                msg: data.msg
                            })
                        } else if (data.status === false) {
                            setStudent({
                                ...Student,
                                success: false,
                                error: true,
                                msg: data.msg,
                                enrollment_id: "",
                            })
                        }
                    })
            }
        }
    }

    /***********************************************************************
     * Genterate OTP and check OTP is correct or not
    ************************************************************************ */
    const genterateOTP = (event) => {
        event.preventDefault();
        setStudent({ ...Student, loading: true, emailverification: false })
        if (email === "") {
            alert("please enter email");
            setStudent({ ...Student, loading: false, emailverification: true })
        } else {
            sendOTPOnmail({ email })
                .then(res => {
                    if (res.status === true) {
                        setStudent({
                            ...Student,
                            emailverification: false,
                            otpverification: true,
                            loading: false,
                            msg: res.systemotp
                        })
                    } else {
                        setStudent({
                            ...Student,
                            msg: res.msg,
                            error: true,
                            emailverification: true
                        })
                    }
                })
        }
    }
    /** *-------Check OTP of user and system Generated */
    const otpcheck = () => {
        if (enrollment_id === msg) {
            setStudent({
                ...Student,
                otpverification: false,
                registrationformdisplay: true,
                loading: false,
                enrollment_id: "",
                msg: ""
            })
        } else {
            alert('OTP not match, please enter correct OTP');
        }
    }
    /** ----------------------------------
     * Email and OTP forms
    -------------------------------------- */
    const emailForm = () => {
        return (
            emailverification && (
                <div>
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h1>Email Verification Steps</h1>
                        </div>
                    </div>
                    <hr />
                    <div className="row m-t-40 m-b-30">
                        <div className="col-md-8 offset-md-2">
                            <p> <u>Note<span class="asteriskField">*</span></u> Please enter a valid email on which we can send placement updates</p>
                            <div className="wrap-input100 validate-input m-b-15">
                                <span className="label-input100">Email<span class="asteriskField">*</span></span>
                                <input className="input100" type="email" placeholder="Please enter your email" value={email} onChange={handleChange("email")} />
                                <span className="focus-input100" data-symbol="&#xf206;"></span>
                            </div>
                        </div>
                    </div>
                </div>
            )
        )
    }
    const otpForm = () => {
        return (
            otpverification && (
                <div>
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h1>Email Verification Steps</h1>
                        </div>
                    </div>
                    <hr />
                    <div className="row m-t-40 m-b-30">
                        <div className="col-md-8 offset-md-2">
                            <p> Please enter a one time password which send on given mail</p>
                            <div className="wrap-input100 validate-input m-b-15">
                                <span className="label-input100">One time password (OTP)<span class="asteriskField">*</span></span>
                                <input className="input100" type="email" placeholder="Please enter OTP" value={enrollment_id} onChange={handleChange("enrollment_id")} />
                                <span className="focus-input100" data-symbol="&#xf206;"></span>
                            </div>
                        </div>
                    </div>
                </div>
            )
        )
    }

    const registrationForm = () => {
        return (
            registrationformdisplay && (
                <div>
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h1>Student Registration</h1>
                        </div>
                    </div>
                    <hr />
                    <div className="row m-t-15">
                        <div className="col-md-6">
                            <div className="wrap-input100 validate-input m-b-15">
                                <span className="label-input100">Full Name<span class="asteriskField">*</span></span>
                                <input className="input100" type="text" placeholder="Enter your Name" value={name} onChange={handleChange("name")} />
                                <span className="focus-input100" data-symbol="&#xf206;"></span>
                            </div>
                            <div className="wrap-input100 validate-input m-b-15">
                                <span className="label-input100">Email<span class="asteriskField">*</span></span>
                                <input disabled className="input100" type="email" placeholder="Enter your Email" value={email} onChange={handleChange("email")} />
                                <span className="focus-input100" data-symbol="&#xf206;"></span>
                            </div>
                            <div className="wrap-input100 validate-input m-b-15">
                                <span className="label-input100">Enrollment Id<span class="asteriskField">*</span></span>
                                <input className="input100" type="text" placeholder="Enter your Enrollment Id" value={enrollment_id} onChange={handleChange("enrollment_id")} />
                                <span className="focus-input100" data-symbol="&#xf206;"></span>
                            </div>
                            <div className="wrap-input100 validate-input m-b-15">
                                <span className="label-input100">Branch<span class="asteriskField">*</span></span>
                                <select className="select_input100" value={branch} onChange={handleChange("branch")}>
                                    <option disabled>***select option***</option>
                                    <option>CS</option>
                                    <option>IT</option>
                                    <option>EC</option>
                                    <option>MECH</option>
                                </select>
                                <span className="focus-input100" data-symbol="&#xf206;"></span>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="wrap-input100 validate-input m-b-15">
                                <span className="label-input100">Mobile Number<span class="asteriskField">*</span></span>
                                <input className="input100" type="number" placeholder="Enter your Mobile Number" value={mobile_number} onChange={handleChange("mobile_number")} />
                                <span className="focus-input100" data-symbol="&#xf206;"></span>
                            </div>
                            <div className="wrap-input100 validate-input m-b-15">
                                <span className="label-input100">Year of Passing<span class="asteriskField">*</span></span>
                                <input className="input100" type="text" placeholder="Enter your Year of Passing" value={year_of_passing} onChange={handleChange("year_of_passing")} />
                                <span className="focus-input100" data-symbol="&#xf206;"></span>
                            </div>
                            <div className="wrap-input100 validate-input m-b-15">
                                <span className="label-input100">Password<span class="asteriskField">*</span></span>
                                <input className="input100" type="password" placeholder="Enter your Password" value={password} onChange={handleChange("password")} />
                                <span className="focus-input100" data-symbol="&#xf206;"></span>
                            </div>
                            <div className="wrap-input100 validate-input m-b-15">
                                <span className="label-input100">Conform Password<span class="asteriskField">*</span></span>
                                <input className="input100" type="password" placeholder="Enter your conform Password" value={Cpassword} onChange={handleChange("Cpassword")} />
                                <span className="focus-input100" data-symbol="&#xf206;"></span>
                            </div>
                        </div>
                    </div>
                    {/* <div class="modal-footer">
                        {successmsg()}
                        {loadingmsg()}
                        {errormsg()}
                        <button type="button" class="btn btn-secondary" data-dismiss="modal" onClick={conditionchange2}>Close</button>
                        <button type="button" class="btn btn-primary" onClick={onSubmit}>SignUp</button>
                    </div> */}
                </div>
            )
        )
    }

    /** ----------------------------------
     * Footer Button of model 
    -------------------------------------- */
    const modalFooterButton = () => {
        if (emailverification === true) {
            return (
                <div class="modal-footer">
                    {successmsg()}
                    {errormsg()}
                    <button type="button" class="btn btn-secondary" data-dismiss="modal" onClick={conditionchange2}>Close</button>
                    <button type="button" class="btn btn-primary" onClick={genterateOTP}>Get OTP</button>
                </div>
            )
        } else if (otpverification === true) {
            return (
                <div class="modal-footer">
                    {successmsg()}
                    {errormsg()}
                    <button type="button" class="btn btn-secondary" data-dismiss="modal" onClick={conditionchange2}>Close</button>
                    <button type="button" class="btn btn-primary" onClick={otpcheck}>Submit</button>
                </div>
            )
        } else if (registrationformdisplay === true) {
            return (
                <div class="modal-footer">
                    {successmsg()}
                    {errormsg()}
                    {loadingmsg()}
                    <button type="button" class="btn btn-secondary" data-dismiss="modal" onClick={conditionchange2}>Close</button>
                    <button type="button" class="btn btn-primary" onClick={onSubmit}>SignUp</button>
                </div>
            )
        }
    }

    /***************************************
     * Student Registration Model
    ****************************************/
    const StudentRegistration = () => {
        return (
            <div>
                <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-lg" role="document">
                        <div class="modal-content">
                            <div class="modal-body">
                                {emailForm()}
                                {loadingmsg()}
                                {otpForm()}
                                {registrationForm()}
                            </div>
                            {modalFooterButton()}
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div>
            <div className="limiter">
                <div className="container-login100">
                    <div className="wrap-login100 p-l-55 p-r-55 p-t-45 p-b-45">
                        <form className="login100-form validate-form">
                            {loadingmsg()}
                            {errormsg()}
                            <span className="login100-form-title p-b-30">
                                Student Login
        					</span>
                            <div className="wrap-input100 validate-input m-b-23">
                                <span className="label-input100">Email</span>
                                <input className="input100" type="text" placeholder="Enter your email address" value={enrollment_id} onChange={handleChange("enrollment_id")} />
                                <span className="focus-input100" data-symbol="&#xf206;"></span>
                            </div>
                            <div className="wrap-input100 validate-input m-b-20">
                                <span className="label-input100">Password</span>
                                <input className="input100" type="password" placeholder="Enter your password" value={password} onChange={handleChange("password")} />
                                <span className="focus-input100" data-symbol="&#xf190;"></span>
                            </div>
                            <div className="container-login100-form-btn p-t-10">
                                <div className="wrap-login100-form-btn">
                                    <div className="login100-form-bgbtn"></div>
                                    <button className="login100-form-btn" onClick={onSubmit}>
                                        Login
    							    </button>
                                </div>
                            </div>
                            <div className="flex-col-c p-t-20">
                                <h3>
                                    New to the Website please <button type="button" data-toggle="modal" data-target="#exampleModal" onClick={conditionchange}>SignUp</button>
                                </h3>
                            </div>
                        </form>
                        {StudentRegistration()}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StudentLogin;