import { FC } from "react";

import Image from "next/image";
import Product from "./Card";
let INSTAGRAM_CLIENT_ID = process.env.INSTAGRAM_CLIENT_ID;
let INSTAGRAM_CLIENT_SECRET = process.env.INSTAGRAM_CLIENT_SECRET;

const fetchToken = async (code) => {
  var myHeaders = new Headers();
  myHeaders.append(
    "Cookie",
    "csrftoken=KohUfJJzyRrIApexqBW3enDMmHjgTJNH; ig_nrcb=1"
  );

  var formdata = new URLSearchParams();
  formdata.append("client_id", INSTAGRAM_CLIENT_ID);
  formdata.append("client_secret", INSTAGRAM_CLIENT_SECRET);
  formdata.append("grant_type", "authorization_code");
  formdata.append("redirect_uri", "https://gabis-closet.vercel.app/");
  formdata.append("code", code);

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: formdata,
    redirect: "follow",
  };

  const res = await fetch(
    "https://api.instagram.com/oauth/access_token",
    requestOptions
  );

  const data = await res.json();
  // .then(response => response.text())
  // .then(result => console.log(result))
  // .catch(error => console.log('error', error));

  return data;
};

const fetchMedia = async (access_token) => {
  var myHeaders = new Headers();
  myHeaders.append(
    "Cookie",
    "csrftoken=KohUfJJzyRrIApexqBW3enDMmHjgTJNH; ig_nrcb=1"
  );

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  const result = await fetch(
    `https://graph.instagram.com/me/media?fields=id,media_url,caption&access_token=${access_token}`,
    requestOptions
  );
  const media_data = await result.json();
  // .then((response) => response.text())
  // .then((result) => console.log(result))
  // .catch((error) => console.log("error", error));
  return media_data;
};

const page = async function ({ searchParams }) {
  const data = await fetchToken(searchParams.code);

  const media = await fetchMedia(data.access_token);

  const src = media.data[0].media_url;

  return (
    <div>
      {media.data.map((content) => (
        <Product img={content.media_url} />
      ))}
    </div>
  );
};

export default page;
