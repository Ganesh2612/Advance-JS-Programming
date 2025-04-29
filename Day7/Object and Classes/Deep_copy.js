const user1 = { name: "Alice", address: { city: "NY" } };
const user2=structuredClone(user1);
user2.name="Dev";
user2.address.city="Mumbai";


const user3=JSON.parse(JSON.stringify(user2));
user3.name="Sammy";
user3.address.city="Chennai";
console.log(user1);
console.log(user2);
console.log(user3);