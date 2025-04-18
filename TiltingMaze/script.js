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

//Function to roll the ball around the wall cap
const rollAroundWallCap = (cap, wall) => {
    let impactAngle = getAngle(ball, cap);

    //Direction the ball wants to move based on it's veloctuy
    let heading = getAngle(
        {x: 0, y: 0},
        {x: ball.velocityX, y: ball.velocityY}
    );

    //Then angle between the impact direction and the ball's desired direction
    // The smaller angle is, the bigger impact of the ball
    // THe closer it is to 90 degrees the smoother it gets ( at 90 degrees ther would be no collision at all)
    let impactHeadAngle = impactAngle - heading;

    //Velocity distance if not hit would have occured 
    const velocityMagnitude = distance2D (
        {x: 0, y: 0},
        {x: ball.velocityX, y: ball.velocityY} 
    );

    //Veloctiy component diagnoal to the impact
    const velocityMagnitudeDiagonalToTheImpact =
    Math.sin(impactHeadAngle) * velocityMagnitude;

    //This calculates on how far should the ball be from the wall cap 
    const closestDistance = wallW / 2 + ballSize / 2;

    const rotationAngle = Math.atan(
        velocityMagnitudeDiagonalToTheImpact / closestDistance
    );

    const deltaFromCap = {
        x: Math.cos(impactAngle + Math.PI - rotationAngle) * closestDistance,
        y: Math.sin(impactAngle + Math.PI - rotationAngle) * closestDistance
    };
}