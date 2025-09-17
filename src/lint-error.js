// This file contains intentional lint errors

function badFunction() {
    var unusedVariable = "this should cause a lint error";
    
    // Missing semicolon
    console.log("bad formatting")
    
    // Unused parameter
    function anotherBadFunction(unusedParam) {
        return "hello"
    }
    
    // Inconsistent quotes
    let badString = 'mixed"quotes'
}