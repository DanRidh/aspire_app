import { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import ClassCard from "../containers/ClassCard";

const DisplayClassCards = ({ userId }) => {
  const [classes, updateClasses] = useState([]);

  useEffect(() => {
    // axios
    //   .get("https://insta.nextacademy.com/api/v2/images", {
    //     params: {
    //       userId: userId,
    //     },
    //   })
    //   .then((response) => {
    //     updateClasses(response.data);
    //   });
    updateClasses([1, 2, 3]);
  }, []);

  return (
    <>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {classes.map((c) => {
          return (
            <div key={c.id}>
              <ClassCard></ClassCard>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default DisplayClassCards;
