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
        var th = $(this);
        var mail = $('#inp-mail');

        if (mail.val().length > 5) {
	        $.ajax({
	            type: "POST",
	            url: "mail.php",
	            data: th.serialize()

	        }).done(function() {

	            $('#form-succes').fadeIn();

	            setTimeout(function() {
	                th.trigger("reset");
	                $('#form-succes').fadeOut();
	                $('.form__lbl').removeClass('active');
	            }, 3000);
	        });
        }

        return false;
    });

    $('.hamburger').click(function () {
        $('body').toggleClass('open');
    });
});