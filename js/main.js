var client = contentful.createClient({
    space: '7tv59nyxtphc',
    accessToken: 'sLmkdJl-p08AgwynJRMalzA0R_cWhDUrOINsSosQY48',
  })
  
  //console/log("Worked!");
  //console.log(client);
  
  
  
  //get all items from contentful - call that data 'entries'
  client.getEntries({ content_type: 'contentfulA2' }).then(function (entries) {
    // log the title for all the entries that have it
    console.log(entries);
    // loop through each entry,call it'entry'
    console.log(entries);
    entries.items.forEach(function (entry) {
      var item = document.createElement("div");
      item.classList.add("item");
  
      var title = document.createElement("h2")
      title.innerHTML = entry.fields.title;
      item.append(title);
      var description = document.createElement("p");
      description.innerHTML = entry.fields.description;
      item.append(description);
      if (entry.fields.coverImage) {
        var coverImage = document.createElement("img");
        coverImage.src = entry.fields.coverImage.fields.file.url
        item.append(coverImage);
      }
      var getDetails = document.createElement("a");
      getDetails.innerHTML = "Get details";
      getDetails.href = "details.html?id=" + entry.sys.id;
      item.append(getDetails);
      if (entry.fields.gallery) {
        
        console.log(entry);
      }
  
      document.getElementById("place-for-content").append(item)
      //structure will always be entry.fields.nameoffield
      console.log(entry.fields.title);
      console.log(entry.fields.description);
  
    
    });
  
    entries.items.forEach(function (entry) {
      if (entry.fields.productName) {
        console.log(entry.fields.productName);
      }
    });
  });