import React, { useState } from 'react'
import Nav from './Nav'

const AddUser = () => {
    const [user,changeData]=useState(
        {
            "name":'',
            "uname":'',
            "email":'',
            "phn":'',
            "web":'',
        }
    )

    const inputHandler=(event)=>{
       changeData({...user,[event.target.name]:event.target.value})
    }

    const readValue=()=>{
        console.log(user)
    }

  return (
    <div>
        <Nav/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row">
                        <div className="col-col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Name</label>
                            <input type="text" className="form-control" name='name' value={user.name} onChange={inputHandler}/>
                        </div>
                        <div className="col-col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">UserName</label>
                            <input type="text" className="form-control" name='uname' value={user.uname} onChange={inputHandler}/>
                        </div>
                        <div className="col-col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Email</label>
                            <input type="text" className="form-control" name='email' value={user.email} onChange={inputHandler}/>
                        </div>
                        <div className="col-col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">PhoneNo</label>
                            <input type="text" className="form-control" name='phn' value={user.phn} onChange={inputHandler}/>
                        </div>
                        <div className="col-col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Website</label>
                            <input type="text" className="form-control" name='web' value={user.web} onChange={inputHandler}/>
                        </div>
                        <div className="col-col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6"><br></br>
                            <button className="btn btn-info" onClick={readValue}>AddNow</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddUser