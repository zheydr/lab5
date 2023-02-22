
let column_1 = [3, 1, 9, 2, 7, 4, 10, 4, 2, 6, 2, 6, 7, 4, 7, 10, 2, 6, 5, 3, 9, 2, 7, 1, 4, 9, 9, 3, 3, 1]
let column_2 = [4, 9, 7, 4, 1, 5, 10, 5, 3, 5, 2, 6, 4, 9, 10, 6, 6, 9, 6, 3, 6, 7, 2, 10, 7, 7, 8, 4, 8, 8]
let column_3 = [74, 80, 54, 62, 91, 83, 40, 66, 80, 46, 71, 91, 43, 81, 99, 54, 85, 83, 45, 70, 49, 98, 85, 83, 82, 79, 69, 81, 43, 61]
let column_4 = [84, 70, 91, 90, 56, 62, 98, 56, 93, 100, 56, 73, 60, 95, 57, 68, 98, 62, 80, 70, 59, 72, 47, 65, 61, 46, 67, 93, 76, 69]

let sum_1 = 0;
let sum_2 = 0;
let sum_3 = 0;
let sum_4 = 0;

for (let i = 0; i < column_1.length; i++) {
  sum_1 += column_1[i];
  sum_2 += column_2[i];
  sum_3 += column_3[i];
  sum_4 += column_4[i];
}

let sums = [sum_1, sum_2, sum_3, sum_4]
let total_sum = sum_1 + sum_2 + sum_3 + sum_4

const results = {
  col1: column_1,
  col2: column_2,
  col3: column_3,
  col4: column_4,
  sums: sums, // array of sums of each column
  total_score:total_sum, // computed total score
}

console.log(results)




