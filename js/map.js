const branches = [
    {
        name: "Main Branch (Strubenvale)",
        address: "49 Modder B Close, Strubenvale, Springs, 1559",
        lat: -26.2650,
        lng: 28.4750
    },
    {
        name: "Secondary Branch (Central Mall)",
        address: "Shop 12, Springs Central Mall, Springs, 1560",
        lat: -26.2540,
        lng: 28.4200
    }
];

function buildPopup(branch) {
    const box = document.createElement("div");

    const name = document.createElement("strong");
    name.textContent = branch.name;

    const address = document.createElement("div");
    address.textContent = branch.address;

    const link = document.createElement("a");
    link.href = "https://www.google.com/maps/search/?api=1&query=" + branch.lat + "," + branch.lng;
    link.target = "_blank";
    link.rel = "noopener";
    link.textContent = "Get directions";

    box.append(name, address, link);
    return box;
}

function initMap() {
    const mapElement = document.getElementById("map");

    if (typeof L === "undefined") {
        mapElement.textContent = "The map could not load. Please check your internet connection and refresh the page.";
        return;
    }

    const map = L.map("map");
    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    const markers = [];
    const points = [];
    branches.forEach(function (branch) {
        const marker = L.marker([branch.lat, branch.lng]).addTo(map);
        marker.bindPopup(buildPopup(branch));
        markers.push(marker);
        points.push([branch.lat, branch.lng]);
    });

    function showAll() {
        map.fitBounds(points, { padding: [50, 50] });
    }
    showAll();

    document.querySelectorAll(".map-buttons button").forEach(function (button) {
        button.addEventListener("click", function () {
            const choice = button.dataset.branch;
            if (choice === "all") {
                map.closePopup();
                showAll();
            } else {
                const index = Number(choice);
                map.flyTo(points[index], 16);
                markers[index].openPopup();
            }
        });
    });
}

initMap();