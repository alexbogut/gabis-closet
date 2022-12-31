import { FC } from "react";

interface pageProps {
  params: {
    name: string;
  };
}

const page: FC<pageProps> = ({ params: { name } }) => {
  return (
    <div className="search">
      <div className="input">
        <input type="text" placeholder={name} />
      </div>
      <div>
        <button>search</button>
      </div>
    </div>
  );
};

export default page;
