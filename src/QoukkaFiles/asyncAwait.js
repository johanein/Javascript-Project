const promise = new Promise((resolve, reject) => {
  resolve("resolved");
  //   reject("promise failed");
});

// IIFE

(async () => {
  try {
    const response = await promise;
    console.log({ response });
  } catch (error) {
    console.log(error);
  }
})();

const genericFetchData = async ({ url, method, data, token }) => {
  try {
    const response = await fetch(url, {
      method,
      data,
      token,
    });
    const responseJson = await response.json();
    return [responseJson, null];
  } catch (error) {
    return [null, error];
  }
};

const callApi = async () => {
  const [result, error] = await genericFetchData({
    url: "https://jsonplaceholder.typicode.com/todos/1",
    method: "GET",
  });
  if (result) {
    console.log(result);
    return;
  }
  console.log({ error });
};

callApi();
