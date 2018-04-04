import React from 'react';
import { connect } from 'react-redux';
import { Button, FormGroup, Label, Input } from 'reactstrap';
import api from '../api';

function EditTask(params) {
  function update(ev) {
    let tgt = $(ev.target);

    let data = {};
    data[tgt.attr('name')] = tgt.val();
    let action = {
      type: 'UPDATE_FORM',
      data: data,
    };
    console.log(action);
    params.dispatch(action);
  }

  function submit(ev) {
    console.log("Should create post.");
    console.log(params.task_form);
    api.edit_task(params.task_form, params.task[0].id);
  }

  function populate_form(task) {
  //  params.task_form.user_id = task.user.id;
  //  params.task_form.completed = task.completed;
    params.task_form.description = task.description;
    params.task_form.title = task.title;
    params.task_form.duration = task.duration;
}



  if(params.task.length != 0){
  let task = params.task[0];
  //populate_form(task);
  let users_l = _.map(params.users, function(uu,key){ 
		if(uu.id==task.user.id) 
			return (<option key={uu.id} value={uu.id}>{uu.name}</option>);
		else
			return (<option key={uu.id} value={uu.id}>{uu.name}</option>);
		});

  let users = _.union([<option key="" value="">Select a user</option>], users_l)
  console.log("users", users);
  console.log("params...", params);
  return <div style={ {padding: "4ex"} }>
    <h2>New Task</h2>
    <FormGroup>
      <Label for="user_id">Assign To</Label>
      <Input type="select" name="user_id" value={params.task_form.user_id} selected={params.task[0].user.id}  onChange={update} >
        { users }
      </Input>
    </FormGroup>
    <FormGroup>
      <Label for="title">Title</Label>
      <Input type="text" name="title" value={params.task_form.title} onChange={update} />
    </FormGroup>
    <FormGroup>
      <Label for="description">Description</Label>
      <Input type="textarea" name="description" value={params.task_form.description} onChange={update} />
    </FormGroup>
    <FormGroup>
      <Label for="duration">Description</Label>
      <Input type="text" name="duration" value={params.task_form.duration} onChange={update} />
    </FormGroup>
    <Button onClick={submit} color="primary">Create</Button>
  </div>;
}
else
  return <div></div>;
}

function state2props(state) {
  return { task_form: state.task_form };
}

// Export the result of a curried function call.
export default connect(state2props)(EditTask);
