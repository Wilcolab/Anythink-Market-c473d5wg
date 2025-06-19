// Helper function to capitalize a character following a delimiter
function capitalizeAfterDelimiter(_, chr) {
    return chr ? chr.toUpperCase() : '';
}

function toCamelCase(str) {
    return str
        .toLowerCase()
        // Replace delimiters (underscore, hyphen, space) and capitalize the following character for camelCase conversion
        .replace(/[_\-\s]+(.)?/g, capitalizeAfterDelimiter)
        .replace(/^[A-Z]/, chr => chr.toLowerCase());
}

// Example usage:
console.log(toCamelCase('first name'));      // firstName
console.log(toCamelCase('user_id'));         // userId
console.log(toCamelCase('SCREEN_NAME'));     // screenName
console.log(toCamelCase('mobile-number'));   // mobileNumber