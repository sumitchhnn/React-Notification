import React, {Component} from 'react';
import './login.css';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
class Login extends Component {
	render() {
		return (
			<div className="login-container">
				<form className="login-form">
					<Paper zDepth={5} className="login-paper">
						<label className="form-header">Login</label>
						<div>
							<TextField hintText="Username" floatingLabelText="Username" />
						</div>
						<div>
							<TextField hintText="Password" floatingLabelText="Password" type="password"/>
						</div>
						<div>
							<RaisedButton label="Login" primary={true}/>
						</div>
					</Paper>
				</form>
			</div>
		);
	}
}

export default Login;