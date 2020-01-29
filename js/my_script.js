$(document).ready(function() {
    $("h2").addClass("underline") //underlines all <h2> elements
    $("ul").addClass("border") //creates border around ul elements

    $("tr:odd").addClass("odd");
    $("tr:even").addClass("even");

    $('th').click(function(){
        $('th').siblings().removeClass('selected');
        $(this).siblings().addClass('selected');
    });
});