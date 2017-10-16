$('document').ready(function() {

  $('#submit').click(function() {
    console.log('clicked');
    $('.resultsPage').html('<div></div>');
    $('.resultsPage').append('<div class="col-xl-1 col-lg-1 col-md-1 col-sm-1"></div><div class="col-xl-10 col-lg-10 col-md-10 col-sm-10 area"><div class="row grid">');

    var term = document.getElementById("form").value;
    var url = 'https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=' + term + '&callback=?';
    $.ajax({
      url: url,
      dataType: 'json',
      type: 'GET',
      success: function(data) {
        var entries = data;
        for (var i = 0; i < 10; i++) {
          if (data[1][i] === undefined)
            break;
          if (data[2][i] == "")
            entries[2][i] = "No description";

          $('.grid').append("<a class= 'entry col-xl-6 col-lg-6 col-md-6 col-sm-6 hidden-xs' href='" + entries[3][i] + "'><H3>" + entries[1][i] + "</H3><p>" + entries[2][i] + "</p></a><a class= 'entry hidden-xl hidden-lg hidden-md hidden-sm col-xs-12' href='" + entries[3][i] + "'><H3>" + entries[1][i] + "</H3></a>");

        }
      }
    });
  });
});
