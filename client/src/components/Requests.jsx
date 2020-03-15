import React, {useState, Component} from 'react'
import {Link} from 'react-router-dom'
import './Requests.scss'

const Requests = ({data, active, children}) => (
  <div className='Requests'>
    <h2>Requests</h2>
    <ul>
      {data?.requests.map((datum, i) => (
        <li className={active.createdAt === datum.createdAt && 'actives'}>
          <Link to={`/${active.id}/${datum.createdAt}`}>
            <pre>{datum.method} /{datum.id}</pre>
            <time>{datum.createdAt}</time>
          </Link>
        </li>
      ))}
      <li className={data.requests.length || 'active'}>
        <Link to={"/" + data._id + "/new"} >Try it</Link>
      </li>
    </ul>
  </div>
)

export default Requests