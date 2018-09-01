<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script type="text/javascript">
      console.log('111')

      //console.log($('.qt_content pre')[1])
      
       // console.log($($('pre')[0]).text())
      // console.log($('.roundedText'))

      console.log($('img'))

      total_num = $('pre').length

      var ask = 0;
      option = 0

      container = ''

      for (var i = total_num - 1; i >= 0; i--) {


        entry = ''

        entry += $($('pre')[ask++]).text()

        entry += $($('.roundedText')[option++]).text() + '\n'
        entry += $($('.roundedText')[option++]).text() + '\n'
        entry += $($('.roundedText')[option++]).text() + '\n'
        entry += $($('.roundedText')[option++]).text() + '\n'

        container += entry


        // console.log(ask)
        // console.log(option)
        
      }


      //console.log(container)



      
    </script>
