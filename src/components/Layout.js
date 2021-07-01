import React from 'react';

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 14 },
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};


const Layout = ({ children }) => {
  return (
    <>{children}</>
  );
}

export default Layout;