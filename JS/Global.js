
$(document).ready(function()
    {
        $("table").tablesorter();
    }
);

$(function(){
    $(document).on("mouseover",".MenuHover",function(){

        var Menu = 'div#'+$(this).attr('data-Menu');

        $('.SecondMenu').css("display","none");
        $(Menu).css("display","inline-block");

    });
});

$(function(){
    $(document).on("click",".NavChange",function(){

        var Nav = $(this).attr('data-Nav');
        var NavNav = "#Nav"+Nav;
        var NavClass = ".Nav"+Nav;

        $('.MenuItem').removeClass("Noise");
        $('.SecondMenu').css("display","none");
        $(NavNav).addClass("Noise");
        $(NavClass).css("display","inline-block");


    });
});

$(function(){
    $(document).on("keyup","#Name",function(){

        var Name = $('input#Name').val();

        $.post('Ajax/Ajax.php',{Name:Name, Page:'Main/ManagerNameCheck.php'}, function(data){

            $("div.ManagerNameCheck").html(data);

        });

    });
});

$(function(){
    $(document).on("click",".CreateManager",function(){

        var Name = $('input#Name').val();

        $.post('Ajax/Ajax.php',{Name:Name, Page:'Main/CreateManager.php'}, function(data){

            console.log(data);

            data = data.split("+");

            if (data[0] == 1){
                window.location.href = "index.php?View=ContractOffers";
            } else {
                $("div.ManagerError").css("display","block");
                $("div.ManagerErrorTxt").html(data);
            }

        });

    });
});

$(function(){
    $(document).on("click",".DeleteAllOffers",function(){

        var ID = $(this).attr('data-ID');

        $.post('Ajax/Ajax.php',{ID:ID, Page:'Main/DeleteAllOffers.php'}, function(data){

            console.log(data);

            window.location.href = "index.php?View=ContractOffers";

        });

    });
});

$(function(){
    $(document).on("click",".ManageTeam",function(){

        var ID = $(this).attr('data-ID');

        $.post('Ajax/Ajax.php',{ID:ID,Page:'Main/Manage.php'}, function(data){

            if (data == 1){
                window.location.href = "index.php?View=MyTeam";
            } else if (data == 2){
                window.location.href = "index.php?View=FindTeam";
            } else {
                $('.Error').css("display","block");
                $(".Error").html(data);
            }

        });

    });
});

$(function(){
    $(document).on("click",".WatchList",function(){

        var ID = $(this).attr('data-ID');
        var TeamID = $(this).attr('data-TeamID');
        var TD = "#Watch"+ID;

        $.post('Ajax/Ajax.php',{ID:ID, TeamID:TeamID, Page:'Manager/WatchList.php'}, function(data){

            $(TD).html(data);

        });

    });
});

$(function(){
    $(document).on("click",".RecBoard",function(){

        var ID = $(this).attr('data-ID');
        var TeamID = $(this).attr('data-TeamID');
        var TD = "#RecBoard"+ID;

        $.post('Ajax/Ajax.php',{ID:ID, TeamID:TeamID, Page:'Manager/RecBoard.php'}, function(data){

            $(TD).html(data);

        });

    });
});


$(function(){
    $(document).on("click",".RemoveArticle",function(){

        var ID = $(this).attr('data-ID');

        $.post('Ajax/Ajax.php',{ID:ID, Page:'Main/RemoveArticle.php'}, function(data){

            window.location.href = "index.php";

        });

    });
});

$(function(){
    $(document).on("click",".AdminArticle",function(){

        var Headline = $('#WriteHeadline').val();
        var Article = $('#WriteArticle').val();

        $.post('Ajax/Ajax.php',{Headline:Headline, Article:Article, Page:'Main/SubmitArticle.php'}, function(data){

            window.location.href = "index.php";

        });

    });
});

$(function(){
    $(document).on("click",".SendMsg",function(){

        var Msg = $('#ChatMsg').val();

        $.post('Ajax/Ajax.php',{Msg:Msg, Page:'Main/Chat.php'}, function(data){

            if (data == 1){
                window.location.href = "index.php?Page=Chat";
            }

        });

    });
});

$(function(){
    $(document).on("click",".DeleteChat",function(){

        var ID = $(this).attr('data-ID');

        $.post('Ajax/Ajax.php',{ID:ID, Page:'Main/DeleteChat.php'}, function(data){

            if (data == 1){
                window.location.href = "index.php?Page=Chat";
            }


        });

    });
});

$(function(){
    $(document).on("keyup","#ChatMsg",function(e){

        if (e.keyCode === 13) {

            var Msg = $('#ChatMsg').val();

            $.post('Ajax/Ajax.php',{Msg:Msg, Page:'Main/Chat.php'}, function(data){

                if (data == 1){
                    window.location.href = "index.php?Page=Chat";
                }

            });

        }

    });
});

$(window).ready(function()
    {

        if($('.ChatUpdate').is(':visible')){

            setInterval(UpdateChat, 10000);

            function UpdateChat(){

                console.log('Updating');

                $.post('Ajax/Ajax.php',{Page:'Main/UpdateChat.php'}, function(data){

                    $('.ChatUpdate').html(data);

                });

            }

        }

    }
);