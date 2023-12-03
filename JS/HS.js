$(function(){
    $(document).on("click",".ViewRankings",function(){

        var ServerID = $('select#Server').val();
        var Season = $('select#Season').val();

        window.location.href = "index.php?Page=HSRankings&ServerID="+ServerID+"&Season="+Season;

    });
});

$(function(){
    $(document).on("click",".ViewScores",function(){

        var ServerID = $('select#Server').val();
        var Season = $('select#Season').val();
        var Day = $('select#Day').val();
        var Time = $('select#Time').val();
        var Conference = $('select#Conference').val();

        window.location.href = "index.php?Page=HSScores&ServerID="+ServerID+"&Season="+Season+"&Day="+Day+"&Time="+Time+"&Conference="+Conference;

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

            $.post('Ajax/Ajax.php',{ServerID:ServerID, Season:Season, Year:Year, Pos:Pos, Conference:Conference, PA:PA, Page:'HS/PlayerBattingStats.php'}, function(data){

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

        $.post('Ajax/Ajax.php',{ServerID:ServerID, Season:Season, Year:Year, Pos:Pos, Conference:Conference, PA:PA, Page:'HS/PlayerBattingStats.php'}, function(data){

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

            $.post('Ajax/Ajax.php',{ServerID:ServerID, Season:Season, Year:Year, Pos:Pos, Conference:Conference, PA:PA, Page:'HS/PlayerBattingStatsM.php'}, function(data){

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

            $.post('Ajax/Ajax.php',{ServerID:ServerID, Season:Season, Year:Year, Pos:Pos, Conference:Conference, IP:IP, Page:'HS/PlayerPitchingStats.php'}, function(data){

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

        $.post('Ajax/Ajax.php',{ServerID:ServerID, Season:Season, Year:Year, Pos:Pos, Conference:Conference, IP:IP, Page:'HS/PlayerPitchingStats.php'}, function(data){

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

            $.post('Ajax/Ajax.php',{ServerID:ServerID, Season:Season, Year:Year, Pos:Pos, Conference:Conference, IP:IP, Page:'HS/PlayerPitchingStatsM.php'}, function(data){

                $(".Stats").html(data);

                $("table").tablesorter();

            });

        }

    }
);

$(function(){
    $(document).on("click",".ViewHSTeamBattingStats",function(){

        var Season = $('select#Season').val();
        var ID = $(this).attr('data-ID');

        window.location.href = "index.php?Page=HSTeamBatting&ID="+ID+"&Season="+Season;

    });
});

$(function(){
    $(document).on("click",".ViewHSTeamPitchingStats",function(){

        var Season = $('select#Season').val();
        var ID = $(this).attr('data-ID');

        window.location.href = "index.php?Page=HSTeamPitching&ID="+ID+"&Season="+Season;

    });
});

$(function(){
    $(document).on("click",".ViewStandings",function(){

        var State = $('select#State').val();

        window.location.href = "index.php?Page=HSStandings&State="+State;

    });
});

$(function(){
    $(document).on("click",".ViewConfTourney",function(){

        var Season = $('select#Season').val();
        var ID = $('select#Conference').val();

        window.location.href = "index.php?Page=HSConfTourney&Season="+Season+"ID"+ID;

    });
});