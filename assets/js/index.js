$(function() {
    $('.target').hide();
    $('.transmission-infection').show();

    $('.covid-table-title__list').click(function() {
        $('.target').hide();
        $('.covid-table-title__list').removeClass('active_table');
        $(this).addClass('active_table');
        $('#div' + $(this).attr('target')).show();
    })
});