const clientId = "99117586f8ac498fafaa8b734e57e7ea";
const clientSecret = "1aa395885daa404baaa77f3e3fd1765d";

// private methods
const _getToken = async () => {
  const result = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: "Basic " + btoa(clientId + ":" + clientSecret),
    },
    body: "grant_type=client_credentials",
  });

  const data = await result.json();
  return data.access_token;
};

console.log(_getToken())