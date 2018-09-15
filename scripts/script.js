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
