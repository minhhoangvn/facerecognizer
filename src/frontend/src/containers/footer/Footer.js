import 'antd/dist/antd.css';
import React from 'react';
import { Layout } from 'antd';

const { Footer } = Layout;
const FooterComponent = props => {
  console.log(props);
  return (
    <Footer style={{ textAlign: 'center' }}>
      Toilatester Design ©2018 Created by MH
    </Footer>
  );
};

export { FooterComponent };
