type SrcObject = {
  [key: string]: string;
};

const convertSrcSet = (srcObject: SrcObject) => {
  return `${srcObject["1x"]}, ${srcObject["2x"]} 2x, ${srcObject["3x"]} 3x`;
};

export default convertSrcSet;
