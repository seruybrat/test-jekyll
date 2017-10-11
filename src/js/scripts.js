$( document ).ready(function() {


    $('.form__input').on('focus', function() {
        $(this).siblings('.form__lbl').addClass('active');
    });

    $('.form__input').on('blur', function() {
        if (!$(this).val()) {
            $(this).siblings('.form__lbl').removeClass('active');
        }
    });

    $("form").submit(function(e) {

        e.preventDefault();

        var th = $(this);

        $.ajax({
            type: th.attr('method'),
            url: th.attr('action'),
            data: th.serialize()

        }).done(function() {

            $('#form-succes').fadeIn();

            setTimeout(function() {
                th.trigger("reset");
                $('#form-succes').fadeOut();
                $('.form__lbl').removeClass('active');
            }, 5000);
        });

    });

    $('.hamburger').click(function () {
        $('body').toggleClass('open');
    });


});