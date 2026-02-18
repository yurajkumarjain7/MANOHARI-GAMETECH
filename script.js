const config = {
    "____________.html": {
        default: "______.html",
        top: "____.html",
        bottom: "_____.html",
        left: "______.html",
        right: "________.html"
    },
    "_______________-.html": {
        default: "_______.html",
        top: "____.html",
        bottom: "____.html",
        left: "______.html",
        right: "________.html"
    },
    "______________.html": {
        default: "________.html",
        top: "_________.html",
        bottom: "____.html",
        left: "_____.html",
        right: "_________.html"
    },
    "______________.html": {
        default: "________.html",
        top: "_____.html",
        bottom: "_____.html"
    }
};

const allMaps = {
    "__________.html": { '_': '___________.html' },
    "__________.html": { '_': '______.html', 's': '___________.html' },
    "________.html": { '_': '___________.html', 'a': '_______.html' },
    "____________.html": { '_': '____________-.html', '_': '__.html' },
    "__.html": { '_': '_________.html', '_': '__.html' },
    "__.html": { '_': '_____________.html', '_': '__.html' },
    "__.html": { '_': '____________.html' }
};

let activeSide = null;

function rotateIframe(side) {
    const frame = document.getElementById('myIframe');
    if (!frame) return;

    let currentPath = frame.getAttribute('src') || "";
    let currentFile = currentPath.split('/').pop().split('?')[0];

    if (activeSide) {
        frame.src = activeSide.parent;
        activeSide = null;
    } else {
        const data = config[currentFile];
        if (data && data[side]) {
            activeSide = { side: side, parent: currentFile };
            frame.src = data[side];
        }
    }
    
    frame.style.opacity = "0.7";
    setTimeout(() => { frame.style.opacity = "1"; }, 200);
}

window.addEventListener('keydown', (event) => {
    const keyPressed = event.key.toLowerCase();
    const iframe = document.getElementById('myIframe');
    if (!iframe) return;

    let currentPath = iframe.getAttribute('src') || "";
    let currentFile = decodeURIComponent(currentPath.split('/').pop().split('?')[0]);

    const activeMap = allMaps[currentFile];

    if (activeMap && activeMap[keyPressed]) {
        activeSide = null; 
        const baseSrc = activeMap[keyPressed];
        
        iframe.src = baseSrc;
        
        console.log(`Moving from ${currentFile} to ${baseSrc} via '${keyPressed}'`);
    }
});
