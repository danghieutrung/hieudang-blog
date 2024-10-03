// src/Components/Head.js
import React from "react";
import { Helmet } from "react-helmet";
// import './styles.css';

const Head = () => {
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

      {/* CSS */}
      <link rel="stylesheet" href="/css/styles.css" />
      {/* <link rel="stylesheet" href="./styles.css" /> */}

      <title>Dang Trung Hieu</title>
    </Helmet>
  );
};

export default Head;
