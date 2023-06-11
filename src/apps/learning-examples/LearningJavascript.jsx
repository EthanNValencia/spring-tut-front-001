import React from "react";

const person = {
  name: "Ethan",
  address: {
    line1: "1075 Park Street",
    city: "Clearwater",
  },
  socialMedia: ["twitter", "facebook"],
  returnMedia: () => {
    person.socialMedia.map((media) => {
      console.log(media);
      return <div>{media}</div>;
    });
  },
};

function LearningJavascript() {
  return (
    <>
      <div>{person.name}</div>
      <div>{person.address.line1}</div>
      {person.returnMedia()}
    </>
  );
}

export default LearningJavascript;
