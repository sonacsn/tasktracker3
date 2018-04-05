import React from 'react';
import Task from './task';

export default function Feed(params) {
  let tasks = _.map(params.tasks, (pp) => <Task key={pp.id} task={pp} />);
  return <table className="table">
    <tbody>
     	   <tr className="thread-dark">
      		<th>Name</th>
      		<th>Title</th>
      		<th>Description</th>
      		<th>Duration</th>
      		<th>Status</th>
      		<th></th>
     	</tr>
    { tasks }
    </tbody>
   </table>;
}
