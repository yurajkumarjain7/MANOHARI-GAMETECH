// 1. Setup variables
const obj = document.getElementById("object");
const obstacle = document.getElementById("obstacle"); // Second object for collision

let position = 0;
let velocity = 0;
let gravity = 0.8; 
let ground = 400; 

// 2. Collision Detection Function (AABB)
function isTouching(rect1, rect2) {
    const r1 = rect1.getBoundingClientRect();
    const r2 = rect2.getBoundingClientRect();

    return !(
        r1.top > r2.bottom ||
        r1.bottom < r2.top ||
        r1.left > r2.right ||
        r1.right < r2.left
    );
}

// 3. The Combined Update/Fall Loop
function gameLoop() {
    // --- Physics Logic ---
    if (position < ground) {
        velocity += gravity;
        position += velocity;
    } else {
        position = ground;
        velocity = 0; // Stop at ground
    }
    
    // Apply position to DOM
    obj.style.top = position + "px";

    // --- Collision Logic ---
    if (isTouching(obj, obstacle)) {
        obj.style.backgroundColor = "red"; // Visual feedback for hit
        console.log("Collision detected!");
    } else {
        obj.style.backgroundColor = "blue"; // Normal state
    }

    // Keep the loop running
    requestAnimationFrame(gameLoop);
}

// Start the engine
gameLoop();
