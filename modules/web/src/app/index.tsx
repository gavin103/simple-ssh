import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  BlockOutlined,
  DatabaseOutlined,
  CloudServerOutlined,
  GroupOutlined
} from '@ant-design/icons';
import SSHPage from '../pages/ssh';
import SCPPage from '../pages/scp';
import HostPage from '../pages/hosts';
import HistoryPage from '../pages/history';
import './style.css'

const { Header, Sider, Content } = Layout;

const App: React.FC = () => {

  const [collapsed, setCollapsed] = useState(false)
  const toggle = () => setCollapsed(!collapsed)

  return (
    <Layout className='site-container'>
      <Router>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="logo" >
            {collapsed ? "SSH" : "Simple SSH"}
          </div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>

            <Menu.Item key="1" icon={<DatabaseOutlined />}>
              <Link to={'/host'}> Host</Link>
            </Menu.Item>

            <Menu.Item key="2" icon={<BlockOutlined />}>
              <Link to={'/ssh'}> SSH</Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<CloudServerOutlined />}>
              <Link to={'/scp'}> SCP</Link>
            </Menu.Item>
            <Menu.Item key="4" icon={<GroupOutlined />}>
              <Link to={'/history'}> History</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-header">
            <span>
              {
                React.createElement(
                  collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                  { className: 'trigger', onClick: toggle }
                )
              }
            </span>
            <span>当前连接：192.168.1.10</span>
          </Header>
          <Content className="site-layout-content" >
            <Routes>
              <Route path="host" element={<HostPage />} />
              <Route path="ssh" element={<SSHPage />} />
              <Route path="scp" element={<SCPPage />} />
              <Route path="history" element={<HistoryPage />} />
              <Route path="*" element={<HostPage />} />
            </Routes>
          </Content>
        </Layout>

      </Router >
    </Layout >
  )
}

export default App