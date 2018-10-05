// Navbar active class
var navContainer = document.getElementById("navbarToggler");
var items = navContainer.getElementsByClassName("nav-item");
for (var i = 0; i < items.length; i++) {
  items[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

// Navbar close on select of nav item
$(function () {
  var navMain = $(".navbar-collapse");
  // "a:not([data-toggle])" - to avoid issues caused
  // when you have dropdown inside navbar
  navMain.on("click", "a:not([data-toggle])", null, function () {
    navMain.collapse('hide');
  });
});

// Circular Counter
$(document).ready(function () {
  $(".circularProgress").each(function () {
    var dataProgress = $(this).attr("stroke-dashoffset");
    $(this).attr("stroke-dashoffset", "251.2");
    $(this).animate({
      "stroke-dashoffset": dataProgress
    }, 1500)
  });

});

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
  truncate(this, 22);
});
var articleInset = $(".article-inset");
articleInset.each(function () {
  truncate(this, 95);
});