function addNums(n1: number, n2: number): number {
  return n1 + n2;
}

function printResult(num: number): void {
  console.log('Result is: ' + num);
}

printResult(addNums(1, 2));

function generateError(msgError: string, errCode: number): never {
  throw {
    msgError,
    errCode,
  };
}

generateError('Something wrong happened', 500);
