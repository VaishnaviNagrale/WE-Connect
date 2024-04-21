import React from "react";
import "../style/GetStarted.css";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import logo from "../assets/logo-women.png";
import logoName from "../assets/logo-name.png";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import bg from "../assets/women-bg.png";
import animation from "../assets/multi-tasking.png";
import help from "../assets/icons/help.svg";
import contact from "../assets/icons/contact.svg";
import { Link } from "react-router-dom";
import { useMediaQuery } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
}));

function GetStarted() {
  const isMobile = useMediaQuery("(max-width: 480px)");

  return (
    <div className="container">
      <div>
        <AppBar
          position="static"
          elevation={0}
          sx={{ bgcolor: "linear-gradient(to bottom right, var(--for-color), var(--tri-color), var(--pri-color))" }}
        >
          <Toolbar>
            <Typography
              className="gs-nav"
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
            >
              <img className="logo" src={logo} alt="GetStarted logo" />
              <img className="logoName" src={logoName} alt="WE-CONNECT" />
            </Typography>
            <Button
                  className="nav-btn"
                  variant="contained"
                  sx={{ boxShadow: 0, bgcolor: "var(--pri-color)" }}
                >
                  HELP
                </Button>
                <Button
                  href="mailto:vaishnavina3@gmail.com"
                  className="nav-btn"
                  variant="contained"
                  sx={{ boxShadow: 0, bgcolor: "var(--pri-color)" }}
                >
                  CONTACT
                </Button>
            {isMobile && (
              <>
              <Link to={"/login"} style={{ textDecoration: "none" }}>
              <Button
                className="nav-btn"
                variant="contained"
                sx={{ boxShadow: 0, bgcolor: "var(--sec-color)" }}
              >
                Log In
              </Button>
            </Link>
            <Link to={"/register"} style={{ textDecoration: "none" }}>
              <Button
                className="nav-btn"
                variant="outlined"
                sx={{ boxShadow: 0, color: "var(--sec-color)", borderColor: "var(--sec-color)", bgcolor: "transparent" }}
              >
                Register
              </Button>
            </Link>
              </>
            )}
          </Toolbar>
        </AppBar>
      </div>
      {/* <img
        src={bg}
        alt="women"
        style={{
          height: "600px",
          width: "600px",
          position: "fixed",
          zIndex: "-1",
          left: "-10px",
          top: "100px",
          opacity: "0.6",
          objectFit: "cover",
        }}
      /> */}
      <div>
        <Grid className="grid" container spacing={2}>
          <Grid className="grid" item lg={6}>
            <Item sx={{ boxShadow: 0, bgcolor: "#ffffff00"}}>
              <Typography className="heading" variant="h2">
                About Us
              </Typography>
              <Typography>
                <em>
                  <i>FROM HOME-MAKER TO ENTREPRENEURS</i>
                </em>
                <br />
                <br />
                WE-CONNECT is an initiative for home-maker who wish to grow,
                connect and start their entrepreneurial journey.
                <br></br>
                <br></br>
                If you are looking for a job opportunity, a homemade product or
                just want to know how to book a cab so that you don't have to
                depend on someone every time you have to go somewhere, you're
                browsing through the right website.
                <br></br>
                <br></br>
                We have something for every Home-Maker.
              </Typography>
              
              {(!isMobile && (
                <>
                <Link to={"/login"} style={{ textDecoration: "none" }}>
                <Button
                  className="CTC1"
                  variant="contained"
                  sx={{ boxShadow: 0, bgcolor: "var(--sec-color)" }}
                >
                  Log In
                </Button>
              </Link>
              <Link to={"/register"} style={{ textDecoration: "none" }}>
                <Button
                  className="CTC2"
                  variant="outlined"
                  sx={{ boxShadow: 0, color: "var(--sec-color)", borderColor: "var(--sec-color)", bgcolor: "transparent" }}
                >
                  Register
                </Button>
              </Link>
                </>
              ))}
            </Item>
          </Grid>
          <Grid item lg={6}>
            <Item sx={{ boxShadow: 0, bgcolor: "#ffffff00" }}>
              <img className="women" src={animation} alt="housewife" />
            </Item>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default GetStarted;
