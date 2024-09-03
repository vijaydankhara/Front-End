import React from 'react'
import { Link } from 'react-router-dom'

const people = [
  {
    id: 1,
    name: 'John Doe',
    title: 'Front-end Developer',
    department: 'Engineering',
    email: 'john@devui.com',
    phoneNo: '123-456-7890',
    age: 28,
    role: 'Developer',
    image: 'https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80',
  },
  {
    id: 2,
    name: 'Jane Doe',
    title: 'Back-end Developer',
    department: 'Engineering',
    email: 'jane@devui.com',
    phoneNo: '098-765-4321',
    age: 30,
    role: 'CTO',
    image: 'https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80',
  },
]

const Home = () => {
  return (
    <>
      <section className="container mx-auto px-4 py-4">
        <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
          <div>
            <h2 className="text-lg font-semibold">Students</h2>
            <p className="mt-1 text-sm text-gray-700">
              This is a list of all Students. You can add new Students, edit or delete existing ones.
            </p>
          </div>
          <div>
            <button
              type="button"
              className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Add new Students
            </button>
          </div>
        </div>

        <div className="mt-6 flex flex-col">
          <div className="overflow-x-auto">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50 ">
                    <tr>
                      <th className="px-4 py-3.5 text-left text-sm font-bold text-gray-700">Id</th>
                      <th className="px-4 py-3.5 text-left text-sm font-bold text-gray-700">Students</th>
                      <th className="px-12 py-3.5 text-left text-sm font-bold text-gray-700">Email</th>
                      <th className="px-4 py-3.5 text-left text-sm font-bold text-gray-700">PhoneNo</th>
                      <th className="px-4 py-3.5 text-left text-sm font-bold text-gray-700">Age</th>
                      <th className="px-4 py-3.5 text-left text-sm font-bold text-gray-700">Role</th>
                      <th className="px-4 py-3.5 text-left text-sm font-bold text-gray-700">Edit Students</th>
                      <th className="px-4 py-3.5 text-left text-sm font-bold text-gray-700">Remove Students</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {people.map((person) => (
                      <tr key={person.id}>
                        <td className="whitespace-nowrap px-4 py-4">{person.id}</td>
                        <td className="whitespace-nowrap px-4 py-4">
                          <div className="flex items-center">
                            <div className="h-10 w-10 flex-shrink-0">
                              <img className="h-10 w-10 rounded-full object-cover" src={person.image} alt="" />
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">{person.name}</div>
                              <div className="text-sm text-gray-700">{person.title}</div>
                            </div>
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-12 py-4">{person.email}</td>
                        <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-700">{person.phoneNo}</td>
                        <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-700">{person.age}</td>
                        <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-700">{person.role}</td>
                        <td className="whitespace-nowrap px-4 py-4 text-center text-sm font-medium">
                          <a href="#" className="text-gray-700">Edit</a>
                        </td>
                        <td className="whitespace-nowrap px-4 py-4 text-center text-sm font-medium">
                          <a href="#" className="text-gray-700">Remove</a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center pt-6">
          <a href="#" className="mx-1 cursor-not-allowed text-sm font-semibold text-gray-900">
            <span className="hidden lg:block">&larr; Previous</span>
            <span className="block lg:hidden">&larr;</span>
          </a>
          <a href="#" className="mx-1 flex items-center rounded-md border border-gray-400 px-3 py-1 text-gray-900 hover:scale-105">1</a>
          <a href="#" className="mx-1 flex items-center rounded-md border border-gray-400 px-3 py-1 text-gray-900 hover:scale-105">2</a>
          <a href="#" className="mx-1 flex items-center rounded-md border border-gray-400 px-3 py-1 text-gray-900 hover:scale-105">3</a>
          <a href="#" className="mx-1 flex items-center rounded-md border border-gray-400 px-3 py-1 text-gray-900 hover:scale-105">4</a>
          <a href="#" className="mx-2 text-sm font-semibold text-gray-900">
            <span className="hidden lg:block">Next &rarr;</span>
            <span className="block lg:hidden">&rarr;</span>
          </a>
        </div>
      </section>
    </>
  )
}

export default Home
