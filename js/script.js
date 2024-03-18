document.getElementById("menu-toggle").addEventListener("click", function() {
    document.getElementById("menu").classList.toggle("active");
});

var client = contentful.createClient({
    space: 'ef2t03kbmdzu',
    accessToken: '1-GZE_stVR_z0Y5__Zod50R5lRskXuojq7_eEyVz_Os',
});

var productsDiv = document.getElementById('products');
var productsFeaturedDiv = document.getElementById('products-featured');
client.getEntries({content_type: 'assignment2',}).then(function (entries) {
    client
        .getEntries({
            'fields.isFeatured': 'true',
            content_type: 'assignment2',
        })
        .then(function (entries) {
            entries.items.forEach(function (entry) {
                var productDiv = document.createElement('div');
                var nameH2 = document.createElement('h2');
                nameH2.classList.add('product-name');
                nameH2.innerHTML = entry.fields.name;

                var accentColour = entry.fields.accentColour;
                nameH2.style.color = accentColour;

                var mainImage = document.createElement('img');
                mainImage.classList.add('product-image');
                if (entry.fields.mainImage) {
                    mainImage.src = entry.fields.mainImage.fields.file.url;
                    mainImage.style.borderColor = accentColour;
                }

                var linkToDetails = document.createElement('a');
                linkToDetails.href = 'details.html?id=' + entry.sys.id;
                linkToDetails.appendChild(mainImage);
        
                productDiv.append(nameH2);
                productDiv.append(linkToDetails);
                productsFeaturedDiv.append(productDiv);
            });
        });
    client
        .getEntries({
            'fields.isFeatured': 'false',
            content_type: 'assignment2',
        })
        .then(function (entries) {
            entries.items.forEach(function (entry) {
                var productDiv = document.createElement('div');
                var nameH2 = document.createElement('h2');
                nameH2.classList.add('product-name');
                nameH2.innerHTML = entry.fields.name;

                var accentColour = entry.fields.accentColour;
                nameH2.style.color = accentColour;
        
                var mainImage = document.createElement('img');
                mainImage.classList.add('product-image');
                if (entry.fields.mainImage) {
                    mainImage.src = entry.fields.mainImage.fields.file.url;
                    mainImage.style.borderColor = accentColour;
                }
        
                var linkToDetails = document.createElement('a');
                linkToDetails.href = 'details.html?id=' + entry.sys.id;
                linkToDetails.appendChild(mainImage);
        
                productDiv.append(nameH2);
                productDiv.append(linkToDetails);
                productsDiv.append(productDiv);
            });
        });
});