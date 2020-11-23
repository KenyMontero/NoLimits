$(document).ready(function () {
    $('.chat_icon').click(function (event) {
        $('.chat_box').toggleClass('active');
    });

    $('.conv-form-wrapper').convform({ selectInputStyle: 'disable' });

    $('#select').on('change', function (){
        var selectValor = $(this).val();
        $('#pai').children('div').hide();

        $('#div1').show();
    });
})