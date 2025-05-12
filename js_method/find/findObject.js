const friends = [
  {
    name: "양주진",
    age: 32,
    job: "코인러",
    married: false,
  },
  {
    name: "오영제",
    age: 32,
    job: "랩퍼",
    married: false,
  },
  {
    name: "서준형",
    age: 32,
    job: "2년차 유부남",
    married: true,
  },
];

const notMarried = friends.find((friend) => {
  return friend.married === true;
});

console.log(notMarried);
