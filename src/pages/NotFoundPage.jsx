import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Страница не найдена</h1>
      <Link
        to="/"
        style={{
          textAlign: "center",
          marginTop: "50px",
          textDecoration: "none",
        }}
      >
        Вернуться на главную
      </Link>
    </div>
  );
};

export default NotFoundPage;
