import React, { Component, PropTypes } from 'react';
import {
  Form, Row, Col, Input,
  Modal, Button, Icon,
  Radio, Checkbox, DatePicker,
  Tooltip, InputNumber, Switch } from 'antd';

const FormItem = Form.Item;
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;
const InputGroup = Input.Group;
const CheckboxGroup = Checkbox.Group;

const UserInfo = ({
  user,
  onUpdate,
  form: {
    getFieldDecorator,
    validateFields,
    getFieldsValue,
  },
}) => {
  function handleSubmit(e) {
    e.preventDefault();
    validateFields((errors) => {
      if (!!errors) {
        return;
      }
      const data = { ...getFieldsValue() };
      onUpdate(data);
    });
  }

  const formItemLayout = {
    labelCol: { span: 5 },
    wrapperCol: { span: 10 },
  };

  const config = {
    
  };

  return (
    <Form style={{ width: 720 }} onSubmit={handleSubmit}>
      <Row>
        <Col>
          <FormItem {...formItemLayout} hasFeedback label="手机号">
            {getFieldDecorator('mobile', {
              rules: [{
                required: true,
                pattern: /^[0-9]{11}$/,
                message: '必须填写正确的手机号',
              }],
              initialValue: user.mobile,
            })(
              <Input placeholder="请输入任务名称" />
            )}
          </FormItem>
        </Col>
        <Col>
          <FormItem {...formItemLayout} hasFeedback label="邮箱地址">
            {getFieldDecorator('email', {
              rules: [{
                type: 'email',
                required: true,
                message: '必须填写正确的邮箱地址',
              }],
              initialValue: user.email,
            })(
              <Input placeholder="请输入邮箱地址" />
            )}
          </FormItem>
        </Col>
        <Col>
          <FormItem {...formItemLayout} label="昵称">
            {getFieldDecorator('nickname', {
              ...config,
              initialValue: user.nickname,
            })(
              <Input placeholder="请输入昵称" />
            )}
          </FormItem>
        </Col>
        <Col>
          <FormItem {...formItemLayout} label="分机号">
            {getFieldDecorator('tel', {
              ...config,
              initialValue: user.tel,
            })(
              <Input placeholder="请输入分机号" />
            )}
          </FormItem>
        </Col>
        <Col>
          <FormItem {...formItemLayout} label="备注">
            {getFieldDecorator('remark', {
              ...config,
              initialValue: user.remark,
            })(
              <Input 
                type="textarea" 
                placeholder="请输入备注" 
                autosize={{ minRows: 2, maxRows: 6 }} 
              />
            )}
          </FormItem>
        </Col>
        <Col>
          <FormItem wrapperCol={{ span: 8, offset: 5 }}>
            <Button type="primary" htmlType="submit">
              更新
            </Button>
            <Button style={{ marginLeft: 8 }}>
              取消
            </Button>
          </FormItem>
        </Col>
      </Row>
    </Form>
  );
}

UserInfo.propTypes = {
}

export default Form.create()(UserInfo);
