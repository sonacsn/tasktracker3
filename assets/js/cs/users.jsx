import React from 'react';
import { Link } from 'react-router-dom';

function User(params) {
  return <tr><td><Link to={"/users/" + params.user.id}>{params.user.name}</Link></td><td>{params.user.email}</td></tr>;
}

export default function Users(params) {
  let users = _.map(params.users, (uu) => <User key={uu.id} user={uu} />);
  return <table className="table"> 
	  <tbody>
           <tr>
	    <th>Name</th>
	    <th>Email</th>
	   </tr>
    { users }
   </tbody>
  </table>;
}
