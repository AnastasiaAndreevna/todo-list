var jQuerytasksList = jQuery('#tasksList')
var jQuerytaskInput = jQuery('#taskInput')
var jQuerynotification = jQuery('#notification')

var displayNotification = function () {
  if (!jQuerytasksList.children().length) {
    jQuerynotification.fadeIn('fast')
  } else {
    jQuerynotification.css('display', 'none')
  }
}

jQuery('#taskAdd').on('click', function () {
  if (!jQuerytaskInput.val()) {return false}

  jQuerytasksList.append('<li>' + jQuerytaskInput.val() + '<button class=\'delete\'>&#10006</button></li>')

  jQuerytaskInput.val('')

  displayNotification()

  jQuery('.delete').on('click', function () {
    var jQueryparent = jQuery(this).parent()

    jQueryparent.css('animation', 'fadeOut.3s linear')

    setTimeout(function () {
      jQueryparent.remove()
      displayNotification()
    }, 295)
  })
})