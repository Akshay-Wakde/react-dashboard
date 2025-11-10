import React ,  { useEffect, useState } from 'react';
import { NavLink } from "react-router-dom";



const Add = () => {
    

  return (
        <div className="main-content">
            <div className="row gutters">
                <div className="col-lg-12 col-sm-12">
                        <div className="card">
                            <div className='card-header'>
                                    <h4>Add User</h4>
                            </div>
                            <div className="card-body">
                                <div className="row gutters">
                                    <div className="col-sm-4 col-12">
                                        <div className="form-group">
                                            <label for="first_name">First Name</label>
                                            <input type="text" name="first_name" className="form-control" id="first_name" placeholder="Enter First Name"/>
                                        </div>
                                        
                                    </div>
                                    <div className="col-sm-4 col-12">
                                            <div className="form-group">
                                            <label for="last_name">Last Name</label>
                                            <input type="text" name="last_name" className="form-control" id="last_name" placeholder="Enter Last Name"/>
                                        </div>
                                    </div>
                                    <div className="col-sm-4 col-12">
                                            <div className="form-group">
                                            <label for="email">Email</label>
                                            <input type="email" name='email' className="form-control" id="email" placeholder="Enter Email"/>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                            <div className='card-footer form-group mx-2'>
                                <button type='submit' className='btn btn-sm btn-primary mr-1'>Submit</button> 
                                <NavLink to="/users/lists">
                                <button type='button' className='btn btn-sm btn-danger'> Cancel</button>    
                                </NavLink>
                            </div>
                        </div>
                </div>
            </div>
        </div>

  )
}

export default Add