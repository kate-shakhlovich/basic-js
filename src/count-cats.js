module.exports = function countCats(matrix) { 
  const cats = "^^";
  let count = 0;
  for(let i = 0; i < matrix.length; i++) {
    const row = matrix[i]; 
    for(let j = 0; j < row.length; j++) { 
      if(row[j] === cats) { 
        count++; 
      }
    }
  }
  return count;
}
