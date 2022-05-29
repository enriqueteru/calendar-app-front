import React from 'react';

const Navbar = () => {
  return (
    <div className="navbar navbar-dark bg-dark mb-4">
      <span className="navbar-brand ligth"> Calendar </span>
      <button type="button" className="btn btn-danger">
        <span>
          Logout <i className="fas fa-sign-out-alt" />
        </span>
      </button>
    </div>
  );
};

export default Navbar;
