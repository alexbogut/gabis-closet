"use client";
import Link from "next/link";
import { FC } from "react";

interface loginProps {}

const login: FC<loginProps> = ({}) => {
  return (
    <Link href={"/auth/instagram"}>
      <button>Login with Instagram</button>
    </Link>
  );
};

export default login;
