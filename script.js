function transformScore(score) {
    const scoreA = score >= 90 && score <= 100;
    const scoreB = score >= 80 && score <= 89;
    const scoreC = score >= 70 && score <= 79;
    const scoreD = score >= 60 && score <= 69;
    const scoreF = score < 60 && score >= 0;

    let charScore;

    if(scoreA) {
        charScore = 'A';
    } else if(scoreB) {
        charScore = 'B'
    } else if(scoreC) {
        charScore = 'C'
    } else if(scoreD) {
        charScore = 'D'
    } else if(scoreF) {
        charScore = 'F'
    } else if(!charScore) {
        throw new Error('Invalid score, set a score between 0 - 100')
    }

    console.log(`The final score is ${charScore}`);
}