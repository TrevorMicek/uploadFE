import React from "react";

const getUrl = (page, origin) => {
  if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
    if (origin) {
      return `http://localhost:4321`;
    } else {
      return `http://localhost:3000/data/${page}`;
    }
  } else {
    if (origin) {
      return `https://upload-pn3q.onrender.com/`;
    } else {
      return `https://upload-pn3q.onrender.com/data/${page}`;
    }
  }
};

const UseFetch = (page) =>
  fetch(getUrl(page), {
    method: "get",
    mode: "cors",
    cache: "no-cache",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "Access-Control-Allow-Origin": "http://localhost:3000/",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
  });
export default UseFetch;
