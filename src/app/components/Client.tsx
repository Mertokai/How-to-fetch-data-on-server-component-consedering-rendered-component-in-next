"use client";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import fetchData from "./fetchData";

type Props = {};

const Client = (props: Props) => {
  const [me, setMe] = useState<boolean>(true);
  useEffect(() => {
    const fetchDataAsync = async () => {
      const data = await fetchData();
    };
    fetchDataAsync();
  }, [me]);
  return (
    <div>
      <button onClick={() => setMe(!me)}>click me</button>
    </div>
  );
};

export default Client;
