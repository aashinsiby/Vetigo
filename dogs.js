const petDetails = {

 dogs: [
   {
     name: "Buddy",
     breed: "Golden Retriever",
     age: 2,
     imagePath: "https://dogtime.com/wp-content/uploads/sites/12/2011/01/GettyImages-140388410-e1692223356634.jpg?w=1024"
   },{
    name: "Fluffy",
    breed: "Maine Coon",
    age: 5,
    imagePath: "https://www.katdootje.nl/wp-content/uploads/kartierr_Maincoon_cat_very_clear_eyes_ultra_realistic_in_a_gian_1a6833b6-35d2-43bf-9cc0-6bc4d1898999.png.webp"
  },{
    name: "Buddy",
    breed: "Golden Retriever",
    age: 2,
    imagePath: "https://dogtime.com/wp-content/uploads/sites/12/2011/01/GettyImages-140388410-e1692223356634.jpg?w=1024"
  },{
  name: "Buddy",
  breed: "Golden Retriever",
  age: 2,
  imagePath: "https://dogtime.com/wp-content/uploads/sites/12/2011/01/GettyImages-140388410-e1692223356634.jpg?w=1024"
},
   // ... more dogs
 ]
};
function createPetCarousel(containerId, petType) {
  const carousel = document.getElementById(containerId);
  const carouselInner = carousel.querySelector(".carousel-inner");

  petDetails[petType].forEach((pet, index) => {
    const carouselItem = document.createElement("div");
    carouselItem.classList.add("carousel-item");
    if (index === 0) {
      carouselItem.classList.add("active");
    }

    // Create pet card content within the carousel item
    const petCard = createPetCard(pet);
    carouselItem.appendChild(petCard);

    carouselInner.appendChild(carouselItem);
  });
}

function createPetCard(pet) {
 const card = document.createElement("div");
 card.classList.add("card");

 // Card Image
 const cardImage = document.createElement("div");
 cardImage.classList.add("card-image");

 const image = document.createElement("img");
 image.src = pet.imagePath;
 image.alt = pet.name;
 cardImage.appendChild(image);

 // Card Information
 const cardInfo = document.createElement("div");
 cardInfo.classList.add("card-info");

 const nameHeading = document.createElement("h2");
 nameHeading.textContent = pet.name;
 cardInfo.appendChild(nameHeading);

 const breedParagraph = document.createElement("p");
 breedParagraph.textContent = `Breed: ${pet.breed}`;
 cardInfo.appendChild(breedParagraph);

 const ageParagraph = document.createElement("p");
 ageParagraph.textContent = `Age: ${pet.age}`;
 cardInfo.appendChild(ageParagraph);

 // Assemble the Card
 card.appendChild(cardImage);
 card.appendChild(cardInfo);

 return card;
}

// const cardContainer = document.getElementById("card-container");
// const swipeButton = document.getElementById("swipe-button"); // Assuming a button with ID "swipe-button"

// swipeButton.addEventListener("click", () => {
//   const cards = document.querySelectorAll(".card");
//   if (cards.length > 1) {
//     const topCard = cards[0];
//     const nextCard = cards[1];

//     topCard.style.transform = "translateX(400px)"; // Adjust distance as needed
//     nextCard.style.zIndex = 2;
//   }
// });

// Call to create dog cards
createPetCards("card-container", "dogs");