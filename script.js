// Change color after 3 seconds
window.onload = function() {
    const nameElement = document.getElementById('name');
    let colorIndex = 0;
    let fontIndex = 0;
    const colors = ['#6A5ACD', '#CD5C5C','#008B8B']; // Purple, Red, Blue
    const fonts = ["'Helvetica Neue', sans-serif", "'Arial', sans-serif", "'Times New Roman', serif"];

    setInterval(function() {
        nameElement.style.color = colors[colorIndex];
        nameElement.style.fontFamily = fonts[fontIndex];

        // Increment color and font index
        colorIndex = (colorIndex + 1) % colors.length;
       
    }, 3000); // Change every 3 seconds

    const headingElement = document.querySelector('h2'); // Select the heading element

    const colors2 = ['#6A5ACD', '#CD5C5C', '#008B8B']; // Array of colors to cycle through
    let currentIndex = 0; // Index to keep track of the current color

    setInterval(function() {
        headingElement.style.color = colors2[currentIndex]; // Change the color of the heading
        currentIndex = (currentIndex + 1) % colors.length; // Move to the next color
    }, 3000); // Change color every 3 seconds
};

