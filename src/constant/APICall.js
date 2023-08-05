export const getDatafromGetApi = url => {
  fetch(url)
    .then(response => response.json())
    .then(responseJson => {
      return responseJson;
    })
    .catch(error => {
      return error;
    });
};

export const getDatafromPostApi = (url, inputData) => {
  fetch(url, {
    method: 'POST',
    body: inputData,
  })
    .then(response => response.json())
    .then(responseJson => {
      return responseJson;
    })
    .catch(error => {
      return error;
    });
};
