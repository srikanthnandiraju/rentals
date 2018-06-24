Path.map("#/logout").to(function() {
    App.FullScreen.show("screens/login.html");
});
Path.map("#/login").to(function() {
    App.FullScreen.show("screens/login.html");
});

Path.map("#/home").to(function() {
    $("#title-text").html("Welcome");
    $("#stage").load("screens/home.html");
});

Path.map("#/test").to(function() {
    //App.FullScreen.show("screens/search.html");
    $("#stage").load("screens/speaker.html");
});

Path.map("#/speaker").to(function() {
    //App.FullScreen.show("screens/search.html");
    $("#stage").load("screens/speaker.html");
});

Path.root("#/login");
Path.listen();