import React, { useState } from 'react';
import './NavBar.css';
import { Link, useNavigate } from 'react-router-dom'; // Import Link
import { auth } from '../../Firebase';
import { signOut } from 'firebase/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Navbar() {
  const user = auth.currentUser;
  const navigate = useNavigate();
  const [showInfo, setShowInfo] = useState(true);

  const logoutHandler = async () => {
    try {
      await signOut(auth);
      navigate("/");
      console.log(user);
      toast.success("Signout successfully");
    } catch (err) {
      toast.error(err.message);
    }
  };

  const hideInfo = () => {
    setShowInfo(false);
  };

  const showInfoAgain = () => {
    setShowInfo(true);
  };

  return (
    <>
      <ToastContainer />
      <nav className="navbar">
        <div>
          <h1>Expense Tracker</h1>
          <span>
      
            <Link to="/" onClick={showInfoAgain}>Home</Link>
          </span>
          <ul>
            <li>
              <span>Products</span>
            </li>
            <li>
              <span>About Us</span>
            </li>
            <li>
              <Link to="addexpense" style={{ color: "white" }}>Add Expenses</Link>
            </li>
          </ul>
        </div>
        <div>
          {user ? (
            <button className="signupButton" onClick={logoutHandler}>Logout</button>
          ) : (
            <>
              <Link to='/login' className="loginButton" onClick={hideInfo}>Login</Link>
              <Link to="/signup" className="signupButton" onClick={hideInfo}>Signup</Link>
            </>
          )}
        </div>
      </nav>

      {showInfo && (
        <section className="info-section">
          <h2>Why Expense Tracking is Important</h2>
          <p>Expense tracking is crucial for maintaining financial stability and achieving financial goals. By tracking your expenses, you gain insights into your spending habits, identify areas where you can save money, and make informed financial decisions.</p>
          <p>Key benefits of expense tracking include:</p>
          <ul>
            <li>Understanding where your money goes</li>
            <li>Budgeting effectively</li>
            <li>Reducing unnecessary spending</li>
            <li>Planning for future expenses</li>
          </ul>
         
        </section>
      )}
    </>
  );
}
