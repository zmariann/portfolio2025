"use client";
import React from "react";
import { useRouter } from "next/navigation";

export default function Videos() {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };
  return (
    <>
      <p>Hi</p>
      <button onClick={handleBack}> Back</button>
    </>
  );
}
