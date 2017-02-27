import React from 'react';

import UserProfileContainer from '../containers/UserProfileContainer';

export default class extends React.Component {
  render() {
    return ( 
        <div>
            <h1>Hello World</h1>
            <UserProfileContainer />
        </div>
    );
  }
}
