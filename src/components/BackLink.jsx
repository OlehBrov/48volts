"use client";

import { useSearchParams } from "next/navigation";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

export const BackLink = () => {
  const router = useRouter();

  return <Button onClick={() => router.back()} className="mb-6">Назад</Button>;
};
