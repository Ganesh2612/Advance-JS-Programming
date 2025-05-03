class Recipe {
    constructor(recipe, creator, id) {
        this.arr = [];
        this.recipe = recipe;
        this.creator = creator;
        this.id = id;
    }

    add(recipe) {
        this.arr.push(recipe);
    }

    procedure(item) {
        let arr = [];
        if (item === "idly") {
            arr.push("Take idly batter and mix it");
            arr.push("Pour the batter into each section of the idly vessel");
            arr.push("Close the vessel and steam it for 10 minutes");
            arr.push("Remove idlies and serve");
        } else if (item === "Biriyani") {
            arr.push("Take chicken and clean with turmeric");
            arr.push("Chop onions, tomatoes, garlic, etc.");
            arr.push("Heat oil, add spices, then onions, then tomatoes, then masalas and chicken");
            arr.push("Add rice and water, cook covered for 10 minutes");
            arr.push("Serve hot");
        } else if (item === "Bun Butter Jam") {
            arr.push("Cut bun in half");
            arr.push("Apply butter and jam on each side");
            arr.push("Rejoin and serve");
        } else if (item === "Filter coffee") {
            arr.push("Heat milk");
            arr.push("Add coffee powder and mix");
            arr.push("Serve hot");
        } else {
            console.log("Recipe not found!");
            return;
        }

        for (let step of arr) {
            console.log(step);
        }
    }

    show() {
        console.log("Recipes:");
        for (let value of this.arr) {
            console.log("- " + value);
        }
    }

    delete(item) {
        let index = this.arr.indexOf(item);
        if (index !== -1) {
            this.arr.splice(index, 1);
        }
    }
}


const myRecipes = new Recipe("MyRecipes", "Ganesh", 101);


myRecipes.add("idly");
myRecipes.add("Biriyani");
myRecipes.add("Bun Butter Jam");
myRecipes.add("Filter coffee");


myRecipes.show();

console.log("\nProcedure for Biriyani:");
myRecipes.procedure("Biriyani");


myRecipes.delete("idly");


console.log("\nAfter deleting 'idly':");
myRecipes.show();
