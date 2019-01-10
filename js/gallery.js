var data = {
    "character": {
      "items": [
        {
          "name": "Amaterasu",
          "intro": "The great goddess Amaterasu, also known as Amaterasu-Ōmikami is one of the Japanese mythological deities. She is seen as the goddess of sun and of the entire universe, and one of the three children of Izanagi.",
          "story": "Her full name roughly translates to 'The great august deity who shines in heaven. In different mythological chronicles, all current emperors in Japan are descendants of Amaterasu. Amaterasu is the sister of Susano'o, god of storms and the sea, and of Tsukuyomi, the god of the moon."
        },
        {
          "name": "Issun",
          "intro": "Issun-bōshi is an ancient fairy tale found in story book Otogizōshi. The title of the book can be translated as the 'One-Inch Boy'. A 'sun' is an old Japanese measurement which is about 3.030cm.",
          "story": "The story tells of an old couple who were unable to have a child of their own, so they preyed to the gods, even if it were only one sun tall. Issun would eventually tell his parents that he wished to go to the capital to become a warrior."
        },
        {
          "name": "Susano",
          "intro": "Susano'o-no-Mikoto, the god of storms and the sea. He is said to be the ruler of what is Yasugi, Shimane prefecture in modern day Japan. He is married to Kushi-inada-hime.",
          "story": "Born when Izanagi washed his nose of pollutants from the underworld, Yomi. Both he and Amaterasu were said to have a long-standing rivalry, which would culminate in a competition between the two. Eventually leading in Amaterasu locking herself away in a cave from an angered Susano'o, hiding the sun and Susano'o being banished from Heaven."
        },
        {
          "name": "Orochi",
          "intro": "Orochi, or in full 'Yamata-no-Orochi', from a story of the same name, is the name of an eight-headed and eight-tailed Japanese dragon.",
          "story": "After Susano'o was banished from Heaven for tricking his sister, Amaterasu, Susano'o discovered Kushi-inada-hime's two grieving parents. From Orochi's defeat, the three sacred Imperial Regalia of Japan were created: the legendary blade Kusanagi-no-Tsurugi, the mythical mirror Yata-no-Kagami and the fabled jewel Yasakani-no-Magatama."
        },
        {
          "name": "Kushi",
          "intro": "Kushi-inada-hime, translated as 'the wondrous rice paddy princess' is the goddess of rice and is the wife of Susano'o.",
          "story": "Kushi-inada-hime was to be the sacrifice to Yamato-no-Orochi, as the rest of her family, with each daughter being sacrificed year-by-year. Susano'o saved her at the behest of her parents, by turning her into a comb which he put into his hair and pretended to be the sacrifice."
        }
      ]
    }
  };
var character_name = [];
var character_intro = [];
var character_story = [];

function CreateGallery() {
    var items = data;
    $.each(data.character.items, function(i) {
        character_name[i] = data.character.items[i].name;
        character_intro[i] = data.character.items[i].intro;
        character_story[i] = data.character.items[i].story;
        $('#character-list').append('<a class="character-name" href="#">'+ data.character.items[i].name +'</a>');
        //$('#character-list').append('<a href="#"><div class="character-name">'+ data.character.items[i].name +'</div></a>');
        if (i == 4) {
            SetUpGallery();
        }
    });
}

function SetUpGallery() {
    $('#character-list a').click(function(e) {
        e.preventDefault();

        var current_click = $(this).text();
        var i = 0;
        var current_name;
        var current_intro;
        var current_story;

        $.each(character_name, function (i) {
            if (character_name[i] == current_click) {
                current_name = current_click;
                current_intro = character_intro[i];
                current_story = character_story[i];
            }
        });

        $('#character-viewer').fadeOut(100, function() {
            $('#character-viewer').html('<img class="character-image" style="width: 30%;" src="images/characters/'+ current_name +'.png"><p class="character-intro">'+ current_intro +'</p><p class="character-story">'+ current_story +'</p>');
            $('#character-viewer').fadeIn(100);
        });
    });

    var initial_name = $('#character-list a').first().text();
    console.log(initial_name);
    var initial_intro;
    var initial_story;
    $.each(character_name, function (i) {
        if (character_name[i] == initial_name) {
            initial_intro = character_intro[i];
            initial_story = character_story[i];
        }
    });

    $('#character-viewer').fadeOut(100, function() {
        $('#character-viewer').html('<img class="character-image" style="width: 30%;" src="images/characters/'+ initial_name +'.png"><p class="character-intro">'+ initial_intro +'</p><p class="character-story">'+ initial_story +'</p>');
        $('#character-viewer').fadeIn(100);
    });
}