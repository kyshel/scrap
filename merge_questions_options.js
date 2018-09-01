    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script type="text/javascript">
      console.log('this is merge_questions_options.js')
      // console.log($('.qt_content pre')[1])
      // console.log($($('pre')[0]).text())
      // console.log($('.roundedText'))

      total_num = $('pre').length
      index_question = 0;
      index_option = 0

      container = ''
      for (var i = total_num - 1; i >= 0; i--) {
        entry = ''
        entry += $($('pre')[index_question++]).text()

        entry += $($('.roundedText')[index_option++]).text() + '\n'
        entry += $($('.roundedText')[index_option++]).text() + '\n'
        entry += $($('.roundedText')[index_option++]).text() + '\n'
        entry += $($('.roundedText')[index_option++]).text() + '\n'

        container += entry

        // console.log(index_question)
        // console.log(index_option)
      }

      console.log(container)
      
    </script>
