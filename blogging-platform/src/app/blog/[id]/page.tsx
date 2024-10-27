import React from "react";

const page = ({ params }: { params: { id: string } }) => {
  return (
    <>
      <h2>project id {params.id}</h2>
    </>
  );
};

export default page;
