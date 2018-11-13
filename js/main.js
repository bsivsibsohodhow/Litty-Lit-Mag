const template1 = '<div class="col"><p>';
const template2 = '</p></div>';

const issue = 'winter18';

$(document).ready(function() {
  $.get('/issues/' + issue + '.txt', function(data) {
    var lines = data.split('\n');
    for (i = 0; i < lines.length; i++) {
      $('#reader-container').append(template1 + lines[i] + template2);
    }
  })
})

/*
$(document).ready(function() {
  $.ajax({
    url: '/issues/winter18',
    success: function(data) {
      $(data).find('a.contains(.txt)').each(function() {
        var lines = $(this).split('\n');
          for (i = 0; i < lines.length; i++) {
            $('#reader-container').append(template1 + lines[i] + template2);
          }
      })
    }
  })
})
*/
