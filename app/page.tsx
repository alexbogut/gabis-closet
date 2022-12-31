import { FC } from "react";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <div className="login">
      <div>
        <label>userName</label>
        <input type="text" />
      </div>
      <div>
        <label>Password</label>
        <input type="text" />
      </div>
      <div>
        <button>Login</button>
      </div>
    </div>
  );
};

export default page;
