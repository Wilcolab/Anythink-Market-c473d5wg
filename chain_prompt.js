/**
 * Converts a string to kebab-case format.
 *
 * - Words are split by spaces, underscores, hyphens, or dots.
 * - All words are lowercased and joined by hyphens.
 * - If the input is not a string, an error is thrown.
 * - If the input is empty or a number, it is returned as-is.
 *
 * @param {string} str - The string to convert.
 * @returns {string} The kebab-case version of the input string.
 * @throws {Error} If the input is not a string.
 *
 * @example
 * toKebabCase("hi there"); // "hi-there"
 * toKebabCase("314"); // "314"
 * toKebabCase(""); // ""
 * toKebabCase("hello_world.test-case"); // "hello-world-test-case"
 */
function toKebabCase(str) {
    if (typeof str !== 'string') {
        throw new Error('Input must be a string');
    }
    if (str.trim() === '' || !isNaN(str)) {
        return str;
    }
    return str
        .split(/[\s_\-.]+/)
        .map(word => word.toLowerCase())
        .join('-');
}
