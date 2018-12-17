var character_name = [];
var character_intro = [];
var character_story = [];

function CreateGallery() {
    $.getJSON('characters.json', function(data) {
        $.each(data.character, function(i) {
            character_name[i] = data.character[i].name;
            character_intro[i] = data.character[i].intro;
            character_story[i] = data.character[i].story;

            $('.scrollbox ul').append('<li><a href="/">'+ data.character[i].name +'</a></li>');
            if (i == data.characters.length-1) {
                SetUpGallery();
            }
        });
    });
}

function SetUpGallery() {
    $('.scrollbox a').click(function(e) {
        e.preventDefault();

        var current_name = $(this).attr('name');
        var current_intro = $(this).attr('intro');
        var current_story = $(this).attr('story');

        $('.galleryviewer').fadeOut(100, function() {
            $('.gallerypreload').html('<img src="images/characters/'+ current_name +'" />');
            $('.gallerypreload img').imgpreload(function() {
                $('.galleryviewer').html('<img src="images/characters/'+ current_name +'"><p>'+ current_intro +'</p><p>'+ current_story +'</p>');
                $('.galleryviewer').fadeIn(100);
            });
        });
    });

    var initial_name = $('.scrollbox a').first().attr('name');
    var initial_intro = $('.scrollbox a').first().attr('intro');
    var initial_story = $('.scrollbox a').first().attr('story');
    $('.galleryviewer').fadeOut(100, function() {
        $('.gallerypreload').html('<img src="images/characters/'+ initial_name +'" />');
        $('.gallerypreload img').imgpreload(function() {
            $('.galleryviewer').html('<img src="images/characters/'+ initial_name +'"><p>'+ initial_intro +'</p><p>'+ initial_story +'</p>');
            $('.galleryviewer').fadeIn(100);
        });
    });
}