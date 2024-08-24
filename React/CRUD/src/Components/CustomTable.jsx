import React, { useState } from "react";

const usersJsonData = [
  {
    id: 1,
    firstName: "Karn",
    lastName: "Yong",
    email: "karn.yong@mecallapi.com",
    Image: "https://i.pravatar.cc/150?u=1",
    Gender: "Female",
    age: 25,
    location: "America"
  },
  {
    id: 2,
    firstName: "Ivy",
    lastName: "Cal",
    email: "ivy.cal@mecallapi.com",
    Image: "https://i.pravatar.cc/150?u=2",
    Gender: "Male",
    age: 26,
    location: "America"
  },
  {
    id: 3,
    firstName: "Walter",
    lastName: "Beau",
    email: "walter.beau@mecallapi.com",
    Image: "https://i.pravatar.cc/150?u=3",
    Gender: "Female",
    age: 27,
    location: "Europe"
  },
  {
    id: 4,
    firstName: "Gayla",
    lastName: "Bertrand",
    email: "gayla.bertrand@mecallapi.com",
    Image: "https://i.pravatar.cc/150?u=4",
    Gender: "Female",
    age: 28,
    location: "Asia"
  },
  {
    id: 5,
    firstName: "Benjamin",
    lastName: "Chaz",
    email: "benjamin.chaz@mecallapi.com",
    Image: "https://i.pravatar.cc/150?u=5",
    Gender: "Male",
    age: 29,
    location: "Africa"
  },
  {
    id: 6,
    firstName: "Sarah",
    lastName: "Connor",
    email: "sarah.connor@mecallapi.com",
    Image: "https://i.pravatar.cc/150?u=6",
    Gender: "Female",
    age: 30,
    location: "Australia"
  },
  {
    id: 7,
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@mecallapi.com",
    Image: "https://i.pravatar.cc/150?u=7",
    Gender: "Male",
    age: 31,
    location: "America"
  },
  {
    id: 8,
    firstName: "Jane",
    lastName: "Doe",
    email: "jane.doe@mecallapi.com",
    Image: "https://i.pravatar.cc/150?u=8",
    Gender: "Female",
    age: 32,
    location: "Europe"
  },
  {
    id: 9,
    firstName: "Emily",
    lastName: "Clark",
    email: "emily.clark@mecallapi.com",
    Image: "https://i.pravatar.cc/150?u=9",
    Gender: "Female",
    age: 33,
    location: "America"
  },
  {
    id: 10,
    firstName: "Michael",
    lastName: "Smith",
    email: "michael.smith@mecallapi.com",
    Image: "https://i.pravatar.cc/150?u=10",
    Gender: "Male",
    age: 34,
    location: "Asia"
  },
  {
    id: 11,
    firstName: "Olivia",
    lastName: "Brown",
    email: "olivia.brown@mecallapi.com",
    Image: "https://i.pravatar.cc/150?u=11",
    Gender: "Female",
    age: 35,
    location: "Australia"
  },
  {
    id: 12,
    firstName: "James",
    lastName: "Wilson",
    email: "james.wilson@mecallapi.com",
    Image: "https://i.pravatar.cc/150?u=12",
    Gender: "Male",
    age: 36,
    location: "Europe"
  },
  {
    id: 13,
    firstName: "Sophia",
    lastName: "Davis",
    email: "sophia.davis@mecallapi.com",
    Image: "https://i.pravatar.cc/150?u=13",
    Gender: "Female",
    age: 37,
    location: "Africa"
  },
  {
    id: 14,
    firstName: "Liam",
    lastName: "Martinez",
    email: "liam.martinez@mecallapi.com",
    Image: "https://i.pravatar.cc/150?u=14",
    Gender: "Male",
    age: 38,
    location: "America"
  },
  {
    id: 15,
    firstName: "Isabella",
    lastName: "Garcia",
    email: "isabella.garcia@mecallapi.com",
    Image: "https://i.pravatar.cc/150?u=15",
    Gender: "Female",
    age: 39,
    location: "Asia"
  },
  {
    id: 16,
    firstName: "Noah",
    lastName: "Martinez",
    email: "noah.martinez@mecallapi.com",
    Image: "https://i.pravatar.cc/150?u=16",
    Gender: "Male",
    age: 40,
    location: "Australia"
  },
  {
    id: 17,
    firstName: "Ava",
    lastName: "Rodriguez",
    email: "ava.rodriguez@mecallapi.com",
    Image: "https://i.pravatar.cc/150?u=17",
    Gender: "Female",
    age: 41,
    location: "Europe"
  },
  {
    id: 18,
    firstName: "Mason",
    lastName: "Lewis",
    email: "mason.lewis@mecallapi.com",
    Image: "https://i.pravatar.cc/150?u=18",
    Gender: "Male",
    age: 42,
    location: "Africa"
  },
  {
    id: 19,
    firstName: "Mia",
    lastName: "Walker",
    email: "mia.walker@mecallapi.com",
    Image: "https://i.pravatar.cc/150?u=19",
    Gender: "Female",
    age: 43,
    location: "America"
  },
  {
    id: 20,
    firstName: "Ethan",
    lastName: "Scott",
    email: "ethan.scott@mecallapi.com",
    Image: "https://i.pravatar.cc/150?u=20",
    Gender: "Male",
    age: 44,
    location: "Asia"
  }
];


export default function UserTable() {
  const [users, setUsers] = useState(usersJsonData);
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 5;

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
          className="bg-blue-500 text-white py-1 px-4 rounded disabled:opacity-50"
        >
          Previous
        </button>
        <span className="text-gray-700">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={nextPage}
          disabled={currentPage === totalPages}
          className="bg-blue-500 text-white py-1 px-4 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}
