

const BASE_URL_LIVE = process.env.NEXT_PUBLIC_SERVICE_URL;


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
