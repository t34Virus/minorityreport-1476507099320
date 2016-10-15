$.ajax({ 
    type: 'GET', 
    url: 'test.json',
    data: { get_param: 'value' }, 
    dataType: 'json',
    success: function (data) { 
    console.log(data)
    for (var i = 0; i < data.length; i++) {
      console.log(data[i].author)
    }
    }
});

    // url: 'https://api.github.com/repos/rails/rails/commits',

$( document ).ready(function(){
  $('#politicals li').click(function(){
    $('body').attr('class','')
    var id = $(this).attr('id'),
      banner,
      mood_rang;
    console.log(id);
    $.post('/test',{suggest: id})
    switch(id){
      case 'hillary':
        mood_rang = 'purple';
        banner = 'images/banner.png';
      break;
      case 'trump':
        mood_rang = 'red';
        banner = 'images/banner.png';

      break;
      case 'bernie':
        mood_rang = 'white';
        banner = 'images/banner.png';
      break;
      case 'sam':
        mood_rang = '';
        banner = '';
      $('body').addClass('rasta')
      break;
      case 'hawk':
        mood_rang = '';
        banner = '';

      $('body').addClass('hawk')
      break;
      case 'king':
        mood_rang = '';
        banner = 'http://cp91279.biography.com/BRAND_BIO_BIO_Martin-Luther-King-Jr-Mini-Biography_0_172243_SF_HD_768x432-16x9.jpg';
      break;
    }
    $('.banner img').attr('src',banner)
    $('body').css({background:mood_rang})
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
 
    $( "#red, #green, #blue" ).slider({
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

    } );

})