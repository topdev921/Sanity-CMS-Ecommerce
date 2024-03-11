"use client";

import { HandleAuthProps } from "@/types";
import { signIn, signOut } from "next-auth/react";

export function HandleAuth({ session }: HandleAuthProps) {
  const handleClick = () => {
    if (!session) {
      signIn("google");
    } else {
      signOut();
    }
  };

  // outputs only the firstname
  const getFirstName = (firstName: string) => {
    let strArr = firstName.split(" ");

    if (strArr.length > 0) {
      return strArr[0];
    }

    return "";
  };
  return (
    <span className="font-bold cursor-pointer" onClick={handleClick}>
      {!session ? "Account" : `Hi, ${getFirstName(session.user?.name)}`}
    </span>
  );
}
