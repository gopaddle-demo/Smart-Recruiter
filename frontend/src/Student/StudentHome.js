import React, { useState, useEffect } from 'react'
import Base from './Base';
import { getlocalstore, get_company_details, localStore } from '../auth/helper';

const StudentHome = () => {

    const [companyData, setcompanyData] = useState([]);
    const [individualData, setindividualData] = useState([]);
    const getDetailsFromLocal = () => {
        if (getlocalstore("company_data").length !== 0) {
            setcompanyData(getlocalstore("company_data"));
        } else {
            get_company_details().then(res => {
                if (res.status === true) {
                    localStore("company_data", res.data, () => {
                        setcompanyData(res.data);
                    });
                } else {
                    alert('Server error data Not found, please contact to Admin');
                }
            }).catch(e => {
                console.log(e);
            })
        }
    }

    useEffect(() => {
        getDetailsFromLocal()
    }, []);

    const getIndividualCompany = (val) => () => {
        companyData.map((data, index) => {
            if (data._id === val) {
                setindividualData(data);
            }
        })
    }
    const CompanyModel = () => {
        return (
            <div className="modal fade" id="companyModel" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg" role="document">
                    <div className="modal-content">
                        <div className="modal-body">
                            <div className="row">
                                <div className="col-md-6 p-3 col-12">
                                    <h2 className="static">Company Name</h2>
                                </div>
                                <div className="col-md-6 p-3 col-12">
                                    <h2 className="dynamic">{individualData.name}</h2>
                                </div>
                                <div className="col-md-6 p-3 col-12">
                                    <h2 className="static">Pre Placement Date</h2>
                                </div>
                                <div className="col-md-6 p-3 col-12">
                                    <h2 className="dynamic">{individualData.pre_placement}</h2>
                                </div>
                                <div className="col-md-6 p-3 col-12">
                                    <h2 className="static">Date</h2>
                                </div>
                                <div className="col-md-6 p-3 col-12">
                                    <h2 className="dynamic">{individualData.date}</h2>
                                </div>
                                <div className="col-md-6 p-3 col-12">
                                    <h2 className="static">Package</h2>
                                </div>
                                <div className="col-md-6 p-3 col-12">
                                    <h2 className="dynamic">{individualData.Cpackage}</h2>
                                </div>
                                <div className="col-md-6 p-3 col-12">
                                    <h2 className="static">Student Placed last year</h2>
                                </div>
                                <div className="col-md-6 p-3 col-12">
                                    <h2 className="dynamic">{individualData.student_placed}</h2>
                                </div>
                                <div className="col-md-6 p-3 col-12">
                                    <h2 className="static">Technical</h2>
                                </div>
                                <div className="col-md-6 p-3 col-12">
                                    <h2 className="dynamic">{individualData.technical}</h2>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <Base>
            <div className="header bg-main pb-6">
                <div className="container-fluid">
                    <div className="header-body">
                        <div className="row align-items-center pt-4">
                            <div className="col-lg-6 col-7">
                                <nav aria-label="breadcrumb" className="d-none d-md-inline-block">
                                    <ol className="breadcrumb breadcrumb-links breadcrumb-dark">
                                        <li className="breadcrumb-item">Upcoming Company's</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                        <div className="row mb-2">
                            <div className="col-lg-12">
                                <marquee><h2>Important annonment</h2></marquee>
                            </div>
                        </div>
                        <div className="row">
                            {companyData.map((data, index) => {
                                return (
                                    <button className="col-xl-3 col-md-6 mt-3" data-toggle="modal" data-target="#companyModel" key={index} onClick={getIndividualCompany(data._id)}>
                                        <div className="mycard card-stats">
                                            <div className="card-body">
                                                <div className="row">
                                                    <div className="col-12">
                                                        <h4 className="card-title text-uppercase text-muted mb-0">{data.date}</h4>
                                                        <span className="h2 font-weight-bold mb-0">{data.name}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </button>
                                )
                            })}
                        </div>
                        {CompanyModel()}
                    </div>
                </div>
            </div>
        </Base>
    )
}

export default StudentHome;