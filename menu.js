// Change the font of the body element.

document.body.style.fontFamily = "Impact,Charcoal,sans-serif";
document.body.style.fontSize = '16px';


// Center the text of h1 on the page.

const h1 = document.querySelector('.title');
h1.style.textAlign = "center";

// Align other elements according to the image


const h3 = document.querySelector('h3');
h3.style.textAlign = "center";



// The menu headings have a class named category.Select the elements by class name.Then, change the color and font - style of each element.

const menuHeadings = document.querySelectorAll('.category');
//console.log(menuHeadings);

for (let item of menuHeadings) {
    item.style.fontSize = '1.8rem';
    item.style.textDecoration = 'underline';
    item.style.fontStyle = 'italic';
    item.style.paddingLeft = '9px';
};

const foodItem = document.querySelectorAll('.food-item');
//console.log(foodItem);

for (let item of foodItem) {
    item.style.padding = "0.5rem"
    item.style.fontSize = '1.2rem';
}


//Create a function named "colorGenerator" that returns a different color.The returned random color should also include set transparency.Select the unordered lists with the class of food - category.Give each list a different background color using the function that you created.

function colorGenerator() {
    const color1 = Math.floor(Math.random() * 254 + 1);
    const color2 = Math.floor(Math.random() * 254 + 1);
    const color3 = Math.floor(Math.random() * 254 + 1);
    const trans = Math.random().toFixed(1);

    return `rgb(${color1}, ${color2}, ${color3}, ${trans})`

}

const foodCategory = document.querySelectorAll('.food-category');
// console.log(foodCategory);

for (let item of foodCategory) {
    item.style.backgroundColor = colorGenerator();
    item.style.height = '10rem';
    item.style.width = '500px';
    item.style.paddingTop = "5px"
};


// Align the food - category lists in a row on desktop.Make sure that the page is responsive and also works on mobile. 

const main = document.querySelector(".main");
main.style.display = "flex";
main.style.justifyContent = "space-around";
main.style.alignItems = "center"
main.style.gap = "20px";

// Select the warning at the end of the page by its id warning.Select the id without using a querySelector.Change the size and font of the warning.

const warning = document.getElementById('warning')

warning.style.fontFamily = "Impact,Charcoal,sans-serif";
warning.style.fontSize = '1.8rem';
warning.style.paddingTop = '1.8rem';

//Select all even allergy - info items.Give the even items a different background color.

const allergyList = document.querySelectorAll('.allergy-info');
//console.log(allergyList);


allergyList.forEach((item, i) => {
    if (i % 2 === 1) {
        item.style.backgroundColor = "skyBlue";
    }

})




//Make the allergy - warning appear as a column in the center of the page.

const allergySection = document.querySelector(".allergy-warning");

allergySection.style.display = "flex";
allergySection.style.flexFlow = "column";
allergySection.style.justifyContent = "center";
allergySection.style.alignItems = "center";


const allergies = document.querySelector('.allergies');
//console.log(allergies);

allergies.style.listStyle = "none";
allergies.style.width = "350px";



//The descriptions in the footer should also be styled, e.g.a rounded border with a background color.They should appear in a column for mobile and in a row for desktop.;

const footer = document.querySelector('.footer');
//console.log(footer);

footer.style.display = 'flex';
footer.style.justifyContent = 'center';


const foodDesc = document.querySelectorAll('.food-desc');

//console.log(foodDesc);

foodDesc.forEach(({ style: desc }) => {
    desc.border = "5px solid orange"
    desc.borderRadius = '100%';
    desc.padding = '2rem';
    desc.margin = '1rem'
    desc.height = '4rem';
    desc.width = '4rem';
    desc.display = 'flex';
    desc.justifyContent = 'center';
    desc.alignItems = 'center';
});
