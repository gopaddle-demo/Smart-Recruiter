import React, { useState } from 'react'
import Base from '../Base';
import { AlumniData } from '../../auth/studenthelper/StudentIndex';

const AlumniIndex = () => {

    const[Data ,setData] = useState({
        course : "",
        alumni: []
    });

    const{course, alumni} = Data;

    const handleChange = (val) => (event) => {
        setData({ ...Data, [val]: event.target.value });
    }

    const OnSubmit = () =>{
        alert(course);
    
    }

    return (
        <Base>
            <div className="header bg-primary pb-6">
                <div className="container-fluid">
                    <div className="header-body">
                        <div className="row align-items-center py-4">
                            <div className="col-lg-6 col-7">
                                <nav aria-label="breadcrumb" className="d-none d-md-inline-block">
                                    <ol className="breadcrumb breadcrumb-links breadcrumb-dark">
                                        <li className="breadcrumb-item">Alumni Details</li>
                                    </ol>
                                </nav>
                            </div>
                            <div className="col-md-6 col-5 text-right">
                                <div className="row">
                                    <div className="col-md-6 offset-md-4">
                                        <select className="form-control" value={course} onChange={handleChange("course")}>
                                            <option selected disabled>***Select Course and Brach***</option>
                                            <option value="BCA_and_MCA">BCA and MCA</option>
                                            <option value="BSC_CS">BSC (CS)</option>
                                            <option value="BSC_CS_and_IT">BSC (CS and IT)</option>
                                            <option value="BTECH_CS">B.Tech (CS)</option>
                                            <option value="BTECH_IT">B.Tech (IT)</option>
                                            <option value="MTECH_CS">M.Tech (CS)</option>
                                        </select>
                                    </div>
                                    <div className="col-md-2">
                                        <button className="btn btn-sm btn-success" onClick={OnSubmit}>Get Data</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </Base>
    )
}

export default AlumniIndex;