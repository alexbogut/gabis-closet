import { FC } from "react";
import Product from "./Card";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <div>
      PAGE
      <Product
        img={`https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80`}
      />
    </div>
  );
};

export default page;