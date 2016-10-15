var copy;
var transcript;
var speech_urls = ['https://www.youtube.com/watch?v=E1ysFmRPaTg','https://www.youtube.com/watch?v=E1ysFmRPaTg','https://www.youtube.com/watch?v=E1ysFmRPaTg','https://www.youtube.com/watch?v=E1ysFmRPaTg','https://www.youtube.com/watch?v=E1ysFmRPaTg','https://www.youtube.com/watch?v=E1ysFmRPaTg','https://www.youtube.com/watch?v=E1ysFmRPaTg']
function getInfo(id){
  $.ajax({ 
    type: 'GET', 
    url: 'http://factchecker.mybluemix.net/getFacts?url=http://kyberklemming.free.fr/AddresstotheWomenofAmerica.ogg',
    async: false,
    success: function (data) { 
      copy = data;
      console.log(copy)
      console.log(copy.transcript)
    for (var i = 0; i < data.length; i++) {
      // console.log(data[i].author)
      }
      parsein(copy)
    }
  });
}
function parsein(info){
  var parsded = JSON.parse(info);
  console.log(parsded.transcript)
  $('.speech p').empty().append(parsded.transcript)
  var parsed = info.transcript;
  // console.log(parsed)
}

    // url: 'https://api.github.com/repos/rails/rails/commits',

$( document ).ready(function(){
  $('#politicals li').click(function(){
    $('body').attr('class','')
    var id = $(this).attr('id'),
      banner,
      mood_rang,
      index;

    switch(id){
      case 'hillary':
        mood_rang = 'purple';
        index = 1;
        banner = 'images/banner.png';
      break;
      case 'trump':
        index = 0;
        mood_rang = 'red';
        banner = 'images/banner.png';
      break;
      case 'bernie':
        mood_rang = 'white';
        index = 2;
        banner = 'images/banner.png';
      break;
      case 'sam':
        mood_rang = '';
        index = 3;
        banner = '';
      $('body').addClass('rasta')
      break;
      case 'hawk':
        index = 4
        mood_rang = '';
        banner = '';

      $('body').addClass('hawk')
      break;
      case 'king':
        mood_rang = '';
        index = 5;
        banner = 'http://cp91279.biography.com/BRAND_BIO_BIO_Martin-Luther-King-Jr-Mini-Biography_0_172243_SF_HD_768x432-16x9.jpg';
      break;
    }
    $.post('/getSpeech',{suggest: speech_urls[index]})
    $('.banner img').attr('src',banner)
    $('body').css({background:mood_rang})
    getInfo(id)

  })

$( function() {
    function hexFromRGB(r, g, b) {
      var hex = [
        r.toString( 16 ),
        g.toString( 16 ),
        b.toString( 16 )
      ];
      $.each( hex, function( nr, val ) {
        if ( val.length === 1 ) {
          hex[ nr ] = "0" + val;
        }
      });
      return hex.join( "" ).toUpperCase();
    }
    function refreshSwatch() {
      var red = $( "#red" ).slider( "value" ),
        green = $( "#green" ).slider( "value" ),
        blue = $( "#blue" ).slider( "value" ),
        hex = hexFromRGB( red, green, blue );
      $( "#swatch" ).css( "background-color", "#" + hex );
    }
 
    $( "#red, #green, #blue, #orange, #pink, #yellow, #purple, #black, #magenta, #violet" ).slider({
      orientation: "horizontal",
      range: "min",
      max: 255,
      value: 127,
      slide: refreshSwatch,
      change: refreshSwatch
    });
    $( "#red" ).slider( "value", 255 );
    $( "#green" ).slider( "value", 140 );
    $( "#blue" ).slider( "value", 60 );
    $( "#orange" ).slider( "value", 60 );
    $( "#pink" ).slider( "value", 60 );
    $( "#yellow" ).slider( "value", 60 );
    $( "#purple" ).slider( "value", 60 );
    $( "#black" ).slider( "value", 60 );
    $( "#magenta" ).slider( "value", 60 );
    $( "#violet" ).slider( "value", 60 );

    } );

})