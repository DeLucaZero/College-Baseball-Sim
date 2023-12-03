function getDaySuffix(num) {
    var array = ("" + num).split("").reverse(); // E.g. 123 = array("3","2","1")

    if (array[1] != "1") { // Number is not in the teens
        switch (array[0]) {
            case "1": return "st";
            case "2": return "nd";
            case "3": return "rd";
        }
    }

    return "th";
}

$(function(){
    $(document).on("click",".HomeTeamStats",function(){;

        $("div.AwayTeamStats").css("background-image","none");
        $("div.HomeTeamStats").css("background-image","url('CSS/Media/Noise.png')").css("background-repeat","repeat");

        $("div.AwayStatContainer").css("display","none");
        $("div.HomeStatContainer").css("display","block");

    });
});

$(function(){
    $(document).on("click",".AwayTeamStats",function(){;

        $("div.HomeTeamStats").css("background-image","none");
        $("div.AwayTeamStats").css("background-image","url('CSS/Media/Noise.png')").css("background-repeat","repeat");

        $("div.HomeStatContainer").css("display","none");
        $("div.AwayStatContainer").css("display","block");

    });
});

$(function(){
    $(document).on("click",".Forward",function(){;

        var PlayID = $(this).attr('data-ID');
        var GameID = $(this).attr('data-GameID');

        var HomeLogo = $('.Pitcher').attr('data-HomeLogo');
        var AwayLogo = $('.Pitcher').attr('data-AwayLogo');

        $.post('Ajax/Ajax.php',{PlayID:PlayID, GameID:GameID, Page:'College/ReplayFF.php'}, function(data){

            console.log(data);

            data = data.split("?");

            $('.Forward').attr("data-ID",data[0]);

            var GameInfo = data[2].split(",");
            var PitcherInfo = data[5].split(",");
            var BatterInfo = data[3].split(",");
            var BatterPreStats = data[4];
            var Action = data[6];


            // Inning Display \\

            if (GameInfo[1] == 1){

                $("div.GameInning").html("Top "+GameInfo[0]+getDaySuffix(GameInfo[0]));

                var InnHalf = 1;

            } else {

                $("div.GameInning").html("Bottom "+GameInfo[0]+getDaySuffix(GameInfo[0]));

                var InnHalf = 2;

            }

            var Inning = GameInfo[0]+getDaySuffix(GameInfo[0]);

            if (InnHalf == 1){
                var InnDiv = "Top"+Inning;
                var InnName = "Top "+Inning+" Inning";
            } else if (InnHalf == 2){
                var InnDiv = "Bottom"+Inning;
                var InnName = "Bottom "+Inning+" Inning";
            }

            // Outs \\

            if (GameInfo[2] == 1){

                $("div.GameOuts").html("<img src='CSS/Media/RedDot.png' height='20px' width='20px' style='vertical-align: -2px;'> Out");

            } else if (GameInfo[2] == 2){

                $("div.GameOuts").html("<img src='CSS/Media/RedDot.png' height='20px' width='20px' style='vertical-align: -2px;'><img src='CSS/Media/RedDot.png' height='20px' width='20px' style='vertical-align: -2px;'> Outs");

            } else if (GameInfo[2] == 3){

                $("div.GameOuts").html("<img src='CSS/Media/RedDot.png' height='20px' width='20px' style='vertical-align: -2px;'><img src='CSS/Media/RedDot.png' height='20px' width='20px' style='vertical-align: -2px;'><img src='CSS/Media/RedDot.png' height='20px' width='20px' style='vertical-align: -2px;'> Outs");

            } else {
                $("div.GameOuts").html("No Outs");
            }

            // Score Updates \\

            $("div.MainAwayScore").html(GameInfo[6]);
            $("div.MainAwayHits").html(GameInfo[8]);
            $("div.MainAwayErrors").html(GameInfo[9]);

            $("div.MainHomeScore").html(GameInfo[10]);
            $("div.MainHomeHits").html(GameInfo[12]);
            $("div.MainHomeErrors").html(GameInfo[13]);

            // Bases \\

            if (GameInfo[3] != ""){
                $("div.FirstBase").html("<img src=\"CSS/Media/BaseOn.png\" height=\"45px\" width=\"45px\" style=\"vertical-align: -15px;\">");
            } else {
                $("div.FirstBase").html("<img src=\"CSS/Media/Base.png\" height=\"45px\" width=\"45px\" style=\"vertical-align: -15px;\">");
            }

            if (GameInfo[4] != ""){
                $("div.SecondBase").html("<img src=\"CSS/Media/BaseOn.png\" height=\"45px\" width=\"45px\" style=\"vertical-align: -15px;\">");
            } else {
                $("div.SecondBase").html("<img src=\"CSS/Media/Base.png\" height=\"45px\" width=\"45px\" style=\"vertical-align: -15px;\">");
            }

            if (GameInfo[5] != ""){
                $("div.ThirdBase").html("<img src=\"CSS/Media/BaseOn.png\" height=\"45px\" width=\"45px\" style=\"vertical-align: -15px;\">");
            } else {
                $("div.ThirdBase").html("<img src=\"CSS/Media/Base.png\" height=\"45px\" width=\"45px\" style=\"vertical-align: -15px;\">");
            }

            // Batter \\

            if (InnHalf == 1){
                $("div.Batter").html("<div>Batter <img src='"+AwayLogo+"' height='25px' width=\"25px\" style=\"vertical-align: -7px;\"></div><div style=\"font-size: 12px;\"><a href='index.php?Page=Player&ID="+BatterInfo[0]+"'>"+BatterInfo[1]+"</a> <div class='ScoreSmaller'>"+BatterInfo[2]+"</div></div><div style=\"font-size: 11px;\">"+BatterPreStats+"</div>");
            } else {
                $("div.Batter").html("<div>Batter <img src='"+HomeLogo+"' height='25px' width=\"25px\" style=\"vertical-align: -7px;\"></div><div style=\"font-size: 12px;\"><a href='index.php?Page=Player&ID="+BatterInfo[0]+"'>"+BatterInfo[1]+"</a> <div class='ScoreSmaller'>"+BatterInfo[2]+"</div></div><div style=\"font-size: 11px;\">"+BatterPreStats+"</div>");
            }

            // Pitcher \\

            if (InnHalf == 1){
                $("div.Pitcher").html("<div><img src='"+HomeLogo+"' height='25px' width=\"25px\" style=\"vertical-align: -7px;\"> Pitcher</div><div style=\"font-size: 12px;\"><a href='index.php?Page=Player&ID="+PitcherInfo[0]+"'>"+PitcherInfo[1]+"</a> <div class='ScoreSmaller'>"+PitcherInfo[2]+"HP</div></div><div style=\"font-size: 11px;\">"+PitcherInfo[3]+" IP, "+PitcherInfo[4]+" ER, "+PitcherInfo[5]+" K, "+PitcherInfo[6]+" BB, "+PitcherInfo[7]+" Energy</div>");
            } else {
                $("div.Pitcher").html("<div><img src='"+AwayLogo+"' height='25px' width=\"25px\" style=\"vertical-align: -7px;\"> Pitcher</div><div style=\"font-size: 12px;\"><a href='index.php?Page=Player&ID="+PitcherInfo[0]+"'>"+PitcherInfo[1]+"</a> <div class='ScoreSmaller'>"+PitcherInfo[2]+"HP</div></div><div style=\"font-size: 11px;\">"+PitcherInfo[3]+" IP, "+PitcherInfo[4]+" ER, "+PitcherInfo[5]+" K, "+PitcherInfo[6]+" BB, "+PitcherInfo[7]+" Energy</div>");
            }

            // If Normal At Bat \\

            if (data[1] == 1){

                // Extra Variables \\

                var ActionShort = data[7];
                var PostPlayBatter = data[8].split(",");
                var PostPlayPitcher = data[9].split(",");

                // Action Result \\

                $("div."+InnDiv).append("<div class=\"row\"><div class=\"col-xl-12 col-lg-12 col-md-12\" style=\"font-size: 13px; font-weight: bold; text-align: center;\">"+Action+"</div></div>");

                // Post Batter Stats \\

                $("td.HAB"+BatterInfo[0]).html(PostPlayBatter[0]+"-"+PostPlayBatter[1]);
                $("td.R"+BatterInfo[0]).html(PostPlayBatter[2]);
                $("td.HR"+BatterInfo[0]).html(PostPlayBatter[3]);
                $("td.RBI"+BatterInfo[0]).html(PostPlayBatter[4]);
                $("td.BB"+BatterInfo[0]).html(PostPlayBatter[5]);
                $("td.K"+BatterInfo[0]).html(PostPlayBatter[6]);
                $("td.Avg"+BatterInfo[0]).html(PostPlayBatter[7]);

                // Post Pitcher Stats \\

                $("td.IP"+PitcherInfo[0]).html(PostPlayPitcher[0]);
                $("td.H"+PitcherInfo[0]).html(PostPlayPitcher[1]);
                $("td.ER"+PitcherInfo[0]).html(PostPlayPitcher[2]);
                $("td.BB"+PitcherInfo[0]).html(PostPlayPitcher[3]);
                $("td.K"+PitcherInfo[0]).html(PostPlayPitcher[4]);
                $("td.WHIP"+PitcherInfo[0]).html(PostPlayPitcher[5]);
                $("td.ERA"+PitcherInfo[0]).html(PostPlayPitcher[6]);

            } else if (data[1] == 4) {

                // Prepend Play Result Header \\

                $("div.PlayResult").prepend("<div class=\"row\"><div class='"+InnDiv+"' style='width:100%;'><div class=\"col-xl-12 col-lg-12 col-md-12\" style=\"font-size: 18px; font-weight: bold; text-align: center; text-decoration: underline;\">"+InnName+"</div></div></div>");

            } else if (data[1] == 3) {

                // Add to Pitchers Table \\

                if (InnHalf == 1){
                    $("table.AwayPitchers").append("<tr><td style='text-align: left; text-indent: 5px;'><div class='ScoreSmaller'>"+PitcherInfo[2]+"</div> <a style='text-decoration: underline;' href='index.php?Page=Player&ID="+PitcherInfo[0]+"'>"+PitcherInfo[1]+"</a></td><td class='IP"+PitcherInfo[0]+"'>0</td><td class='H"+PitcherInfo[0]+"'>0</td><td class='ER"+PitcherInfo[0]+"'>0</td><td class='BB"+PitcherInfo[0]+"'>0</td><td class='K"+PitcherInfo[0]+"'>0</td><td class='WHIP"+PitcherInfo[0]+"'>0</td><td class='ERA"+PitcherInfo[0]+"'>0.0</td></tr>");
                } else {
                    $("table.HomePitchers").append("<tr><td style='text-align: left; text-indent: 5px;'><div class='ScoreSmaller'>"+PitcherInfo[2]+"</div> <a style='text-decoration: underline;' href='index.php?Page=Player&ID="+PitcherInfo[0]+"'>"+PitcherInfo[1]+"</a></td><td class='IP"+PitcherInfo[0]+"'>0</td><td class='H"+PitcherInfo[0]+"'>0</td><td class='ER"+PitcherInfo[0]+"'>0</td><td class='BB"+PitcherInfo[0]+"'>0</td><td class='K"+PitcherInfo[0]+"'>0</td><td class='WHIP"+PitcherInfo[0]+"'>0</td><td class='ERA"+PitcherInfo[0]+"'>0.0</td></tr>");
                }

            }

        });

    });
});

$(function(){
    $(document).on("click",".Rewind",function(){;

        var PlayID = $(this).attr('data-ID');
        var GameID = $(this).attr('data-GameID');

        var HomeLogo = $('.Pitcher').attr('data-HomeLogo');
        var AwayLogo = $('.Pitcher').attr('data-AwayLogo');

        $.post('Ajax/Ajax.php',{PlayID:PlayID, GameID:GameID, Page:'College/ReplayRW.php'}, function(data){

            console.log(data);

            data = data.split("?");

            $('.Forward').attr("data-ID",data[0]);

            var GameInfo = data[2].split(",");
            var PitcherInfo = data[5].split(",");
            var BatterInfo = data[3].split(",");
            var BatterPreStats = data[4];
            var Action = data[6];


            // Inning Display \\

            if (GameInfo[1] == 1){

                $("div.GameInning").html("Top "+GameInfo[0]+getDaySuffix(GameInfo[0]));

                var InnHalf = 1;

            } else {

                $("div.GameInning").html("Bottom "+GameInfo[0]+getDaySuffix(GameInfo[0]));

                var InnHalf = 2;

            }

            var Inning = GameInfo[0]+getDaySuffix(GameInfo[0]);

            if (InnHalf == 1){
                var InnDiv = "Top"+Inning;
                var InnName = "Top "+Inning+" Inning";
            } else if (InnHalf == 2){
                var InnDiv = "Bottom"+Inning;
                var InnName = "Bottom "+Inning+" Inning";
            }

            // Outs \\

            if (GameInfo[2] == 1){

                $("div.GameOuts").html("<img src='CSS/Media/RedDot.png' height='20px' width='20px' style='vertical-align: -2px;'> Out");

            } else if (GameInfo[2] == 2){

                $("div.GameOuts").html("<img src='CSS/Media/RedDot.png' height='20px' width='20px' style='vertical-align: -2px;'><img src='CSS/Media/RedDot.png' height='20px' width='20px' style='vertical-align: -2px;'> Outs");

            } else if (GameInfo[2] == 3){

                $("div.GameOuts").html("<img src='CSS/Media/RedDot.png' height='20px' width='20px' style='vertical-align: -2px;'><img src='CSS/Media/RedDot.png' height='20px' width='20px' style='vertical-align: -2px;'><img src='CSS/Media/RedDot.png' height='20px' width='20px' style='vertical-align: -2px;'> Outs");

            } else {
                $("div.GameOuts").html("No Outs");
            }

            // Score Updates \\

            $("div.MainAwayScore").html(GameInfo[6]);
            $("div.MainAwayHits").html(GameInfo[8]);
            $("div.MainAwayErrors").html(GameInfo[9]);

            $("div.MainHomeScore").html(GameInfo[10]);
            $("div.MainHomeHits").html(GameInfo[12]);
            $("div.MainHomeErrors").html(GameInfo[13]);

            // Bases \\

            if (GameInfo[3] != ""){
                $("div.FirstBase").html("<img src=\"CSS/Media/BaseOn.png\" height=\"45px\" width=\"45px\" style=\"vertical-align: -15px;\">");
            } else {
                $("div.FirstBase").html("<img src=\"CSS/Media/Base.png\" height=\"45px\" width=\"45px\" style=\"vertical-align: -15px;\">");
            }

            if (GameInfo[4] != ""){
                $("div.SecondBase").html("<img src=\"CSS/Media/BaseOn.png\" height=\"45px\" width=\"45px\" style=\"vertical-align: -15px;\">");
            } else {
                $("div.SecondBase").html("<img src=\"CSS/Media/Base.png\" height=\"45px\" width=\"45px\" style=\"vertical-align: -15px;\">");
            }

            if (GameInfo[5] != ""){
                $("div.ThirdBase").html("<img src=\"CSS/Media/BaseOn.png\" height=\"45px\" width=\"45px\" style=\"vertical-align: -15px;\">");
            } else {
                $("div.ThirdBase").html("<img src=\"CSS/Media/Base.png\" height=\"45px\" width=\"45px\" style=\"vertical-align: -15px;\">");
            }

            // Batter \\

            if (InnHalf == 1){
                $("div.Batter").html("<div>Batter <img src='"+AwayLogo+"' height='25px' width=\"25px\" style=\"vertical-align: -7px;\"></div><div style=\"font-size: 12px;\"><a href='index.php?Page=Player&ID="+BatterInfo[0]+"'>"+BatterInfo[1]+"</a> <div class='ScoreSmaller'>"+BatterInfo[2]+"</div></div><div style=\"font-size: 11px;\">"+BatterPreStats+"</div>");
            } else {
                $("div.Batter").html("<div>Batter <img src='"+HomeLogo+"' height='25px' width=\"25px\" style=\"vertical-align: -7px;\"></div><div style=\"font-size: 12px;\"><a href='index.php?Page=Player&ID="+BatterInfo[0]+"'>"+BatterInfo[1]+"</a> <div class='ScoreSmaller'>"+BatterInfo[2]+"</div></div><div style=\"font-size: 11px;\">"+BatterPreStats+"</div>");
            }

            // Pitcher \\

            if (InnHalf == 1){
                $("div.Pitcher").html("<div><img src='"+HomeLogo+"' height='25px' width=\"25px\" style=\"vertical-align: -7px;\"> Pitcher</div><div style=\"font-size: 12px;\"><a href='index.php?Page=Player&ID="+PitcherInfo[0]+"'>"+PitcherInfo[1]+"</a> <div class='ScoreSmaller'>"+PitcherInfo[2]+"HP</div></div><div style=\"font-size: 11px;\">"+PitcherInfo[3]+" IP, "+PitcherInfo[4]+" ER, "+PitcherInfo[5]+" K, "+PitcherInfo[6]+" BB, "+PitcherInfo[7]+" Energy</div>");
            } else {
                $("div.Pitcher").html("<div><img src='"+AwayLogo+"' height='25px' width=\"25px\" style=\"vertical-align: -7px;\"> Pitcher</div><div style=\"font-size: 12px;\"><a href='index.php?Page=Player&ID="+PitcherInfo[0]+"'>"+PitcherInfo[1]+"</a> <div class='ScoreSmaller'>"+PitcherInfo[2]+"HP</div></div><div style=\"font-size: 11px;\">"+PitcherInfo[3]+" IP, "+PitcherInfo[4]+" ER, "+PitcherInfo[5]+" K, "+PitcherInfo[6]+" BB, "+PitcherInfo[7]+" Energy</div>");
            }

            // If Normal At Bat \\

            if (data[1] == 1){

                // Extra Variables \\

                var ActionShort = data[7];
                var PostPlayBatter = data[8].split(",");
                var PostPlayPitcher = data[9].split(",");

                // Action Result \\

                $("div."+InnDiv).append("<div class=\"row\"><div class=\"col-xl-12 col-lg-12 col-md-12\" style=\"font-size: 13px; font-weight: bold; text-align: center;\">"+Action+"</div></div>");

                // Post Batter Stats \\

                $("td.HAB"+BatterInfo[0]).html(PostPlayBatter[0]+"-"+PostPlayBatter[1]);
                $("td.R"+BatterInfo[0]).html(PostPlayBatter[2]);
                $("td.HR"+BatterInfo[0]).html(PostPlayBatter[3]);
                $("td.RBI"+BatterInfo[0]).html(PostPlayBatter[4]);
                $("td.BB"+BatterInfo[0]).html(PostPlayBatter[5]);
                $("td.K"+BatterInfo[0]).html(PostPlayBatter[6]);
                $("td.Avg"+BatterInfo[0]).html(PostPlayBatter[7]);

                // Post Pitcher Stats \\

                $("td.IP"+PitcherInfo[0]).html(PostPlayPitcher[0]);
                $("td.H"+PitcherInfo[0]).html(PostPlayPitcher[1]);
                $("td.ER"+PitcherInfo[0]).html(PostPlayPitcher[2]);
                $("td.BB"+PitcherInfo[0]).html(PostPlayPitcher[3]);
                $("td.K"+PitcherInfo[0]).html(PostPlayPitcher[4]);
                $("td.WHIP"+PitcherInfo[0]).html(PostPlayPitcher[5]);
                $("td.ERA"+PitcherInfo[0]).html(PostPlayPitcher[6]);

            } else if (data[1] == 4) {

                // Prepend Play Result Header \\

                $("div.PlayResult").prepend("<div class=\"row\"><div class='"+InnDiv+"' style='width:100%;'><div class=\"col-xl-12 col-lg-12 col-md-12\" style=\"font-size: 18px; font-weight: bold; text-align: center; text-decoration: underline;\">"+InnName+"</div></div></div>");

            }

        });

    });
});