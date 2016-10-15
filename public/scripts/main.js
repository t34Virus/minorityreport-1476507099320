$.ajax({ 
    type: 'GET', 
    url: 'https://api.github.com/repos/rails/rails/commits', 
    data: { get_param: 'value' }, 
    dataType: 'json',
    success: function (data) { 
    console.log('yeeeessss')
    for (var i = 0; i < data.length; i++) {
      console.log(data[i].author)
    }
    }
});

$( document ).ready(function(){
  $('#politicals li').click(function(){
    $('body').attr('class','')
    var id = $(this).attr('id'),
      banner,
      mood_rang;
    console.log(id);
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
        banner = 'http://www.zastavki.com/pictures/1920x1200/2011/Space_Star_way_027109_.jpg';
        
      // $('body').addClass('hawk')
      break;
      case 'king':
        mood_rang = '';
        banner = 'http://cp91279.biography.com/BRAND_BIO_BIO_Martin-Luther-King-Jr-Mini-Biography_0_172243_SF_HD_768x432-16x9.jpg';
      break;
    }
    $('.banner img').attr('src',banner)
    $('body').css({background:mood_rang})
  })

})