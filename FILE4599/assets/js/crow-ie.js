(function() {
    jQuery(document).ready(function() {
        return jQuery.each(jQuery(".crow.fly"), function() {
            var r, n, e, t;
            return e = $(this), n = e.children("div"), r = n.length, t = 100 / r, jQuery.each(n, function() {
                var r;
                return r = $(this), r.css({
                    width: t + "%"
                })
            })
        })
    })
}).call(this);