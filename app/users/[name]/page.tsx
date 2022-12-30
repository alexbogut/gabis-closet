import { FC } from "react";

interface pageProps {
  params: {
    name: string;
  };
}

const page: FC<pageProps> = ({ params: { name } }) => {
  return <div>{name}'s Page</div>;
};

export default page;
