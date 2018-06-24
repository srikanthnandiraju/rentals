var App = {};

// Global Event Bus to fire and listen to events
App.Events = {
    emit: function(event_name, event_payload) {
        $('body').trigger(event_name, event_payload);
    },
    listen: function(event_name, callback) {
        $('body').unbind(event_name).bind(event_name, function(e, data) {
            callback(data);
        });
    }
};

App.FullScreen = {
    show: function(screenurl) {
        $("#fullscreen_stage").load(screenurl);
        $('#fullscreenElement').addClass('open');
    },
    hide: function() {
        $('#fullscreenElement').removeClass('open');
    }
};

App.init = function() {
    NProgress.configure({
        showSpinner: false
    });

    $(document).ajaxStart(function() {
        NProgress.start();
    });

    $(document).ajaxStop(function() {
        NProgress.done();
    });

    $('.close').on('click', function(event) {
        $('#fullscreenElement').removeClass('open');
    });

    // Side Nav Instance
    App.sidenav = new Sidenav({
        content: document.getElementById("content"),
        sidenav: document.getElementById("sidenav"),
        backdrop: document.getElementById("backdrop")
    });
};


// Generic events to handle side bar visibility
App.Events.listen("hide-side-nav", function() {
    App.sidenav.close();
});
App.Events.listen("show-side-nav", function() {
    App.sidenav.open();
});

App.Events.listen("show-route", function(whereto) {
    window.location.href = whereto;
});