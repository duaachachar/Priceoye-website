import React, { useEffect, useState } from "react";

const ProtectedRoute = ({ children }) => {
  const [user, setUser] = useState({});

  console.log(user, 'user');

  useEffect(() => {
    const inform = localStorage.getItem("user");

    const userObj = JSON.parse(inform);
    


    setUser(userObj);
  }, []);

  if(!user.email && !user.name){
    return <h1 className="text-red-500 font-bold">
    Please log in to access this page.
  </h1>
  }

  return <div>{children}</div>;
};

export default ProtectedRoute;
