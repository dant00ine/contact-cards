
$(document).ready(function(){

    $('.cards').click(function(){
        console.log('clicked');
        console.log($(this).css('background-color'));
        if($(this).css('background-color') == 'rgba(0, 0, 0, 0)'){
            $(this).css('background-color', 'cyan')
        } else {
            $(this).css('background-color', '')
        }

    })

    $('button').click(function(){
        var firstName = $('input[name="first-name"]').val()
        var lastName = $('input[name="last-name"]').val()

        var description = $('textarea').val()

        // make the card
        var card = `<div class="card">
                        <h2>${firstName + lastName}</h2>
                        <p>click for description</p>
                        <p>${description}</p>
                    </div>
`
        $('.cards').append(card)

        $('.cards div:last-child p').click(function(event){
            $(this).siblings().toggle()
            $(this).toggle()
            event.stopPropagation()
        })

        return false;
    })

    // $(document).on('click', '.card p', function(){
    //     $(this).siblings().toggle()
    //     $(this).toggle()
    // })


})
