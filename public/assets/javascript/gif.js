    // Example queryURL for Giphy API
    var queryURL = "https://media.giphy.com/media/3o7btUFzd7vU3bYZFK/giphy.gif";

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      console.log(response);

      var imageURL = response.data.image_original_url;

      var bobImage = $('<img>')
        bobImage.attr('src', imageURL);
        bobImage.attr('alt', 'bobs burgers');

        $('#imageData').prepend(bobImage);
    });