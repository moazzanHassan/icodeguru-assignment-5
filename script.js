window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    const content = document.getElementById('content');

    
    setTimeout(() => {
        preloader.classList.add('hidden');
        content.style.display = 'block';
    }, 3000); 
});

const menu = document.querySelector("#nav");
const menu2 = document.querySelector("#nav2");
const side = document.querySelector("aside");
menu.addEventListener("click",()=>{
side.style.display = "block";
menu.style.display= "none";

})

menu2.addEventListener("click",()=>{
    side.style.display = "none";
    menu.style.display = "flex";
})

document.getElementById('generateBtn').addEventListener('click', () => {
    // Get values from input fields
    const num1 = parseInt(document.getElementById('num1').value);
    const num2 = parseInt(document.getElementById('num2').value);
    const resultElement = document.getElementById('result');
    
    // Clear previous results
    resultElement.innerHTML = '';

    // Check if inputs are valid numbers
    if (isNaN(num1) || isNaN(num2)) {
        resultElement.innerHTML = 'Please enter valid numbers in both fields.';
        return;
    }

    // Generate the multiplication table
    for (let i = 1; i <= num2; i++) {
        const result = `${num1} x ${i} = ${num1 * i}`;
        // Append the result to the <p> element
        resultElement.innerHTML += result + '<br>';
        console.log(result);
    }
});
