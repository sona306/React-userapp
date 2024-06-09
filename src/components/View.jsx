import React, { useEffect, useState } from 'react'
import Nav from './Nav'
import axios from 'axios'

const View = () => {
    const [user,changeData]=useState([])

    const fetchData=()=>{

        axios.get("https://jsonplaceholder.typicode.com/users").then(
            (response)=>{

                console.log(response.data)
                changeData(response.data)
            }
        ).catch()
    }

    useEffect(()=>{fetchData()},[])

  return (
    <div>
        <Nav/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 clo md-12 col-lg-12 col-xl-12 col-xxl-12">
                <table class="table table-bordered border-primary">


  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">uName</th>
      <th scope="col">fName</th>
      <th scope="col">phone</th>
      <th scope="col">website</th>
    </tr>
  </thead>
  <tbody>

        {user.map(
            (value,index)=>
            {
               return <tr>
                <th scope="row">{value.id}</th>
                <td>{value.username}</td>
                <td>{value.name}</td>
                <td>{value.phone}</td>
                <td>{value.website}</td>
                </tr>
                 
            }
        )

        }

  </tbody>


                </table>
                </div>
            </div>
        </div>
    </div>
  )
}


export default View