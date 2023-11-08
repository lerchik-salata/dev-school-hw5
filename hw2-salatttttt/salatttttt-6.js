function calcPerimeter(matrix){
   let perimeter = 0;
   for(let i =0; i < matrix.length; i++){
     for(let n = 0;  n < matrix[i].length; n++){
         if(matrix[i][n] ==="X"){
             if (i === 0 || matrix[i - 1][n] === 'O') {
                 perimeter++;
             }

             if (i === matrix.length - 1 || matrix[i + 1][n] === 'O') {
                 perimeter++;
             }

             if (n === 0 || matrix[i][n - 1] === 'O') {
                 perimeter++;
             }

             if (n === matrix[i].length - 1 || matrix[i][n + 1] === 'O') {
                 perimeter++;
             }
             }
         }
     }
    return("Total land perimeter: " +  perimeter);
 }

 console.log(calcPerimeter(['XOOXO',
     'XOOXO',
     'OOOXO',
     'XXOXO',
     'OXOOO']));