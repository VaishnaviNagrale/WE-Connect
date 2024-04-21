import React from "react";
import Navbar from "../components/Navbar";
import PostCommunityForm from "../components/PostCommunity/PostCommunityForm";
import { collection, doc, getDoc } from "firebase/firestore";
import { db } from "../data/firebase";
import { useAuthContext } from "../data/auth";
import { useEffect, useState } from "react";

const PostCommunity = () => {
  const colRef = collection(db, "findCommunities");
  const [myProducts, setMyProducts] = useState([]);
  const { user } = useAuthContext();

  useEffect(() => {
    let temp = [];
    const docRef = doc(db, "users", user.uid);
    getDoc(docRef)
      .then((doc) => {
        return doc.data().products;
      })
      .then((myPros) => {
        myPros.length && myPros.forEach((pid) => {
          getDoc(doc(colRef, pid)).then((snap) => {
            temp.push(snap.data());
          });
        });
      });
    setMyProducts(temp);
  }, []);

  return (
    <div className="postJob">
      <Navbar />
      <div className="mt-5">
        <div className="row">
          <div className="col-lg-6">
            <div style={{ margin: "50px" }}>
              <PostCommunityForm />
            </div>
          </div>
          <div className="col-lg-6 text-center">
            <div style={{ margin: "50px" }}>
              <p className="textField" style={{ fontSize: "21px" }}>
                Post your Community here!
              </p>
              <p style={{ fontSize: "18px" }}>
                Post your community here and collaborate with more people to
                make it better.
              </p>
            </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default PostCommunity;
