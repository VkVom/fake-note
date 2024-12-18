var b = 1
const c=document.querySelector('#c1');
 function a(){
    b = b *-1
    if(b==-1){
      c.style.display="block"; 
    }
    else{
       c.style.display="none";
    }

}
const d = document.querySelector('#c2');
 function e(){
    b = b *-1
    if(b==-1){
      d.style.display="block"; 
    }
    else{
       d.style.display="none";
    }

}
function f(){
    document.getElementById("inp").click();
    document.getElementById("btm-btn").style.display="none";
    
}
function checkNote() {
    const fileInput = document.getElementById('inp');
    const file = fileInput.files[0];
    const reader = new FileReader();

    reader.onload = function(e) {
        // Create an image element and set its source to the uploaded image
        const img = new Image();
        img.src = e.target.result;

        img.onload = function() {
            // Get the canvas context and set its dimensions to the image's size
            const canvas = document.getElementById('canvas');
            const ctx = canvas.getContext('2d', { willReadFrequently: true }); // Add willReadFrequently here
            canvas.width = img.width;
            canvas.height = img.height;

            // Draw the image on the canvas
            ctx.drawImage(img, 0, 0, img.width, img.height);

            // Get the pixel data from the canvas
            const imageData = ctx.getImageData(0, 0, img.width, img.height);
            const pixels = imageData.data;

            let r = 0, g = 0, b = 0, total = 0;

            // Loop through all the pixels to calculate the average color
            for (let i = 0; i < pixels.length; i += 4) {
                r += pixels[i];     // Red
                g += pixels[i + 1]; // Green
                b += pixels[i + 2]; // Blue
                total++;
            }

            // Calculate the average red, green, and blue values
            r = Math.round(r / total);
            g = Math.round(g / total);
            b = Math.round(b / total);

            // Display the dominant color as an RGB value
            const dominantColor = `rgb(${r}, ${g}, ${b})`;
            const resultElement = document.getElementById("result");
            console.log(resultElement)
            resultElement.innerHTML = `Dominant Color: <span style="background-color: ${dominantColor}; color: white; padding: 5px;">${dominantColor}</span>`;
        };
    };

    reader.readAsDataURL(file); // Read the image file as a data URL
}

