import { FC } from "react";
import { Link } from "react-router-dom";
import Login from "./login";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <div className="login">
      <Login />
    </div>
  );
};

export default page;
