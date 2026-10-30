// src/Components/Head.js
import React from "react";
import { Helmet } from "react-helmet";

const Head = ({ title = "Dang Trung Hieu" }) => {
  return (
    <Helmet>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      {/* Favicon */}
      <link rel="icon" href="/img/favicon.png" />

      {/* Remix Icons */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/remixicon/4.2.0/remixicon.min.css"
      />

      <title>{title}</title>
    </Helmet>
  );
};

export default Head;
