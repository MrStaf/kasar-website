export const getData = async (url = "") => {
  const response = await fetch(url, {
    method: "GET",
    mode: "cors",
    cache: "no-cache",
    headers: {
      Origin: "localhost",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
  });
  if (!response) {
    throw new Error(response.status);
  }
  return response === undefined ? null : response.json();
};
