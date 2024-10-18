/*

parent()
parents()
parentuntil()

*/

{
    $(function(){
        $('#btn').click(function(){
            $('.div').parent().css('background-color' , 'red')
        })
    })
  
    // $(function(){
    //     $('#btn').click(function(){
    //         $('.span-1').parents().css({
    //             backgroundColor:'pink'
    //         })
    //     })
    // })
  
    $(function(){
        $('#btn').click(function(){
            $('.span-1').parentsUntil('.ul').css({
                backgroundColor:'green'
            })
        })
    })
  
  }