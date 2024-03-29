import React from "react";
import { useSelector } from "react-redux";

function Profile() {
  const user = useSelector((state) => state.user.value);
  const theme = useSelector((state) => state.theme.value);
    if(!user.name) {
      return
    }
    
  return (
    <div style={{ backgroundColor: user.color }}>
      <h1>Profile Info</h1>
      <h2>Name: {user.name}</h2>
      <h2>Age: {user.age}</h2>
      <h2>Email: {user.email}</h2>
      <h2>Ph.No: {user.phno}</h2>
    </div>
  );
}

export default Profile;
