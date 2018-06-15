import React from 'react'
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
  AutoComplete,
} from 'antd'

const FormItem = Form.Item

const RegisterForm = () => {
  const { getFieldDecorator } = this.props.form

  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 8 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 16 },
    },
  }
  const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0,
      },
      sm: {
        span: 16,
        offset: 8,
      },
    },
  }

  return (
    <Form onSubmit={this.props.handleSubmit}>
      <FormItem {...formItemLayout} label="E-mail">
        {getFieldDecorator('email', {
          rules: [
            {
              type: 'email',
              message: 'The input is not valid E-mail!',
            },
            {
              required: true,
              message: 'Please input your E-mail!',
            },
          ],
        })(<Input />)}
      </FormItem>
      <FormItem {...formItemLayout} label="Username">
        {getFieldDecorator('username', {
          rules: [
            {
              required: true,
              message: 'Please input your Username!',
            },
          ],
        })(<Input />)}
      </FormItem>
      <FormItem {...formItemLayout} label="Password">
        {getFieldDecorator('password', {
          rules: [
            {
              required: true,
              message: 'Please input your password!',
            },
          ],
        })(<Input type="password" />)}
      </FormItem>

      <FormItem {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          Register
        </Button>
      </FormItem>
    </Form>
  )
}

export default RegisterForm
