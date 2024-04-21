import React, { useEffect } from "react";
import { Button } from "@mui/material";
import { useAuthContext } from "../data/auth";
import { useState } from "react";
import { Link } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../data/firebase";
import { Avatar } from "@mui/material";
import "../style/Navbar.css";
import logo from "../assets/logo-women.png";
import logoName from "../assets/logo-name.png";
import collaborate from "../assets/collaboration.png";

function Navbar() {
  const [error, setError] = useState("");
  const [data, setData] = useState();
  const { user, logout } = useAuthContext();

  //getDoc fetches a single particular doc
  //getDocs fetches all docs in a particular collection
  const [profile, setProfile] = useState(false);

  function displayProfile() {
    setProfile(!profile);
  }

  useEffect(() => {
    getDoc(doc(db, "users", user.uid))
      .then((snap) => {
        setData(snap.data());
        // console.log(data.id)
      })
      .catch((e) => {
        console.log(e);
      });
  }, [user]);

  const handleLogout = async () => {
    setError("");
    try {
      await logout();
    } catch (error) {
      console.log("Error logout" + error.message);
      setError("Failed to logout");
    }
  };

  //logout end

  //navbar active link
  //   var header = document.getElementById("navbar-nav");
  // var btns = header.getElementsByclassName("nav-item");
  // for (var i = 0; i < btns.length; i++) {
  //   btns[i].addEventListener("click", function() {
  //   var current = document.getElementsByclassName("active");
  //   current[0].className = current[0].className.replace(" active", "");
  //   this.className += " active";
  //   });
  // }

  return (
    <div className="navbar">
      {/* {user && <div>{user.uid}</div>} */}

      <nav
        className="navbar navbar-expand-lg bg-var fixed-top ps-lg-5 pe-lg-5"
        style={{ height: "60px" }}
      >
        <div className="container-fluid">
          <a
            className="navbar-brand text-start justify-content-start mt-2 m-1"
            href="#"
          >
            <img className="logo" src={logo} alt="" />
            <img className="logoName" src={logoName} alt="" />
          </a>
          <button
            className="navbar-toggler ms-auto"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon">
              <svg
                width="30"
                height="30"
                viewBox="0 7 80 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.3125 15.9375H49.6875M10.3125 45.9375H49.6875H10.3125ZM10.3125 30.9375H49.6875H10.3125Z"
                  stroke="#FA9490"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </button>
          <div className="collapse navbar-collapse bg-var" id="navbarNav">
            <ul className="navbar-nav ms-auto d-large" id="navbar-nav">
              <li className="nav-item text-center">
                <Link activeclassName="navbar__link--active" to={"/empower"}>
                  <svg
                    // width="29"
                    // height="29"
                    viewBox="0 0 29 29"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M23.212 2C22.0868 2 21.0078 2.44697 20.2122 3.24257C19.4166 4.03817 18.9696 5.11724 18.9696 6.2424V23.212C18.9696 24.3371 19.4166 25.4162 20.2122 26.2118C21.0078 27.0074 22.0868 27.4544 23.212 27.4544C24.3371 27.4544 25.4162 27.0074 26.2118 26.2118C27.0074 25.4162 27.4544 24.3371 27.4544 23.212C27.4544 22.0868 27.0074 21.0078 26.2118 20.2122C25.4162 19.4166 24.3371 18.9696 23.212 18.9696H6.2424C5.11724 18.9696 4.03817 19.4166 3.24257 20.2122C2.44697 21.0078 2 22.0868 2 23.212C2 24.3371 2.44697 25.4162 3.24257 26.2118C4.03817 27.0074 5.11724 27.4544 6.2424 27.4544C7.36755 27.4544 8.44662 27.0074 9.24223 26.2118C10.0378 25.4162 10.4848 24.3371 10.4848 23.212V6.2424C10.4848 5.11724 10.0378 4.03817 9.24223 3.24257C8.44662 2.44697 7.36755 2 6.2424 2C5.11724 2 4.03817 2.44697 3.24257 3.24257C2.44697 4.03817 2 5.11724 2 6.2424C2 7.36755 2.44697 8.44662 3.24257 9.24223C4.03817 10.0378 5.11724 10.4848 6.2424 10.4848H23.212C24.3371 10.4848 25.4162 10.0378 26.2118 9.24223C27.0074 8.44662 27.4544 7.36755 27.4544 6.2424C27.4544 5.11724 27.0074 4.03817 26.2118 3.24257C25.4162 2.44697 24.3371 2 23.212 2Z"
                      stroke="#5E71A2"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <br />
                  Empower
                </Link>
              </li>
              <li className="nav-item text-center dropdown">
                <div className="dropbtn">
                  <Link to={"#"}>
                  <svg viewBox="0 0 29 29" xmlns="http://www.w3.org/2000/svg"><path d="M19.902 13.161a7.876 7.876 0 0 0-3.956-8.1c0-.021.006-.04.006-.061a3.952 3.952 0 0 0-7.904 0c0 .02.006.04.006.06a7.876 7.876 0 0 0-3.956 8.101 3.946 3.946 0 1 0 4.242 5.93 7.855 7.855 0 0 0 7.32 0 3.945 3.945 0 1 0 4.242-5.93zM12 2.051A2.948 2.948 0 1 1 9.052 5 2.951 2.951 0 0 1 12 2.052zM5 19.949A2.948 2.948 0 1 1 7.948 17 2.951 2.951 0 0 1 5 19.948zm3.75-1.76A3.896 3.896 0 0 0 8.952 17a3.952 3.952 0 0 0-3.868-3.944A7.1 7.1 0 0 1 4.996 12a6.977 6.977 0 0 1 3.232-5.885 3.926 3.926 0 0 0 7.544 0A6.977 6.977 0 0 1 19.004 12a7.1 7.1 0 0 1-.088 1.056A3.952 3.952 0 0 0 15.048 17a3.896 3.896 0 0 0 .202 1.188 7.13 7.13 0 0 1-6.5 0zM19 19.948A2.948 2.948 0 1 1 21.948 17 2.951 2.951 0 0 1 19 19.948z"/><path fill="none" d="M0 0h24v24H0z"
                   stroke="#5E71A2"
                   strokeWidth="3"
                   strokeLinecap="round"
                   strokeLinejoin="round"
                  /></svg>
                    <br />
                    Collaborate &#x25BE;
                  </Link>
                  <div className="dropdown-content">
                    <Link to={"/findCommunity"}>Find Community</Link>
                    <hr />
                    <Link to={"/postCommunity"}>Post Community</Link>
                  </div>
                </div>
              </li>
              <li className="nav-item text-center dropdown">
                <div className="dropbtn">
                  <Link to={"#"}>
                    <svg
                      // width="32"
                      // height="29"
                      viewBox="0 0 32 29"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M27.4544 7.65625H4.82827C3.26626 7.65625 2 8.92251 2 10.4845V24.6258C2 26.1879 3.26626 27.4541 4.82827 27.4541H27.4544C29.0164 27.4541 30.2827 26.1879 30.2827 24.6258V10.4845C30.2827 8.92251 29.0164 7.65625 27.4544 7.65625Z"
                        stroke="black"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M21.7975 27.4544V4.82827C21.7975 4.07816 21.4995 3.35878 20.9691 2.82838C20.4387 2.29798 19.7193 2 18.9692 2H13.3127C12.5626 2 11.8432 2.29798 11.3128 2.82838C10.7824 3.35878 10.4844 4.07816 10.4844 4.82827V27.4544"
                        stroke="black"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <br />
                    Jobs &#x25BE;
                  </Link>
                  <div className="dropdown-content">
                    <Link to={"/findjob"}>Find Job</Link>
                    <hr />
                    <Link to={"/postjob"}>Post Job</Link>
                  </div>
                </div>
              </li>
              <li className="nav-item text-center dropdown">
                <div className="dropbtn">
                  <Link to={"#"}>
                    <svg
                      // width="30"
                      // height="29"
                      className="fill"
                      viewBox="0 0 30 29"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.3367 28.9411C11.4784 28.9411 12.404 28.0155 12.404 26.8739C12.404 25.7322 11.4784 24.8066 10.3367 24.8066C9.19505 24.8066 8.26953 25.7322 8.26953 26.8739C8.26953 28.0155 9.19505 28.9411 10.3367 28.9411Z"
                        fill="black"
                      />
                      <path
                        d="M24.8055 28.9411C25.9472 28.9411 26.8727 28.0155 26.8727 26.8739C26.8727 25.7322 25.9472 24.8066 24.8055 24.8066C23.6638 24.8066 22.7383 25.7322 22.7383 26.8739C22.7383 28.0155 23.6638 28.9411 24.8055 28.9411Z"
                        fill="black"
                      />
                      <path
                        d="M28.941 5.16825H6.01559L5.16804 0.827096C5.11971 0.590115 4.98982 0.377583 4.80096 0.226496C4.6121 0.0754084 4.37624 -0.00466621 4.13443 0.000210276H0V2.06742H3.28687L7.23525 21.9127C7.28357 22.1497 7.41347 22.3622 7.60233 22.5133C7.79119 22.6644 8.02705 22.7444 8.26886 22.7396H26.8738V20.6724H9.11641L8.26886 16.5379H26.8738C27.1127 16.5438 27.3463 16.4666 27.5347 16.3196C27.7232 16.1726 27.8549 15.9649 27.9074 15.7317L29.9746 6.42925C30.0092 6.27589 30.0084 6.11664 29.9722 5.96364C29.9361 5.81064 29.8654 5.6679 29.7658 5.54631C29.6661 5.42471 29.54 5.32746 29.3971 5.26194C29.2542 5.19643 29.0982 5.16438 28.941 5.16825ZM26.0469 14.4707H7.87609L6.42904 7.23546H27.649L26.0469 14.4707Z"
                        fill="black"
                      />
                    </svg>
                    <br />
                    Services &#x25BE;
                  </Link>
                  <div className="dropdown-content">
                    <Link to={"/buyproduct"}>Hire Service</Link>
                    <hr />
                    <Link to={"/sellproduct"}>Post Service</Link>
                  </div>
                </div>
              </li>
              <li className="nav-item text-center dropdown">
                <Link to={"/queries"}>
                  <svg
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.1413 30.2827C23.9514 30.2827 30.2827 23.9514 30.2827 16.1413C30.2827 8.33129 23.9514 2 16.1413 2C8.33129 2 2 8.33129 2 16.1413C2 23.9514 8.33129 30.2827 16.1413 30.2827Z"
                      stroke="black"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12.0264 11.899C12.3588 10.9539 13.0151 10.157 13.8788 9.64935C14.7426 9.14171 15.7581 8.95615 16.7456 9.12553C17.733 9.2949 18.6287 9.80829 19.2739 10.5748C19.9191 11.3412 20.2723 12.3113 20.2708 13.3132C20.2708 16.1414 16.0284 17.5556 16.0284 17.5556"
                      stroke="black"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M16.1406 23.2119H16.1567"
                      stroke="black"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <br />
                  Queries
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav ms-auto d-small bg-var" id="navbar-nav">
              <li className="nav-item mt-2 mb-2 text-center">
                <Link activeclassName="navbar__link--active" to={"/empower"}>
                  Empower
                </Link>
              </li>
              <li className="nav-item mt-2 mb-2 text-center dropdown">
                <Link to={"/findCommunity"}>Find Community</Link>
              </li>
              <li className="nav-item mt-2 mb-2 text-center dropdown">
                <Link to={"/postCommunity"}>Post Community</Link>
              </li>
              <li className="nav-item mt-2 mb-2 text-center dropdown">
                <Link to={"/findjob"}>Find Job</Link>
              </li>
              <li className="nav-item mt-2 mb-2 text-center dropdown">
                <Link to={"/postjob"}>Post Job</Link>
              </li>
              <li className="nav-item mt-2 mb-2 text-center dropdown">
                <Link to={"/buyproduct"}>Hire Service</Link>{" "}
              </li>
              <li className="nav-item mt-2 mb-2 text-center dropdown">
                <Link to={"/sellproduct"}>Post Service</Link>
              </li>
              <li className="nav-item mt-2 mb-2 text-center dropdown">
                <Link to={"/queries"}>Queries</Link>
              </li>
            </ul>
          </div>
          <div className="nav-item ms-3">
            {data && (
              <div className="avatar">
                <div>
                  <Avatar sx={{ bgcolor: data.avatar }}>
                    <Button variant="normal" onClick={displayProfile}>
                      {data.name.charAt(0)}
                    </Button>
                  </Avatar>
                </div>
                {profile && (
                  <div className="profile">
                    <p>{data.email}</p>
                    <p>{data.name}</p>
                    <Button
                      className="logout ctc1-small"
                      onClick={handleLogout}
                    >
                      Log Out
                    </Button>
                  </div>
                )}
              </div>
            )}
            {error && <div>{error.message}</div>}
          </div>
        </div>
      </nav>
    </div>
  );
}
export default Navbar;
