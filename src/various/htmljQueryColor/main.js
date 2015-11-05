$(function() {
  // --------------STEP 1--------------
  // wrap every word in every `<p>` tag with a `<span>` tag.
  // for example: <p>Hey there</p>
  // becomes: <p><span>Hey</span><span>there</span></p>
  // HINT: the `split` array method is your friend
  $('p').each(function(_i, el) {
    var $el = $(el);
    var words = $el.text().split(' ');
    $el.html('');
    for (var i = 0; i < words.length; i++) {
      var newSpan = $('<span>').text(words[i] + '');
      $el.append(newSpan);
    }
  });

  // --------------STEP 2--------------
  // Next, change spans to random colors, once per second
  $('span').each(function() {
    var context = this;
    setInterval(function() {
      var r = Math.floor(Math.random() * 256);
      var g = Math.floor(Math.random() * 256);
      var b = Math.floor(Math.random() * 256);
      $(context).css('color', 'rgb(' + r + ',' + g + ',' + b + ')');
    }, Math.random() * 1000);
  });
});
