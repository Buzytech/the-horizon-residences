

const BASE_URL_LIVE = process.env.NEXT_PUBLIC_SERVICE_URL;

const FOXSUIT_URL_LIVE = process.env.NEXT_PUBLIC_SERVICE_APIURL


export const postFormData = async (data: any) => {
  return fetch(`${BASE_URL_LIVE}/sfasync/api/syncleads/website`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .catch((error) => {
      console.error("Error:", error);
      throw error;
    });
};

export const getAdvancerfromData = async () => {
  return fetch(
    `${process.env.NEXT_PUBLIC_SERVICE_APIURL}/advance-form-service/advance-form?pageIndex=0&pageSize=10&search=&customerId=693a7de66a1489a0d2970554`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  )
    .then((response) => response.json())
    .catch((error) => {
      console.error("Error:", error);
      throw error;
    });
};


export const postFormDataFoxSuit = async (data: any) => {
  return fetch(`${process.env.NEXT_PUBLIC_SERVICE_APIURL}/advance-enquiry-form/advance-form`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .catch((error) => {
      console.error("Error:", error);
      throw error;
    });
};



