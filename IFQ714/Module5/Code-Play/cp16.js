function tryCatchFinally() {
    console.log("Code before all blocks");
    try {
        console.log(newVariable.toString());
        console.log("Code inside try block");
    } catch {
        console.log(anotherNewVariable.toString());
 

        console.log("Code inside catch block");
    } finally {
        console.log("Code inside finally block");
    }
    console.log("Code after all blocks");
}
tryCatchFinally();