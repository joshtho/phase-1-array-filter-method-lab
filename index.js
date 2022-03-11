// Code your solution here
function findMatching(array, string) {
   let answer = array.filter(obj => obj.toLowerCase() === string.toLowerCase());
    if (answer) {
        return answer;
    }
}
function fuzzyMatch(array, string) {
    let answer = array.filter(obj => obj.startsWith(string))
    if (answer) {
        return answer;
    }
}
function matchName(array, string) {
    let answer = array.filter(obj => obj.name === string)
    if (answer) {
        return answer;
    }
}
