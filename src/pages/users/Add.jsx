import React ,  { useEffect, useState } from 'react';
import { NavLink } from "react-router-dom";
import Layout from '../../components/common/Layout';


const Add = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        password: "",
        confirm_password: "",
    });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let newErrors = {};
    if (!formData.name.trim()) {
       return newErrors.name = "Name is required";
    } 
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.email.includes("@")) newErrors.email = "Enter a valid email";
    if (formData.password.length < 6){
        newErrors.password = "Password must be at least 6 characters";
    }
     if (formData.confirm_password.length < 6){
         newErrors.confirm_password = "Confirm Password must be at least 6 characters";
     }
     if (formData.password !== formData.confirm_password) {
            newErrors.password = "Password not matched with Confirm Password";
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      alert("Form submitted successfully!");
      console.log(formData);
      setErrors({});
    }
  };


  return (
    <Layout pageTitle="Lists">
        <div className="w-auto bg-white h-auto  shadow-md rounded p-6">
            <h2 className="text-3xl font-bold dark:text-gray">List</h2>
            <form className='w-full h-auto' onSubmit={handleSubmit}>
                <div className="space-y-12">
                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-2">
                            <label htmlFor="name" className="block text-sm/6 font-medium text-gray-900">
                                     
                            Name <span className='text-red-600'>* {errors.name}</span>
                            </label>
                            <div className="mt-2">
                                    <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300     focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                                    <input id="name" name="name" type="text" value={formData.name} onChange={handleChange} placeholder="Enter Full Name" className="block min-w-0 grow bg-white py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                                />
                                </div>
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                            Email  <span className='text-red-600'>* {errors.email}</span>
                            </label>
                            <div className="mt-2">
                                <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                                    <input id="email" autoComplete='off' name="email" type="email" value={formData.email} onChange={handleChange} placeholder="Enter Email" className="block min-w-0 grow bg-white py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                                />
                                </div>
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="Password" className="block text-sm/6 font-medium text-gray-900">
                            Password   <span className='text-red-600'>* {errors.password}</span>
                            </label>
                            <div className="mt-2">
                                <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                                    <input id="Password" name="password" type="password" value={formData.password} onChange={handleChange}  placeholder="Enter Password" className="block min-w-0 grow bg-white py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                                />
                                </div>
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="confirm_password" className="block text-sm/6 font-medium text-gray-900">
                            Confirm password <span className='text-red-600'>* {errors.confirm_password}</span>
                            </label>
                            <div className="mt-2">
                                <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                                    <input id="confirm_password" name="confirm_password" value={formData.confirm_password} onChange={handleChange}  type="password" placeholder="Enter confirm password" className="block min-w-0 grow bg-white py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                                />
                                </div>
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="username" className="block text-sm/6 font-medium text-gray-900">
                            Phone  <span className='text-red-600'>*</span>
                            </label>
                            <div className="mt-2">
                                <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                                    <input id="username" name="username" type="tel" placeholder="Enter Phone Number" className="block min-w-0 grow bg-white py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                                />
                                </div>
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="username" className="block text-sm/6 font-medium text-gray-900">
                            Image  <span className='text-red-600'>*</span>
                            </label>
                            <div className="mt-2">
                                <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                                    <input id="username" name="username" type="file" className="block min-w-0 grow bg-white py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                                />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-6 flex items-center justify-left gap-x-6">
                        <button type="submit" className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                        Save
                        </button>
                         <button type="button" className="text-sm/6 font-semibold text-gray-900">
                            Cancel
                        </button>
                    </div>
                </div>
            </form>
        </div>

    </Layout>
  )
}

export default Add