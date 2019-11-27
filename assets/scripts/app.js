let currentResult =0;
let logEntries=[];
function getUserNumberInput(){
    return parseInt(userInput.value);
}
function createAndwriteOutput(operator, resultBeforecalc, calcNumber){
    const calcDescription = `${resultBeforecalc} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDescription);
}
function writeToLog(
  operationIdentifier,
  prevResult,
  operationNumber,
  newResult
) {
  const logEntry ={
    operation: operationIdentifier,
    prevResult:prevResult,
    number:operationNumber,
    result: newResult
  };
  logEntries.push(logEntry);
  console.log(logEntries[1]);
}

function calculateResult(calculationType){
  const enterredNumber= getUserNumberInput();
  const initialResult = currentResult;
  let mathOperator;
  if(calculationType === 'ADD'){
    currentResult += enterredNumber;
    mathOperator = '+';
  } else {
    currentResult -= enterredNumber;
    mathOperator='-';
  }
  createAndwriteOutput(mathOperator, initialResult, enterredNumber);
  writeToLog(calculationType, initialResult, enterredNumber, currentResult)
}
function add(){
calculateResult('ADD')
}

function subtract(){
  calculateResult('SUBTRACT')
}
function multiply(){
    const enterredNumber = getUserNumberInput();
    const initialResult = currentResult;
  currentResult = currentResult * enterredNumber;
  createAndwriteOutput('*', initialResult, enterredNumber);
  writeToLog('Multiply', initialResult, enterredNumber, currentResult)
}
function divide(){
    const enterredNumber = getUserNumberInput();
    const initialResult = currentResult;
  currentResult = currentResult / enterredNumber;
  createAndwriteOutput('/', initialResult, enterredNumber);
  writeToLog('Divide', initialResult, enterredNumber, currentResult)
}



addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);