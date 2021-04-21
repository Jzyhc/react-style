/*
 * @Author       : jincheng
 * @Date         : 2021-04-12 10:41:26
 * @LastEditTime : 2021-04-21 15:15:05
 * @LastEditors  : jincheng
 * @FilePath     : /react-style/src/router/index.js
 */
import React from 'react'

import { Layout, Menu, Breadcrumb } from 'antd';
import { Route, Switch, Redirect, useHistory } from 'react-router-dom';
import { withRouter } from 'react-router';
import RoutePaths from './path';
import 'antd/dist/antd.css';
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;


const RouteIndex = () => {
  const history = useHistory();
  const historyPush = (e) => {
    history.push(e.key)
    // console.log(e)
  }
  return (
    <Layout>
      <Header className="header"></Header>
      <Layout>
        <Sider width={200} className="site-layout-background">
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0 }}
          >
            {RoutePaths.map(({ title, list, icon }) => (
              <SubMenu key={title} icon={icon} title={title}>
                {list.map(({ title, path }) => (
                  <Menu.Item onClick={(path) => historyPush(path)} key={path}>{title}</Menu.Item>
                ))}
              </SubMenu>
            ))}
          </Menu>
        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 780,
            }}
          >
            <Switch>
              {RoutePaths.map(({ list, title, ...props }) => (
                list.map(({ path, component: Comp, title, ...props }) => (
                  <Route
                    path={path}
                    key={path}
                    {...props}
                    render={props => {
                      document.title = title || '测试';
                      return <Comp {...props} />;
                    }}
                  />
                ))
              ))}
              <Route
                exact
                path="/"
                render={() => <Redirect to="/app/welcome" />}
              />
              {/* <Route render={() => <Redirect to="/app/jingwei/error/404" />} /> */}
            </Switch>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  )
}

export default withRouter(RouteIndex);


// export default App;


// import React, { Fragment } from 'react';



//   <Fragment>

//   </Fragment>
// ));