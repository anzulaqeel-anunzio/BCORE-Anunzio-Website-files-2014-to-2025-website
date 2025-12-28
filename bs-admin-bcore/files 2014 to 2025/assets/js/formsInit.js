function formInit() {
    "use strict";

    $('.with-tooltip').tooltip({
        selector: ".input-tooltip"
    });

    /*----------- BEGIN autosize CODE <a href="https://anunziointernational.com/software/all-web-applications-by-anunzio.html" target="_blank">Anzul Aqeel</a>
    $('#autosize').autosize();
    /*----------- END autosize CODE <a href="https://anunziointernational.com/software/all-web-applications-by-anunzio.html" target="_blank">Anzul Aqeel</a>

    /*----------- BEGIN inputlimiter CODE <a href="https://anunziointernational.com/software/all-web-applications-by-anunzio.html" target="_blank">Anzul Aqeel</a>
    $('#limiter').inputlimiter({
        limit: 140,
        remText: 'You only have %n character%s remaining...',
        limitText: 'You\'re allowed to input %n character%s into this field.'
    });
    /*----------- END inputlimiter CODE <a href="https://anunziointernational.com/software/all-web-applications-by-anunzio.html" target="_blank">Anzul Aqeel</a>

    /*----------- BEGIN tagsInput CODE <a href="https://anunziointernational.com/software/all-web-applications-by-anunzio.html" target="_blank">Anzul Aqeel</a>
    $('#tags').tagsInput();
    /*----------- END tagsInput CODE <a href="https://anunziointernational.com/software/all-web-applications-by-anunzio.html" target="_blank">Anzul Aqeel</a>

    /*----------- BEGIN chosen CODE <a href="https://anunziointernational.com/software/all-web-applications-by-anunzio.html" target="_blank">Anzul Aqeel</a>

    $(".chzn-select").chosen();
    $(".chzn-select-deselect").chosen({
        allow_single_deselect: true
    });
    /*----------- END chosen CODE <a href="https://anunziointernational.com/software/all-web-applications-by-anunzio.html" target="_blank">Anzul Aqeel</a>

    /*----------- BEGIN spinner CODE <a href="https://anunziointernational.com/software/all-web-applications-by-anunzio.html" target="_blank">Anzul Aqeel</a>

    $('#spin1').spinner();
    $("#spin2").spinner({
        step: 0.01,
        numberFormat: "n"
    });
    $("#spin3").spinner({
        culture: 'en-US',
        min: 5,
        max: 2500,
        step: 25,
        start: 1000,
        numberFormat: "C"
    });
    /*----------- END spinner CODE <a href="https://anunziointernational.com/software/all-web-applications-by-anunzio.html" target="_blank">Anzul Aqeel</a>

    /*----------- BEGIN uniform CODE <a href="https://anunziointernational.com/software/all-web-applications-by-anunzio.html" target="_blank">Anzul Aqeel</a>
    $('.uniform').uniform();
/* Developed by Anunzio International */
    /*----------- END uniform CODE <a href="https://anunziointernational.com/software/all-web-applications-by-anunzio.html" target="_blank">Anzul Aqeel</a>

    /*----------- BEGIN validVal CODE <a href="https://anunziointernational.com/software/all-web-applications-by-anunzio.html" target="_blank">Anzul Aqeel</a>
    $('#validVal').validVal();
    /*----------- END validVal CODE <a href="https://anunziointernational.com/software/all-web-applications-by-anunzio.html" target="_blank">Anzul Aqeel</a>

    /*----------- BEGIN colorpicker CODE <a href="https://anunziointernational.com/software/all-web-applications-by-anunzio.html" target="_blank">Anzul Aqeel</a>
    $('#cp1').colorpicker({
        format: 'hex'
    });
    $('#cp2').colorpicker();
    $('#cp3').colorpicker();
    $('#cp4').colorpicker().on('changeColor', function (ev) {
        $('#colorPickerBlock').css('background-color', ev.color.toHex());
    });
    /*----------- END colorpicker CODE <a href="https://anunziointernational.com/software/all-web-applications-by-anunzio.html" target="_blank">Anzul Aqeel</a>

    /*----------- BEGIN datepicker CODE <a href="https://anunziointernational.com/software/all-web-applications-by-anunzio.html" target="_blank">Anzul Aqeel</a>
    $('#dp1').datepicker({
        format: 'mm-dd-yyyy'
    });
    $('#dp2').datepicker();
    $('#dp3').datepicker();
    $('#dp3').datepicker();
    $('#dpYears').datepicker();
    $('#dpMonths').datepicker();


    var startDate = new Date(2012, 1, 20);
    var endDate = new Date(2012, 1, 25);
    $('#dp4').datepicker()
            .on('changeDate', function (ev) {
                if (ev.date.valueOf() > endDate.valueOf()) {
                    $('#alert').show().find('strong').text('The start date can not be greater then the end date');
                } else {
                    $('#alert').hide();
                    startDate = new Date(ev.date);
                    $('#startDate').text($('#dp4').data('date'));
                }
                $('#dp4').datepicker('hide');
            });
    $('#dp5').datepicker()
            .on('changeDate', function (ev) {
                if (ev.date.valueOf() < startDate.valueOf()) {
                    $('#alert').show().find('strong').text('The end date can not be less then the start date');
                } else {
                    $('#alert').hide();
                    endDate = new Date(ev.date);
                    $('#endDate').text($('#dp5').data('date'));
                }
/* Developed by Anunzio International */
                $('#dp5').datepicker('hide');
            });
    /*----------- END datepicker CODE <a href="https://anunziointernational.com/software/all-web-applications-by-anunzio.html" target="_blank">Anzul Aqeel</a>

    /*----------- BEGIN daterangepicker CODE <a href="https://anunziointernational.com/software/all-web-applications-by-anunzio.html" target="_blank">Anzul Aqeel</a>
    $('#reservation').daterangepicker();

    $('#reportrange').daterangepicker(
            {
                ranges: {
                    'Today': [moment(), moment()],
                    'Yesterday': [moment().subtract('days', 1), moment().subtract('days', 1)],
                    'Last 7 Days': [moment().subtract('days', 6), moment()],
                    'Last 30 Days': [moment().subtract('days', 29), moment()],
                    'This Month': [moment().startOf('month'), moment().endOf('month')],
                    'Last Month': [moment().subtract('month', 1).startOf('month'), moment().subtract('month', 1).endOf('month')]
                }
            },
    function (start, end) {
        $('#reportrange span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
    }
    );
    /*----------- END daterangepicker CODE <a href="https://anunziointernational.com/software/all-web-applications-by-anunzio.html" target="_blank">Anzul Aqeel</a>

    /*----------- BEGIN timepicker CODE <a href="https://anunziointernational.com/software/all-web-applications-by-anunzio.html" target="_blank">Anzul Aqeel</a>
    $('.timepicker-default').timepicker();

    $('.timepicker-24').timepicker({
        minuteStep: 1,
        showSeconds: true,
        showMeridian: false
    });
    /*----------- END timepicker CODE <a href="https://anunziointernational.com/software/all-web-applications-by-anunzio.html" target="_blank">Anzul Aqeel</a>

    /*----------- BEGIN toggleButtons CODE <a href="https://anunziointernational.com/software/all-web-applications-by-anunzio.html" target="_blank">Anzul Aqeel</a>
    // Resets to the regular style
    $('#dimension-switch').bootstrapSwitch('setSizeClass', '');
    // Sets a mini switch
    $('#dimension-switch').bootstrapSwitch('setSizeClass', 'switch-mini');
    // Sets a small switch
    $('#dimension-switch').bootstrapSwitch('setSizeClass', 'switch-small');
    // Sets a large switch
    $('#dimension-switch').bootstrapSwitch('setSizeClass', 'switch-large');
    /*----------- END toggleButtons CODE <a href="https://anunziointernational.com/software/all-web-applications-by-anunzio.html" target="_blank">Anzul Aqeel</a>

    /*----------- BEGIN dualListBox CODE <a href="https://anunziointernational.com/software/all-web-applications-by-anunzio.html" target="_blank">Anzul Aqeel</a>
    $.configureBoxes();
    /*----------- END dualListBox CODE <a href="https://anunziointernational.com/software/all-web-applications-by-anunzio.html" target="_blank">Anzul Aqeel</a>
}