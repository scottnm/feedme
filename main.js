var data = [
"Kirbey Lane",
"Madam Mam's",
"Teji's",
"Qdoba",
"Big Bite",
"Kismet Cafe",
"Taqueria Los Altos",
"Which Wich",
"Potbelly",
"Fricano's Deli",
"That Asian Place",
"Noodles and Company",
"Pluckers",
"Torchy's Tacos",
"Raising Cane",
"What-a-Burger",
"Papa John's Pizza",
"Austin's Pizza",
"Emo's",
"Fuzzy's Tacos",
"Fat Sal's",
"Mellow Mushroom",
"Taco Bell"
];

function surprise_me() {
	//alert("testing");
	console.log("testing");
	alert(data[Math.floor(Math.random() * (23 - 1)) + 1]);
}