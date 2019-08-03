$(document).ready(function () {

  // Add smooth scrolling on all links inside the navbar
  $("#navbarToggler a").on('click', function (event) {
    $('.active').removeClass('active');
    $(this).parent().removeClass('active');
    $(this).parent().siblings().children().removeClass('active');
    var t = $(this).attr("href");

    $("html, body").animate({
      scrollTop: $(t).offset().top - 40
    }, {
        duration: 700,
      });

    $(this).addClass('active');

    // Navbar close on select of nav item
    $(".navbar-collapse").collapse('hide');
    return false;
  });

  $("a.navbar-brand").on('click', function (event) {
    $('#homeLink').trigger("click");
  });

  // Circular Counter
  $(".circularProgress").each(function () {
    var dataProgress = $(this).attr("stroke-dashoffset");
    $(this).attr("stroke-dashoffset", "251.2");
    $(this).animate({
      "stroke-dashoffset": dataProgress
    }, 1500)
  });

});

// Add scrollspy to <body>
$('body').scrollspy({ target: ".navbar", offset: 50 });

// Display Article Modal
$('#article_modal').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget) // Button that triggered the modal
  var title = button.data('title') // Extract title from data-* attributes
  var src = button.data('src') // Extract title from data-* attributes
  var content = button.data('content') // Extract title from data-* attributes

  var modal = $(this);
  modal.find('.modal-title').text(title);
  modal.find('.article-cover img').attr('src', src)
  modal.find('.article-description').text(content);
});

// Display Portfolio Modal
$('.picture').each(function () {
  var $pic = $(this),
    getItems = function () {
      var items = [];
      $pic.find('a').each(function () {
        var $href = $(this).attr('href'),
          $size = $(this).data('size').split('x'),
          $width = $size[0],
          $height = $size[1];
        var item = {
          src: $href,
          w: $width,
          h: $height
        }
        items.push(item);
      });
      return items;
    }

  var items = getItems();
  var $pswp = $('.pswp')[0];
  $pic.on('click', 'figure', function (event) {
    event.preventDefault();

    var $index = $(this).index();
    var options = {
      index: $index,
      bgOpacity: 0.7,
      showHideOpacity: true,
      shareEl: false,
      clickToCloseNonZoomable: false,
      closeElClasses: [],
    }

    // Initialize PhotoSwipe
    var lightBox = new PhotoSwipe($pswp, PhotoSwipeUI_Default, items, options);
    lightBox.init();
    lightBox.options.pinchToClose = false;
    lightBox.options.closeOnScroll = false;
  });
});

// For the article section of the image

if ($(window).width() > 768) {
  $('.articleImg').addClass('landscape');
} else {
  $('.articleImg').removeClass('landscape');
}

// Truncating and adding ellipses for the article details

var truncate = function (elem, limit) {
  var string = elem.textContent.trim();
  if (string.length > limit)
    string = string.substring(0, limit) + '...';
  else
    return string;
  elem.textContent = string;
};
var articleTitle = $(".article-title");
articleTitle.each(function () {
  truncate(this, 35);
});
var articleInset = $(".article-inset");
articleInset.each(function () {
  truncate(this, 95);
});

// Animation for Home

/* particlesJS('homePageAnimation',

  {
    "particles": {
      "number": {
        "value": 80,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#d3d4d9"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": false,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  }
);

// Animation for Contact
particlesJS("contactPageAnimation", {
  "particles": {
    "number": {
      "value": 400,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#d3d4d9"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.5,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 5,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": false,
      "distance": 500,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 2
    },
    "move": {
      "enable": true,
      "speed": 6,
      "direction": "bottom",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "bubble"
      },
      "onclick": {
        "enable": true,
        "mode": "repulse"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 0.5
        }
      },
      "bubble": {
        "distance": 400,
        "size": 4,
        "duration": 0.3,
        "opacity": 1,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
}); */


