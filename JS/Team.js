$(function(){
    $(document).on("click",".TeamNewsForward",function(){

        var Row = $(this).attr('data-Row');
        var Team = $(this).attr('data-Team');
        var Direction = "Forward";

        $.post('Ajax/Ajax.php',{Team:Team,Row:Row, Direction:Direction, Page:'Team/NewArticles.php'}, function(data){

            data = data.split("^");

            $("div.TeamNewsNewArticles").html(data[1]);
            $("div.TeamNews").html(data[0]);

        });

    });
});

$(function(){
    $(document).on("click",".TeamNewsBackward",function(){

        var Row = $(this).attr('data-Row');
        var Team = $(this).attr('data-Team');
        var Direction = "Backward";

        $.post('Ajax/Ajax.php',{Team:Team,Row:Row, Direction:Direction, Page:'Team/NewArticles.php'}, function(data){

            data = data.split("^");

            $("div.TeamNewsNewArticles").html(data[1]);
            $("div.TeamNews").html(data[0]);

        });

    });
});

$(function(){
    $(document).on("click",".ViewTeamBattingStats",function(){

        var Season = $('select#Season').val();
        var ID = $(this).attr('data-ID');

        window.location.href = "index.php?Page=TeamBatting&ID="+ID+"&Season="+Season;

    });
});

$(function(){
    $(document).on("click",".ViewTeamPitchingStats",function(){

        var Season = $('select#Season').val();
        var ID = $(this).attr('data-ID');

        window.location.href = "index.php?Page=TeamPitching&ID="+ID+"&Season="+Season;

    });
});

$(function(){
    $(document).on("click",".ViewTarget",function(){

        var ID = $(this).attr('data-ID');
        var TeamID = $(this).attr('data-TeamID');

        $.post('Ajax/Ajax.php',{TeamID:TeamID,ID:ID, Page:'Manager/ViewTarget.php'}, function(data){

            data = data.split("^");

            $("div.TargetInfo").html(data[0]);

        });

    });
});

$(function(){
    $(document).on("click",".RecruitOption",function(){

        var ID = $(this).attr('data-MgrID');
        var Setting = $(this).attr('data-Option');

        $.post('Ajax/Ajax.php',{Setting:Setting,ID:ID, Page:'Recruit/CPUSettings.php'}, function(data){

        });

    });
});

$(function(){
    $(document).on("click",".RemoveTarget",function(){

        var ID = $(this).attr('data-ID');
        var TeamID = $(this).attr('data-TeamID');

        $.post('Ajax/Ajax.php',{TeamID:TeamID,ID:ID, Page:'Recruit/RemoveTarget.php'}, function(data){

            window.location.href = "index.php?Page=Targets&ID="+TeamID;

        });

    });
});

$(function(){
    $(document).on("click",".Scholarship",function(){

        var ID = $(this).attr('data-ID');
        var TeamID = $(this).attr('data-TeamID');

        $.post('Ajax/Ajax.php',{TeamID:TeamID,ID:ID, Page:'Recruit/Scholarship.php'}, function(data){

            data = data.split("^");

            $("div.ScholarshipOffer").html(data[0]);
            $("div.RecruitingBattle").html(data[1]);

        });

    });
});

$(function(){
    $(document).on("click",".SignPlayer",function(){

        var ID = $(this).attr('data-ID');
        var TeamID = $(this).attr('data-TeamID');
        var Div = ".PlayerSign"+ID;

        $.post('Ajax/Ajax.php',{ID:ID, TeamID:TeamID, Page:'Recruit/SignPlayer.php'}, function(data){

            data = data.split("^");

            $(Div).html(data[0]);
            $('.ScholarshipsAvailable').html(data[1]);

        });

    });
});

$(function(){
    $(document).on("click",".RemoveCommit",function(){

        var ID = $(this).attr('data-ID');
        var TeamID = $(this).attr('data-TeamID');

        $.post('Ajax/Ajax.php',{ID:ID, TeamID:TeamID, Page:'Recruit/RemoveCommit.php'}, function(data){

            window.location.href = "index.php?Page=Targets&ID="+TeamID;

        });

    });
});

$(function(){
    $(document).on("click",".ActivatePipeline",function(){

        var State = $(this).attr('data-State');
        var MgrID = $(this).attr('data-MgrID');
        var TeamID = $(this).attr('data-TeamID');

        $.post('Ajax/Ajax.php',{MgrID:MgrID, State:State, Page:'Recruit/Pipeline.php'}, function(data){

            window.location.href = "index.php?Page=Targets&ID="+TeamID;

        });

    });
});

$(function(){
    $(document).on("click",".Recruit",function(){

        var ID = $(this).attr('data-ID');
        var TeamID = $(this).attr('data-TeamID');
        var RecruitType = $(this).attr('data-Type');
        var RecruitMath = $(this).attr('data-Math');
        var FocusPts = "div#FocusPts"+ID;

        console.log("ID:"+ID+" TeamID:"+TeamID+"Type: "+RecruitType);

        $(".RecruitBtn").html("<div id='ScoutLoad' style='text-align:center; width: 100%;'><img src='CSS/Media/Loading.gif' height='12px' width='12px'></div>");

        setTimeout(function(){
            $.post('Ajax/Ajax.php',{ID:ID, TeamID:TeamID, Type:RecruitType, Math:RecruitMath, Page:'Recruit/Recruit.php'}, function(data){

                console.log(data);

                data = data.split('^');

                if (data[0] == 1){
                    $("div.FocusUsed").html(data[1]);
                    $("div.RecResult").html(data[2]);
                    $("div.TheBudgets").html(data[4]);
                    $(FocusPts).html(data[3]);
                } else {
                    //do something else
                    alert(data);
                }

            });
        }, 500);

    });
});

$(function(){
    $(document).on("click",".JrRecruit",function(){

        var ID = $(this).attr('data-ID');
        var TeamID = $(this).attr('data-TeamID');
        var RecruitType = $(this).attr('data-Type');
        var RecruitMath = $(this).attr('data-Math');
        var FocusPts = "div#FocusPts"+ID;

        console.log("ID:"+ID+" TeamID:"+TeamID+"Type: "+RecruitType);

        $(".RecruitBtn").html("<div id='ScoutLoad' style='text-align:center; width: 100%;'><img src='CSS/Media/Loading.gif' height='12px' width='12px'></div>");

        setTimeout(function(){
            $.post('Ajax/Ajax.php',{ID:ID, TeamID:TeamID, Type:RecruitType, Math:RecruitMath, Page:'Recruit/JrRecruit.php'}, function(data){

                console.log(data);

                data = data.split('^');

                if (data[0] == 1){
                    $("div.FocusUsed").html(data[1]);
                    $("div.RecResult").html(data[2]);
                    $("div.TheBudgets").html(data[4]);
                    $(FocusPts).html(data[3]);
                } else {
                    //do something else
                    alert(data);
                }

            });
        }, 500);

    });
});

$(function(){
    $(document).on("click",".AssignFocus",function(){

        var TeamID = $(this).attr('data-TeamID');

        $(".AssFocusBtn").html("<div id='ScoutLoad' style='width: 100%;'><img src='CSS/Media/Loading.gif' height='25px' width='25px'></div>");

        $.post('Ajax/Ajax.php',{TeamID:TeamID, Page:'Recruit/AssignFocus.php'}, function(data){

            console.log(data);

            if (data == 1){
                window.location.href = "index.php?Page=Targets&ID="+TeamID;
            } else {
                alert(data);
            }

        });

    });
});

$(function(){
    $(document).on("click",".PlayerRecBoard",function(){

        var ID = $(this).attr('data-ID');
        var TeamID = $(this).attr('data-TeamID');
        var Div = "#PlayerRecBoard"+ID;

        $.post('Ajax/Ajax.php',{ID:ID, TeamID:TeamID, Page:'Manager/PlayerRecBoard.php'}, function(data){

            $(Div).html(data);

        });

    });
});

$(function(){
    $(document).on("click",".PlayerWatchList",function(){

        var ID = $(this).attr('data-ID');
        var TeamID = $(this).attr('data-TeamID');
        var Div = "#PlayerWatch"+ID;

        $.post('Ajax/Ajax.php',{ID:ID, TeamID:TeamID, Page:'Manager/PlayerWatch.php'}, function(data){

            $(Div).html(data);

        });

    });
});

$(function(){
    $(document).on("click",".PlayerAccolades",function(){

        var ID = $(this).attr('data-ID');

        $.post('Ajax/Ajax.php',{ID:ID, Page:'Main/PlayerAccolades.php'}, function(data){

            $('.ShowAccolades').html(data);

        });

    });
});

$(function(){
    $(document).on("click",".PlayerCollegeStats",function(){

        var ID = $(this).attr('data-ID');

        $.post('Ajax/Ajax.php',{ID:ID, Page:'Main/PlayerCollegeStats.php'}, function(data){

            $('.StatResult').html(data);

        });

    });
});

$(function(){
    $(document).on("click",".PlayerHSStats",function(){

        var ID = $(this).attr('data-ID');

        $.post('Ajax/Ajax.php',{ID:ID, Page:'Main/PlayerHSStats.php'}, function(data){

            $('.StatResult').html(data);

        });

    });
});

$(function(){
    $(document).on("click",".BoardSort",function(){

        var TeamID = $(this).attr('data-TeamID');
        var Sort = $(this).attr('data-Sort');
        var SortNum = $(this).attr('data-SortNum');

        if (Sort == "Up"){
            Div1 = ".BoardSorter"+(SortNum-1);
            Div2 = ".BoardSorter"+SortNum;
        } else {
            var Num = parseInt(SortNum);
            var Sorter = Num + 1;

            Div1 = ".BoardSorter"+SortNum;
            Div2 = ".BoardSorter"+Sorter;
        }

        console.log(Div1 + Div2);

        $.post('Ajax/Ajax.php',{TeamID:TeamID, Sort:Sort, SortNum:SortNum, Page:'Manager/SortBoard.php'}, function(data){

            data = data.split('^');

            if (data[0] == 1){

                $(Div1).html(data[1]);
                $(Div2).html(data[2]);

            } else {

                $('.TeamError').html(data);
                $('.TeamError').css('display','block');

            }

        });

    });
});

$(function(){
    $(document).on("click",".ViewScrimmage",function(){

        var ID = $(this).attr('data-ID');
        var Opp = $('#Opponent').val();
        var Site = $('#Site').val();

        alert(Opp);

        $.post('Ajax/Ajax.php',{ID:ID, Opp:Opp, Site:Site, Page:'Scrimmage/Setup.php'}, function(data){

            alert(data);

            $('.ScrimResults').html(data);

        });

    });
});

$(function(){
    $(document).on("click",".ViewTeamRecords",function(){

        var ID = $(this).attr('data-ID');
        var RecordType = $('#Records').val();

        $(".TeamRecords").html("<img src='CSS/Media/Loading.gif' height='40px' width='40px'>");

        $.post('Ajax/Ajax.php',{ID:ID, RecordType:RecordType, Page:'Team/Records.php'}, function(data){

            $('.TeamRecords').html(data);

        });

    });
});

$(window).ready(function()
    {

        if($('.TeamRecords').is(':visible')){

            var ID = $('.TeamRecords').attr('data-ID');
            var RecordType = 1;

            $(".TeamRecords").html("<img src='CSS/Media/Loading.gif' height='40px' width='40px'>");

            $.post('Ajax/Ajax.php',{ID:ID, RecordType:RecordType, Page:'Team/Records.php'}, function(data){

                $('.TeamRecords').html(data);

            });

        }

    }
);

$(window).ready(function()
    {

        if($('.LockerLog').is(':visible')){

            var Season = $('select#Season').val();
            var ID = $('input#ID').val();

            $(".LockerLog").html("<div id='ScoutLoad' style='margin: 0 auto 0 auto; height: 30px; width: 30px;'><img src='CSS/Media/Loading.gif' height='30px' width='30px'></div>");

            $.post('Ajax/Ajax.php',{ID:ID, Season:Season, Page:'Main/Log.php'}, function(data){

                $(".LockerLog").html(data);

                $("table").tablesorter();

            });

        }

    }
);

$(function(){
    $(document).on("click",".ViewSeasonLog",function(){

        var ID = $(this).attr('data-ID');
        var Season = $('select#Season').val();

        $(".TeamSchedule").html("<div id='ScoutLoad' style='margin: 10px auto 0 auto; height: 30px; width: 30px;'><img src='CSS/Media/Loading.gif' height='30px' width='30px'></div>");

        $(".LockerLog").html("<div id='ScoutLoad' style='margin: 0 auto 0 auto; height: 30px; width: 30px;'><img src='CSS/Media/Loading.gif' height='30px' width='30px'></div>");

        $.post('Ajax/Ajax.php',{ID:ID, Season:Season, Page:'Main/LogSchedule.php'}, function(data){

            $(".TeamSchedule").html(data);

            $.post('Ajax/Ajax.php',{ID:ID, Season:Season, Page:'Main/Log.php'}, function(data){

                $(".LockerLog").html(data);

            });

        });



    });
});