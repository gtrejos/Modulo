export function rubricPerfect(input) {
    const scores = input.split(',').map(Number);
    if (scores.some(score => score === 11)) {
        return 'Perfect';
    }
    if (scores.some(score => score >= 9)) {
        return 'Excellent';
    }
    if (scores.some(score => score >= 5)) {
        return 'Pass';
    } else {
        return 'Fail';
    }
}
