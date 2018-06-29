import React from 'react';
import {
    Route
} from 'react-router-dom';
import { UserView, TagView, RetentionView } from '../components';

const RootRouter = () => {
  return(
      <React.Fragment>
          <Route exact path="/" component={UserView}/>
          <Route path="/Tags" component={TagView}/>
          <Route path="/Retention" component={RetentionView}/>
      </React.Fragment>
  )
};

export default RootRouter;