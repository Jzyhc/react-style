/*
 * @Author       : jincheng
 * @Date         : 2021-04-12 10:41:26
 * @LastEditTime : 2021-04-12 10:41:27
 * @LastEditors  : jincheng
 * @FilePath     : /react-style/src/route/index.js
 */

import React, { Fragment } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { withRouter } from 'react-router';
import RoutePaths from './path';

export default withRouter(() => (
  <Fragment>
    <Switch>
      {RoutePaths.map(({ path, component: Comp, title, ...props }) => (
        <Route
          path={path}
          key={path}
          {...props}
          render={props => {
            document.title = title || '测试';
            return <Comp {...props} />;
          }}
        />
      ))}
      <Route
        exact
        path="/"
        render={() => <Redirect to="/app/welcome" />}
      />
     {/* <Route render={() => <Redirect to="/app/jingwei/error/404" />} /> */}
    </Switch>
  </Fragment>
));