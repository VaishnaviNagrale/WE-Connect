import React, { useState } from "react";
import { Alert, Button } from "@mui/material";
import FirstStep from "./FirstStep";
import SecondStep from "./SecondStep";
import { ArrowBack } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { db } from "../../data/firebase";
import {
  addDoc,
  arrayUnion,
  collection,
  doc,
  updateDoc,
} from "firebase/firestore";
import { useAuthContext } from "../../data/auth.js";
import "../../style/PostJob.css";

const PostCommunityForm = () => {
  //page changing start
  const { user } = useAuthContext();
  const [page, setPage] = useState(1);
  const onNext = (e) => {
    e.preventDefault();
    setPage((page) => page + 1);
  };

  const onBack = (e) => {
    e.preventDefault();
    setPage((page) => page - 1);
  };
  //page changing end

  //field input states start

  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [sdesc, setSdesc] = useState("");
  const [fullName, setFullName] = useState("");
  const [phNo, setPhNo] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [loc, setLoc] = useState("");
  const [size, setSize] = useState("");
  //field input states end
  const [success, setSuccess] = useState(false);
  //onSubmit

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      Name: name,
      Description: desc,
      FullName: fullName,
      PhoneNo: phNo,
      Email: email,
      Website: website,
      location: loc,
      Size: size,
      Image: image,
      ShortDesc: sdesc,
    };
    console.log("data ", data);
    console.log(user.uid);
    const prodColRef = collection(db, "findCommunities");
    const userColRef = doc(db, "users", user.uid);
    try {
      addDoc(prodColRef, data).then(
        (value) => {
          console.log(value.id);
          updateDoc(userColRef, {
            products: arrayUnion(value.id),
          });
        },
        setSuccess(true),
        setImage(""),
        setDesc(""),
        setSdesc(""),
        setName(""),
        setPhNo(""),
        setSize(""),
        setWebsite(""),
        setFullName(""),
        setLoc(""),
        setPage(1),
        setEmail("")
      );
      navigate("/postCommunity");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      style={{ color: "txt-color", backgroundColor: "white" }}
      onSubmit={handleSubmit}
      className="jobForm"
    >
      {success && <Alert severity="success">Community succesfully posted</Alert>}
      {page !== 1 && (
        <Button
          className="CTC1 back"
          type="submit"
          variant="contained"
          sx={{ width: "auto" }}
          onClick={onBack}
        >
          <ArrowBack />
        </Button>
      )}
      {page === 1 && (
        <FirstStep
          name={name}
          onNameChange={setName}
          desc={desc}
          onDescChange={setDesc}
          size={size}
          onSizeChange={setSize}
          image={image}
          onImageChange={setImage}
          sdesc={sdesc}
          onSdescChange={setSdesc}
        />
      )}
      {page === 2 && (
        <SecondStep
          fullName={fullName}
          onFullChange={setFullName}
          phNo={phNo}
          onPhChange={setPhNo}
          email={email}
          onEmailChange={setEmail}
          website={website}
          onWebsiteChange={setWebsite}
          loc={loc}
          onLocChange={setLoc}
        />
      )}

      {page !== 2 && (
        <Button
          className="CTC1"
          variant="contained"
          sx={{ width: "100px" }}
          onClick={onNext}
        >
          Next
        </Button>
      )}
      {page === 2 && (
        <Button
          className="CTC1"
          type="submit"
          variant="contained"
          sx={{ width: "100px" }}
        >
          Submit
        </Button>
      )}
    </form>
  );
};

export default PostCommunityForm;
