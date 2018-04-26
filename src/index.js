$(document).ready(function() {
  console.log('jQuery sucessful')
  $("#myform").submit(function() {
    var search = $("#books").val();
    console.log(search);
    if(search === '') {
      alert('Please enter something');
    }else {
      var url = '';
      var img = '';
      var title = '';
      var author = '';

      $.get("https://www.googleapis.com/books/v1/volumes?q=" + search,function(res) {
        console.log(res); 
        for(var i = 0; i < res.items.length; i++) {
          title = $('<h5 class="">' + res.items[i].volumeInfo.title + '</h5>');
          author = $('<h5 class="">' + res.items[i].volumeInfo.authors + '</h5>');
          img = $('<img class=""><br><a href=' + res.items[i].volumeInfo.infoLink + '><button>Read More</button></a>');
          url = res.items[i].volumeInfo.imageLinks.thumbnail;

          img.attr('src',url);
          title.appendTo("#result");
          author.appendTo("#result");
          img.appendTo("#result");
        }
      });
    }
    return false;
  });

 
});