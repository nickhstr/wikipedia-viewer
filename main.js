$('form').submit(false);

$(document).ready(function() {
  //Click event listener, sends json request
  $('#search-btn').click(function() {

    $('#results').empty();
    $('.search-results').addClass('background');

    var search = $('#searchbox').val();
    var wikiUrl = 'https://en.wikipedia.org/w/api.php?action=opensearch&search=' + search + '&format=json&callback=?';

    $.getJSON(wikiUrl, function(response) {
      $('#results-heading').text('Results for "' + search + '":');
      var articles = response[1];
      var snippets = response[2];
      var links = response[3];

      for (var i = 0; i < articles.length; i++) {
        $('#results').append('<h3 class="result-title"><a href="' + links[i] + '">' + articles[i] + '</a><h3>');
        $('#results').append('<p>' + snippets[i] + '</p>');
      }
    });
  });
});