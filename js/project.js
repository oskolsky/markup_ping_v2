$(function() {

  $.stickyHeader();
  $.stickyFooter();



  //****************************************************************************************************
  //
  // .. SLIDERS
  //
  //****************************************************************************************************
  $('#cycle-2-slider').cycle({
    centerHorz: true,
    centerVert: true,
    speed: 1000,
    swipe: true,
    timeout: 3000
  });



  //****************************************************************************************************
  //
  // .. DIALOGS
  //
  //****************************************************************************************************
  //
  // .. Open dialog
  //
  $('[data-dialog]').click(function() {
    var $this = $(this),
           id = $this.data('dialog');
    $.arcticmodal({
      type: 'ajax',
      url: '/views/dialogs/_' + id + '.html'
    });
    return false;
  });

  //
  // .. Close dialog
  //
  $(document).on('click', '.js-dialog_close', function() {
    $.arcticmodal('close');
  });



  //****************************************************************************************************
  //
  // .. LOAD
  //
  //****************************************************************************************************
  $(window).load(function() {});



  //****************************************************************************************************
  //
  // .. SCROLL
  //
  //****************************************************************************************************
  $(window).scroll(function() {});



  //****************************************************************************************************
  //
  // .. RESIZE
  //
  //****************************************************************************************************
  $(window).smartresize(function() {

    $.stickyHeader();
    $.stickyFooter();

  });
  
});