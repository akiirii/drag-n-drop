$(function () {
  function set(elem, draggable, action) {
    var container = elem.parent().parent();
    container.find('.box')[action]('disable');
    container.find('img').attr('draggable', draggable);
    container.find('button').removeClass('active');
    elem.addClass('active')
  }

  $('.drag').on('drag', function (ev) {
    ev.preventDefault();
    $(this).addClass('draging');
  })

  $('.drop').on('drop', function (ev) {
    ev.preventDefault();
    if (!$(this).hasClass('disable'))
      $(this).append($('.draging'))
    $('.draging').removeClass('draging')
  })

  $('.drop').on('dragover', function (ev) {
    ev.preventDefault();
  })

  $('button.disable').on('click', function (ev) {
    set($(this), false, 'addClass')
  })
  $('button.enable').on('click', function (ev) {
    set($(this), true, 'removeClass')
  })


})
