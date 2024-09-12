import React from 'react';

const ProfilePopup = ({ student, onClose }) => {
//   if (!student) return null;

  const defaultImage = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTGqEx_vqU2paNsNpDL1EjIpKCGXnoIdXrti48mthxcQE-BzumbnfkU8tWFqHXEH5rxFY&usqp=CAU";

  return (
    <div className="fixed mt-36  inset-0 flex items-center justify-center z-50 px-4">
      <div className="bg-white border-2 border-[#151580]  p-6 rounded-lg shadow-lg max-w-lg w-full relative md:max-w-md">
        <div className="bg-orange-400 p-6 rounded-t-lg flex flex-col items-center">
          <div className="bg-white p-2 rounded-full -mt-16">
            <img 
              src={student.image || defaultImage} 
              alt="Avatar" 
              className="w-24 h-24 rounded-full items-center transform transition duration-700 hover:scale-125"
              onError={(e) => { e.target.src = defaultImage; }}
            />
          </div>
          <div className="mt-4 text-center">
            <p className="text-gray-800 font-bold text-lg uppercase">{student.firstname} {student.lastname}</p>
          </div>
        </div>
        <div className="bg-white p-4 text-center">
          <div className="mt-4 text-left space-y-2">
            <p className="text-sm text-gray-600"><strong>Age:</strong> {student.age}</p>
            <p className="text-sm text-gray-600"><strong>Gender:</strong> {student.gender}</p>
            <p className="text-sm text-gray-600"><strong>Location:</strong> {student.location}</p>
            <p className="text-sm text-gray-600"><strong>Email:</strong> {student.email}</p>
            <p className="text-sm text-gray-600"><strong>Phone:</strong> {student.phone}</p>
          </div>
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-700 text-xl font-bold hover:text-[#ff0000]"
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default ProfilePopup;
