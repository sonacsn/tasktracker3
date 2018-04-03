import { Provider, connect } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Nav from './nav';
import TaskForm from './task-form';
import Users from './users';
import Feed from './feed';

export default function tasktracker_init(store) {
  ReactDOM.render(
    <Provider store={store}>
      <Tasktracker state={store.getState()} />
    </Provider>,
    document.getElementById('root'),
  );
 }

//export default function tasktracker_init() {
//  let root = document.getElementById('root');
//  ReactDOM.render(<Tasktracker />, root);
//}

//class Tasktracker extends React.Component {
//  constructor(props) {
//    super(props);

//    this.state = {
//      posts: [],
//      users: [],
//    };

//  }

  let Tasktracker = connect((state) => state)((props) => {
    return (
      <Router>
        <div>
          <Nav />
          <Route path="/" exact={true} render={() => 
            <div>
	      <TaskForm users={props.users}/>
              <Feed tasks={props.tasks} />
	    </div>
          } />
          <Route path="/users" exact={true} render={() =>
            <Users users={props.users} />
          } />
          <Route path="/users/:user_id" render={({match}) =>
            <Feed tasks={_.filter(props.tasks, (pp) =>
              match.params.user_id == pp.user.id )
            } />
          } />
        </div>
      </Router>
    );
  });
