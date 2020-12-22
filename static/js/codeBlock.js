// 添加 wrapper
$(function () {
  $('pre').wrap('<div class="code-area" style="position: relative"></div>')
})

// 代码块语言识别
$(function () {
  let $highlight_lang = $('<div class="code_lang" title="代码语言"></div>')
  $('pre').after($highlight_lang)
  $('pre').each(function () {
    let code_language = $(this).children('code').attr('data-lang')
    if (!code_language) {
      return true
    }
    $(this)
      .siblings('.code_lang')
      .text(code_language.slice(0, 1).toUpperCase() + code_language.slice(1))
  })
})

// 代码块一键复制
$(function () {
  var $copyIcon = $('<div class="code_copy"></div>')
  $('.code-area').prepend($copyIcon)
  new ClipboardJS('.code_copy', {
    text: function (trigger) {
      return $(trigger.nextElementSibling.children).text()
    }
  })
})

// 代码块收缩
$(function () {
  var $code_expand = $('<div class="code-expand"></div>')
  $('.code-area').prepend($code_expand)
  $('.code-expand').on('click', function () {
    if ($(this).parent().hasClass('code-closed')) {
      $(this).siblings('pre').find('code').show()
      $(this).parent().removeClass('code-closed')
    } else {
      $(this).siblings('pre').find('code').hide()
      $(this).parent().addClass('code-closed')
    }
  })
})
