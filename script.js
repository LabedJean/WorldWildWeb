
$(function() {
    var header = $(".header"); //variable header a pour parametre la class header
    $(window).scroll(function() {    //la fenêtre au scroll déclenche cette fonction:
        var scroll = $(window).scrollTop(); //la var scroll a pour valeur le nb de pixel entre ce qu'on scroll et le haut de la page
    
        if (scroll >= 180) { //si scroll est supérieur ou égal à 200px:
            header.removeClass('header').addClass("header-alt"); //retire la class header et la remplace par la class header-alt
        } else { //sinon (donc si il est inférieur à 200)
            header.removeClass("header-alt").addClass('header'); //retire la class header-alt et la remplace par la class header
        }
    });
});
//ARTICLES
// function([string1, string2],target id,[color1,color2]) 
function consoleText(words, id, colors) {
var visible = true;
var con = document.getElementById('console');
var letterCount = 1;
var x = 1;
var waiting = false;
var target = document.getElementById(id)
target.setAttribute('style', 'color:' + colors[0])
window.setInterval(function() {

    if (letterCount === 0 && waiting === false) {
    waiting = true;
    target.innerHTML = words[0].substring(0, letterCount)
    window.setTimeout(function() {
        var usedColor = colors.shift();
        colors.push(usedColor);
        var usedWord = words.shift();
        words.push(usedWord);
        x = 1;
        target.setAttribute('style', 'color:' + colors[0])
        letterCount += x;
        waiting = false;
    }, 1000)
    } else if (letterCount === words[0].length + 1 && waiting === false) {
    waiting = true;
    window.setTimeout(function() {
        x = -1;
        letterCount += x;
        waiting = false;
    }, 1000)
    } else if (waiting === false) {
    target.innerHTML = words[0].substring(0, letterCount)
    letterCount += x;
    }
}, 120)
}

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
    