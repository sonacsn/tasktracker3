import { Provider, connect } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Nav from './nav';
import TaskForm from './task-form';
import Users from './users';
import Feed from './feed';
import UserForm from './user-form';
import EditTask from './edit-form';

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

   if(props.task_form.token!=null && props.task_form.token!=""){
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
	    <div>
	      <UserForm />
              <Users users={props.users} />
	    </div>
          } />
          <Route path="/users/:user_id" render={({match}) =>
            <Feed tasks={_.filter(props.tasks, (pp) =>
              match.params.user_id == pp.user.id )
            } />
          } /> 
        <Route path="/tasks/:task_id" render={({match}) =>
	  <EditTask users={props.users} task={_.filter(props.tasks, (pp) =>
			match.params.task_id == pp.id)} />
          } />
        </div>
      </Router>
    );
  }
  else {
     return ( <Router>
     		<div>
      		  <Nav />
      		  <UserForm />
     		</div>
   	     </Router>);
  }
  });
