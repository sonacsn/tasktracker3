import React from 'react';
import { Card, CardBody } from 'reactstrap';
import { Link } from 'react-router-dom';

export default function Task(params) {
  let task = params.task;
  return <Card>
    <CardBody>
      <div>
        <p><b>Assigned To: </b> { task.user.name }</p>
        <p><b>Title: </b>{task.title}</p>
	<p><b>Descripton: </b>{ task.description } </p>
	<p><b>Duration: </b>{ task.duration } </p>
        <p><b>Completed: </b>{ task.completed } </p>
	<p><Link className="btn btn-primary btn-sm" to={"/tasks/"+task.id} >EDIT</Link></p>
      </div>
    </CardBody>
  </Card>;
}
