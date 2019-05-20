import React from "react";
import { Route, Switch } from "react-router-dom";
import Img from 'assets/img/login.png'

class Login extends React.Component {
  render() {
    return (
      <>
        <div className="wrapper wrapper-full-page">
            <div className="full-page login-page">
                <div className="content">
                    <div className="container">
                          <div className="ml-auto mr-auto col-md-6 col-lg-4">
                                <form className="form">
                                      <div className="card-login card-white card">
                                            <div className="card-header">
                                                <img alt="..." src={Img}/>
                                                <h1 className="card-title">Log in
                                                </h1>
                                            </div>
                                            <div className="card-body">
                                                <div className="input-group">
                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text">
                                                            <i className="tim-icons icon-email-85"></i>
                                                        </span>
                                                    </div>
                                                    <input placeholder="Email" type="text" className="form-control"/>
                                                </div>
                                                <div className="input-group">
                                                    <div className="input-group-prepend">
                                                      <span className="input-group-text">
                                                        <i className="tim-icons icon-lock-circle"></i>
                                                      </span>
                                                    </div>
                                                    <input placeholder="Password" type="text" className="form-control"/>
                                                  </div>
                                            </div>
                                            <div className="card-footer">
                                                <a href="#pablo" className="mb-3 btn btn-primary btn-lg btn-block">Get Started</a>
                                            <div className="pull-right">
                                                <h6>
                                                <a className="link footer-link" href="#pablo">Need Help?</a>
                                                </h6>
                                            </div>
                                            </div>
                                      </div>
                                </form>
                          </div>
                    </div>
              </div>

            </div>
        </div>
      </>
    );
  }
}

export default Login;
