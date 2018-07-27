import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import {
  Grid,
  GridList,
  GridListTile,
  GridListTileBar
} from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import KeyboardVoiceICon from '@material-ui/icons/KeyboardVoice';
import Icon from '@material-ui/core/Icon';

/**
 * Register Page
 */
const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    fontSize: '1.0em'
  },
  button: {
    margin: theme.spacing.unit,
    width: 200
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
    fontSize: '0.8em'
  },
  menu: {
    fontSize: '0.8em',
    width: 200
  },
  leftIcon: {
    marginRight: theme.spacing.unit
  },
  rightIcon: {
    marginLeft: theme.spacing.unit
  },
  iconSmall: {
    fontSize: 20
  },
  gridLayout: {
    marginLeft: '30%',
    padding: 10
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
      <form className={classes.container} autoComplete="off">
        <Grid
          className={classes.gridLayout}
          item
          xs={4}
          spacing={8}
          alignContent={'space-around'}
          container={true}
        >
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
          <Button
            type="submit"
            variant="contained"
            size="small"
            className={classes.button}
          >
            <SaveIcon
              className={classNames(classes.leftIcon, classes.iconSmall)}
            />
            Register Account
          </Button>
        </Grid>
      </form>
    );
  }
}

RegisterForm.propTypes = {
  classes: PropTypes.object.isRequired
};

const Register = withStyles(styles)(RegisterForm);
export { Register };
