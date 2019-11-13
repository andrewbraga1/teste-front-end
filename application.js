// var form = $('#search-film');
// var search_field = $('#search-film-input');
// var results = $('#results');

// var KEY = 'AIzaSyCFevdADumbPEsj-UEDESesryIuXLwR-6s';

// form.on('submit', function(e) {
//   e.preventDefault();
//   debugger
//   var url_search = 'https://www.googleapis.com/youtube/v3/search';

//   var searchParams = {
//       part: 'id,snippet',
//       q: search_field.val(),
//       key: KEY
//   };

//   $.get(url_search, searchParams, function(response) {
//     results.empty();
//     $.each(response.items, function(index, item) {
//       $('<div />')
//         .append($('<h4 />').html(item.snippet.title))
//         .append($('<img />').attr('src', item.snippet.thumbnails.high.url))
//         .append($('<hr />'))
//         .appendTo(results);
//     });
//   });
//});