// import React from "react";

// import Hero from "../components/Hero";

// const Home = () => {
//   return (
//     <div>
//       <Hero></Hero>
//     </div>
//   );
// };

// export default Home;

import React, { useContext } from "react";
import Hero from "../components/Hero";
import { AuthContext } from "../Context/AuthProvider";

const Home = () => {
  const authInfo = useContext(AuthContext);
  console.log(authInfo);
  return (
    <div>
      <Hero />
    </div>
  );
};

export default Home;
