import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const [students, setStudents] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const studentsPerPage = 5;

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const { data } = await axios.get("http://localhost:3000/users");
      setStudents(data);
    } catch (error) {
      console.error("Error fetching students:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/users/${id}`);
      fetchStudents();
    } catch (error) {
      console.error("Error deleting student:", error);
    }
  };

  // Pagination calculation
  const indexOfLastStudent = currentPage * studentsPerPage;
  const indexOfFirstStudent = indexOfLastStudent - studentsPerPage;
  const currentStudents = students.slice(indexOfFirstStudent, indexOfLastStudent);
  const totalPages = Math.ceil(students.length / studentsPerPage);

  // Pagination function
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-4">
      <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
        <div>
          <h2 className="text-lg font-semibold">Students</h2>
          <p className="mt-1 text-sm text-gray-700">
            Manage students. Add, edit, or delete student records.
          </p>
        </div>
        <div>
          <Link
            to="/add"
            className="add-btn rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-black/80"
          >
            Add new Student
          </Link>
        </div>
      </div>

      <div className="mt-6 flex flex-col">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden border border-gray-200 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="vijay">ID</th>
                    <th className="vijay">Image</th>
                    <th className="vijay">Full Name</th>
                    <th className="vijay px-12">Email</th>
                    <th className="vijay">Phone No</th>
                    <th className="vijay">Age</th>
                    <th className="vijay">Edit</th>
                    <th className="vijay">Delete</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {currentStudents.map((student) => (
                    <tr key={student.id}>
                      <td className="whitespace-nowrap px-4 py-4">{student.id}</td>
                      <td className="whitespace-nowrap px-4 py-4">
                        <img
                          className="h-10 w-10 rounded-full object-cover"
                          src={student.image}
                          alt={student.fullname}
                        />
                      </td>
                      <td className="whitespace-nowrap px-12 py-4 text-sm text-gray-900">
                        {student.fullname}
                      </td>
                      <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-700">
                        {student.email}
                      </td>
                      <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-700">
                        {student.phone}
                      </td>
                      <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-700">
                        {student.age}
                      </td>
                      <td className="whitespace-nowrap px-4 py-4 text-center text-sm font-medium">
                        <Link to={`/edit/${student.id}`} className="text-blue-600 hover:text-blue-900">
                          Edit
                        </Link>
                      </td>
                      <td className="whitespace-nowrap px-4 py-4 text-center text-sm font-medium">
                        <button onClick={() => handleDelete(student.id)} className="text-red-600 hover:text-red-900">
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Pagination Controls */}
      <div className="flex items-center justify-center pt-6 gap-x-5">
        <button
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
          className="mx-1 text-sm font-semibold text-gray-900 disabled:opacity-50"
        >
          &larr; Previous
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => paginate(index + 1)}
            className={`mx-1 flex items-center rounded-md border px-3 py-1 text-gray-900 hover:scale-105 ${
              currentPage === index + 1 ? "bg-gray-300" : ""
            }`}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="mx-1 text-sm font-semibold text-gray-900 disabled:opacity-50"
        >
          Next &rarr;
        </button>
      </div>
    </section>
  );
};

export default Home;
