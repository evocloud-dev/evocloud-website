import React from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function useSetQueryParam() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const setQueryParam = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set(key, value);
    router.push(`?${params.toString()}`);
  };

  return { setQueryParam };
}
