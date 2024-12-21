import React from "react";
import CircleLoader from "react-spinners/CircleLoader";

const override = {
  display: "block",
  margin: "100px auto",
};

const Spinner = ({ loading }) => {
  return (
    <CircleLoader
      color="#3E4C59"
      loading={loading}
      cssOverride={override}
      size={150}
    ></CircleLoader>
  );
};

export default Spinner;
