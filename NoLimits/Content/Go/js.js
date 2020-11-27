$(document).ready(function () {
    $('#div2').hide();
    $('#Cemento').hide();
    $('#Tuberia').hide();
    $('#Movi_tierra').hide();
    $("#DConcreto").addClass("Mcemento2");


    $('.chat_icon').click(function (event) {
        $('.chat_box').toggleClass('active');
    });

    $('.conv-form-wrapper').convform({ selectInputStyle: 'disable' });

    $('#select').on('change', function (){
        var selectValor = '#'+$(this).val();
        if (selectValor == '#div1') {
            $('#div1').show();
            $('#div2').hide();
        }
        else {
            $('#div1').hide();
            $('#div2').show();
        }
    });

    $('#DConcreto').click(function (event) {
        $('#Cemento').hide();
        $('#Tuberia').hide();
        $('#Movi_tierra').hide();
        $('#concreto').show();
        $("#DConcreto").addClass("Mcemento2");
        $("#DTuberia").removeClass("Mcemento2")
        $("#DCemento").removeClass("Mcemento2")
        $("#DTierra").removeClass("Mcemento2");
    });
    $('#DTuberia').click(function (event) {
        $('#Cemento').hide();
        $('#Tuberia').show();
        $('#concreto').hide();
        $('#Movi_tierra').hide();
        $("#DTuberia").addClass("Mcemento2");
        $("#DConcreto").removeClass("Mcemento2")
        $("#DCemento").removeClass("Mcemento2")
        $("#DTierra").removeClass("Mcemento2");
    });
    $('#DCemento').click(function (event) {
        $('#Cemento').show();
        $('#Tuberia').hide();
        $('#concreto').hide();
        $('#Movi_tierra').hide();
        $("#DCemento").addClass("Mcemento2");
        $("#DTuberia").removeClass("Mcemento2")
        $("#DConcreto").removeClass("Mcemento2")
        $("#DTierra").removeClass("Mcemento2");
    });

    $('#DTierra').click(function (event) {
        $('#Movi_tierra').show();
        $('#Cemento').hide();
        $('#Tuberia').hide();
        $('#concreto').hide();
        $("#DTierra").addClass("Mcemento2");
        $("#DCemento").removeClass("Mcemento2");
        $("#DTuberia").removeClass("Mcemento2")
        $("#DConcreto").removeClass("Mcemento2")
    });

    $('#build').click(function (event) {   

        console.log($('#select option:selected').val());
        if ($('#select option:selected').val() == 'div1') {
            $(location).attr('href', '/NoLimits/Design');
        }
        else {
            $(location).attr('href', '/NoLimits/Vias');
        }
    });
    $('#build2').click(function (event) {

        console.log($('#select option:selected').val());
        if ($('#select option:selected').val() == 'div1') {
            $(location).attr('href', '/NoLimits/Design');
        }
        else {
            $(location).attr('href', '/NoLimits/Vias');
        }
    });


})