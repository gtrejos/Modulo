
export function rubricPassFail(input) {
    const scores = input.split(',').map(Number); 
    const [score1] = scores; 
    if (score1 >= 5) {
        return 'Pass';
    } else {
        return 'Fail';
    }
}
