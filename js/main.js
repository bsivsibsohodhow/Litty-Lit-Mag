//diff ids
const template1 = '<div class="col" id="flower';
const template2 = '"><a href="';
const template3 = '">';
const template4 = '</a></div>';

const hiddenForm1 = '<input type="hidden" name="radio1" value="';
const hiddenForm2 = '">';

/*
const template1 = '<div class="col"><div class="generated-flower"><a href="';
const template2 = '">';
const template3 = '</a></div></div>';
*/

const issue = 'winter18';
const path= '/issues/' + issue + '/' + issue + '.html';

const htmlTemplate1 = '<!doctype html><html class="no-js" lang=""><head><meta charset="utf-8"><meta http-equiv="x-ua-compatible" content="ie=edge"><title>';
const htmlTemplate2 = '</title><meta name="description" content=""><meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"><link rel="manifest" href="site.webmanifest"><link rel="favicon" href="icon.png"><link rel="stylesheet" href="/css/main.css"></head><body><div class="index-container"><div class="whitespace"><div class="row"><h-ws>Lorem Ipsum</h-ws> </div> </div> <div class="row"> <div class="col-1"></div> <div class="col-4"> <img src="/img/heading.gif" alt="heading"> </div> <div class="col" style="text-align: center;"> <a href="about.html">about</a> </div> <div class="col" style="text-align: center;"> <a href="current.html">current</a> </div> <div class="col" style="text-align: center;"> <a href="past.html">past</a> </div> <div class="col" style="text-align: center;"> <a href="submit.html">submit</a> </div> <div class="col" style="text-align: center;"> <a href="contact.html">contact</a> </div> <div class="col-1"></div> </div>';
const htmlTemplate3 = '<div class="row"><div class="col-1"></div><div class="col"><p>';
const htmlTemplate4 = '</p></div></div>';
const htmlTemplate5 = '<!-- go back button for testing purpose! --> <div class="row"> <div class="col-4"></div> <div class="col-4"> <a href="index.html">secret go back button!</a> </div> <div class="col-4"></div> </div> </div> <script src="js/vendor/modernizr-3.6.0.min.js"></script> <script src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"></script><script src="js/plugins.js"></script> <script src="js/main.js"></script><!-- Google Analytics: change UA-XXXXX-Y to be your site"s ID. --> <script> window.ga = function () { ga.q.push(arguments) }; ga.q = []; ga.l = +new Date; ga("create", "xx-xxxxxxxxx-x", "auto"); ga("send", "pageview") </script> <script src="https://www.google-analytics.com/analytics.js" async defer></script> <script src="//code.jquery.com/jquery-1.11.3.min.js"></script> </body></html>';

function isStuffInTruck(array, item) {
    for (var i = 0; i < array.length; i++) {
        // This if statement depends on the format of your array
        if (array[i][0] == item[0] && array[i][1] == item[1]) {
            return true;   // Found it
        }
    }
    return false;   // Not found
}

var clickTitle = new Array(23);
var florist = new Array(23);


var linesCommaStorage = new Array(23);
var linesSpaceStorage = new Array(23);

$(document).ready(function() {
  $.get('/issues/' + issue + '/' + issue + '.txt', function(data) {
    var lines = data.split('\n');

    for (j = 0; j < lines.length; j++) {
      $('hide-flowers').append(lines[j]);
    }
    
    
    for (var i = 0; i < lines.length; i++) {
//    var linesComma = lines[i].split(',');
      
      var linesComma = [];
      linesComma.push([23, 'Lorem Ipsum']);
      var linesCommaPre = lines[i].split(',');
      linesCommaPre[1] = linesCommaPre[1].split(' ').pop();
   /*   for (var ik = 0; ik < 2; ik++) {
        linesComma[i][ik] = [i, linesCommaPre[ik]];
      }
   */
      var linesSpace = lines[i].split(' ');
      florist[i] = linesCommaPre[0];
      var titleLength = linesSpace.length + 1;
      var linesSpaceNew = linesSpace.slice(2, titleLength).join(' ');
      clickTitle[i] = linesSpaceNew;
   //   clickTitle[i] = clickTitle[i].replace(/\s+/g, '');
      
      // update content in flower truck
  /*  $.get('/issues/' + issue + '/' + linesComma[0] + '.txt', function(flowers) {
        $('#flower-truck').html(flowers);
      })
  */    
      // fix it!! add more objects to this array. declare an empty one first, then push stuff into it 
 /*   var flowersPickup = {
        floristLastName: linesSpace[0],
        flower: clickTitle[i],
        growFlower: function(flowerName) {
          if (flowerName == flower) {
            $.get('/issues/' + issue + '/' + floristLastName + '.txt', function(flowers) {
              $('#flower-truck').html(flowers);
            })
          }
        }
      }
  */
      //diff ids
      $('#reader-container').append(template1 + i + template2 + path + template3 + clickTitle[i] + ' // ' + florist[i] + template4);
      
      
      //same ids
      /*
      $('#reader-container').append(template1 + path + template2 + clickTitle[i] + template3);
      */
    }
      
   
    
    /*
    function growFlowers() {
      var florist = 
      $.get('/issues/' + issue + '/' + linesComma[whereIsMyFlower(florist), 0] + '.txt', function(flowers) {
        $('#flower-truck').html(flowers);
      })
    }
    */
   
  })
})

/* 
// grow flower function with dynamic ids

$(document).ready(function() {
  for (var fi = 0; fi < 23; fi++) {
    var selectedFlower = '#flower' + fi;
    $('#reader-container').on('click', selectedFlower, function() {
      var knownFlower = $(this).text();
      for (var fii = 0; fii < 23; fii++) {
        if (clickTitle.indexOf(knownFlower) == fii) {
          $.get('/issues/' + issue + '/' + florist[fii] + '.txt', function(flowers) {
            $('#flower-truck').html(flowers);
          })
        }
      }
    })
  }
})
*/

//without dynamica ids & line by line
/*
$(document).ready(function() {
  $(document).on('click', '.generated-flower *', function() {
    //generate flowers
     var knownFlower = $(this).text();
     for (var fii = 0; fii < 23; fii++) {
       if (clickTitle.indexOf(knownFlower) == fii) {
         $.get('/issues/' + issue + '/' + florist[fii] + '.txt', function(flowers) {
           var linesFlower = flowers.split('\n');
           for (var lfi = 0; lfi < linesFlower.length; lfi++) {
             $('#flower-truck').append(linesFlower[lfi]);
           }
         })
         break;
       }
     }
  })
})
*/



// get method
window.setInterval(function() {
  $(document).ready(function () {
      for (var fi = 0; fi < 23; fi++) {
        var selectedFlower = '#flower' + fi;
        $('#reader-container').on('click', selectedFlower, function() {
          var knownFlower = $(this).text();
          for (var fii = 0; fii < 23; fii++) {
            if (clickTitle.indexOf(knownFlower) == fii) {
                function growFlowers(callback) {
                    $.ajax({
                      url: '/issues/' + issue + '/' + florist[fii] + '.txt',
                      type: 'GET',
                      success: callback
                    })
                }
              function flowerCallback(flowers) {
                if (typeof(Storage) !== 'undefined') {
                  window.localStorage.setItem('storedFlower', flowers);
                } else {
                  alert('localStorage is not enabled. pls enable it or I"ll eat all your bananas!');
                }
              }
              growFlowers(flowerCallback);
              break;
            }
          }
        })
      }
     // callback('#flower-storage');
    })   
}, 500)

/*
                var linesFlower = flowers.split('\n');
                for (var lfi = 0; lfi < linesFlower.length; lfi++) {
                  $('#flower-storage').append(linesFlower[lfi]);
                }
                */

/*
if (location.href == '/issues/' + issue + '/' + issue + '.html') {
  window.localStorage.getItem('storedFlower');
  $('#flower-truck').append(storedFlower);
}
*/

/*
$(document).ready(function() {
    for (var ffi = 0; ffi < 23; ffi++) {
      $('#flower' + ffi + ' a').click(function growFlowers() {
          var knownFlower = $(this).text();
          for (var fi = 0; fi < 23; fi++) {
            if (clickTitle.indexOf(knownFlower) == fi) {
              $.get('/issues/' + issue + '/' + florist[fi] + '.txt', function(flowers) {
                $('#flower-truck').html(flowers);
              }) 
            }
          }
    })
  }
})
*/
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

//get method append to issue.html
/*
$(document).ready(function() {
     $('#flower-truck').load('/current.html #flower-storage', function(responseTxt, statusTxt, jqXHR) {
          if (statusTxt == 'success') {
            alert('flowers successfully loaded!')
              }
          if (statusTxt == 'error') {
            alert('Error: ' + jqXHR.status + ' ' + jqXHR.statusTxt)
          }
        })
})
*/

// ajax method
/*
$(document).ready(function () {
  for (var fi = 0; fi < 23; fi++) {
    var selectedFlower = '#flower' + fi;
    $('#reader-container').on('click', selectedFlower, function() {
      var knownFlower = $(this).text();
      for (var fii = 0; fii < 23; fii++) {
        if (clickTitle.indexOf(knownFlower) == fii) {
            function growFlowers() {
                try{
                    jQuery.ajax({
                        url:'/issues/' + issue + '/' + florist[fii] + '.txt',
                        type: 'POST',

                        beforeSend: function(){
                            //before send this method will be called
                        },
                        success: function(data) {
                          var linesFlower = data.split('\n');
                          for (var lfi = 0; lfi < linesFlower.length; lfi++) {
                            $('#flower-storage').append(linesFlower[lfi]);
                          }
                        },
                        complete: function(){
                          //first gain access to flower-truck on another page
                        
                          $.ajax({
                            url: '/issues/' + issue + '/' + issue + '.html',
                            type: "GET",
                            success: function(data) {
                              var pit = $(data).find('#flower-truck').html();
                              $('#flower-storage').appendTo(pit);
                            }
                          })
                   
                        },
                        error: function(){
                            //when error occurs then this method will be called.
                        }
                    });
                }
                catch (e) {
                    alert(e);
                }
            }
        //  break;
        }
      }
    })
  }
 // callback('#flower-storage');
})
*/

/*
function growFlowers() {
    try{
        jQuery.ajax({
            url:'/issues/' + issue + '/' + issue + '.html',
            dataType: "text",
            data:{
                <portlet:namespace  />cmd:'changeLayout'
            },
            type: "post",

            beforeSend: function(){
                //before send this method will be called
            },
            success: function(data) {
                //when response recieved then this method will be called.
            }
            complete: function(){
                //after completed request then this method will be called.
            },
            error: function(){
                //when error occurs then this method will be called.
            }
        });
    }
    catch (e) {
        alert(e);
    }
}
*/

var storedFlower = localStorage.getItem('storedFlower');

// hover div -> display florist & flower

/*
$(document).ready(function() {
  $('a').each(function() {
    for (var ih = 0; ih <6; ih++) {
        if (this.href.indexOf('#' + ih) != -1) {
          //display
        }
    }
  })
})
*/

/*
$(document).ready(function() {
 $('.overlay-0 a, .overlay-1 a, .overlay-2 a, .overlay-3 a, .overlay-4 a, .overlay-5 a').find('a').click(function(e) {
          for (var ih = 0; ih < 6; ih++) {
              if (this.href.indexOf('#' + ih) != -1) {
                this.href = '/issues/' + issue + '/' + florist[ih] + '.txt';
              }
          }
    })
})
*/

/*
$(document).ready(function() {
 $('.wrapper').hover(function(e) {
     var myChild = $(this).find('grid-box a');
          for (var ihh = 0; ihh < 6; ihh++) {
              if (myChild.href.indexOf('#' + ihh) != -1) {
                $('.overlay-' + ihh).append(florist[ihh]);
                $('.overlay-' + ihh).show();
              }
          }
    })
})
*/

const overlayTemp1 = '<p>';
const overlayTemp2 = '</p>';

/*
$(document).ready(function() {
  $('.wrapper').mouseenter(function(e) {

          for (var ihh = 0; ihh < 6; ihh++) {
              if ($(this).find('a').attr('href').indexOf('#' + ihh) != -1) {
                $('.overlay-' + ihh).html('<a href="#' + ihh + '"><span class="link-spanner">' + overlayTemp1 + florist[ihh] + overlayTemp2 + '</span></a>');
                $('.overlay-' + ihh + ' a').attr('href', '/issues/' + issue + '/' + florist[ihh] + '.txt');
                $('.overlay-' + ihh).show();
              }
          }

  })

  $('.wrapper').mouseleave(function(e) {
          for (var ihh = 0; ihh < 6; ihh++) {
              if ($(this).find('a').attr('href').indexOf('#' + ihh) != -1) {
                $('.overlay-' + ihh).html('');
                $('.overlay-' + ihh).hide();
              }
          }
  })

})
*/
$(document).ready(function() {
  $('.wrapper').mouseenter(function(e) {

          for (var ihh = 0; ihh < 6; ihh++) {
              if ($(this).find('a').attr('href').indexOf('#' + ihh) != -1) {
                $('.overlay-' + ihh).html('<a href="#' + ihh + '"><span class="link-spanner">' + overlayTemp1 + clickTitle[ihh] + '<br>' + florist[ihh] + overlayTemp2 + '</span></a>');
                $('.overlay-' + ihh + ' a').attr('href', '/issues/' + issue + '/' + issue + '.html');
                  
                function growFlowers(callback) {
                    $.ajax({
                      url: '/issues/' + issue + '/' + florist[ihh] + '.txt',
                      type: 'GET',
                      success: callback
                    })
                }
              function flowerCallback(flowers) {
                if (typeof(Storage) !== 'undefined') {
                  window.localStorage.setItem('storedFlower', flowers);
                } else {
                  alert('localStorage is not enabled. pls enable it or I"ll eat all your bananas!');
                }
              }
              growFlowers(flowerCallback);
                  
              $('.overlay-' + ihh).show();
              }
          }

  })

  $('.wrapper').mouseleave(function(e) {
          for (var ihh = 0; ihh < 6; ihh++) {
              if ($(this).find('a').attr('href').indexOf('#' + ihh) != -1) {
                $('.overlay-' + ihh).html('');
                $('.overlay-' + ihh).hide();
              }
          }
  })

})

$(document).ready(function() {
  $('#heading-logo').mouseenter(function() {
    $(this).wrap('<a href="https"//www.littylitmag.netlify.com" style="height: 100%; width: 100%"></a>');
  });
})

