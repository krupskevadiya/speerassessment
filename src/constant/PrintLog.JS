import isDebug from './Constant';
export const PrintLog = printData => {
  if (isDebug) {
    console.log('============' + JSON.stringify(printData));
  }
};
