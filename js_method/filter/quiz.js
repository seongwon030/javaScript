let animals = [
  { species: "mammalia", name: "cat" },
  { species: "reptiles", name: "lizard" },
  { species: "amphibia", name: "flog" },
  { species: "mammalia", name: "dog" },
  { species: "amphibia", name: "salamander" },
];

let result = animals.filter((value) => value.species == "mammalia");
console.log(result);
