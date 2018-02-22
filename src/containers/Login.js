import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { connect } from 'react-redux';
import { userActions } from "../_actions";

class Login extends Component {
	constructor(props) {
		super(props);

		// reset login status
		this.props.dispatch(userActions.logout());
		
		this.state = {
            user: {
                email: '',
                password: ''
            },
			redirect: false,
			isLoading: false
        };

		this.onSubmit = this.onSubmit.bind(this);
	}
	
	onChange(newPartialInput) {
        this.setState(state => ({
            ...state,
            user: {
                ...state.user,
                ...newPartialInput
            }
        }));
	}
	
	componentWillReceiveProps(props){
		this.setState(state => ({
			...state,
			isLoading: props.login.loading
		}));
		if(props.login.data){
			const { data } = props.login;
			if(data.status === 'fail'){
				toast.error(data.message);
			}
		}
	}

	onSubmit(event){
		event.preventDefault();
		const { dispatch } = this.props;
		if(this.state.user.email && this.state.user.password){
			dispatch(userActions.login(this.state.user));
		}
	}
	
	render() {
		const {user, isLoading } = this.state;

		if(this.state.redirect)
			return <Redirect to={'/dashboard'} />

		return (			
			<div className="login-box">
				<ToastContainer />
				<div className="login-logo">
					<a><b>Admin</b>CP</a>
				</div>
				<div className="login-box-body">
					<p className="login-box-msg">Sign in to start your session</p>

					<form onSubmit={this.onSubmit} method="post">
						<div className="form-group has-feedback">
							<input 
								type="text" 
								className="form-control" 
								placeholder="Email" 
								name="email" 
								value={user.email}
								onChange={e => this.onChange({email: e.target.value})} 
								required 
							/>
							<span className="glyphicon glyphicon-envelope form-control-feedback"></span>
						</div>
						<div className="form-group has-feedback">
							<input 
								type="password" 
								className="form-control" 
								placeholder="Password" 
								name="password" 
								value={user.password}
								onChange={e => this.onChange({password: e.target.value})} 
								required
							/>
							<span className="glyphicon glyphicon-lock form-control-feedback"></span>
						</div>
						<div className="row">
							<div className="col-xs-4 text-right">
								<button type="submit" className="btn btn-primary btn-block btn-flat">								
									{ isLoading &&
										<i className="fa fa-circle-o-notch fa-spin fa-3x fa-fw"></i>
									}
									Sign In
								</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		)
	}
}

const mapStatetoProps = (state) => ({
	login: state.login	
})

export default connect(mapStatetoProps)(Login);