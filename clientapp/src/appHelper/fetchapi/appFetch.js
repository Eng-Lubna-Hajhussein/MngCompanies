import {
  App_Server_URL_GraphQL,
  App_Server_Url_UploadFiles,
} from "appHelper/appVariables";

export const fetchData = async (requestBody) => {
  return await fetch(App_Server_URL_GraphQL, {
    method: "POST",
    body: JSON.stringify(requestBody),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      if (res.status !== 200 && res.status !== 201) {
        throw new Error("Failed!");
      }
      return res.json();
    })
    .then((resData) => {
      return resData;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const UploadFile = async (formData) => {
  return await fetch(App_Server_Url_UploadFiles, {
    method: "POST",
    body: formData,
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error("Failed!");
      }
      return res.json();
    })
    .then(({ filePathURL }) => {
      return filePathURL;
    })
    .catch((err) => {
      console.log(err);
    });
};
