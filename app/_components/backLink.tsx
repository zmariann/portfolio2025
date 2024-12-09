"use client";
import React from "react";
import { useRouter } from "next/navigation";

export default function BackLink() {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return <button className="underline uppercase text-sm" onClick={handleBack}>Back</button>;
}
