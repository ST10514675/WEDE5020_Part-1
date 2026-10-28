const menuItems = [
    { name: "Cappuccino", category: "Hot Beverages", price: 32, note: "", description: "Rich espresso blended with steamed milk and topped with smooth foam and chocolate powder." },
    { name: "Americano", category: "Hot Beverages", price: 25, note: "", description: "Bold espresso topped up with hot water for a smooth, strong cup." },
    { name: "Café Latte", category: "Hot Beverages", price: 34, note: "", description: "Espresso with plenty of steamed milk and a light layer of foam." },
    { name: "Hot Chocolate", category: "Hot Beverages", price: 30, note: "", description: "Creamy hot chocolate made with steamed milk." },
    { name: "Rooibos / Ceylon Tea", category: "Hot Beverages", price: 20, note: "", description: "Your choice of caffeine-free rooibos or classic Ceylon tea, served hot." },
    { name: "Fresh Iced Cupcakes", category: "Fresh Bakery & Sweet Treats", price: 22, note: " each", description: "Soft vanilla and chocolate cupcakes topped with rich buttercream icing and fresh berries." },
    { name: "Plain Croissant", category: "Fresh Bakery & Sweet Treats", price: 25, note: "", description: "A buttery, flaky croissant baked fresh every morning." },
    { name: "Chocolate Muffin", category: "Fresh Bakery & Sweet Treats", price: 20, note: "", description: "A soft, moist muffin packed with chocolate." },
    { name: "Slice of Cake of the Day", category: "Fresh Bakery & Sweet Treats", price: 35, note: "", description: "A generous slice of the cake our bakers made today. Ask at the counter which one it is." },
    { name: "Morning Croissant & Coffee Combo", category: "Breakfast & Combo Meals", price: 55, note: "", description: "Two warm, fresh-baked butter croissants served alongside a hot cup of cappuccino or latte." },
    { name: "Toasted Cheese & Tomato Sandwich", category: "Breakfast & Combo Meals", price: 38, note: "", description: "Toasted sandwich filled with melted cheese and fresh tomato." },
    { name: "Toasted Chicken Mayo Sandwich", category: "Breakfast & Combo Meals", price: 45, note: "", description: "Toasted sandwich filled with chicken mayo." },
    { name: "Full Breakfast Plate", category: "Breakfast & Combo Meals", price: 63, note: "", description: "A full breakfast plate to start your day." }
];

const searchInput = document.getElementById("menuSearch");
const categorySelect = document.getElementById("menuCategory");
const sortSelect = document.getElementById("menuSort");
const clearButton = document.getElementById("menuClear");
const countText = document.getElementById("menuCount");
const resultsBox = document.getElementById("menuResults");

function getFilteredItems() {
    const term = searchInput.value.trim().toLowerCase();
    const category = categorySelect.value;
    const sort = sortSelect.value;

    const items = menuItems.filter(function (item) {
        const matchesCategory = category === "all" || item.category === category;
        const text = (item.name + " " + item.description + " " + item.category).toLowerCase();
        const matchesSearch = term === "" || text.includes(term);
        return matchesCategory && matchesSearch;
    });

    if (sort === "name") {
        items.sort(function (a, b) { return a.name.localeCompare(b.name); });
    } else if (sort === "price-low") {
        items.sort(function (a, b) { return a.price - b.price; });
    } else if (sort === "price-high") {
        items.sort(function (a, b) { return b.price - a.price; });
    }

    return items;
}

function createCard(item) {
    const card = document.createElement("article");
    card.className = "menu-result";

    const title = document.createElement("h3");
    title.textContent = item.name;

    const tag = document.createElement("span");
    tag.className = "menu-tag";
    tag.textContent = item.category;

    const description = document.createElement("p");
    description.textContent = item.description;

    const price = document.createElement("p");
    price.className = "menu-price";
    price.textContent = "R" + item.price.toFixed(2) + item.note;

    card.append(title, tag, description, price);
    return card;
}

function showResults() {
    const items = getFilteredItems();

    resultsBox.replaceChildren();
    countText.textContent = "Showing " + items.length + " of " + menuItems.length + " menu items.";

    if (items.length === 0) {
        const message = document.createElement("p");
        message.textContent = "No menu items match your search. Try a different word or clear the filters.";
        resultsBox.append(message);
        return;
    }

    items.forEach(function (item) {
        resultsBox.append(createCard(item));
    });
}

searchInput.addEventListener("input", showResults);
categorySelect.addEventListener("change", showResults);
sortSelect.addEventListener("change", showResults);

clearButton.addEventListener("click", function () {
    searchInput.value = "";
    categorySelect.value = "all";
    sortSelect.value = "default";
    showResults();
});

showResults();