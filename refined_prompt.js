/**
 * Converts a string to camelCase format.
 *
 * - Words are split by spaces, underscores, or hyphens.
 * - The first word is lowercased; subsequent words are capitalized.
 * - If the input is not a string, an error is thrown.
 * - If the input is empty or a number, it is returned as-is.
 *
 * @param {string} str - The string to convert.
 * @returns {string} The camelCase version of the input string.
 * @throws {Error} If the input is not a string.
 *
 * @example
 * toCamelCase("hi there"); // "hiThere"
 * toCamelCase("314"); // "314"
 * toCamelCase(""); // ""
 * toCamelCase("hello_world-test"); // "helloWorldTest"
 */
function toCamelCase(str) {
    if (typeof str !== 'string') {
        throw new Error('Input must be a string');
    }
    if (str.trim() === '' || !isNaN(str)) {
        return str;
    }
    return str
        .split(/[\s_\-.]+/)
        .map((word, idx) => {
            if (idx === 0) {
                return word.toLowerCase();
            }
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        })
        .join('');
}

/**
 * Converts a string to dot.case format.
 *
 * - Words are split by spaces, underscores, or hyphens.
 * - All words are lowercased and joined by dots.
 * - If the input is not a string, an error is thrown.
 * - If the input is empty or a number, it is returned as-is.
 *
 * @param {string} str - The string to convert.
 * @returns {string} The dot.case version of the input string.
 * @throws {Error} If the input is not a string.
 *
 * @example
 * toDotCase("hi there"); // "hi.there"
 * toDotCase("314"); // "314"
 * toDotCase(""); // ""
 * toDotCase("hello_world-test"); // "hello.world.test"
 */
function toDotCase(str) {
    if (typeof str !== 'string') {
        throw new Error('Input must be a string');
    }
    if (str.trim() === '' || !isNaN(str)) {
        return str;
    }
    return str
        .split(/[\s_\-.]+/)
        .map(word => word.toLowerCase())
        .join('.');
}