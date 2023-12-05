$(function(){
    $(document).on("click",".ViewRankings",function(){

        var ServerID = $('select#Server').val();
        var Season = $('select#Season').val();

        window.location.href = "index.php?Page=Rankings&ServerID="+ServerID+"&Season="+Season;

    });
});

$(function(){
    $(document).on("click",".ViewScores",function(){

        var Day = $('select#GameDay').val();
        var Time = $('select#GameTime').val();
        var Conference = $('select#GameConf').val();
        var Rank = $('select#GameRank').val();

        window.location.href = "index.php?View=Scores&Day="+Day+"&Time="+Time+"&Conf="+Conference+"&Rank="+Rank;

    });
});

$(function(){
    $(document).on("click",".ViewConfTourney",function(){

        var ServerID = $('select#Server').val();
        var Season = $('select#Season').val();
        var ID = $('select#Conf').val();

        window.location.href = "index.php?View=ConfTourney&ServerID="+ServerID+"&Season="+Season+"&ID="+ID;

    });
});

$(function(){
    $(document).on("click",".ViewCWS",function(){

        var ServerID = $('select#Server').val();
        var Season = $('select#Season').val();

        window.location.href = "index.php?Page=CollegeWorldSeries&ServerID="+ServerID+"&Season="+Season;

    });
});

$(function(){
    $(document).on("click",".ViewStandings",function(){

        var ServerID = $('select#Server').val();
        var Conference = $('select#Conference').val();

        window.location.href = "index.php?Page=Standings&ServerID="+ServerID+"&Conference="+Conference;

    });
});

$(function(){
    $(document).on("click",".ViewRecruiting",function(){

        var ServerID = $('select#Server').val();
        var Season = $('select#Season').val();

        window.location.href = "index.php?Page=Recruiting&ServerID="+ServerID+"&Season="+Season;

    });
});

$(function(){
    $(document).on("click",".ViewHistory",function(){

        var ServerID = $('select#Server').val();

        window.location.href = "index.php?Page=History&ServerID="+ServerID;

    });
});

$(window).ready(function()
    {

        if($('.PlayerBattingStats').is(':visible')){

            var ServerID = $('select#Server').val();
            var Season = $('select#Season').val();
            var Year = $('select#Year').val();
            var Pos = $('select#Pos').val();
            var Conference = $('select#Conference').val();
            var PA = $('select#PA').val();

            $(".Stats").append("<div id='ScoutLoad' style='margin: 25px auto 0 auto; height: 30px; width: 30px;'><img src='CSS/Media/Loading.gif' height='30px' width='30px'></div>");

            $.post('Ajax/Ajax.php',{ServerID:ServerID, Season:Season, Year:Year, Pos:Pos, Conference:Conference, PA:PA, Page:'College/PlayerBattingStats.php'}, function(data){

                $(".Stats").html(data);

                $("table").tablesorter();

            });

        }

    }
);

$(function(){
    $(document).on("click",".ViewStats",function(){

        var ServerID = $('select#Server').val();
        var Season = $('select#Season').val();
        var Year = $('select#Year').val();
        var Pos = $('select#Pos').val();
        var Conference = $('select#Conference').val();
        var PA = $('select#PA').val();

        $(".Stats").html("<div id='ScoutLoad' style='margin: 25px auto 0 auto; height: 30px; width: 30px;'><img src='CSS/Media/Loading.gif' height='30px' width='30px'></div>");

        $.post('Ajax/Ajax.php',{ServerID:ServerID, Season:Season, Year:Year, Pos:Pos, Conference:Conference, PA:PA, Page:'College/PlayerBattingStats.php'}, function(data){

            $(".Stats").html(data);

            $("table").tablesorter();

        });

    });
});

$(window).ready(function()
    {

        if($('.PlayerBattingStatsM').is(':visible')){

            var ServerID = $('select#Server').val();
            var Season = $('select#Season').val();
            var Year = $('select#Year').val();
            var Pos = $('select#Pos').val();
            var Conference = $('select#Conference').val();
            var PA = $('select#PA').val();

            $(".Stats").append("<div id='ScoutLoad' style='margin: 25px auto 0 auto; height: 30px; width: 30px;'><img src='CSS/Media/Loading.gif' height='30px' width='30px'></div>");

            $.post('Ajax/Ajax.php',{ServerID:ServerID, Season:Season, Year:Year, Pos:Pos, Conference:Conference, PA:PA, Page:'College/PlayerBattingStatsM.php'}, function(data){

                $(".Stats").html(data);

                $("table").tablesorter();

            });

        }

    }
);

$(window).ready(function()
    {

        if($('.PlayerPitchingStats').is(':visible')){

            var ServerID = $('select#Server').val();
            var Season = $('select#Season').val();
            var Year = $('select#Year').val();
            var Pos = $('select#Pos').val();
            var Conference = $('select#Conference').val();
            var IP = $('select#IP').val();

            $(".Stats").append("<div id='ScoutLoad' style='margin: 25px auto 0 auto; height: 30px; width: 30px;'><img src='CSS/Media/Loading.gif' height='30px' width='30px'></div>");

            $.post('Ajax/Ajax.php',{ServerID:ServerID, Season:Season, Year:Year, Pos:Pos, Conference:Conference, IP:IP, Page:'College/PlayerPitchingStats.php'}, function(data){

                $(".Stats").html(data);

                $("table").tablesorter();

            });

        }

    }
);

$(function(){
    $(document).on("click",".ViewPitchingStats",function(){

        var ServerID = $('select#Server').val();
        var Season = $('select#Season').val();
        var Year = $('select#Year').val();
        var Pos = $('select#Pos').val();
        var Conference = $('select#Conference').val();
        var IP = $('select#IP').val();

        $(".Stats").html("<div id='ScoutLoad' style='margin: 25px auto 0 auto; height: 30px; width: 30px;'><img src='CSS/Media/Loading.gif' height='30px' width='30px'></div>");

        $.post('Ajax/Ajax.php',{ServerID:ServerID, Season:Season, Year:Year, Pos:Pos, Conference:Conference, IP:IP, Page:'College/PlayerPitchingStats.php'}, function(data){

            $(".Stats").html(data);

            $("table").tablesorter();

        });

    });
});

$(window).ready(function()
    {

        if($('.PlayerPitchingStatsM').is(':visible')){

            var ServerID = $('select#Server').val();
            var Season = $('select#Season').val();
            var Year = $('select#Year').val();
            var Pos = $('select#Pos').val();
            var Conference = $('select#Conference').val();
            var IP = $('select#IP').val();

            $(".Stats").append("<div id='ScoutLoad' style='margin: 25px auto 0 auto; height: 30px; width: 30px;'><img src='CSS/Media/Loading.gif' height='30px' width='30px'></div>");

            $.post('Ajax/Ajax.php',{ServerID:ServerID, Season:Season, Year:Year, Pos:Pos, Conference:Conference, IP:IP, Page:'College/PlayerPitchingStatsM.php'}, function(data){

                $(".Stats").html(data);

                $("table").tablesorter();

            });

        }

    }
);

$(window).ready(function()
    {

        if($('.TeamBattingStats').is(':visible')){

            var ServerID = $('select#Server').val();
            var Season = $('select#Season').val();

            $(".Stats").append("<div id='ScoutLoad' style='margin: 25px auto 0 auto; height: 30px; width: 30px;'><img src='CSS/Media/Loading.gif' height='30px' width='30px'></div>");

            $.post('Ajax/Ajax.php',{ServerID:ServerID, Season:Season, Page:'College/TeamBattingStats.php'}, function(data){

                $(".Stats").html(data);

                $("table").tablesorter();

            });

        }

    }
);

$(function(){
    $(document).on("click",".ViewTeamBattingStats",function(){

        var ServerID = $('select#Server').val();
        var Season = $('select#Season').val();

        $(".Stats").html("<div id='ScoutLoad' style='margin: 25px auto 0 auto; height: 30px; width: 30px;'><img src='CSS/Media/Loading.gif' height='30px' width='30px'></div>");

        $.post('Ajax/Ajax.php',{ServerID:ServerID, Season:Season, Page:'College/TeamBattingStats.php'}, function(data){

            $(".Stats").html(data);

            $("table").tablesorter();

        });

    });
});

$(window).ready(function()
    {

        if($('.TeamBattingStatsM').is(':visible')){

            var ServerID = $('select#Server').val();
            var Season = $('select#Season').val();

            $(".Stats").append("<div id='ScoutLoad' style='margin: 25px auto 0 auto; height: 30px; width: 30px;'><img src='CSS/Media/Loading.gif' height='30px' width='30px'></div>");

            $.post('Ajax/Ajax.php',{ServerID:ServerID, Season:Season, Page:'College/TeamBattingStatsM.php'}, function(data){

                $(".Stats").html(data);

                $("table").tablesorter();

            });

        }

    }
);

$(window).ready(function()
    {

        if($('.TeamPitchingStats').is(':visible')){

            var ServerID = $('select#Server').val();
            var Season = $('select#Season').val();

            $(".Stats").append("<div id='ScoutLoad' style='margin: 25px auto 0 auto; height: 30px; width: 30px;'><img src='CSS/Media/Loading.gif' height='30px' width='30px'></div>");

            $.post('Ajax/Ajax.php',{ServerID:ServerID, Season:Season, Page:'College/TeamPitchingStats.php'}, function(data){

                $(".Stats").html(data);

                $("table").tablesorter();

            });

        }

    }
);

$(function(){
    $(document).on("click",".ViewTeamPitchingStats",function(){

        var ServerID = $('select#Server').val();
        var Season = $('select#Season').val();

        $(".Stats").html("<div id='ScoutLoad' style='margin: 25px auto 0 auto; height: 30px; width: 30px;'><img src='CSS/Media/Loading.gif' height='30px' width='30px'></div>");

        $.post('Ajax/Ajax.php',{ServerID:ServerID, Season:Season, Page:'College/TeamPitchingStats.php'}, function(data){

            $(".Stats").html(data);

            $("table").tablesorter();

        });

    });
});

$(window).ready(function()
    {

        if($('.TeamPitchingStatsM').is(':visible')){

            var ServerID = $('select#Server').val();
            var Season = $('select#Season').val();

            $(".Stats").append("<div id='ScoutLoad' style='margin: 25px auto 0 auto; height: 30px; width: 30px;'><img src='CSS/Media/Loading.gif' height='30px' width='30px'></div>");

            $.post('Ajax/Ajax.php',{ServerID:ServerID, Season:Season, Page:'College/TeamPitchingStatsM.php'}, function(data){

                $(".Stats").html(data);

                $("table").tablesorter();

            });

        }

    }
);

$(function(){
    $(document).on("click",".CollegeArticle",function(){

        var Headline = $('#WriteHeadline').val();
        var Article = $('#WriteArticle').val();
        var Tags = $('#WriteTags').val();

        $.post('Ajax/Ajax.php',{Headline:Headline, Article:Article, Tags:Tags, Page:'College/SubmitArticle.php'}, function(data){

            window.location.href = "index.php?Page=College";

        });

    });
});

$(function(){
    $(document).on("click",".ApproveArticle",function(){

        var ID = $(this).attr('data-ID');

        $.post('Ajax/Ajax.php',{ID:ID, Page:'College/ApproveArticle.php'}, function(data){

            window.location.href = "index.php?Page=ModerateNews";

        });

    });
});

$(function(){
    $(document).on("click",".EditCollegeArticle",function(){

        var ID = $(this).attr('data-ID');

        window.location.href = "index.php?Page=EditCollegeNews&ID="+ID;

    });
});

$(function(){
    $(document).on("click",".SubmitEditCollegeArticle",function(){

        var ID = $(this).attr('data-ID');
        var Headline = $('#WriteHeadline').val();
        var Article = $('#WriteArticle').val();
        var Tags = $('#WriteTags').val();

        $.post('Ajax/Ajax.php',{Headline:Headline, Article:Article, Tags:Tags, ID:ID, Page:'College/SubmitArticleEdit.php'}, function(data){

            window.location.href = "index.php?Page=ModerateNews";

        });

    });
});

$(window).ready(function()
    {

        if($('.CollegeTeamRecords').is(':visible')){

            var RecordType = 1;

            $(".CollegeTeamRecords").html("<img src='CSS/Media/Loading.gif' height='40px' width='40px'>");

            $.post('Ajax/Ajax.php',{RecordType:RecordType, Page:'College/Records.php'}, function(data){

                $('.CollegeTeamRecords').html(data);

            });

        }

    }
);

$(function(){
    $(document).on("click",".ViewTeamRecords",function(){

        var RecordType = $('#Records').val();

        $(".CollegeTeamRecords").html("<img src='CSS/Media/Loading.gif' height='40px' width='40px'>");

        $.post('Ajax/Ajax.php',{RecordType:RecordType, Page:'College/Records.php'}, function(data){

            $('.CollegeTeamRecords').html(data);

        });

    });
});