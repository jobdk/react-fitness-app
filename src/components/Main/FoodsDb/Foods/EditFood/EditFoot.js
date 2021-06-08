import React from "react";
import { useParams } from "react-router";

const EditFoot = () => {
  const { id } = useParams();

  return <div>hi{id}</div>;
};

export default EditFoot;
