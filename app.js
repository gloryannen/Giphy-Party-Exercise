async function searchGiph(searchTerm){
    // Get API  url, insert token and variable that serves as the searched term
  const response = await axios.get("http://api.giphy.com/v1/gifs/random", {params: 
  {api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym", tag: searchTerm}, 
  });
  
  // Make new image tags, set src to received giph url, prepend to gif container 
  const img = $("<img>");
  img.src = response.data.data.images.fixed_height.url;
  $(img).attr("src", img.src);
  $(".gif-container").prepend(img);
}

// Search for giph based on field value/text
$("#search-img").on("click", function(e){
  e.preventDefault();
  console.log("click on search btn");
  const searchInput = $("#search-input");
  let searchTerm = searchInput.val();
  searchGiph(searchTerm);
  searchInput.val("");
});

// Clear all GIPHS by removing all images
$("#remove-imgs").on("click", function(e){
  e.preventDefault();
  $("img").remove();
});
