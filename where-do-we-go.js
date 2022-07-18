import { places } from "./where-do-we-go.data.js";

let location, compass;
export const explore = () => {
    sortedPlaces.forEach((place) => {
        let section = document.createElement("section");
        let img = place.name.split(",")[0].toLowerCase();
        img = img.split(" ").join("-");
        section.style.background = `url('./where-do-we-go_images/${img}.jpg')`;
        section.style.backgroundSize = "100% 100%";
        document.body.append(section);
    });

    location = document.createElement("a");
    location.classList.add("location");
    location.target = "_blank";

    compass = document.createElement("div");
    compass.classList.add("direction");

    document.body.append(location, compass);

    scroll();
};
const getDegree = (coordinates) => {
    const north = coordinates.includes("N");
    const degree = coordinates.split("'")[0].replace("°", ".");
    return north ? degree : -degree;
};
let sortedPlaces = places.sort(
    (a, b) => getDegree(b.coordinates) - getDegree(a.coordinates)
);

let lastLocation = -1;
const scroll = (e) => {
    if (window.scrollY > lastLocation) compass.innerHTML = "S";
    else compass.innerHTML = "N";
    lastLocation = window.scrollY;

    let displayLocation =
        sortedPlaces[Math.round(window.scrollY / window.innerHeight)];
    location.innerHTML = `${displayLocation.name}\n${displayLocation.coordinates}`;
    location.style.color = displayLocation.color;
    location.href = `https://www.google.com/maps/place/${displayLocation.coordinates}`;
};
document.addEventListener("scroll", scroll);
