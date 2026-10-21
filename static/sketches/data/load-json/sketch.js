let person;

async function setup() {
    noCanvas();
    noLoop();
    person = await loadJSON("assets/person.json");
    console.log(person);
    let name = person.firstName + " " + person.lastName;
    createElement("h2", name);

    createElement("p", name + " has the following pets:");
    let pets = person.pets;
    let list = createElement("ul");
    for (let i = 0; i < pets.length; i++) {
        let p = createElement("li", pets[i].name + ", " + pets[i].animal);
        list.child(p);
    }
}