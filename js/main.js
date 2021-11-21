$(document).ready(function() {
    $(".design").click(function() {
      $("#designpractice-hidden").toggle();
      $("#designpractice").toggle();
    });
    });
  
  $(document).ready(function() {
    $(".development").click(function() {
      $("#webdevelopment-hidden").toggle();
      $("#webdevelopment").toggle();
    });
    });
  
  $(document).ready(function() {
    $(".product").click(function() {
      $("#productmanagement-hidden").toggle();
      $("#productmanagement").toggle();
    });
    });
  

   //hover//
      

$(document).ready(function(){
    $('#work1.portfolio').hover(function(){
      $(this).css('opacity', '0.2');
    });
    });
      $(document).ready(function(){
      $('#work2.portfolio').hover(function(){
        $(this).css('opacity', '0.2');
      });
      });
        $(document).ready(function(){
          $('#work3.portfolio').hover(function(){
             $(this).css('opacity', '0.2');
        });
        });
         $(document).ready(function(){
            $('#work4.portfolio').hover(function(){
              $(this).css('opacity', '0.2');
          });
          });
            $(document).ready(function(){
              $('#work5.portfolio').hover(function(){
                $(this).css('opacity', '0.2');
            
        });
        });
            $(document).ready(function(){
              $('#work6.portfolio').hover(function(){
                $(this).css('opacity', '0.2');
              });
              });
              $(document).ready(function(){
                $('#work7.portfolio').hover(function(){
                  $(this).css('opacity', '0.2');
                });
                });
               $(document).ready(function(){
                  $('#work8.portfolio').hover(function(){
                    $(this).css('opacity', '0.2');
                  });
                  });

                  $(document).ready(function(){
                    $('#submission').submit(function(event){
                      var display1 = $('input:first').val();
                      var display2 = $('input#mail').val();
                      if(display1 && display2 != ''){
                          alert ('Thank you ' + display1 + ' your subscription is well received');
                      }else {
                          alert ('Invalid input');
                      }
                      event.preventDefault();
                  })
              });
              