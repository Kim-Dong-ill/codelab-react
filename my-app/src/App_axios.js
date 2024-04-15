import React, { useState, useEffect } from "react";
// import axios from "axios";
import { getUser } from "./api/api";

function App() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const callApi = async () => {
      try {
        const user = await getUser();
        console.log(user.user);
        setUserData(user.user);
      } catch (error) {
        console.log(error);
      }
    };
    callApi();
  }, []);

  console.log(userData);
  return (
    <div>
      test
      {userData?.map((item, idx) => {
        return <li key={idx}>{item.email}</li>;
      })}
    </div>
  );
}

export default App;
