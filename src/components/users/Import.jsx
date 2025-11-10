import React ,  { useState } from 'react';
import { NavLink } from "react-router-dom";
import axios from 'axios';



const Import = () => {
    const [file, setFile] = useState(null);
    const [status, setStatus] = useState('');

    const handleFileChange = (e) =>{
        setFile(e.target.files[0]);
    };

    const handleUpload = async () =>{
        if(!file) return alert('Please select a file first!');

        const formData = new FormData();
        formData.append("uploadFile",file);

        try {
            setStatus("Uploading...");
            const res = await axios.post('http://localhost:4000/api/user/upload-csv',formData,{
                headers: {
                    'Content-Type' : 'multipart/form-data',
                }
            });

            setStatus(res.data.message);
        } catch (error) {
            console.error(error);
            setStatus('Upload failed!');
        }
    }
  return (
        <div className="main-content">
            <div className="row gutters">
                <div className="col-lg-12 col-sm-12">
                        <div className="card">
                            <div className='card-header'>
                                    <h4>Import file</h4>
                            </div>
                            <form>
                            <div className="card-body">
                                <div className="row gutters">
                                    <div className="col-sm-4 col-12">
                                        <div className="form-group">
                                            <label for="first_name">File</label>
                                            <input type="file" accept=".csv" name="uploadFile" onChange={handleFileChange} className="form-control" id="file"/>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                            <div className='card-footer form-group mx-2'>
                                <button type='button' onClick={handleUpload} className='btn btn-sm btn-primary mr-1'>Submit</button> 
                                <NavLink to="/users/lists">
                                <button type='button' className='btn btn-sm btn-danger'> Cancel</button>    
                                </NavLink>

                                 <p>{status}</p>
                            </div>
                            </form>
                        </div>
                </div>
            </div>
        </div>

  )
}

export default Import