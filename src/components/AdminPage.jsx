import React from "react";
import { useParams } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

const AdminPage = () => {
  const { name } = useParams();
  const [params] = useSearchParams()

  return (
    <div>
      <h1>This is my admin page</h1>
      <h2>Welcome back {name} {params.get('age')}</h2>
      <h2>This page is only accesable for admins</h2>
    </div>
  );
};

export default AdminPage;
