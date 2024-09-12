import React, { useState, useEffect } from "react";
import { GrFormView } from "react-icons/gr";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import { Link } from "react-router-dom";
import axios from "axios";
import ProfilePopup from "../components/ProfilePopup";

const Home = () => {
  const [data, setData] = useState([]);
  const [searchName, setSearchName] = useState("");
  const [showTooltip, setShowTooltip] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [studentsPerPage] = useState(10);
  const [selectedStudent, setSelectedStudent] = useState(null);

  const loadStudent = async () => {
    const res = await axios.get("http://localhost:3000/student");
    setData(res.data);
    if (res.data.length === 0) {
      localStorage.removeItem("lastStudentId");
    }
  };

  useEffect(() => {
    loadStudent();
  }, []);

  const DeleteStudent = (id) => {
    axios
      .delete(`http://localhost:3000/student/${id}`)
      .then(() => {
        loadStudent();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleMouseEnter = (id, action) => {
    setShowTooltip((prev) => ({ ...prev, [id]: action }));
  };

  const handleMouseLeave = (id) => {
    setShowTooltip((prev) => ({ ...prev, [id]: null }));
  };

  const filteredData = data.filter(
    (item) =>
      item.firstname.toLowerCase().includes(searchName.toLowerCase()) ||
      item.lastname.toLowerCase().includes(searchName.toLowerCase()) ||
      item.location.toLowerCase().includes(searchName.toLowerCase()) ||
      item.email.toLowerCase().includes(searchName.toLowerCase())
  );

  // Pagination logic
  const indexOfLastStudent = currentPage * studentsPerPage;
  const indexOfFirstStudent = indexOfLastStudent - studentsPerPage;
  const currentStudents = filteredData.slice(
    indexOfFirstStudent,
    indexOfLastStudent
  );

  const totalPages = Math.ceil(filteredData.length / studentsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="p-6 bg-slate-100 min-h-screen">
      <div className="mb-4 flex justify-evenly">
        <div>
          <Link
            to="/add"
            className="add-btn whitespace-nowrap rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm transition-transform duration-300  ease-in-out hover:scale-105 hover:bg-black/80"
          >
            Add New Student
          </Link>
        </div>
        <div>
          <input
            type="text"
            placeholder="Search........"
            className="text-blue-700 placeholder-green-500 text-center border-2 border-indigo-800 rounded-lg"
            value={searchName}
            onChange={(e) => setSearchName(e.target.value)}
          />
        </div>
      </div>

      <table className="min-w-full divide-y border-2 border-[#ff732d] divide-gray-200 bg-white shadow rounded-lg">
        <thead className="bg-[#ff732d] text-white font-serif">
          <tr>
            <th className="home-tabal ">Id</th>
            <th className="home-tabal ">Image</th>
            <th className="home-tabal ">First Name</th>
            <th className="home-tabal ">Last Name</th>
            <th className="home-tabal ">Age</th>
            <th className="home-tabal ">Gender</th>
            <th className="home-tabal ">Location</th>
            <th className="home-tabal ">Phone Number</th>
            <th className="home-tabal ">Email</th>
            <th className="home-tabal ">Actions</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {currentStudents.map((item) => (
            <tr key={item.id}>
              <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {item.id}
              </td>
              <td className="px-4 py-4 whitespace-nowrap">
                <img
                  src={item.image}
                  alt="Avatar"
                  className="w-12 h-12 rounded-full border-2 border-gray-200"
                />
              </td>

              <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {item.firstname}
              </td>
              <td className="home-tabal-map">{item.lastname}</td>
              <td className="home-tabal-map">{item.age}</td>
              <td className="home-tabal-map">{item.gender}</td>
              <td className="home-tabal-map">{item.location}</td>
              <td className="home-tabal-map0">{item.phone}</td>
              <td className="home-tabal-map">{item.email}</td>
              <td className="px-4 py-4 whitespace-nowrap text-sm font-medium flex justify-start items-center">
                <div
                  className="relative inline-block"
                  onMouseEnter={() => handleMouseEnter(item.id, "view")}
                  onMouseLeave={() => handleMouseLeave(item.id)}
                >
                  <button
                    className="text-blue-500 hover:text-blue-700 text-2xl"
                    onClick={() => setSelectedStudent(item)}
                  >
                    <GrFormView />
                  </button>
                  {showTooltip[item.id] === "view" && (
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-[#3cf2ff] text-black text-xs rounded p-2">
                      View Profile
                    </div>
                  )}
                </div>

                <Link to={`/edit/${item.id}`}>
                  <div
                    className="relative inline-block"
                    onMouseEnter={() => handleMouseEnter(item.id, "edit")}
                    onMouseLeave={() => handleMouseLeave(item.id)}
                  >
                    <button className="text-green-600 hover:text-green-900 text-xl mx-2">
                      <FaRegEdit />
                    </button>
                    {showTooltip[item.id] === "edit" && (
                      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-[#089201] text-white text-xs rounded p-2">
                        Edit
                      </div>
                    )}
                  </div>
                </Link>

                <div
                  className="relative inline-block"
                  onMouseEnter={() => handleMouseEnter(item.id, "delete")}
                  onMouseLeave={() => handleMouseLeave(item.id)}
                >
                  <button
                    className="text-[#] hover:text-red-700 text-xl"
                    onClick={() => DeleteStudent(item.id)}
                  >
                    <MdDeleteOutline />
                  </button>
                  {showTooltip[item.id] === "delete" && (
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-[#ff0000] text-white text-xs rounded p-2">
                      Delete
                    </div>
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="mt-4 flex justify-center">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => paginate(i + 1)}
            className={`mx-1 px-3 py-1 rounded ${
              currentPage === i + 1 ? "bg-[#ff732d] text-white" : "bg-gray-300"
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>

      {/* Profile Popup */}
      {selectedStudent && (
        <ProfilePopup
          student={selectedStudent}
          onClose={() => setSelectedStudent(null)}
        />
      )}
    </div>
  );
};

export default Home;
