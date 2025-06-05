
const url = "https://api.nasa.gov/planetary/apod?api_key=az25G8xIyWRftwLkwAqPKRPugciQdilezHZgg89j";
let fetchButton = document.getElementById("earth-button");
let container = document.getElementById("generated-image-container");

async function getData() {
    try {
        let data = await (await fetch(url)).json();
return data;
    } catch (error) {
        console.log(error)
    }

}

async function useData() {
    let image = await getData();
    container.innerHTML = "";
    let imgElement = document.createElement("img");
    imgElement.src = image.url;
    container.appendChild(imgElement);
    return image;
}

fetchButton.addEventListener('click', useData);

