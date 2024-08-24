import React, { useState, useEffect } from "react";

export default function Cricket() {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 5;

  useEffect(() => {
    // Fetch data from the API or JSON file
    fetch("http://localhost:3000/usersJsonData")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const editUser = (id) => {
    const updatedEmail = prompt("Enter new email:");
    if (updatedEmail) {
      setUsers(
        users.map((user) =>
          user.id === id ? { ...user, email: updatedEmail } : user
        )
      );
    }
  };

  const createNewUser = () => {
    const newUser = {
      id: users.length + 1,
      firstName: prompt("Enter first name:"),
      lastName: prompt("Enter last name:"),
      email: prompt("Enter Email:"),
      age: prompt("Enter Your Age:"),
      Gender: prompt("Enter Your Gender:"),
      location: prompt("Enter Your Location:"),
      Image: `https://i.pravatar.cc/150?u=${users.length + 1}`,
    };
    setUsers([...users, newUser]);
  };

  const totalPages = Math.ceil(users.length / usersPerPage);

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  const nextPage = () => {
    setCurrentPage((prev) => (prev < totalPages ? prev + 1 : prev));
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev));
  };

  return (
    <div className="p-4 animate-roll-in-left">
      <h1 className="text-2xl font-bold mb-4 text-center">Users</h1>
      <hr /><br />
      <button
        onClick={createNewUser}
        className="create-button mb-4"
      >
        Create
      </button>
      <table className="min-w-full bg-white border border-gray-400">
        <thead>
          <tr className="bg-blue-600 text-white font-mono py-2">
            <th className="py-2">Id</th>
            <th className="py-2">Image</th>
            <th className="py-2">FirstName</th>
            <th className="py-2">LastName</th>
            <th className="py-2">Email</th>
            <th className="py-2">Gender</th>
            <th className="py-2">Age</th>
            <th className="py-2">Location</th>
            <th className="py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {currentUsers.map((user) => (
            <tr key={user.id} className="border-t border-gray-300">
              <td className="py-2 text-center">{user.id}</td>
              <td className="py-2 text-center">
                <img
                  src={user.Image}
                  className="rounded-full w-10 h-10 ml-8"
                  alt={`${user.firstName} ${user.lastName}`}
                />
              </td>
              <td className="py-2 text-center">{user.firstName}</td>
              <td className="py-2 text-center">{user.lastName}</td>
              <td className="py-2 text-center text-indigo-700">{user.email}</td>
              <td className="py-2 text-center">{user.Gender}</td>
              <td className="py-2 text-center">{user.age}</td>
              <td className="py-2 text-center">{user.location}</td>
              <td className="py-2 text-center">
                <button
                  onClick={() => editUser(user.id)}
                  className="animated-button mr-3 "
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteUser(user.id)}
                  className="animated-button2"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-between mt-4">
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className="empty"
        >
          Previous
        </button>
        <span className="text-gray-700">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={nextPage}
          disabled={currentPage === totalPages}
          className="empty"
        >
          Next
        </button>
      </div>
    </div>
  );
}
