import React from "react";

const Profile = props => {
  const { name, lastname } = props;
  return (
    <div>
      <h1>
        name: {name} {lastname}
      </h1>
    </div>
  );
};

export default Profile;
