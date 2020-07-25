

//search bar function
search.addEventListener('keyup', function() {           
    let input = document.getElementById('search');                // search bar.
    let filter = input.value.toUpperCase();                       // search bar convert to Uppercase.
        for (i = 0; i < 12; i++) {                                // there are only 12 captions, but index starts at 0. this loops through the captions and compares it to the search bar onkeyup.
          let images = document.querySelectorAll('.photoAlbum');  // assigned .photoAlbum to images variable.
          caption = images[i].getAttribute('data-title');         // assigned the attributes of (data-title) from within (images) to the caption variable.
          capConvert = caption.toUpperCase();                     // captions to uppercase.
           if (capConvert.indexOf(filter) > -1) {                 // if the the search bar matches a picture caption, it will return a value of where the occurence is, no occurence being (-1).
            images[i].style.display = "";                         // if the caption matches, do nothing to the display (picture remains unaffected)
            } else {
            images[i].style.display = "none";                     // if the caption doesn't match, hide the display (only the match(es), if any, will be visible) 
            }
       
        }                                                         // end loop
});



