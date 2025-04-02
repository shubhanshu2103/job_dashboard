import React from 'react';
import Link from 'next/link';
import '../globals.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      {/* Left Section: Logo and Links */}
      <div className="nav-left">
        <div className="logo">JobHuntly</div>
        <div className="nav-links">
          <Link href="#" className="nav-link">Find Jobs</Link>
          <Link href="#" className="nav-link">Browse Companies</Link>
        </div>
      </div>

      {/* Right Section: Login & SignUp Buttons */}
      <div className="nav-right">
        <button className="btn btn-login">Login</button>
        <button className="btn btn-signup">Sign Up</button>
      </div>
    </nav>
  );
}