import React ,  { useEffect, useState } from 'react';
import { NavLink } from "react-router-dom";
import axios from 'axios';
import "../../assets/admin/lists.css"
import DataTable from "react-data-table-component";

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
        width: "80px",
    },
    { name: "Name", selector: row => row.name, sortable: false },
    { name: "Email", selector: row => row.email, sortable: false },
    {
        name: "Edit",
        cell: row => (
        <button className='btn btn-sm btn-primary' onClick={() => handleEdit(row)}>Edit</button>
        ),
        ignoreRowClick: true,
        allowOverflow: true,
        button: true,
    },
    {
        name: "Delete",
        cell: row => (
        <button className='btn btn-sm btn-danger' onClick={() => handleDelete(row)}>
        Delete
        </button>
        ),
        ignoreRowClick: true,
        allowOverflow: true,
        button: true,
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
        <div className="main-content">
            <div className="row gutters">
                <div className="col-lg-12 col-sm-12">
                    <div className="card">
                        <div className="card-header">
                            <h4>Users List</h4>
                            <NavLink to="/users/add"><button type="button" className="btn btn-primary float-right">Add</button></NavLink>
                            <div className="dropdown">
                                <button className="btn btn-warning dropdown-toggle float-right mr-1" type="button" id="dropdownMenuButton"
                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Action
                                </button>
                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <NavLink to="/users/export"><button type='button' className='dropdown-item'>Export</button></NavLink>
                                    <NavLink to="/users/import"><button className="dropdown-item">Import</button></NavLink>
                                    {/* <a className="dropdown-item" href="#">Delete</a> */}
                                </div>
                            </div>
                        </div>
                        <div className="card-body">
                                <input className='float-right'
                                type="text"
                                placeholder="Search..."
                                value={searchText}
                                onChange={handleSearch}
                                style={{ marginBottom: "10px", padding: "5px", width: "200px" }}
                                />
                            <div className="table-responsive">
                                <DataTable
                                columns={columns}
                                data={data}
                                progressPending={loading}
                                pagination
                                paginationServer
                                paginationTotalRows={totalRows}
                                onChangeRowsPerPage={handlePerRowsChange}
                                onChangePage={handlePageChange}
                                sortServer
                                onSort={handleSort}
                                />


                                </div>
                           
                        </div>
                    </div>
                </div>
            </div>
        </div>

  )
}

export default Lists