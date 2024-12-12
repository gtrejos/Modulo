export function rubricExcellent(input) {
  const scores = input.split(',').map(Number);
  if (scores.some(score => score >= 9)) {
    return 'Excellent';
  }
  if (scores.some(score => score >= 5 && score < 9)) {
    return 'Satisfactory';
  }
  return 'Fail';
}

const input = process.argv[2]; 
const result = rubricExcellent(input);
console.log(result);