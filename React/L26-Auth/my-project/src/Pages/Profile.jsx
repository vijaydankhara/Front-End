import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const { user, isAuthenticated, isLoading, loginWithRedirect, logout } = useAuth0();
  const navigate = useNavigate();

  if (isLoading) {
    return <div>Loading.....</div>;
  }

  if (!isAuthenticated) {
    loginWithRedirect();
  }

  const handleLogout = () => {
    const confirmed = window.confirm(`Your user, ${user.name}, is about to log out. Are you sure?`);
    if (confirmed) {
      logout({ returnTo: window.location.origin });
    }
  };

  return (
    isAuthenticated && (
      <div className="profile-container ">
        <div className="card profile-card">
          <div className="card-body">
            <h5 className="text-center font-bold">User Profile</h5>
            <p className="text-[#2222ff]">
              <strong className="text-[#000]">Email:</strong> {user.email}
            </p>
            <button className="btn logout-btn" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default Profile;
