const catDetails = [
 {
   name: "Whiskers",
   breed: "Persian",
   age: 3,
   imagePath: "/category/Rectangle 16.png"
 },
 {
   name: "Fluffy",
   breed: "Maine Coon",
   age: 5,
   imagePath: "https://www.katdootje.nl/wp-content/uploads/kartierr_Maincoon_cat_very_clear_eyes_ultra_realistic_in_a_gian_1a6833b6-35d2-43bf-9cc0-6bc4d1898999.png.webp"
 },
 // Add more cats as needed
];

const cardContainer = document.getElementById("card-container");

catDetails.forEach(cat => {
 const card = document.createElement("div");
 card.classList.add("card");

 const cardImage = document.createElement("div");
 cardImage.classList.add("card-image");

 const image = document.createElement("img");
 image.src = cat.imagePath;
 image.alt = cat.name;
 cardImage.appendChild(image);

 const cardInfo = document.createElement("div");
 cardInfo.classList.add("card-info");

 const nameHeading = document.createElement("h2");
 nameHeading.textContent = cat.name;
 cardInfo.appendChild(nameHeading);

 const breedParagraph = document.createElement("p");
 breedParagraph.textContent = `Breed: ${cat.breed}`;
 cardInfo.appendChild(breedParagraph);

 const ageParagraph = document.createElement("p");
 ageParagraph.textContent = `Age: ${cat.age}`;
 cardInfo.appendChild(ageParagraph);

 card.appendChild(cardImage);
 card.appendChild(cardInfo);

 cardContainer.appendChild(card);
});


