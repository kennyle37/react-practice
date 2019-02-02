import React from 'react';
import ReactDOM from 'react-dom';

import faker from 'faker';

import ApprovalCard from './ApprovalCard';
import UserProfile from './UserProfile';

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <UserProfile avatar={faker.image.avatar()} firstName={faker.name.firstName()} date="Yesterday 4:20pm" text="Hello"/>
      </ApprovalCard>
      
      <ApprovalCard>
        <UserProfile avatar={faker.image.avatar()} firstName={faker.name.firstName()} date="Yesterday 5:30pm" text="Testing"/>
      </ApprovalCard>

      <ApprovalCard>
        <UserProfile avatar={faker.image.avatar()} firstName={faker.name.firstName()} date="Yesterday 6:30pm" text="Bye Felicia"/>
      </ApprovalCard>



    </div>
  )
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
)