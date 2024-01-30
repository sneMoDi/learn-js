// Define a JavaScript function called logMsg() that can be used to log an error message for any object that contains the property errMsg. 

const logger = {
    logMsg() { // Using shorthand method definition
        console.log(`Error message : ${this.errMsg}`);
    }
};

const logMsg1 = () => { // Arrow functions don't have their own 'this' context
    console.log(`Error message : ${this.errMsg}`);
};

const log1 = {
    errMsg: "Error 404, Not Found",
    logMsg: logger.logMsg // Assigning logger's logMsg function to log1
};

const log2 = {
    errMsg: "Error 403, Unauthorized",
    logMsg: logger.logMsg // Assigning logger's logMsg function to log2
};

log1.logMsg(); // Now using the method directly from log1
log2.logMsg(); // And log2

logMsg({ errMsg: "An error occurred" });
