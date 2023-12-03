<?php

if (!isset($_GET['View'])){ // No Page Selected, Index is the default

    $MenuType = "Main";
    $ThirdMenu = "None";
    $Title = "College Baseball Sim";

    if ($Access == 0){ // Guest not logged in
        $Include = "Main/Index-Guest.php";
    } else { // User logged in
        $Include = "Main/Index-User.php";
    }

} else { // View is set

    $Page = $_GET['View']; // Page name

    switch ($Page){

        case "GameGuide":
            $Title = "College Baseball Sim: Game Guide";
            $ThirdMenu = 0;
            $Include = "Main/GameGuide.php";
            echo "<script type='text/javascript' src='JS/Global.js'></script>";
            break;

        case "Store":
            $Title = "College Baseball Sim: Store";
            $ThirdMenu = 0;
            $Include = "Main/Store.php";
            echo "<script type='text/javascript' src='JS/Global.js'></script>";
            break;

        case "NewsArchive":
            $Title = "College Baseball Sim: News Archive";
            $ThirdMenu = 0;
            $Include = "Main/Archive.php";
            echo "<script type='text/javascript' src='JS/Global.js'></script>";
            break;

        case "WriteArticle":
            $Title = "College Baseball Sim: Article Creator";
            $ThirdMenu = 0;
            $Include = "Main/WriteArticle.php";
            echo "<script type='text/javascript' src='JS/Global.js'></script>";
            break;

        case "CreateCoach":
            $Title = "College Baseball Sim: Create a Coach";
            $ThirdMenu = 0;
            $Include = "Coach/Create.php";
            echo "<script type='text/javascript' src='JS/Global.js'></script>";
            break;

        case "MyCoaches":
            $Title = "College Baseball Sim: My Coaches";
            $ThirdMenu = 0;
            $Include = "Coach/View.php";
            echo "<script type='text/javascript' src='JS/Global.js'></script>";
            break;

        case "CoachProfile":
            $Title = "College Baseball Sim: Coach Profile";
            $ThirdMenu = 0;
            $Include = "Coach/Profile.php";
            echo "<script type='text/javascript' src='JS/Global.js'></script>";
            break;

        case "Inbox":
            $Title = "College Baseball Sim: Coach Inbox";
            $ThirdMenu = 0;
            $Include = "Coach/Inbox.php";
            echo "<script type='text/javascript' src='JS/Global.js'></script>";
            break;

        case "LeaveTeam":
            $Title = "College Baseball Sim: Leave Team";
            $ThirdMenu = 0;
            $Include = "Coach/Leave.php";
            echo "<script type='text/javascript' src='JS/Global.js'></script>";
            break;

        case "Retire":
            $Title = "College Baseball Sim: Coach Retirement";
            $ThirdMenu = 0;
            $Include = "Coach/Retire.php";
            echo "<script type='text/javascript' src='JS/Global.js'></script>";
            break;

        case "FindTeam":
        case "Contract":
            $Title = "College Baseball Simulation: Contract Offers";
            $ThirdMenu = 0;
            $Include = "Coach/Contracts.php";
            echo "<script type='text/javascript' src='JS/Manager.js'></script>";
            break;

        case "Roster":
            $Title = "College Baseball Simulation: Roster Management";
            $ThirdMenu = 1;
            $Include = "Management/MyRoster.php";
            echo "<script type='text/javascript' src='JS/Manager.js'></script>";
            break;

        case "RosterPitchers":
            $Title = "College Baseball Simulation: Roster Management";
            $ThirdMenu = 1;
            $Include = "Management/MyRosterPitchers.php";
            echo "<script type='text/javascript' src='JS/Manager.js'></script>";
            break;

        case "RosterWalkons":
            $Title = "College Baseball Simulation: Roster Management";
            $ThirdMenu = 1;
            $Include = "Management/Walkons.php";
            echo "<script type='text/javascript' src='JS/Manager.js'></script>";
            break;

        case "Rankings":
            $Title = "College Baseball Sim: College Rankings";
            $ThirdMenu = 0;
            $Include = "College/Rankings.php";
            echo "<script type='text/javascript' src='JS/College.js'></script>";
            break;

        case "Scores":
            $Title = "College Baseball Sim: College Scores";
            $ThirdMenu = 0;
            $Include = "College/Scores.php";
            echo "<script type='text/javascript' src='JS/College.js'></script>";
            break;

        case "Stats":
            $Title = "College Baseball Sim: Batting Stats";
            $ThirdMenu = 2;
            $Include = "College/Stats.php";
            echo "<script type='text/javascript' src='JS/College.js'></script>";
            break;

        case "PitchingStats":
            $Title = "College Baseball Sim: Pitching Stats";
            $ThirdMenu = 2;
            $Include = "College/PitchingStats.php";
            echo "<script type='text/javascript' src='JS/College.js'></script>";
            break;


        case "Tournament":
            $Title = "College Baseball Sim: College World Series";
            $ThirdMenu = 0;
            $Include = "College/National.php";
            echo "<script type='text/javascript' src='JS/College.js'></script>";
            break;

        case "Team":
        case "MyTeam":
            $Title = "College Baseball Sim: Team Profile";
            $ThirdMenu = 3;
            $Include = "Team/Team.php";
            echo "<script type='text/javascript' src='JS/College.js'></script>";
            break;

        case "TeamRoster":
            $Title = "College Baseball Sim: Team Roster";
            $ThirdMenu = 3;
            $Include = "Team/Roster.php";
            echo "<script type='text/javascript' src='JS/College.js'></script>";
            break;

        case "TeamBat":
            $Title = "College Baseball Sim: Team Batting Stats";
            $ThirdMenu = 3;
            $Include = "Team/BattingStats.php";
            echo "<script type='text/javascript' src='JS/College.js'></script>";
            break;

        case "Recruiting":
            $Title = "College Baseball Sim: Recruiting Board";
            $ThirdMenu = 4;
            $Include = "Recruit/Targets.php";
            echo "<script type='text/javascript' src='JS/Recruit.js'></script>";
            break;



    }

}
