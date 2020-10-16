// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (!matrix) return []
    let result = []
    for (let i = 0; i < matrix.length; i++) {
        let m2 = matrix[i]
        if (i % 2 == 0) {
            for (let j = 0; j < m2.length; j++) {
                result.push(m2[j])
            }
        } else {
            for (let j = m2.length - 1; j >= 0; j--) {
                result.push(m2[j])
            }
        }
    }
    return result
}