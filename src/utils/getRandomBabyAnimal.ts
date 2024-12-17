export function getRandomBabyAnimal() {
  const babyAnimals = [
    "Kitten",
    "Puppy",
    "Duckling",
    "Foal",
    "Cub",
    "Joey",
    "Fawn",
    "Chick",
    "Calf",
    "Piglet",
    "Lamb",
    "Gosling",
    "Tadpole",
    "Cygnet",
    "Poult",
  ];

  const randomIndex = Math.floor(Math.random() * babyAnimals.length);
  return babyAnimals[randomIndex];
}
