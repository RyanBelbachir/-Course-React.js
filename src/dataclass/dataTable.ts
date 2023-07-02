interface Data {
  [key: string]: any;
}
function createData(data: Data): Data {
  return { ...data };
}
  
export default createData;
  