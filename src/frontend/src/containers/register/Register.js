import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
// import { withStyles } from '@material-ui/core/styles';
// import TextField from '@material-ui/core/TextField';
// import { Button } from '@material-ui/core';
// import { Grid } from '@material-ui/core';
// import SaveIcon from '@material-ui/icons/Save';
// import DeleteIcon from '@material-ui/icons/Delete';
// import FormLabel from '@material-ui/core/FormLabel';
import 'antd/dist/antd.css';
import {
  Form,
  Input,
  Tooltip,
  Icon,
  Cascader,
  Select,
  Row,
  Col,
  Checkbox,
  Button,
  AutoComplete
} from 'antd';
// import 'antd/lib/button/style/css';
// import 'antd/lib/form/style/css';
// import 'antd/lib/input/style/css';
// import 'antd/lib/tooltip/style/css';
// import 'antd/lib/icon/style/css';
// import 'antd/lib/cascader/style/css';
// import 'antd/lib/select/style/css';
// import 'antd/lib/row/style/css';
// import 'antd/lib/col/style/css';
// import 'antd/lib/checkbox/style/css';
// import 'antd/lib/auto-complete/style/css';
/**
 * Register Page
 */

// const styles = theme => ({
//   container: {
//     display: 'flex',
//     flexWrap: 'wrap',
//     fontSize: '1.0em'
//   },
//   button: {
//     margin: theme.spacing.unit,
//     width: 200
//   },
//   textField: {
//     marginLeft: theme.spacing.unit,
//     marginRight: theme.spacing.unit,
//     width: 200,
//     fontSize: '0.8em'
//   },
//   menu: {
//     fontSize: '0.8em',
//     width: 200
//   },
//   leftIcon: {
//     marginRight: theme.spacing.unit
//   },
//   rightIcon: {
//     marginLeft: theme.spacing.unit
//   },
//   iconSmall: {
//     fontSize: 20
//   },
//   gridLayout: {
//     marginLeft: '30%',
//     padding: 10
//   }
// });

// class RegisterForm extends React.Component {
//   state = {};

//   handleChange = name => event => {
//     this.setState({
//       [name]: event.target.value
//     });
//   };

//   render() {
//     const { classes } = this.props;
//     return (
//       <form
//         className={classes.container}
//         method="GET"
//         action="/debug/debug"
//         noValidate
//         autoComplete="off"
//       >
//         <FormLabel component="label">Register Account</FormLabel>
//         <Grid
//           className={classes.gridLayout}
//           item
//           xs={4}
//           spacing={8}
//           alignContent={'space-around'}
//           container={true}
//         >
//           <TextField
//             required
//             id="user-input"
//             label="UserName"
//             className={classes.textField}
//             autoComplete="username"
//             margin="normal"
//             placeholder="Input your username"
//           />
//           <TextField
//             required
//             id="password-input"
//             label="Password"
//             className={classes.textField}
//             type="password"
//             autoComplete="current-password"
//             margin="normal"
//             placeholder="Input your password"
//           />
//           <TextField
//             required
//             id="email-input"
//             label="Email"
//             className={classes.textField}
//             type="email"
//             autoComplete="email"
//             margin="normal"
//             placeholder="Input your email"
//           />
//           <TextField
//             required
//             id="firstname-input"
//             label="First Name"
//             className={classes.textField}
//             type="text"
//             autoComplete="given-name"
//             margin="normal"
//             placeholder="Input your first-name"
//           />
//           <TextField
//             required
//             id="lastname-input"
//             label="Last Name"
//             className={classes.textField}
//             type="text"
//             autoComplete="family-name"
//             margin="normal"
//             placeholder="Input your last-name"
//           />
//           <TextField
//             id="location-input"
//             label="Location"
//             className={classes.textField}
//             type="text"
//             margin="normal"
//             placeholder="Input your location"
//           />
//           <Button
//             type="submit"
//             variant="contained"
//             size="small"
//             className={classes.button}
//           >
//             <SaveIcon
//               className={classNames(classes.leftIcon, classes.iconSmall)}
//             />
//             Register Account
//           </Button>
//           <Button
//             type="button"
//             variant="contained"
//             size="small"
//             className={classes.button}
//           >
//             <DeleteIcon
//               className={classNames(classes.leftIcon, classes.iconSmall)}
//             />
//             Clear
//           </Button>
//         </Grid>
//       </form>
//     );
//   }
// }

// RegisterForm.propTypes = {
//   classes: PropTypes.object.isRequired
// };

// const Register = withStyles(styles)(RegisterForm);

/**
 * Form ant library
 */

const FormItem = Form.Item;
const Option = Select.Option;
const AutoCompleteOption = AutoComplete.Option;

const residences = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake'
          }
        ]
      }
    ]
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men'
          }
        ]
      }
    ]
  }
];

class RegistrationForm extends React.Component {
  state = {
    confirmDirty: false,
    autoCompleteResult: []
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  handleConfirmBlur = e => {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  };

  compareToFirstPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue('password')) {
      callback('Two passwords that you enter is inconsistent!');
    } else {
      callback();
    }
  };

  validateToNextPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  };

  handleWebsiteChange = value => {
    let autoCompleteResult;
    if (!value) {
      autoCompleteResult = [];
    } else {
      autoCompleteResult = ['.com', '.org', '.net'].map(
        domain => `${value}${domain}`
      );
    }
    this.setState({ autoCompleteResult });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const { autoCompleteResult } = this.state;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 }
      }
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0
        },
        sm: {
          span: 16,
          offset: 8
        }
      }
    };
    const prefixSelector = getFieldDecorator('prefix', {
      initialValue: '86'
    })(
      <Select style={{ width: 70 }}>
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    );

    const websiteOptions = autoCompleteResult.map(website => (
      <AutoCompleteOption key={website}>{website}</AutoCompleteOption>
    ));

    return (
      <Row>
        <Col span={12} offset={4}>
          <Form onSubmit={this.handleSubmit}>
            <FormItem {...formItemLayout} label="E-mail">
              {getFieldDecorator('email', {
                rules: [
                  {
                    type: 'email',
                    message: 'The input is not valid E-mail!'
                  },
                  {
                    required: true,
                    message: 'Please input your E-mail!'
                  }
                ]
              })(<Input />)}
            </FormItem>
            <FormItem {...formItemLayout} label="Password">
              {getFieldDecorator('password', {
                rules: [
                  {
                    required: true,
                    message: 'Please input your password!'
                  },
                  {
                    validator: this.validateToNextPassword
                  }
                ]
              })(<Input type="password" />)}
            </FormItem>
            <FormItem {...formItemLayout} label="Confirm Password">
              {getFieldDecorator('confirm', {
                rules: [
                  {
                    required: true,
                    message: 'Please confirm your password!'
                  },
                  {
                    validator: this.compareToFirstPassword
                  }
                ]
              })(<Input type="password" onBlur={this.handleConfirmBlur} />)}
            </FormItem>
            <FormItem
              {...formItemLayout}
              label={
                <span>
                  Nickname&nbsp;
                  <Tooltip title="What do you want others to call you?">
                    <Icon type="question-circle-o" />
                  </Tooltip>
                </span>
              }
            >
              {getFieldDecorator('nickname', {
                rules: [
                  {
                    required: true,
                    message: 'Please input your nickname!',
                    whitespace: true
                  }
                ]
              })(<Input />)}
            </FormItem>
            <FormItem {...formItemLayout} label="Habitual Residence">
              {getFieldDecorator('residence', {
                initialValue: ['zhejiang', 'hangzhou', 'xihu'],
                rules: [
                  {
                    type: 'array',
                    required: true,
                    message: 'Please select your habitual residence!'
                  }
                ]
              })(<Cascader options={residences} />)}
            </FormItem>
            <FormItem {...formItemLayout} label="Phone Number">
              {getFieldDecorator('phone', {
                rules: [
                  { required: true, message: 'Please input your phone number!' }
                ]
              })(
                <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
              )}
            </FormItem>
            <FormItem {...formItemLayout} label="Website">
              {getFieldDecorator('website', {
                rules: [{ required: true, message: 'Please input website!' }]
              })(
                <AutoComplete
                  dataSource={websiteOptions}
                  onChange={this.handleWebsiteChange}
                  placeholder="website"
                >
                  <Input />
                </AutoComplete>
              )}
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="Captcha"
              extra="We must make sure that your are a human."
            >
              <Row gutter={8}>
                <Col span={12}>
                  {getFieldDecorator('captcha', {
                    rules: [
                      {
                        required: true,
                        message: 'Please input the captcha you got!'
                      }
                    ]
                  })(<Input />)}
                </Col>
                <Col span={12}>
                  <Button>Get captcha</Button>
                </Col>
              </Row>
            </FormItem>
            <FormItem {...tailFormItemLayout}>
              {getFieldDecorator('agreement', {
                valuePropName: 'checked'
              })(
                <Checkbox>
                  I have read the <a href="">agreement</a>
                </Checkbox>
              )}
            </FormItem>
            <FormItem {...tailFormItemLayout}>
              <Button type="primary" htmlType="submit">
                Register
              </Button>
            </FormItem>
          </Form>
        </Col>
      </Row>
    );
  }
}

const WrappedRegistrationForm = Form.create()(RegistrationForm);

export { WrappedRegistrationForm };
