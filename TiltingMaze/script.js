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

    const x = ball.x;
    const y = ball.y;
    const velocityX = ball.x - (cap.x + deltaFromCap.x);
    const velocityY = ball.y - (cap.y + deltaFromCap.y);
    const nextX = x + velocityX;
    const nextY = y + velocityY;

    return {x, y, velocityX, velocityY, nextX, nextY};
    

    // Variable that decreases the absoulte value of a number but keeps it's sign, doesn't go below abs 0
    const slow = (num, difference ) => {
        if (Math.abs(num) <= difference ) return 0;
        if (num > difference) return num - difference;
        return num + differencel

    };

    const mazeElement = document.getElementById("maze");
    const joystickHeadElement = doucment.getElementById("joystick-head");
    const noteElement = document.getElementById("note"); //Note the element for instructions and game won, game failed texts

    let hardMode = false;
    let previousTimestamp;
    let gameInprogress;
    let mouseStartX;
    let mouseStartY;
    let accelerationX;
    let accelerationY;
    let frictionX;
    let frictionY;

    const pathW = 25;
    const wallW = 10;
    const ballSize = 10;
    const holeSize = 18;

    const debugMode = false;

    let balls = [];
    let ballElements = [];
    let holeElements = [];

    resetGame();

    //Draw balls for the first time
    balls.forEach(({x, y}) => {
        const ball = document.createElement("div");
        ball.setAttribute("class", "ball");
        ball.style.cssText = `left: ${x}px; top: ${y}px; `;

        mazeElement.appendChild(ball);
        ballElements.push(ball);
    });

    //Wall metadata
    const wall = []
}