document.getElementById("menu-toggle").addEventListener("click", function() {
    document.getElementById("menu").classList.toggle("active");
});

var textInURL = window.location.search;
var parametersInURL = new URLSearchParams(textInURL);
var id = parametersInURL.get('id');

var client = contentful.createClient({
    space: 'ef2t03kbmdzu',
    accessToken: '1-GZE_stVR_z0Y5__Zod50R5lRskXuojq7_eEyVz_Os',
});

var product = document.getElementById('product');
client.getEntry(id).then(function (entry) {
    console.log(entry);
    
    var name = document.createElement('h2');
    name.classList.add('product-title');
    name.innerHTML = entry.fields.name;

    var accentColour = entry.fields.accentColour;
    name.style.color = accentColour;

    var description = document.createElement('p');
    description.classList.add('product-description');
    description.innerHTML = entry.fields.description;

    var price = document.createElement('h3');
    price.classList.add('product-price');
    price.innerHTML = entry.fields.price;

    product.appendChild(name);
    product.appendChild(description);
    product.appendChild(price);

    var mainImage = document.createElement('img');
    mainImage.classList.add('product-details-image');
    if (entry.fields.mainImage) {
        mainImage.src = entry.fields.mainImage.fields.file.url;
        mainImage.style.borderColor = accentColour;
    }
    product.appendChild(mainImage);
});