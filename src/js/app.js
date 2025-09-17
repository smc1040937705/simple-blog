// This file has intentional linting errors for testing

function badFunction() {
  var unusedVar = 'test';
  console.log('Hello World')
  return unusedVar
}

// Missing semicolons and inconsistent spacing
const obj = {a:1,b:2}

// Unused function
function unusedFunction() {
  return 'unused'
}