import React from 'react'
import {Link} from 'react-router-dom';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import Alert from '@mui/material/Alert';
import { useAuthContext } from '../../data/auth';
import logo from '../../assets/logo-women.png';
import logoName from '../../assets/logo-name.png';

const ForgotPass = () => {

    //firebase start
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const { forgetPassword } = useAuthContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try{
        setError(null);
        setMessage(null);
        await forgetPassword(email);
        setMessage("Check your inbox to find the reset link.")
    }
    catch(error){
      setError("Failed to send. Please check the entered email.");
    }
  }
  //firebase end

    return ( 
        <form style={{ color: "var(--sec-color)" , backgroundColor:'linear-gradient(to bottom right, var(--for-color), var(--tri-color), var(--pri-color))', textAlign:'center', width: '50vw' ,marginLeft : '25vw', marginTop:'30px', marginBottom:'40px'}} >
         <Typography
              className="gs-nav"
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
            >
              <img className="logo" src={logo} alt="GetStarted logo" />
              <img className="logoName" src={logoName} alt="WE-CONNECT" />
            </Typography>  
          <Typography variant='h4' sx={{fontSize:"30px"}} >
          Reset Password
          </Typography>
           
          {error && <Alert sx={{m:2}} severity="error">{error}</Alert>}
          {message && <Alert sx={{m:2}} severity="success">{message}</Alert>}
          <div style={{marginTop: '20px'}}></div>
          <TextField fullWidth  id="standard-basic" label="E-mail" variant="standard"
          onChange={(e)=> setEmail(e.target.value)} />
        <Typography fontSize={13.7} align='left' sx={{mt:3 , left:"0px"}}>
        {"Please enter your registered email."}
              </Typography>
              <Button 
        className='CTC1'
          type="submit"
          variant="contained"
          onClick={handleSubmit}
          sx={{ width:"auto" }}
        >
          Get Reset Link
        </Button>
            <Typography sx={{mt:3}} fontSize={16} variant='h6'>Don't have an account? <br /><Link to={"/register"} variant="body2">
          {'Register here'}
        </Link>
        <br /><Link to={"/login"} variant="body2">
          {'Back to login'}
        </Link></Typography>  
      </form>
     );
}
 
export default ForgotPass;