import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';

import { form, formSchema } from '../models';
import auth from '../services/auth';

const Login = () => {
  const history = useHistory();
  const { register, formState: { errors }, handleSubmit } = useForm({
    resolver: yupResolver(formSchema)
  });

  const onFinish = (formData) => {
    auth.login(formData, () => history.push('/home'));
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  return (
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
  );
};

export default Login;