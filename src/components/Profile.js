import React from "react";

const Profile = props => {
  const { name, lastname } = props;

  const handleButtonClick = () => {
    console.log("button clicked by ", name);
  };
  return (
    <div>
      <h1>
        name: {name} {lastname}
      </h1>
      <button onClick={handleButtonClick}>submit name</button>
    </div>
  );
};

export default Profile;
