// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (matrix == null) {
        return []
    }
    let result = []
    for (let i = 0; i < matrix.length; i++) {
        (i % 2 === 0) ? matrix[i].sort((a, b) => a - b): matrix[i].sort((a, b) => b - a)
        result.push(matrix[i])
    }
    return result.flat()
}
