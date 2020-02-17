$(function(){
    var playground = $("#playground");
    var newrow = '<div class="row">' +
        '<div class="square"></div>' +
        '<div class="square"></div>' +
        '<div class="square"></div>' +
        '<div class="square"></div>' +
        '<div class="square"></div>' +
        '<div class="square"></div>' +
        '<div class="square"></div>' +
        '<div class="square"></div>' +
        '<div class="square"></div>' +
        '<div class="square"></div></div>';


    //speelveld van 100 vakjes aanmaken
    for (i = 0; i < 10; i++) {
        playground.append(newrow);
    };

    //ieder vakje een willekeurige kleur geven
    $(".square").each(function (){
        var numbers = [50, 100, 150, 200, 250];
        var red = numbers[(Math.floor(Math.random() * numbers.length)|0)];
        var green = numbers[(Math.floor(Math.random() * numbers.length)|0)];
        var blue = numbers[(Math.floor(Math.random() * numbers.length)|0)];
        var color = "rgb(" + red + "," + green + "," + blue + ")";
        $(this).css('background-color', color);

        //Mousedown en Mouseup event
        $(this).each(function(){
            $(this).mousedown(function (){
                $(this).css('background-color', 'white');
                $(this).mouseup(function(){
                    $(this).css('background-color', color);

                    //tonen van aantal clicks
                    count = 0;
                    $(".square").click(function (){
                        count += 1;
                        $("#responseText").html('<p>' + count + ' clicks</p>')
                    });
                });
            });
        });
    });
});
