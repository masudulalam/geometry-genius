// calculat Triangle area

function calculateTriangleArea(){
    // get triangle base value
    const baseField = document.getElementById('triangle-base');
    const baseValueText = baseField.value;
    const baseValue = parseFloat(baseValueText);

    // get triangle height
    const heightField = document.getElementById('triangle-height');
    const heightValueText = heightField.value;
    const heightValue = parseFloat(heightValueText);

    // calculate triangle area
    const area = 0.5 * baseValue * heightValue;
    
    // showing triangle area
    const triangleAreaElement = document.getElementById('triangle-area');
    triangleAreaElement.innerText = area;
}

// Calculate rectangle area

function calculateRectangleArea(){
    // get rectangle width value
    const widthField = document.getElementById('rectangle-width');
    const widthValueText = widthField.value;
    const width = parseFloat(widthValueText);

    // get rectangle length value
    const lengthField = document.getElementById('rectangle-length');
    const lengthValueText = lengthField.value;
    const length = parseFloat(lengthValueText);
    console.log(length)

    // calculate triangle area
    const area = width * length;

    // showing rectangle area
    const rectangleAreaElement = document.getElementById('rectangle-area');
    rectangleAreaElement.innerText = area;
}