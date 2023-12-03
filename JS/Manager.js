$(function(){
    $(document).on("click",".DeclineOffer",function(){

        var OfferID = $(this).attr('data-OfferID');

        $.post('Ajax/Ajax.php',{OfferID:OfferID, Page:'Main/DeclineOffer.php'}, function(data){

            if (data == 1){
                window.location.href = "index.php?View=ContractOffers";
            } else {

                $("div.ManagerError").css("display","block");
                $("div.ManagerErrorTxt").html(data);

            }

        });

    });
});

$(function(){
    $(document).on("click",".AcceptOffer",function(){

        var OfferID = $(this).attr('data-OfferID');

        $.post('Ajax/Ajax.php',{OfferID:OfferID, Page:'Main/AcceptOffer.php'}, function(data){

            if (data == 1){
                window.location.href = "index.php?View=ContractOffers";
            } else {

                $("div.ManagerError").css("display","block");
                $("div.ManagerErrorTxt").html(data);

            }

        });

    });
});

$(function(){
    $(document).on("click",".GenerateOffers",function(){

        var ID = $(this).attr('data-ID');

        $.post('Ajax/Ajax.php',{ID:ID, Page:'Main/GenerateOffers.php'}, function(data){

            if (data == 1){
                window.location.href = "index.php?View=ContractOffers";
            } else {

                $("div.ManagerError").css("display","block");
                $("div.ManagerErrorTxt").html(data);

            }

        });

    });
});

$(function(){
    $(document).on("click",".SignWalkon",function(){

        var ID = $(this).attr('data-ID');

        $.post('Ajax/Ajax.php',{ID:ID, Page:'Roster/SignWalkon.php'}, function(data){

            if (data == 1){
                window.location.href = "index.php?View=RosterWalkons";
            } else {

                alert(data);

            }

        });

    });
});

$(function(){
    $(document).on("click",".DropWalkon",function(){

        var ID = $(this).attr('data-ID');

        $.post('Ajax/Ajax.php',{ID:ID, Page:'Roster/DropWalkon.php'}, function(data){

            if (data == 1){
                window.location.href = "index.php?View=RosterWalkons";
            } else {

                alert(data);

            }

        });

    });
});

$(function(){
    $(document).on("click",".Redshirt",function(){

        var ID = $(this).attr('data-ID');

        $.post('Ajax/Ajax.php',{ID:ID, Page:'Roster/Redshirt.php'}, function(data){

            if (data == 1){
                window.location.href = "index.php?View=Roster";
            } else if (data == 2){
                window.location.href = "index.php?View=RosterPitchers";
            } else {
                alert(data);
            }

        });

    });
});

$(function(){
    $(document).on("click",".Portal",function(){

        var ID = $(this).attr('data-ID');

        $.post('Ajax/Ajax.php',{ID:ID, Page:'Roster/PushTransfer.php'}, function(data){

            if (data == 1){
                window.location.href = "index.php?View=Roster";
            } else if (data == 2){
                window.location.href = "index.php?View=RosterPitchers";
            } else {
                alert(data);
            }

        });

    });
});

$(function(){
    $(document).on("click",".CutPlayer",function(){

        var ID = $(this).attr('data-ID');

        $.post('Ajax/Ajax.php',{ID:ID, Page:'Roster/CutPlayer.php'}, function(data){

            if (data == 1){
                window.location.href = "index.php?View=Roster";
            } else if (data == 2){
                window.location.href = "index.php?View=RosterPitchers";
            } else {
                alert(data);
            }

        });

    });
});

$(function(){
    $(document).on("click",".InboxRow",function(){

        var ID = $(this).attr('data-ID');
        var Row = "#Inbox"+ID;

        $.post('Ajax/Ajax.php',{ID:ID, Page:'Manager/ReadMessage.php'}, function(data){

            data = data.split('^');

            $(Row).html(data[0]);
            $('.InboxMsg').html(data[1]);
            $('.InboxMsg').css('display','block');

        });

    });
});

$(function(){
    $(document).on("click",".DeleteMsg",function(){

        var ID = $(this).attr('data-ID');
        var Row = "#Inbox"+ID;

        $.post('Ajax/Ajax.php',{ID:ID, Page:'Manager/DeleteMsg.php'}, function(data){

            data = data.split('^');

            if (data[0] == 1){
                $(Row).remove();
                $('.InboxMsg').html(data[1]);
            } else {
                $('.InboxMsg').html(data[0]);
            }

        });

    });
});

$(function(){
    $(document).on("click",".MarkAllRead",function(){

        var ID = $(this).attr('data-ID');

        $.post('Ajax/Ajax.php',{ID:ID, Page:'Manager/MarkAllRead.php'}, function(data){

            data = data.split('^');

            if (data[0] == 1){
                window.location.href = "index.php?View=Inbox&ID="+ID;
            } else {
                $('.InboxMsg').html(data[0]);
            }

        });

    });
});

$(function(){
    $(document).on("click",".DeleteAll",function(){

        var ID = $(this).attr('data-ID');

        $.post('Ajax/Ajax.php',{ID:ID, Page:'Manager/DeleteAllMsg.php'}, function(data){

            data = data.split('^');

            if (data[0] == 1){
                window.location.href = "index.php?View=Inbox&ID="+ID;
            } else {
                $('.InboxMsg').html(data[0]);
            }

        });

    });
});

$(function(){
    $(document).on("click",".Retire",function(){

        var ID = $(this).attr('data-ID');

        $.post('Ajax/Ajax.php',{ID:ID, Page:'Main/Retire.php'}, function(data){

            data = data.split('^');

            if (data[0] == 1){
                window.location.href = "index.php?View=MyCoaches";
            } else {
                $('.RetireManager').html(data[0]);
            }

        });

    });
});

$(function(){
    $(document).on("click",".Extend",function(){

        var ID = $(this).attr('data-ID');

        $.post('Ajax/Ajax.php',{ID:ID, Page:'Main/Extend.php'}, function(data){

            data = data.split('^');

            if (data[0] == 1){
                window.location.href = "index.php?View=Retire";
            } else {
                $('#ExtendTxt').html(data[0]);
            }

        });

    });
});

$(function(){
    $(document).on("click",".LeaveTeam",function(){

        var ID = $(this).attr('data-ID');

        $.post('Ajax/Ajax.php',{ID:ID, Page:'Main/LeaveTeam.php'}, function(data){

            data = data.split('^');

            if (data[0] == 1){
                window.location.href = "index.php?View=FindTeam&ID="+ID;
            } else {
                $('.RetireManager').html(data[0]);
            }

        });

    });
});

$(function(){
    $(document).on("click",".TakeTeam",function(){

        var ID = $(this).attr('data-ID');
        var TeamID = $(this).attr('data-TeamID');

        $.post('Ajax/Ajax.php',{ID:ID, TeamID:TeamID, Page:'Main/TakeTeam.php'}, function(data){

            data = data.split('^');

            if (data[0] == 1){
                window.location.href = "index.php?View=MyTeam";
            } else {
                $('.TeamError').html(data[0]);
                $('.TeamError').css('display','block');
            }

        });

    });
});

$(function(){
    $(document).on("click",".UpgradePerk",function(){

        var ID = $(this).attr('data-ID');
        var PerkID = $(this).attr('data-PerkID');

        $.post('Ajax/Ajax.php',{ID:ID, PerkID:PerkID, Page:'Main/PerkUpgrade.php'}, function(data){

            console.log(data);

            data = data.split('^');


            if (data[0] === "1"){
                window.location.href = "index.php?View=Perks";
            } else {
                $('.TeamError').html(data[0]);
                $('.TeamError').css('display','block');
            }

        });

    });
});

$(function(){
    $(document).on("click",".LineupList",function(){

        var ID = $(this).attr('data-ID');
        var PlayerID = $(this).attr('data-PlayerID');
        var TeamID = $(this).attr('data-TeamID');
        var Hand = $(this).attr('data-Hand');
        var ListType = $(this).attr('data-List');


        $('.LineupListLine').remove();

        if (ListType === "Closed"){

            $.post('Ajax/Ajax.php',{ID:ID, TeamID:TeamID, Hand:Hand, PlayerID:PlayerID, Page:'Lineup/LineupList.php'}, function(data){

                data = data.split('^');

                $('#'+ID).append(data[0]).attr('data-List', 'Open');

            });

        } else {

            $('#'+ID).attr('data-List', 'Closed');

        }


    });
});

$(function(){
    $(document).on("click",".LineupListLine",function(){

        var ID = $(this).attr('data-ID');
        var TeamID = $(this).attr('data-TeamID');
        var Pos = $(this).attr('data-Pos');
        var Hand = $(this).attr('data-Hand');

        $('.LineupListLine').remove();

        $.post('Ajax/Ajax.php',{ID:ID, TeamID:TeamID, Hand:Hand, Pos:Pos, Page:'Lineup/LineupChange.php'}, function(data){

            data = data.split('^');

            $('#'+Pos).html(data[0]).attr('data-PlayerID',ID);
            $('#BattingOrder').html(data[1]);
            $('.AvgOff').html(data[2]);
            $('.AvgDef').html(data[3]);
            $('.AvgChem').html(data[4]);

        });

    });
});

$(function(){
    $(document).on("click",".BatOrder",function(){

        var TeamID = $(this).attr('data-TeamID');
        var Pos = $(this).attr('data-Position');
        var Hand = $(this).attr('data-Hand');
        var Move = $(this).attr('data-Move');

        $.post('Ajax/Ajax.php',{Move:Move, TeamID:TeamID, Hand:Hand, Pos:Pos, Page:'Lineup/BatOrder.php'}, function(data){

            $('#BattingOrder').html(data);

        });

    });
});

$(function(){
    $(document).on("click",".LineupListP",function(){

        var ID = $(this).attr('data-ID');
        var PlayerID = $(this).attr('data-PlayerID');
        var TeamID = $(this).attr('data-TeamID');
        var ListType = $(this).attr('data-List');


        $('.LineupListLineP').remove();

        if (ListType === "Closed"){

            $.post('Ajax/Ajax.php',{ID:ID, TeamID:TeamID, PlayerID:PlayerID, Page:'Lineup/LineupListP.php'}, function(data){

                data = data.split('^');

                $('#'+ID).append(data[0]).attr('data-List', 'Open');

            });

        } else {

            $('#'+ID).attr('data-List', 'Closed');

        }


    });
});

$(function(){
    $(document).on("click",".LineupListLineP",function(){

        var ID = $(this).attr('data-ID');
        var TeamID = $(this).attr('data-TeamID');
        var Pos = $(this).attr('data-Pos');

        $('.LineupListLineP').remove();

        console.log(ID + TeamID + Pos);

        $.post('Ajax/Ajax.php',{ID:ID, TeamID:TeamID, Pos:Pos, Page:'Lineup/LineupChangeP.php'}, function(data){

            data = data.split('^');

            $('#'+Pos).html(data[0]).attr('data-PlayerID',ID);

        });

    });
});

$(function(){
    $(document).on("click",".GameLineupChange",function(){

        var ID = $(this).attr('data-ID');
        var PlayerID = $(this).attr('data-PlayerID');
        var TeamID = $(this).attr('data-TeamID');
        var ListType = $(this).attr('data-List');


        $('.LineupListLineGame').remove();

        if (ListType === "Closed"){

            $.post('Ajax/Ajax.php',{ID:ID, TeamID:TeamID, PlayerID:PlayerID, Page:'Lineup/LineupListGame.php'}, function(data){

                data = data.split('^');

                $('#'+ID).append(data[0]).attr('data-List', 'Open');

            });

        } else {

            $('#'+ID).attr('data-List', 'Closed');

        }


    });
});

$(function(){
    $(document).on("click",".LineupListLineGame",function(){

        var ID = $(this).attr('data-ID');
        var TeamID = $(this).attr('data-TeamID');
        var Pos = $(this).attr('data-Pos');

        $('.LineupListLine').remove();

        $.post('Ajax/Ajax.php',{ID:ID, TeamID:TeamID, Pos:Pos, Page:'Lineup/GameLineupChange.php'}, function(data){

            data = data.split('^');

            if (data[0] === "1"){
                $('#Pos'+Pos).html(data[1]).attr('data-PlayerID',ID);
            } else {
                $('.LineupError').css('display','block').html(data[0]);
            }

        });

    });
});

$(function(){
    $(document).on("click",".GameBatOrder",function(){

        var TeamID = $(this).attr('data-TeamID');
        var Pos = $(this).attr('data-Position');
        var BatPos = $(this).attr('data-BatPos');
        var Move = $(this).attr('data-Move');

        $.post('Ajax/Ajax.php',{BatPos:BatPos, Move:Move, TeamID:TeamID, Pos:Pos, Page:'Lineup/GameBatOrder.php'}, function(data){

            $('#GameLineup').html(data);

        });

    });
});

$(function(){
    $(document).on("click",".GameLineupChangeP",function(){

        var ID = $(this).attr('data-ID');
        var PlayerID = $(this).attr('data-PlayerID');
        var TeamID = $(this).attr('data-TeamID');
        var ListType = $(this).attr('data-List');


        $('.LineupListLineGameP').remove();

        if (ListType === "Closed"){

            $.post('Ajax/Ajax.php',{ID:ID, TeamID:TeamID, PlayerID:PlayerID, Page:'Lineup/LineupListGameP.php'}, function(data){

                data = data.split('^');

                $('#'+ID).append(data[0]).attr('data-List', 'Open');

            });

        } else {

            $('#'+ID).attr('data-List', 'Closed');

        }


    });
});

$(function(){
    $(document).on("click",".LineupListLineGameP",function(){

        var ID = $(this).attr('data-ID');
        var TeamID = $(this).attr('data-TeamID');
        var Pos = $(this).attr('data-Pos');

        $('.LineupListLineP').remove();

        $.post('Ajax/Ajax.php',{ID:ID, TeamID:TeamID, Pos:Pos, Page:'Lineup/GameLineupChangeP.php'}, function(data){

            data = data.split('^');

            if (data[0] === "1"){
                $('#Pos'+Pos).html(data[1]).attr('data-PlayerID',ID);
            } else {
                $('.LineupError').css('display','block').html(data[0]);
            }

        });

    });
});

$(function(){
    $(document).on("click",".ChangeTraining",function(){

        var ID = $(this).attr('data-ID');
        var Div = "#Training"+ID;

        $('.ShowTraining').empty();

        $.post('Ajax/Ajax.php',{ID:ID, Page:'Manager/TrainingInfo.php'}, function(data){

            $(Div).html(data);

        });

    });
});

$(function(){
    $(document).on("click",".SaveTraining",function(){

        var ID = $(this).attr('data-ID');
        var Div = "#Training"+ID;
        var ChangeDiv = "#ChangeTraining"+ID;
        var Intensity = $('select#TrainingIntensity').val();

        if (Intensity == 0){
            var Train1 = "";
            var Train2 = "";
            var Train3 = "";
        } else {
            var Train1 = $('select#Train1').val();
            var Train2 = $('select#Train2').val();
            var Train3 = $('select#Train3').val();
        }

        $.post('Ajax/Ajax.php',{ID:ID, Intensity:Intensity, Train1:Train1, Train2:Train2, Train3:Train3, Page:'Manager/SaveTraining.php'}, function(data){

            $(ChangeDiv).html(data);
            $(Div).html('<div class=ScoreSmall>Training Saved.</div>');

        });

    });
});

$(function(){
    $(document).on("change","select#TrainingIntensity",function(){

        var ID = $(this).attr('data-ID');
        var Intensity = $('select#TrainingIntensity').val();
        var ChangeDiv = "#Training"+ID;

        $.post('Ajax/Ajax.php',{ID:ID, Intensity:Intensity, Page:'Manager/TrainingIntensity.php'}, function(data){

            $(ChangeDiv).html(data);

        });

    });
});

$(function(){
    $(document).on("click",".ScheduleReq",function(){

        var TeamID = $(this).attr('data-TeamID');
        var Series = $(this).attr('data-Series');
        var SelectID = $(this).attr('data-SelectID');
        var Select = 'select#'+SelectID;
        var Opponent = $(Select).val();

        $.post('Ajax/Ajax.php',{TeamID:TeamID, Opponent:Opponent, Series:Series, Page:'Manager/ScheduleRequest.php'}, function(data){

            if (data == 1){
                window.location.href = "index.php?View=Scheduler";
            } else {

                $('.TeamError').html(data);
                $('.TeamError').css('display','block');

            }


        });

    });
});

$(function(){
    $(document).on("click",".WithdrawSchedule",function(){

        var ID = $(this).attr('data-ID');

        $.post('Ajax/Ajax.php',{ID:ID, Page:'Manager/ScheduleWithdraw.php'}, function(data){

            if (data == 1){
                window.location.href = "index.php?View=Scheduler";
            } else {

                $('.TeamError').html(data);
                $('.TeamError').css('display','block');

            }

        });

    });
});

$(function(){
    $(document).on("click",".AcceptSchedule",function(){

        var ID = $(this).attr('data-ID');

        $.post('Ajax/Ajax.php',{ID:ID, Page:'Manager/ScheduleAccept.php'}, function(data){

            if (data == 1){
                window.location.href = "index.php?View=Scheduler";
            } else {

                $('.TeamError').html(data);
                $('.TeamError').css('display','block');

            }

        });

    });
});

$(function(){
    $(document).on("click",".DeclineSchedule",function(){

        var ID = $(this).attr('data-ID');

        $.post('Ajax/Ajax.php',{ID:ID, Page:'Manager/ScheduleDecline.php'}, function(data){

            if (data == 1){
                window.location.href = "index.php?View=Scheduler";
            } else {

                $('.TeamError').html(data);
                $('.TeamError').css('display','block');

            }

        });

    });
});

$(function(){
    $(document).on("change",".BatSlider",function(){

        var ID = $(this).attr('ID');
        var PlayerID = $(this).attr('data-ID');
        var Time = $(this).attr('data-Time');
        var Score = $(this).attr('data-Score');
        var Val = $(this).val();

        if ($('#AllTimes').is(':checked') == true){
            var AllTimes = 1;
        } else {
            var AllTimes = 0;
        }

        if ($('#AllScores').is(':checked') == true){
            var AllScores = 1;
        } else {
            var AllScores = 0;
        }

        $("#"+ID).val(Val);

        $.post('Ajax/Ajax.php',{ID:ID, Val:Val, PlayerID:PlayerID, Time:Time, Score:Score, AllTimes:AllTimes, AllScores:AllScores, Page:'Strategy/Batting.php'}, function(data){

            console.log(data);

        });

    });
});

$(function(){
    $(document).on("change",".PitchSlider",function(){

        var ID = $(this).attr('ID');
        var PlayerID = $(this).attr('data-ID');
        var Time = $(this).attr('data-Time');
        var Score = $(this).attr('data-Score');
        var Val = $(this).val();

        if ($('#AllTimes').is(':checked') == true){
            var AllTimes = 1;
        } else {
            var AllTimes = 0;
        }

        if ($('#AllScores').is(':checked') == true){
            var AllScores = 1;
        } else {
            var AllScores = 0;
        }

        $("#"+ID).val(Val);

        $.post('Ajax/Ajax.php',{ID:ID, Val:Val, PlayerID:PlayerID, Time:Time, Score:Score, AllTimes:AllTimes, AllScores:AllScores, Page:'Strategy/Pitching.php'}, function(data){

            console.log(data);

        });

    });
});

$(function(){
    $(document).on("click",".StrategyTime",function(){

        var ID = $(this).attr('ID');
        var Score = $(this).attr('data-Score');
        var Strategy = $('#StrategyPage').val();

        if ($('#AllTimes').is(':checked') == true){
            var AllTimes = 1;
        } else {
            var AllTimes = 0;
        }

        if ($('#AllScores').is(':checked') == true){
            var AllScores = 1;
        } else {
            var AllScores = 0;
        }

        if ($('#NonPitchers').is(':checked') == true){
            var NonPitchers = 1;
        } else {
            var NonPitchers = 0;
        }

        if ($('#Pitchers').is(':checked') == true){
            var Pitchers = 1;
        } else {
            var Pitchers = 0;
        }

        window.location.href = "index.php?View="+Strategy+"&Time="+ID+"&Score="+Score+"&AllTimes="+AllTimes+"&AllScores="+AllScores+"&NonPitchers="+NonPitchers+"&Pitchers="+Pitchers;

    });
});

$(function(){
    $(document).on("click",".StrategyScore",function(){

        var ID = $(this).attr('ID');
        var Time = $(this).attr('data-Time');
        var Strategy = $('#StrategyPage').val();

        if ($('#AllTimes').is(':checked') == true){
            var AllTimes = 1;
        } else {
            var AllTimes = 0;
        }

        if ($('#AllScores').is(':checked') == true){
            var AllScores = 1;
        } else {
            var AllScores = 0;
        }

        if ($('#NonPitchers').is(':checked') == true){
            var NonPitchers = 1;
        } else {
            var NonPitchers = 0;
        }

        if ($('#Pitchers').is(':checked') == true){
            var Pitchers = 1;
        } else {
            var Pitchers = 0;
        }

        window.location.href = "index.php?View="+Strategy+"&Time="+Time+"&Score="+ID+"&AllTimes="+AllTimes+"&AllScores="+AllScores+"&NonPitchers="+NonPitchers+"&Pitchers="+Pitchers;

    });
});

$(function(){
    $(document).on("change","#Pitchers",function(){

        var Time = $(this).attr('data-Time');
        var Score = $(this).attr('data-Score');
        var Strategy = $('#StrategyPage').val();

        if ($('#AllTimes').is(':checked') == true){
            var AllTimes = 1;
        } else {
            var AllTimes = 0;
        }

        if ($('#AllScores').is(':checked') == true){
            var AllScores = 1;
        } else {
            var AllScores = 0;
        }

        if ($('#NonPitchers').is(':checked') == true){
            var NonPitchers = 1;
        } else {
            var NonPitchers = 0;
        }

        if ($('#Pitchers').is(':checked') == true){
            var Pitchers = 1;
        } else {
            var Pitchers = 0;
        }

        window.location.href = "index.php?View="+Strategy+"&Time="+Time+"&Score="+Score+"&AllTimes="+AllTimes+"&AllScores="+AllScores+"&NonPitchers="+NonPitchers+"&Pitchers="+Pitchers;

    });
});

$(function(){
    $(document).on("change","#NonPitchers",function(){

        var Time = $(this).attr('data-Time');
        var Score = $(this).attr('data-Score');
        var Strategy = $('#StrategyPage').val();

        if ($('#AllTimes').is(':checked') == true){
            var AllTimes = 1;
        } else {
            var AllTimes = 0;
        }

        if ($('#AllScores').is(':checked') == true){
            var AllScores = 1;
        } else {
            var AllScores = 0;
        }

        if ($('#NonPitchers').is(':checked') == true){
            var NonPitchers = 1;
        } else {
            var NonPitchers = 0;
        }

        if ($('#Pitchers').is(':checked') == true){
            var Pitchers = 1;
        } else {
            var Pitchers = 0;
        }

        window.location.href = "index.php?View="+Strategy+"&Time="+Time+"&Score="+Score+"&AllTimes="+AllTimes+"&AllScores="+AllScores+"&NonPitchers="+NonPitchers+"&Pitchers="+Pitchers;

    });
});

$(function(){
    $(document).on("change",".RunSlider",function(){

        var ID = $(this).attr('ID');
        var PlayerID = $(this).attr('data-ID');
        var Time = $(this).attr('data-Time');
        var Score = $(this).attr('data-Score');
        var Val = $(this).val();

        if ($('#AllTimes').is(':checked') == true){
            var AllTimes = 1;
        } else {
            var AllTimes = 0;
        }

        if ($('#AllScores').is(':checked') == true){
            var AllScores = 1;
        } else {
            var AllScores = 0;
        }

        $("#"+ID).val(Val);

        $.post('Ajax/Ajax.php',{ID:ID, Val:Val, PlayerID:PlayerID, Time:Time, Score:Score, AllTimes:AllTimes, AllScores:AllScores, Page:'Strategy/Baserunning.php'}, function(data){

        });

    });
});

$(function(){
    $(document).on("change",".FieldSlider",function(){

        var ID = $(this).attr('ID');
        var TeamID = $(this).attr('data-ID');
        var Time = $(this).attr('data-Time');
        var Score = $(this).attr('data-Score');
        var Val = $(this).val();

        if ($('#AllTimes').is(':checked') == true){
            var AllTimes = 1;
        } else {
            var AllTimes = 0;
        }

        if ($('#AllScores').is(':checked') == true){
            var AllScores = 1;
        } else {
            var AllScores = 0;
        }

        $("#"+ID).val(Val);

        $.post('Ajax/Ajax.php',{ID:ID, Val:Val, TeamID, Time:Time, Score:Score, AllTimes:AllTimes, AllScores:AllScores, Page:'Strategy/Fielding.php'}, function(data){


        });

    });
});

$(function(){
    $(document).on("click",".EQHover",function(){

        var ID = $(this).attr('data-ID');
        var PlayerID = $(this).attr('data-PlayerID');

        $('#'+PlayerID).empty('');

        $.post('Ajax/Ajax.php',{ID:ID, Page:'Equipment/Info.php'}, function(data){

            $('#'+PlayerID).html(data);

        });
    });
});

$(function(){
    $(document).on("click",".EQStoreHover",function(){

        var ID = $(this).attr('data-ID');

        $('.EQClear').html('');

        $.post('Ajax/Ajax.php',{ID:ID, Page:'Equipment/StoreInfo.php'}, function(data){

            $('#EQInfo').html(data);

        });
    });
});

$(function(){
    $(document).on("click",".PurchaseEQ",function(){

        var ID = $(this).attr('data-ID');
        var PlayerID = $('#AssignSelection').val();

        alert(PlayerID);

        $.post('Ajax/Ajax.php',{ID:ID, PlayerID:PlayerID, Page:'Equipment/Purchase.php'}, function(data){

            $('.PurchaseSuccess').html(data);

        });
    });
});

$(function(){
    $(document).on("click",".TotalBonus",function(){

        var PlayerID = $(this).attr('data-ID');

        $('#'+PlayerID).empty('');

        $.post('Ajax/Ajax.php',{PlayerID:PlayerID, Page:'Equipment/TotalBonus.php'}, function(data){

            $('#'+PlayerID).html(data);

        });
    });
});

$(function(){
    $(document).on("click",".NewHookSetting",function(){

        var Div = $(this).attr('data-ID');
        var PlayerID = $(this).attr('data-PlayerID');

        $.post('Ajax/Ajax.php',{PlayerID:PlayerID, Page:'Strategy/NewHook.php'}, function(data){

            $(Div).html(data);

        });
    });
});

$(function(){
    $(document).on("click",".DeleteHook",function(){

        var ID = $(this).attr('data-ID');
        var Div = '#HookID'+ID;

        $.post('Ajax/Ajax.php',{ID:ID, Page:'Strategy/DeleteHook.php'}, function(data){

            if (data === "1"){
                $(Div).remove();
            } else {
                $(Div).html(data);
            }



        });
    });
});

$(function(){
    $(document).on("click",".SaveHook",function(){

        var ID = $(this).attr('data-ID');
        var Amt = '.Amt'+ID;
        var Setting = '.Setting'+ID;
        var IP = '.IP'+ID;
        Amt = $(Amt).val();
        Setting = $(Setting).val();
        IP = $(IP).val();
        var Div = '#HookID'+ID;

        $('.HookSaveSuccess').remove();

        $.post('Ajax/Ajax.php',{ID:ID, Amt:Amt, Setting:Setting, IP:IP, Page:'Strategy/SaveHook.php'}, function(data){

            if (data === "1"){
                $(Div).append("<div class='HookSaveSuccess' style='font-weight:bold; font-size:9px;'>Saved Successfully</div>");
            } else {
                $(Div).html(data);
            }

        });
    });
});