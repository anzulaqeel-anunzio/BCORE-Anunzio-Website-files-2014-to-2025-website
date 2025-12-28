function formValidation() {
    "use strict";
    /*----------- BEGIN validationEngine CODE <a href="https://anunziointernational.com/software/all-web-applications-by-anunzio.html" target="_blank">Anzul Aqeel</a>
    $('#popup-validation').validationEngine();
    /*----------- END validationEngine CODE <a href="https://anunziointernational.com/software/all-web-applications-by-anunzio.html" target="_blank">Anzul Aqeel</a>

    /*----------- BEGIN validate CODE <a href="https://anunziointernational.com/software/all-web-applications-by-anunzio.html" target="_blank">Anzul Aqeel</a>
    $('#inline-validate').validate({
        rules: {
            required: "required",
            email: {
                required: true,
                email: true
            },
            date: {
                required: true,
                date: true
            },
            url: {
                required: true,
                url: true
            },
            password: {
                required: true,
                minlength: 5
            },
            confirm_password: {
                required: true,
                minlength: 5,
                equalTo: "#password"
            },
            agree: "required",
            minsize: {
                required: true,
                minlength: 3
            },
            maxsize: {
                required: true,
                maxlength: 6
            },
            minNum: {
                required: true,
                min: 3
            },
            maxNum: {
                required: true,
                max: 16
            }
        },
        errorClass: 'help-block col-lg-6',
/* Developed by Anunzio International */
        errorElement: 'span',
        highlight: function (element, errorClass, validClass) {
            $(element).parents('.form-group').removeClass('has-success').addClass('has-error');
        },
        unhighlight: function (element, errorClass, validClass) {
            $(element).parents('.form-group').removeClass('has-error').addClass('has-success');
        }
    });


    $('#block-validate').validate({
        rules: {
            required2: "required",
            email2: {
                required: true,
                email: true
            },
            date2: {
                required: true,
                date: true
            },
            url2: {
                required: true,
                url: true
            },
            password2: {
                required: true,
                minlength: 5
            },
            confirm_password2: {
                required: true,
                minlength: 5,
                equalTo: "#password2"
            },
            agree2: "required",
            digits: {
                required: true,
                digits: true
            },
            range: {
                required: true,
                range: [5, 16]
            }
        },
        errorClass: 'help-block',
        errorElement: 'span',
        highlight: function (element, errorClass, validClass) {
            $(element).parents('.form-group').removeClass('has-success').addClass('has-error');
        },
        unhighlight: function (element, errorClass, validClass) {
/* Developed by Anunzio International */
            $(element).parents('.form-group').removeClass('has-error').addClass('has-success');
        }
    });
    /*----------- END validate CODE <a href="https://anunziointernational.com/software/all-web-applications-by-anunzio.html" target="_blank">Anzul Aqeel</a>
}