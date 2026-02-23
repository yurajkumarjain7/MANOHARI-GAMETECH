// 1. Setup Elements and Variables
const obj = document.getElementById("object"); // This should be an <img> tag
const obstacle = document.getElementById("obstacle");

let position = 0;
let velocity = 0;
const gravity = 0.8; 
const ground = 400; 

// Image URLs (Replace these with your actual file paths)
const airImage = "falling.png"; 
const groundImage = "landed.png";

// 2. Collision Detection Function
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

// 3. The Main Game Loop
function gameLoop() {
    // --- Physics & Image Swapping ---
    if (position < ground) {
        velocity += gravity;
        position += velocity;
        
        // Optional: Ensure it shows the "air" image while falling
        if (obj.src !== airImage) obj.src = airImage; 
    } else {
        position = ground;
        velocity = 0;

        // CHANGE IMAGE: Triggered when hitting the ground
        if (obj.src !== groundImage) {
            obj.src = groundImage;
            console.log("Object has landed!");
        }
    }
    
    // Apply movement
    obj.style.top = position + "px";

    // --- Collision Logic ---
    if (isTouching(obj, obstacle)) {
        obj.style.border = "2px solid red"; // Highlight collision
    } else {
        obj.style.border = "none";
    }

    requestAnimationFrame(gameLoop);
}

// Start the loop
gameLoop();
