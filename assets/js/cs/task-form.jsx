import React from 'react';
import { connect } from 'react-redux';
import { Button, FormGroup, Label, Input } from 'reactstrap';
import api from '../api';

function TaskForm(params) {
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

  function clear(ev) {
    params.dispatch({
      type: 'CLEAR_FORM',
    });
  }

  function submit(ev) {
    api.submit_task(params.task_form);
    clear("");
  }

  let users_l = _.map(params.users, (uu,key) => <option key={uu.id} value={uu.id}>{uu.name}</option>);
  let users = _.union([<option key="" value="">Select a user</option>], users_l)
  console.log("params.users", params.users);
  console.log("params...", params);
  return <div style={ {padding: "4ex"} }>
    <h2>New Task</h2>
    <FormGroup>
      <Label for="user_id">Assign To</Label>
      <Input type="select" name="user_id" value={params.task_form.user_id} onChange={update} >
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
      <Input type="number" min="0" step="15" name="duration" value={params.task_form.duration} onChange={update} />
    </FormGroup>
    <Button onClick={submit} color="primary">Create</Button>
    <Button onClick={clear}>Clear</Button>
  </div>;
}

function state2props(state) {
  return { task_form: state.task_form };
}

// Export the result of a curried function call.
export default connect(state2props)(TaskForm);
