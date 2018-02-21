import React, {Component} from 'react';
import './login.css';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {username: '', password: '', isLoggedIn : false};
    }
    
    performLogin = () => {
        if(this.state.username !== '' && this.state.password !== '') {
            this.setState({isLoggedIn : true});
        }
    }

    handleChangeEvent = (event) => {
        if(event.currentTarget.type === 'password') {
            this.setState({password: event.target.value});
        } else {
            this.setState({username: event.target.value});
        }
    }

	render() {
		return (
			<div className="login-container">
				<form className="login-form">
					<Paper zDepth={5} className="login-paper">
						<label className="form-header">Login</label>
						<div>
							<TextField hintText="Username" floatingLabelText="Username"
                                value={this.state.username} onChange={this.handleChangeEvent}/>
						</div>
						<div>
							<TextField hintText="Password" floatingLabelText="Password"
                                type="password" value={this.state.password} onChange={this.handleChangeEvent}/>
						</div>
						<div>
							<RaisedButton label="Login" primary={true} onClick={this.performLogin}/>
						</div>
					</Paper>
				</form>
			</div>
		);
	}
}

export default Login;