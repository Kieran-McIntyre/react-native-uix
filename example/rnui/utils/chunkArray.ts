const chunkArray = (arr: any[], itemsPerChunk = 4) => {
  const chunkedArray = arr.reduce((resultArr, item, index) => {
    const chunkIndex = Math.floor(index / itemsPerChunk);

    if (!resultArr[chunkIndex]) {
      resultArr[chunkIndex] = [];
    }

    resultArr[chunkIndex].push(item);

    return resultArr;
  }, []);

  return chunkedArray;
};

export default chunkArray;
