import React ,  { useEffect, useState } from 'react';
import { NavLink } from "react-router-dom";
import axios from 'axios';
import DataTable from "react-data-table-component";
import Layout from '../../components/common/Layout';
const Lists = () => {
    const [data, setData] = useState([]);
    const [totalRows, setTotalRows] = useState(0);
    const [loading, setLoading] = useState(false);
    const [perPage, setPerPage] = useState(10);

    const [currentPage, setCurrentPage] = useState(1);
    const [sortField, setSortField] = useState("");
    const [sortOrder, setSortOrder] = useState("asc");
    const [searchText, setSearchText] = useState("");

    const columns = [
    {
        name: "S.No",
        selector: (row, index) => (currentPage - 1) * perPage + index + 1,
        sortable: false,
        width:"5%"
    },
    { name: "Name", selector: row => row.name, sortable: false},
    { name: "Email", selector: row => row.email, sortable: false},
    { name: "Phone", selector: row => row.email, sortable: false},
    { name: "Image", selector: row => row.email, sortable: false},
    {
      name: "Status",
      cell: row => (
        <button type="button" className="inline-flex items-center rounded-md bg-white px-2 py-1 text-sm font-semibold text-gray-900 shadow-xs inset-ring inset-ring-gray-300 hover:bg-indigo-600 hover:text-white">
              
              Status
            </button>
      ),
        ignoreRowClick: true,
        allowoverflow: true,
        button: "true",
    },{
      name: "Action",
      cell: row => (
        <button type="button" className="inline-flex items-center rounded-md bg-white px-2 py-1 text-sm font-semibold text-gray-900 shadow-xs inset-ring inset-ring-gray-300 hover:bg-indigo-600 hover:text-white">
              
              Edit
            </button>
      ),
        ignoreRowClick: true,
        allowoverflow: true,
        button: "true",
    },
    {
        name: "Action",
        cell: row => (
         <button type="button" className="inline-flex items-center rounded-md bg-white px-2 py-1 text-sm font-semibold text-gray-900 shadow-xs inset-ring inset-ring-gray-300 hover:bg-orange-600 hover:text-white">
                
                Delete
              </button>
        ),
        ignoreRowClick: true,
        allowoverflow: true,
        button: "true",
    },
  ];

      // Fetch data from server
 const fetchData = async (page, size = perPage, sortField = "", sortOrder = "asc", search = "") => {
    setLoading(true);
    try {
      const response = await axios.get('http://localhost:4000/api/user/getusers', {
       params: {
          page,
          pageSize: size,
          sortField,
          sortOrder,
          search,
        },
      });
      setData(response.data.users); // array of users
      setTotalRows(response.data.total); // total users in DB
     } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };
 // Initial fetch & refetch on filter changes
  useEffect(() => {
    fetchData(currentPage, perPage, sortField, sortOrder, searchText);
  }, [currentPage, perPage, sortField, sortOrder, searchText]);

  // Handle pagination
  const handlePageChange = page => {
    setCurrentPage(page);
  };
// Handle rows per page change
  const handlePerRowsChange = async (newPerPage, page) => {
    setPerPage(newPerPage);
    setCurrentPage(page);
  };

  // Handle sort
  const handleSort = (column, sortDirection) => {
    setSortField(column.selector); // assuming selector corresponds to backend field
    setSortOrder(sortDirection);
  };

  // Handle search
  const handleSearch = e => {
    setSearchText(e.target.value);
    setCurrentPage(1); // reset page to 1
  };

  return (
    <Layout pageTitle="Lists">

      <div className="bg-white w-auto h-fit p-6 rounded-lg shadow ">
        <div className="lg:flex lg:items-center lg:justify-between">
          <h2 className="text-2xl/7 font-bold text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">List</h2>

          <div className="mt-5 flex lg:mt-0 lg:ml-4 justify-end p-6">
            <span className="hidden sm:block">
               <button type="button" className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-xs inset-ring inset-ring-gray-300 hover:bg-indigo-600 hover:text-white">
                
                Add
              </button>
            </span>

            <span className="ml-3 hidden sm:block">
              <button type="button" className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-xs inset-ring inset-ring-gray-300 hover:bg-indigo-600 hover:text-white">
                Action
              </button>
          </span>
           
          </div>
          {/* <NavLink to="/users/add"><button type="button" className="btn btn-primary float-right">Add</button></NavLink> */}
          {/* <div className="dropdown">
            <button className="btn btn-warning dropdown-toggle float-right mr-1" type="button" id="dropdownMenuButton"
            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Action
            </button>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <NavLink to="/users/export"><button type='button' className='dropdown-item'>Export</button></NavLink>
                <NavLink to="/users/import"><button className="dropdown-item">Import</button></NavLink>
              </div>
          </div> */}
        </div>
       <div className="relative">
          <input type="search" className="float-right w-1xl p-2 ps-10 text-sm text-gray-900 border" required  placeholder="Search..." value={searchText} onChange={handleSearch}/>
          
            <div className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <DataTable columns={columns} data={data} progressPending={loading} pagination paginationServer paginationTotalRows={totalRows} onChangeRowsPerPage={handlePerRowsChange} onChangePage={handlePageChange} sortServer onSort={handleSort}
              />


            </div>

          </div>
      </div>
    </Layout>
  )
}

export default Lists