$("body").find('input,textarea').not('input[type=submit]').each(function () {
    $(this).val("hello@gmail.com");
});
$("form").find("input[type=submit]").click();