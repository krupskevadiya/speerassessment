import isDebug from './Constant';
export function PrintLog(printData) {
  if (isDebug) {
    console.log('============' + JSON.stringify(printData, null, 2));
  }
}
