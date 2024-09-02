"use client";

import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const Home = () => {
  let router = useRouter();

  useEffect(() => {
    router.push("/signup");
  }, []);

  return <>Main</>;
};

export default Home;
