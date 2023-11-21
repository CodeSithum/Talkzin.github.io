window.addEventListener("unload", function (event) {
    $.ajax({
        url: "https://talkzin-9d83363b8c70.herokuapp.com/leaving-user-update/" + username + "",
        type: "PUT",
        success: function (response) {
            console.log(response);
        },
    });
});
$.ajax({
    url: "https://talkzin-9d83363b8c70.herokuapp.com/leaving-user-update/" + username + "",
    type: "PUT",
    success: function (response) {
        console.log(response);
    },
});
