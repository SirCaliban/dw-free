jQuery(function($) {
$("#add_trust, #add_watch").click(function() {
    var $this = $(this);
    var $linked = $("."+$this.attr("id"))
    $this.is(":checked") ? $linked.fadeIn() : $linked.fadeOut();
})
$("#add_trust").triggerHandler("click");
$("#add_watch").triggerHandler("click");
})
