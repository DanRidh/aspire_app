import { useState, useEffect } from "react";
import axios from "axios";

import ClassCard from "../containers/ClassCard";

const DisplayClassCards = ({ setEnrollStatus,setPaymentStatus,paymentStatus }) => {
  const [classes, updateClasses] = useState([]);

  // NOTE: selective retrieval based on student and tutor id
  // is optional feature, only to be implemented if we have extra time

  // TO DO: ADD LOADING INDICATOR

  // To retrieve all classes for homepage
  useEffect(() => {
    axios({
      method: "GET",
      url: "https://aspire-api2021.herokuapp.com/api/v1/tutor_sessions",
    })
      .then((res) => {
        // one list of classes
        updateClasses(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {classes.map((c) => {
          return (
            <div key={c.id}>
              <ClassCard c={c} setEnrollStatus={setEnrollStatus} setPaymentStatus={setPaymentStatus} paymentStatus={paymentStatus} ></ClassCard>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default DisplayClassCards;
