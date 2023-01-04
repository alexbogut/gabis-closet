///auth window 
let user_auth = `https://api.instagram.com/oauth/authorize
  ?client_id=1332287557340473
  &redirect_uri=https://gabis-closet.vercel.app/
  &scope=user_profile,user_media
  &response_type=code`

  ///// recieve code  (strip #_) in code query string

  let auth_token = `curl -X POST \
  https://api.instagram.com/oauth/access_token \
  -F client_id=1332287557340473 \
  -F client_secret=eb8c7... \
  -F grant_type=authorization_code \
  -F redirect_uri=https://socialsizzle.herokuapp.com/auth/ \
  -F code=AQBx-hBsH3...`;

  ////recieve auth token as jSON "access_token"
  //// send to media id query

  let id_caption_data = `curl -X GET \
  'https://graph.instagram.com/me/media?fields=id,caption&access_token=IGQVJ...'`;
  
  let sample_respnse = 
  {
  "data": [
    {
      "id": "17895695668004550",
      "caption": ""
    },
    {
      "id": "17899305451014820",
      "caption": ""
    },
    {
      "id": "17896450804038745",
      "caption": ""
    },
    {
      "id": "17881042411086627",
      "caption": ""
    }
  ],
  "paging": {
    "cursors": {
      "after": "MTAxN...",
      "before": "NDMyN..."
      },
    "next": "https://graph.faceb..."
  }
}

///query media data node using media id to get image urls

let media_data = `curl -X GET \
  https://graph.instagram.com/17895695668004550?fields=id,media_type,media_url,username,timestamp&access_token=IGQVJ...`

let sample_response = {
  "id": "17895695668004550",
  "media_type": "IMAGE",
  "media_url": "https://fb-s-b-a.akamaihd.net/...",
  "username": "jayposiris",
  "timestamp": "2017-08-31T18:10:00+0000"
}