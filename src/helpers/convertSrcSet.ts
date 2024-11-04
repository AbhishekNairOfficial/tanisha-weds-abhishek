type SrcObject = {
  [key: string]: string;
};

const convertSrcSet = (srcObject: SrcObject) => {
  const srcArray = Object.entries(srcObject).map(([key, value]) => {
    return value + " " + key;
  });
  return srcArray.join(", ");
};

export default convertSrcSet;
