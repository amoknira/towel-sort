
// You should implement your task here.

module.exports = function towelSort(matrix = []) {
    let arr = [];
    let M = matrix.length;
    if (!matrix.length || !Array.isArray(matrix)) {
        return [];
    } else {
        // if row is even print from left to right (0, 2...) it row is odd print right to left
        //M is row, matrix[i].length is column
        // go through all rows and learn if current row is even or odd
        for (let i = 0; i < M; i++) {
            if (i % 2 === 0) {
                for (let j = 0; j < matrix[i].length; j++)
                    //even -> left to right
                    arr.push(matrix[i][j]);
            } else {
                //odd -> right to left
                for (let j = matrix[i].length - 1; j >= 0; j--)
                    arr.push(matrix[i][j]);
            }
        }
        return arr;
    }
}

