import React from "react";
import {
  UncontrolledAlert,
} from "reactstrap";

import Img from 'assets/img/login.png'
import {connect} from 'react-redux'
import {signIn} from '../../store/actions/authActions'

class Login extends React.Component {
  state = {
    email : '',
    password : ''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  handleSubmit = (e) => {
      e.preventDefault();
      this.props.signIn(this.state);
  }
  componentDidMount(){

  }
  render() {
    const {authError, authenticated} = this.props;
    return (
      <>
        <div className="wrapper wrapper-full-page">
            <div className="full-page login-page">
                <div className="content">
                    <div className="container">
                          <div className="ml-auto mr-auto col-md-6 col-lg-4">
                          {
                            authError == "fail"?
                            <UncontrolledAlert color="danger">
                              <span>
                                <b>Maaf Login Gagal</b>
                              </span>
                            </UncontrolledAlert>
                            : null
                          }
                                <form className="form" onSubmit={this.handleSubmit}>
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
                                                    <input placeholder="Email" type="text" className="form-control" id="email" onChange={this.handleChange}/>
                                                </div>
                                                <div className="input-group">
                                                    <div className="input-group-prepend">
                                                      <span className="input-group-text">
                                                        <i className="tim-icons icon-lock-circle"></i>
                                                      </span>
                                                    </div>
                                                    <input placeholder="Password" type="password" className="form-control" id="password" onChange={this.handleChange}/>
                                                  </div>
                                            </div>
                                            <div className="card-footer">
                                                <input  className="mb-3 btn btn-primary btn-lg btn-block" type="submit" value="Masuk" onSubmit={this.handleSubmit}/>
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
const mapStatetoProps = (state) => {
  console.log(state);
  return{
    authError: state.auth.authError
  }
}
const mapDispatchtoProps = (dispatch) =>{
  return{
    signIn: (creds) => dispatch(signIn(creds))
  }
}
export default connect(mapStatetoProps, mapDispatchtoProps)(Login);
