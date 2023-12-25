export const sendForm = (URL, user) => {
  return fetch(URL, {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      "Content-Type": "multipart/form-data",
    },
  })
    .then((res) => res.json())
    .catch((error) => console.log(error));
};
