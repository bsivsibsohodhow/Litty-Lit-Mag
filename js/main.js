const template1 = '<div class="col"><a href="';
const template2 = '">';
const template3 = '</a></div>';

const issue = 'winter18';
const path= '/issues/' + issue + '/';

var clickTitle = new Array(23);

$(document).ready(function() {
  $.get('/issues/' + issue + '/' + issue + '.txt', function(data) {
    var lines = data.split('\n');
    for (i = 0; i < lines.length; i++) {
      clickTitle[i] = lines[i];
      clickTitle[i] = clickTitle[i].replace(/\s+/g, '');
      $('#reader-container').append(template1 + path + clickTitle[i] + '.txt' + template2 + lines[i] + template3);
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
