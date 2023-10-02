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


// reuseable function --> reduce duplicate code
function calculateParallelogramArea(){
    const base = getInputValue('parallelogram-base');
    console.log(base);

    const height = getInputValue('parallelogram-height');
    console.log(height);

    const area = base * height;
    setElementInnerText('parallelogram-area', area);
}

function calculateEllipseArea(){
    const majorRadius = getInputValue('ellipse-major-radius');
    const minorRadius = getInputValue('ellipse-minor-radius');
    const area = 3.14 * majorRadius * minorRadius;
    const areaTwoDecimal = area.toFixed(2);
    setElementInnerText('ellipse-area', areaTwoDecimal);
}

// reuseable get input field value
function getInputValue(fieldId){
    const inputField = document.getElementById(fieldId);
    const inputValueText = inputField.value;
    const inputValue = parseFloat(inputValueText);
    return inputValue;
}

// reuseable set value as an innerText to the span/p/h etc. tag
function setElementInnerText(elementId, area){
    const element = document.getElementById(elementId);
    element.innerText = area;
}
