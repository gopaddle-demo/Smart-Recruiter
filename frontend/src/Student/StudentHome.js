import React, { useState, useEffect } from 'react'
import Base from './Base';
import { getlocalstore, get_company_details, localStore } from '../auth/helper';

const StudentHome = () => {

    const [companyData, setcompanyData] = useState([]);

    const getDetailsFromLocal = () => {
        if (getlocalstore("company_data").length !== 0) {
            setcompanyData(getlocalstore("company_data"));
        } else {
            alert('local storage empty');
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
        getDetailsFromLocal();
    }, []);

    const CompanyModel = () => {
        return (
            <div class="modal fade" id="companyModel" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h4 class="modal-title" id="exampleModalLabel">Modal title</h4>
                        </div>
                        <div class="modal-body">
                            ...
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
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
                                    <button className="col-xl-3 col-md-6 mt-3" data-toggle="modal" data-target="#companyModel" key={index}>
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