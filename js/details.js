var textInURL = window.location.search;
var parametersInURL = new URLSearchParams(textInURL);
var id = parametersInURL.get('id');


var client = contentful.createClient({
    space: '7tv59nyxtphc',
    accessToken: 'sLmkdJl-p08AgwynJRMalzA0R_cWhDUrOINsSosQY48',
  })
  

  client.getEntry(id).then(function (entry) {
    var title = document.createElement('h2');
    title.innerHTML = entry.fields.title;
    
    document.getElementById("place-for-content").append(title)
    console.log(entry);
    var gallery = document.createElement('div');
    document.getElementById("place-for-content").append(gallery);


    entry.fields.gallery.forEach(function (galleryImage) {
        console.log(galleryImage);
        var image = document.createElement("img");
        image.src = galleryImage.fields.file.url;
        gallery.append(image);
    })
  });