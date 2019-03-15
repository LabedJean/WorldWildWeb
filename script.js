$('.ml1 .letters').each(function(){
    $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
  });
  //animation titre page d'accueil
  
  anime.timeline({loop: true})
    .add({
      targets: '.ml1 .letter',
      scale: [0.3,1],
      opacity: [0,1],
      translateZ: 0,
      easing: "easeOutExpo",
      duration: 600,
      delay: function(el, i) {
        return 70 * (i+1)
      }
    }).add({
      targets: '.ml1 .line',
      scaleX: [0,1],
      opacity: [0.5,1],
      easing: "easeOutExpo",
      duration: 700,
      offset: '-=875',
      delay: function(el, i, l) {
        return 80 * (l - i);
      }
    }).add({
      targets: '.ml1',
      opacity: 0,
      duration: 1000,
      easing: "easeOutExpo",
      delay: 1000
    });


    function masquer_div(hiddendiv)
    {
    if (document.querySelector('#loadingImage').style.display == 'none') {
    document.querySelector('#loadingImage').style.display = 'block';
    }
    else {
    document.querySelector('#loadingImage').style.display = 'none';
    }
    }
    