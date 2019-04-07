define(['jquery', 'bootstrap','apps','dashboard'], function ($, undefined,App,Dashboard) {
    var Controller = {
        index: function () {
            $(document).ready(function() {
                console.log(App);
                App.init();
                Dashboard.init();
                console.log(Dashboard);
            });
        }
    };
    return Controller;
});