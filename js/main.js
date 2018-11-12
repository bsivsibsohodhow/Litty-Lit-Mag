const template1 = '<div class="col"><p>';
const template2 = '</p></div>';

$(document).ready(function() {
  $.get('/issues/winter18.txt', function(data) {
    var lines = data.split('\n');
    for (i = 0; i < lines.length; i++) {
      $('#reader-container').append(template1 + lines[i] + template2);
    }
  })
})
