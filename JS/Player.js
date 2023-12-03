$(function(){
    $(document).on("click",".CreatePlayer",function(){

        var ServerID = $('select#PlayerServer').val();
        var Name = $('input#Name').val();
        var Year = $('select#Year').val();
        var State = $('select#State').val();
        var Town = $('select#Town').val();
        var Pos = $('select#Pos').val();
        var PrefPos = $('select#PrefPos').val();

        $.post('Ajax/Ajax.php',{ServerID:ServerID,Name:Name, Year:Year, State:State, Town:Town, Pos:Pos, PrefPos:PrefPos, Page:'Locker/CreatePlayer.php'}, function(data){

            console.log(data);

            data = data.split("+");

            if (data[0] == 1){
                window.location.href = "index.php?Page=Locker";
            } else {
                $("div.ManagerError").css("display","block");
                $("div.ManagerErrorTxt").html(data);
            }

        });

    });
});

$(function(){
    $(document).on("click",".UsePlayer",function(){

        var ID = $(this).attr('data-ID');

        $.post('Ajax/Ajax.php',{ID:ID, Page:'Locker/ChangePlayer.php'}, function(data){

            console.log(data);

            data = data.split("+");

            if (data[0] == 1){
                window.location.href = "index.php?Page=Locker&ID="+ID;
            } else {
                $("div.ManagerError").css("display","block");
                $("div.ManagerErrorTxt").html(data);
            }

        });

    });
});

$(function(){
    $(document).on("change","#State",function(){

        var State = $('#State').val();

        $.post('Ajax/Ajax.php',{State:State, Page:'Locker/ChangeState.php'}, function(data){

            console.log(data);

            data = data.split("+");

            if (data[0] == 1){
                $("div.PlayerTown").html(data[1]);
            } else {
                $("div.ManagerError").css("display","block");
                $("div.ManagerErrorTxt").html(data);
            }

        });

    });
});

$(function(){
    $(document).on("change","#Pos",function(){

        var Pos = $('#Pos').val();

        $.post('Ajax/Ajax.php',{Pos:Pos, Page:'Locker/ChangePos.php'}, function(data){

            console.log(data);

            data = data.split("+");

            if (data[0] == 1){
                $("div.PlayerPos").html(data[1]);
            } else {
                $("div.ManagerError").css("display","block");
                $("div.ManagerErrorTxt").html(data);
            }

        });

    });
});

$(function(){
    $(document).on("click",".ChangeTraining",function(){

        var ID = $(this).attr('data-ID');
        var Div = "#Training"+ID;

        $('.ShowTraining').empty();

        $.post('Ajax/Ajax.php',{ID:ID, Page:'Locker/TrainingInfo.php'}, function(data){

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

        $.post('Ajax/Ajax.php',{ID:ID, Intensity:Intensity, Train1:Train1, Train2:Train2, Train3:Train3, Page:'Locker/SaveTraining.php'}, function(data){

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

        $.post('Ajax/Ajax.php',{ID:ID, Intensity:Intensity, Page:'Locker/TrainingIntensity.php'}, function(data){

            $(ChangeDiv).html(data);

        });

    });
});

$(function(){
    $(document).on("click",".EQHover",function(){

        var ID = $(this).attr('data-ID');
        var PlayerID = $(this).attr('data-PlayerID');

        $.post('Ajax/Ajax.php',{ID:ID, Page:'Locker/Info.php'}, function(data){

            $('#'+PlayerID).html(data);

        });
    });
});

$(function(){
    $(document).on("click",".EQStoreHover",function(){

        var ID = $(this).attr('data-ID');

        $.post('Ajax/Ajax.php',{ID:ID, Page:'Locker/StoreInfo.php'}, function(data){

            $('#EQInfo').html(data);

        });
    });
});

$(function(){
    $(document).on("click",".EquipEQ",function(){

        var ID = $(this).attr('data-ID');
        var PlayerID = $(this).attr('data-PlayerID');

        $.post('Ajax/Ajax.php',{ID:ID, PlayerID:PlayerID, Page:'Locker/Equip.php'}, function(data){

            data = data.split("^");

            $('.PurchaseSuccess').html(data[0]);
            $('.EQStorage').html(data[1]);
            $('.PlayerEquipment').html(data[2]);

        });
    });
});

$(function(){
    $(document).on("click",".EQStorageHover",function(){

        var ID = $(this).attr('data-ID');

        $.post('Ajax/Ajax.php',{ID:ID, Page:'Locker/Storage.php'}, function(data){

            $('#EQInfo').html(data);

        });
    });
});

$(function(){
    $(document).on("click",".PurchaseEQ",function(){

        var ID = $(this).attr('data-ID');
        var PlayerID = $(this).attr('data-PlayerID');

        $.post('Ajax/Ajax.php',{ID:ID, PlayerID:PlayerID, Page:'Locker/Purchase.php'}, function(data){

            console.log(data);

            data = data.split("^");

            $('.PurchaseSuccess').html(data[0]);
            $('.EQStorage').html(data[1]);
            $('.PlayerEquipment').html(data[2]);

        });
    });
});

$(function(){
    $(document).on("click",".TotalBonus",function(){

        var PlayerID = $(this).attr('data-ID');

        $('#'+PlayerID).empty('');

        $.post('Ajax/Ajax.php',{PlayerID:PlayerID, Page:'Locker/TotalBonus.php'}, function(data){

            $('#'+PlayerID).html(data);

        });
    });
});

$(function(){
    $(document).on("click",".NewHookSetting",function(){

        var Div = $(this).attr('data-ID');
        var PlayerID = $(this).attr('data-PlayerID');

        $.post('Ajax/Ajax.php',{PlayerID:PlayerID, Page:'LockerStrategy/NewHook.php'}, function(data){

            $(Div).html(data);

        });
    });
});

$(function(){
    $(document).on("click",".DeleteHook",function(){

        var ID = $(this).attr('data-ID');
        var Div = '#HookID'+ID;

        $.post('Ajax/Ajax.php',{ID:ID, Page:'LockerStrategy/DeleteHook.php'}, function(data){

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

        $.post('Ajax/Ajax.php',{ID:ID, Amt:Amt, Setting:Setting, IP:IP, Page:'LockerStrategy/SaveHook.php'}, function(data){

            if (data === "1"){
                $(Div).append("<div class='HookSaveSuccess' style='font-weight:bold; font-size:9px;'>Saved Successfully</div>");
            } else {
                $(Div).html(data);
            }

        });
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

        $.post('Ajax/Ajax.php',{ID:ID, Val:Val, PlayerID:PlayerID, Time:Time, Score:Score, AllTimes:AllTimes, AllScores:AllScores, Page:'LockerStrategy/Baserunning.php'}, function(data){

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

        $.post('Ajax/Ajax.php',{ID:ID, Val:Val, PlayerID:PlayerID, Time:Time, Score:Score, AllTimes:AllTimes, AllScores:AllScores, Page:'LockerStrategy/Batting.php'}, function(data){

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

        $.post('Ajax/Ajax.php',{ID:ID, Val:Val, PlayerID:PlayerID, Time:Time, Score:Score, AllTimes:AllTimes, AllScores:AllScores, Page:'LockerStrategy/Pitching.php'}, function(data){

            console.log(data);

        });

    });
});

$(function(){
    $(document).on("click",".StrategyTime",function(){

        var ID = $(this).attr('ID');
        var Score = $(this).attr('data-Score');
        var PlayerID = $('#PlayerID').val();

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

        window.location.href = "index.php?Page=LockerStrategy&ID="+PlayerID+"&Time="+ID+"&Score="+Score+"&AllTimes="+AllTimes+"&AllScores="+AllScores+"&NonPitchers="+NonPitchers+"&Pitchers="+Pitchers;

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

        window.location.href = "index.php?Page="+Strategy+"&Time="+Time+"&Score="+ID+"&AllTimes="+AllTimes+"&AllScores="+AllScores+"&NonPitchers="+NonPitchers+"&Pitchers="+Pitchers;

    });
});

$(function(){
    $(document).on("click",".AddDestination",function(){

        var PlayerID = $(this).attr('data-PlayerID');

        $.post('Ajax/Ajax.php',{PlayerID:PlayerID, Page:'Locker/NewDestination.php'}, function(data){

            $('.NewDestination').html(data);

        });
    });
});

$(function(){
    $(document).on("click",".AddToDestination",function(){

        var PlayerID = $(this).attr('data-PlayerID');
        var TeamID = $('select#TeamID').val();

        $.post('Ajax/Ajax.php',{PlayerID:PlayerID,TeamID:TeamID, Page:'Locker/AddDestination.php'}, function(data){

            $('.LockerDestinations').html(data);

        });
    });
});

$(function(){
    $(document).on("click",".RemoveDestination",function(){

        var ID = $(this).attr('data-PlayerID');
        var UID = $(this).attr('data-UID');

        $.post('Ajax/Ajax.php',{ID:ID, UID:UID, Page:'Locker/RemoveDestination.php'}, function(data){

            window.location.href = "index.php?Page=LockerRecruiting&ID="+ID;

        });

    });
});

$(function(){
    $(document).on("click",".DestinationOrder",function(){

        var ID = $(this).attr('data-ID');
        var OrderNum = $(this).attr('data-Position');
        var Movement = $(this).attr('data-Move');

        $.post('Ajax/Ajax.php',{ID:ID, OrderNum:OrderNum, Movement:Movement, Page:'Locker/DestinationOrder.php'}, function(data){

            window.location.href = "index.php?Page=LockerRecruiting&ID="+ID;

        });

    });
});

$(function(){
    $(document).on("click",".LockerUpgrade",function(){

        var ID = $(this).attr('data-ID');
        var Att = $(this).attr('data-Att');

        $.post('Ajax/Ajax.php',{ID:ID, Att:Att, Page:'Locker/AttUpgrade.php'}, function(data){

            data = data.split("^");

            $('.MyAttributes').html(data[0]);
            $('.LockerScout').html(data[1]);

        });

    });
});

$(window).ready(function()
    {

        if($('.LockerLog').is(':visible')){

            var Season = $('select#Season').val();
            var ID = $('input#ID').val();

            $(".LockerLog").html("<div id='ScoutLoad' style='margin: 0 auto 0 auto; height: 30px; width: 30px;'><img src='CSS/Media/Loading.gif' height='30px' width='30px'></div>");

            $.post('Ajax/Ajax.php',{ID:ID, Season:Season, Page:'Locker/Log.php'}, function(data){

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

        $.post('Ajax/Ajax.php',{ID:ID, Season:Season, Page:'Locker/LogSchedule.php'}, function(data){

            $(".TeamSchedule").html(data);

        });

        $(".LockerLog").html("<div id='ScoutLoad' style='margin: 0 auto 0 auto; height: 30px; width: 30px;'><img src='CSS/Media/Loading.gif' height='30px' width='30px'></div>");

        $.post('Ajax/Ajax.php',{ID:ID, Season:Season, Page:'Locker/Log.php'}, function(data){

            $(".LockerLog").html(data);

        });

    });
});

$(function(){
    $(document).on("click",".InboxRow",function(){

        var ID = $(this).attr('data-ID');
        var MsgID = $(this).attr('data-MsgID');
        var Row = "#Inbox"+MsgID;

        $.post('Ajax/Ajax.php',{ID:ID, MsgID:MsgID, Page:'Locker/ReadMessage.php'}, function(data){

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
        var MsgID = $(this).attr('data-MsgID');
        var Row = "#Inbox"+MsgID;

        $.post('Ajax/Ajax.php',{ID:ID, MsgID:MsgID, Page:'Locker/DeleteMsg.php'}, function(data){

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

        $.post('Ajax/Ajax.php',{ID:ID, Page:'Locker/MarkAllRead.php'}, function(data){

            if (data == "1"){
                window.location.href = "index.php?Page=LockerInbox&ID="+ID;
            } else {
                $('.InboxMsg').html(data);
            }

        });

    });
});

$(function(){
    $(document).on("click",".DeleteAll",function(){

        var ID = $(this).attr('data-ID');

        $.post('Ajax/Ajax.php',{ID:ID, Page:'Locker/DeleteAllMsg.php'}, function(data){

            data = data.split('^');

            if (data[0] == 1){
                window.location.href = "index.php?Page=LockerInbox&ID="+ID;
            } else {
                $('.InboxMsg').html(data[0]);
            }

        });

    });
});

$(function(){
    $(document).on("click",".SignTeam",function(){

        var ID = $(this).attr('data-ID');
        var TeamID = $(this).attr('data-TeamID');

        $.post('Ajax/Ajax.php',{ID:ID, TeamID:TeamID, Page:'Locker/Sign.php'}, function(data){

            data = data.split('^');

            if (data[0] == 1){
                window.location.href = "index.php?Page=LockerRecruiting&ID="+ID;
            } else {
                $('.SignTeam').html(data[0]);
            }

        });

    });
});