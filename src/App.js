import 'antd/dist/antd.css';

import { Form, Input, Button, Checkbox } from 'antd';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import React, { useState } from 'react';

import { form, formSchema } from './models';
import { STATUS_CODES } from './utils/constants';
import { validateUser } from './api';

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 14 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const App = () => {
  const { register, formState: { errors }, handleSubmit } = useForm({
    resolver: yupResolver(formSchema)
  });
  
  const onFinish = async data => {
    const result = await validateUser(data);
    
    if (result.status === STATUS_CODES.SUCCESSFUL) {

    }
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  return (
    <>
      <header>
        <img src='./images/dhg_whole.png' />
      </header>
      <main>
        <Form
          layout={'vertical'}
          name='basic'
          initialValues={{ remember: true }}
          onFinish={handleSubmit(onFinish)}
          onFinishFailed={onFinishFailed}
        >
          {form.inputs.map((input, key) => {
            return (
              <Form.Item
                key={key}
                label={input.label}
                name={input.name}
              >
                {input.name === 'password' ?
                  <Input.Password size={input.size} {...register(input.name)} /> :
                  <Input size={input.size} {...register(input.name)} />}
                <p style={{ color: 'red' }}>{errors[input.name]?.message}</p>
              </Form.Item>
            )
          })}
          <Form.Item
            name='remember'
            valuePropName='checked'
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item>
            <Button
              type='primary'
              htmlType='submit'
              size='large'
            // disabled={1 > 0}
            >
              Log in
            </Button>
          </Form.Item>
        </Form>
      </main>
      <footer>
      </footer>
    </>
  );
}

export default App;
