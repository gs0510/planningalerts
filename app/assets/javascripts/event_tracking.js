$( document ).ready(function() {
  // check if the Google Analytics function is available
  if (typeof ga == 'function') {
    // GA Tracking of comment process
    $('.link-to-comment-form').click(function(e) {
      ga('send', 'event', 'comments', 'click link to go to comment form');
    });

    $('#comment_submit_action input[type="submit"]').click(function(e) {
      ga('send', 'event', 'comments', 'click submit new comment');
    });

    if ($('.notice-comment-confirmed').length) {
      ga('send', 'event', 'comments', 'comment confirm message displayed');
    }
  }
});