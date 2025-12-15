// script.js

// 1. Get references to the elements
const iframe = document.getElementById('myIframe');
const lastKeyDisplay = document.getElementById('lastKey');
const currentSrcDisplay = document.getElementById('currentSrc');

// 2. Define the content mappings for each key
 const contentMap = {
    // 'a', 's', and 'd' are the key codes (lowercase)
    'a': '1st framework.html', // A page for key 'A'
    's': '2nd framework.html', // A page for key 'S'
    'd': '3rd framework.html'  // A page for key 'D'
    // You would need to create these three HTML files
};

// 3. Add an event listener to the entire window for key presses
window.addEventListener('keydown', (event) => {
    // Convert the key to lowercase for case-insensitive checking
    const keyPressed = event.key.toLowerCase();

    // Check if the pressed key is one of the keys in our contentMap
    if (contentMap.hasOwnProperty(keyPressed)) {

        // Prevent default actions (like scrolling if the key is 'space')
        // event.preventDefault(); 

        // --- Action 1: Change the iframe source (src) ---
        const newSrc = contentMap[keyPressed];
        iframe.src = newSrc;

        // --- Action 2: Update the display elements ---
        lastKeyDisplay.textContent = event.key.toUpperCase(); // Display A, S, or D
        currentSrcDisplay.textContent = newSrc;

    } else {
        // If another key is pressed, just update the last key display
        lastKeyDisplay.textContent = event.key.toUpperCase() + ' (No action)';
    }
});

// ... (inside the keydown event listener) ...

if (contentMap.hasOwnProperty(keyPressed)) {

    const baseSrc = contentMap[keyPressed];

    // **Modification:** Append the key as a query parameter (?key=A)
    const newSrc = `${baseSrc}?key=${keyPressed.toUpperCase()}`; 

    iframe.src = newSrc; }


    if ( iframe == "1st framework.html")  {
        const contentMap = {
            // 'a', 's', and 'd' are the key codes (lowercase)
            'a': '1st framework.html', // A page for key 'A'
            's': '2nd framework.html', // A page for key 'S'
            'd': '3rd framework.html'  // A page for key 'D'
            // You would need to create these three HTML files
        };
        window.addEventListener('keydown'), (event) => {
            // Convert the key to lowercase for case-insensitive checking
            const keyPressed = event.key.toLowerCase();

            // Check if the pressed key is one of the keys in our contentMap
            if (contentMap.hasOwnProperty(keyPressed)) {

                // Prevent default actions (like scrolling if the key is 'space')
                // event.preventDefault(); 

                // --- Action 1: Change the iframe source (src) ---
                const newSrc = contentMap[keyPressed];
                iframe.src = newSrc;

                // --- Action 2: Update the display elements ---
                lastKeyDisplay.textContent = event.key.toUpperCase(); // Display A, S, or D
                currentSrcDisplay.textContent = newSrc;

            }  
      else {
        // If another key is pressed, just update the last key display
        lastKeyDisplay.textContent = event.key.toUpperCase() + ' (No action)';
    }
}}; if (contentMap.hasOwnProperty(keyPressed)) {

    const baseSrc = contentMap[keyPressed];

    // **Modification:** Append the key as a query parameter (?key=A)
    const newSrc = `${baseSrc}?key=${keyPressed.toUpperCase()}`; 

    iframe.src = newSrc; }