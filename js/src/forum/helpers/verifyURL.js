/**
 * Verify a basic URL 
 * @param {String} str
 * @returns {String}
 */
export default function (str) {
    return str.slice(0, 5) == 'http' || 'https' ? str : '#'
}
