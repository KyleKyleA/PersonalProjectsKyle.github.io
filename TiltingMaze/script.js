//Main function for to operate the ball in the maze game

Math.minmax = (value, limit) => {
    return Math.max(Math.min(value, limit), -limit)
}

const distance2D = (player1, player2) => {
    return Math.sqrt((player2.x - player1.x) ** 2 + (player2.y - player1.y) **2);
};

//Angle between the both points
const getAngle = (player1, player2) => {
    let angle = Math.atan((player2.y - player1.y) / (player2.x - player1.x));
    if(player2.x - player1.x < 0 ) angle += Math.PI;
    return angle; 
};


//The closest a ball and a wall cap can be 
const closestItCanBe = (cap, ball) => {
    let angle = getAngle(cap, ball);

    const deltaX = Math.cos(angle) * (wallW / 2 + ballSize / 2);
    const deltaY = Math.sin(angle) * (wallW / 2 + ballSize / 2);

    return { x: cap.x + deltaX, y: cap.y + deltaY};
}