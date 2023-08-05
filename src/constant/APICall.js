import AppUrl from './AppUrl';
import Constant from './Constant';
import {PrintLog} from './PrintLog';
import axios from 'axios';

export const getDatafromGetApi = async url => {
  try {
    const response = await axios.get(url);
    return response;
  } catch (err) {
    return err;
  }
};

export const getDatafromSearch = async inputData => {
  return await axios
    .post(AppUrl.getUser, inputData, {
      headers: {
        Authorization: 'Bearer ' + Constant.authTokenGit,
      },
    })
    .then(response => {
      const data = response.data.data.search;
      return data;
    })
    .catch(error => {
      return error;
    });
};
