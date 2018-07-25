import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  button: {
    margin: theme.spacing.unit,
    width: 100,
    backgroundColor: '#37cc57',
    fontSize: '0.8em',
    fontWeight: 900,
    color: '#1b2363'
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  },
  menu: {
    width: 200
  }
});

class RegisterForm extends React.Component {
  state = {};

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          required
          id="user-input"
          label="UserName"
          className={classes.textField}
          autoComplete="username"
          margin="normal"
          placeholder="Input your username"
        />
        <TextField
          required
          id="password-input"
          label="Password"
          className={classes.textField}
          type="password"
          autoComplete="current-password"
          margin="normal"
          placeholder="Input your password"
        />
        <TextField
          required
          id="email-input"
          label="Email"
          className={classes.textField}
          type="email"
          autoComplete="email"
          margin="normal"
          placeholder="Input your email"
        />
        <TextField
          required
          id="firstname-input"
          label="First Name"
          className={classes.textField}
          type="text"
          autoComplete="given-name"
          margin="normal"
          placeholder="Input your first-name"
        />
        <TextField
          required
          id="lastname-input"
          label="Last Name"
          className={classes.textField}
          type="text"
          autoComplete="family-name"
          margin="normal"
          placeholder="Input your last-name"
        />
        <TextField
          id="location-input"
          label="Location"
          className={classes.textField}
          type="text"
          margin="normal"
          placeholder="Input your location"
        />
        <TextField
          id="birth-input"
          label="Birthday"
          className={classes.textField}
          type="text"
          margin="normal"
          placeholder="Input your birthday"
        />
        <Button variant="flat" size="large" className={classes.button}>
          Register Account
        </Button>
      </form>
    );
  }
}

RegisterForm.propTypes = {
  classes: PropTypes.object.isRequired
};

const Register = withStyles(styles)(RegisterForm);
export { Register };
