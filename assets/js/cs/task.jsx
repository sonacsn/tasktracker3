import React from 'react';
import { Button, Card, CardBody } from 'reactstrap';
import { Link } from 'react-router-dom';
import api from '../api';

export default function Task(params) {

  function update_task(ev) {
    let data = {};
    //data = _.omit(params.task, 'completed');
    //task['completed'] = !params.task.completed;
    data['completed'] = !params.task.completed;
    api.toggle_complete(data, task.id);
//    api.request_tasks();
  }

  function CompleteTask(){
    if(params.task.completed)
      return <Button className="btn-sm btn-info" onClick={update_task}>Mark Incomplete</Button>;
    else
	return <Button className="btn-sm btn-info" onClick={update_task}>Mark Complete</Button>;
  }

  function delete_task(ev){
    api.delete_task(params.task.id)
  }
  let c;
  if(params.task.completed)
	c="Completed";
  else
	c="Ongoing";
  let task = params.task;
  return <tr>
        <td>{ task.user.name }</td>
        <td>{task.title}</td>
	<td>{ task.description } </td>
	<td>{ task.duration } </td>
        <td>{ c } </td>
	<td className="text-right"><CompleteTask params={task}/><Link className="btn btn-primary btn-sm" to={"/tasks/"+task.id} >EDIT</Link>
	<Button className="btn-sm btn-danger" onClick={delete_task}>DELETE</Button></td>
  </tr>;
}
