import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
class Login extends Component {
	render() {
		return (
			<form>
				<fieldset>
					<TextField hintText="Username" floatingLabelText="Username" />
					<TextField hintText="Password" floatingLabelText="Password" type="password"/>
				</fieldset>
			</form>
		);
	}
}

export default Login;