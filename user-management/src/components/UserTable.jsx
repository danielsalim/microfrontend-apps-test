import React, { useState } from 'react';

import { PencilIcon, TrashIcon, ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/solid";
import {
  UserPlusIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import {
  Card,
  CardHeader,
  Typography,
  Button,
  CardBody,
  CardFooter,
  IconButton,
  Tooltip,
  Input,
  Image
} from "@material-tailwind/react";
import DeleteModal from './Modals/DeleteModal';
import AddModal from './Modals/AddModal';
import EditModal from './Modals/EditModal';
import { paginate } from './Utils/PaginationUtil';
import usersData from '../data/UserList'
 
const TABLE_HEAD = ["No", "First Name", "Last Name", "Username", "Age", "Salary", "Action"];
 
const ViewPeta = React.lazy(() => import("peta/ViewPeta"));
const UserTable = () => {  
  // INIT CRUD
  const [users, setUsers] = useState(usersData);

  const onAdd = newUser => {
    newUser.id = users.length + 1;
    setUsers([...users, newUser]);
  };

  const onDelete = userId => {
    const updatedUsers = users.filter(user => user.id !== userId);
  
    const correctedUsers = updatedUsers.map((user, index) => ({
      ...user,
      id: index + 1
    }));
  
    setUsers(correctedUsers);
  };

  const onEdit = (userToEdit, editedUser) => {
    const updatedUsers = users.map((user) =>
      user.id === userToEdit.id ? { ...user, ...editedUser } : user
    );
    
    setUsers(updatedUsers);
  };

  // MODALS FOR CREATE, UPDATE, DELETE
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [isAddModalOpen, setAddModalOpen] = useState(false);
  const [idSelected, setidSelected] = useState(null);
  const [userToEdit, setuserToEdit] = useState({});

  const handleAddConfirm = (newUser) => {
    try {
      // //Perform add user
      onAdd(newUser);
      setAddModalOpen(false);
    } catch (error) {
      console.error('Error deleting student:', error);
    }  
  };
  
  const handleClickEdit = (userEdit, id) => {
    setuserToEdit(userEdit);
    setidSelected(id);
    setEditModalOpen(true);
  };

  const handleEditConfirm  = (editedUser) => {
    try {
      onEdit(userToEdit, editedUser)
      setEditModalOpen(false);
    } catch (error) {
      console.error('Error deleting student:', error);
    }
  };

  const handleClickDelete = (id) => {
    setidSelected(id);
    setDeleteModalOpen(true);
  };

  const handleDeleteConfirm = async () => {
    try {
      onDelete(idSelected)
      setDeleteModalOpen(false);
    } catch (error) {
      console.error('Error deleting student:', error);
    }
  };

  // PAGINATION
  const pageSizeOptions = [5, 6, 7, 8, 9, 10, 15, 20, 25, 50];
  const [pageSize, setPageSize] = React.useState(10);
  const [currentPage, setCurrentPage] = React.useState(1);

  const handlePageSizeChange = (event) => {
    setPageSize(parseInt(event.target.value));
    setCurrentPage(1); // Reset to first page when changing page size
  };

  //SEARCH
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    setCurrentPage(1); // Reset to first page when changing search query
  };

  const filteredUsers = users.filter(
    (user) =>
      user.first_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.last_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.username.toLowerCase().includes(searchQuery.toLowerCase())
  );
    
  // DISPLAY USERS
  const numPages = Math.ceil(filteredUsers.length / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const displayedUsers = filteredUsers.slice(startIndex, endIndex);

  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= numPages) {
      setCurrentPage(pageNumber);
    }
    else if (pageNumber < 1) {
      setCurrentPage(1);
    }
  };

  // CHANGING PAGE
  const [showUserTable, setShowUserTable] = useState(true)
  const goToMap = () => {
    if (showUserTable) {
      setShowUserTable(false)
    }
    else {
      setShowUserTable(true)
    }
  }

  const renderUserTable = () => (
    <div className='bg-gray-100 min-h-screen pb-6'>
      <header className="bg-blue-800 text-white px-8 py-8">
        <h1 className="text-4xl text-center font-bold">User Table</h1>
      </header>
      <main className="container px-8 mx-auto mt-6">
        <Card className="h-full w-full">
          <CardHeader floated={false} shadow={false} className="rounded-none">
            <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center md:justify-end">
            <button className="flex items-center px-6 py-2 text-sm font-medium text-white bg-blue-700 rounded-md hover:bg-blue-600" onClick={goToMap}>
                <ArrowLeftIcon strokeWidth={2} className="h-4 w-4 mr-2" /> Map
              </button>
              <div className="flex items-center justify-between w-full md:w-max">
              <div className="flex items-center w-full md:w-72">
                <div className="relative flex items-center pr-2 w-full ml-0">
                  <div className="absolute inset-y-0 pr-3 flex items-center pointer-events-none">
                    <MagnifyingGlassIcon className="h-5 w-5 text-gray-400 mx-1" />
                  </div>
                  <input
                    type="text"
                    className="block w-full pl-7 py-2 border-gray-400 rounded-md focus:border-blue-300 sm:text-sm placeholder-gray-400 bg-gray-100" // Added bg-gray-100 for the gray background
                    placeholder="Search"
                    value={searchQuery}
                    onChange={handleSearchChange}
                  />
                  </div>
                </div>
                <button className="flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-700 rounded-md hover:bg-blue-600" onClick={() => setAddModalOpen(true)}>
                  <UserPlusIcon strokeWidth={2} className="h-4 w-4 mr-2" /> Add User
                </button>
                {/* Render the AddModal component */}
                <AddModal
                isOpen={isAddModalOpen}
                onClose={() => setAddModalOpen(false)}
                onAdd={handleAddConfirm}
              />
              </div>
            </div>
          </CardHeader>
          <CardBody className="px-0">
            <table className="w-full min-w-max table-auto text-left">
              <thead>
                <tr>
                  {TABLE_HEAD.map((head) => (
                    <th
                      key={head}
                      className="border-y font-bold text-center border-blue-gray-100 bg-blue-gray-50/50 p-4"
                    >
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-bold leading-none opacity-100"
                      >
                        {head}
                      </Typography>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {displayedUsers.map(
                  (
                    {
                      id,
                      first_name,
                      last_name,
                      username,
                      age,
                      salary,
                    },
                  ) => {
                    const classes = "p-2 border-b border-blue-gray-50 text-center"
    
                    return (
                      <tr key={id}>
                        <td className={classes}> 
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              {id}
                            </Typography>
                        </td>
                        <td className={classes}>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {first_name}
                          </Typography>
                        </td>
                        <td className={classes}>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {last_name}
                          </Typography>
                        </td>
                        <td className={classes}>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {username}
                          </Typography>
                        </td>
                        <td className={classes}>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {age}
                          </Typography>
                        </td>
                        <td className={classes}>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {salary}
                          </Typography>
                        </td>
                        <td className={classes}>
                          <div className="flex gap-8 items-center justify-center">
                            <Tooltip content="Edit User">
                              <Button variant="text" className='py-2' onClick={() => handleClickEdit(users.find((user) => user.id === id), id)}>
                                <PencilIcon className="h-4 w-4" />
                              </Button>
                            </Tooltip>
                            <Tooltip content="Delete User">
                              <Button variant="text" className='py-0' onClick={() => handleClickDelete(id)}>
                                <TrashIcon className="h-4 w-4" />
                              </Button>
                            </Tooltip>
                            {/* Render the DeleteModal component */}
                            <DeleteModal
                              isOpen={isDeleteModalOpen}
                              onClose={() => setDeleteModalOpen(false)}
                              onDelete={handleDeleteConfirm}
                            />
                            {/* Render the EditModal component */}
                            <EditModal
                              isOpen={isEditModalOpen}
                              onClose={() => setEditModalOpen(false)}
                              onUpdate={handleEditConfirm}
                              user={userToEdit}
                              
                            />
                          </div>
                        </td>
                      </tr>
                    );
                  },
                )}
              </tbody>
            </table>
          </CardBody>
          <CardFooter className="flex items-center gap-2 border-blue-gray-50 p-4 justify-between">
            <div></div>
            <div className="flex items-center gap-2 mr-10 pl-28">
                <Button variant="text" className='py-0 mr-4 ml-12'
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}>
                  <ArrowLeftIcon className="h-5 w-5" />
                </Button>
                {pagination !== null ? (
                  pagination.items.map((page, index) =>
                  page === '…' ? (
                    <span key={index} className="text-sm">
                      {page}
                    </span>
                  ) : (
                    <Button 
                      key={index}
                      variant="text"
                      size="sm"
                      onClick={() => handlePageChange(page)}
                      className={`text-sm ${
                        currentPage === page ? 'font-semibold' : 'font-normal'
                      }`}
                    >
                      {page}
                    </Button>
                  )
                )) : (
                  <span className="text-sm">No users found.</span>
                  )}
                <Button variant="text" className='py-0 ml-4'
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === Math.ceil(users.length / pageSize)}>
                  <ArrowRightIcon className="h-5 w-5" />
                </Button>
            </div>
            <div className="flex items-center">
              <span className="mr-2">Items per page:</span>
              <select
                value={pageSize}
                onChange={handlePageSizeChange}
                className="py-1 border rounded-md"
                title="Items per page">
                {pageSizeOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          </CardFooter>
        </Card>
      </main>
    </div>
  )

  const renderMap = () => (
    <div>
      <React.Suspense fallback="Loading...">
        <ViewPeta />
      </React.Suspense>
    </div>
  )
  const pagination = paginate({ current: currentPage, max: numPages });

  return (
    showUserTable ? renderUserTable() : renderMap()
  )
}

export default UserTable;