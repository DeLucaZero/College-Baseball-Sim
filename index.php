<?php

// Check For Mobile, uncomment below when Mobile site is ready.
/*
$isMob = is_numeric(strpos(strtolower($_SERVER["HTTP_USER_AGENT"]), "mobile"));

if($isMob){ // True

	// Send to Mobile Site \\

	header("Location: Mobile/index.php");
	die();

}
*/

// Required for User and main functions
require_once 'Global/Global.php';

?>

    <!DOCTYPE html>

    <html>

    <head>

        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <script type="text/javascript" src="JS/JQuery.min.js"></script>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.6.0/css/bootstrap.min.css">

        <link href="CSS/Global.css" rel="stylesheet" type="text/css" />

        <script type="text/javascript" src="JS/TableSort.js"></script>
        <script type="text/javascript" src="JS/Global.js"></script>
        <script type="text/javascript" src="JS/FloatHead.js"></script>

        <?php

        // This file contains the links to open each page and loads the correct menu items.
        include "Pages.php";

        ?>

        <!-- Title pulled from Pages.php, Description/Keywords pulled from Globals/Global.php -->
        <title><?php echo $Title;?></title>
        <meta name="description" content="<?php echo $Description;?>" />
        <meta name="keywords" content="<?php echo $Keywords;?>" />

    </head>

    <body>

    <!-- HEADER -->
    <div class="container-fluid Noise" style="padding: 0 50px 0 50px;">

        <!-- First Row, Logo and Signup/Login or User Info (If logged in) -->
        <div class="row">

            <!-- Logo -->
            <div class="col-xl-4 col-lg-4 col-md-4" style="text-align: left; padding-top: 5px;">

                <a href="index.php">

                    <img class="img-fluid" src="CSS/Media/LogoAlt.png" width="300px" alt="College Baseball Sim Logo" />

                </a>

            </div>

            <!-- User Info -->
            <div class="col-xl-8 col-lg-8 col-md-8" style="padding-top: 5px; padding-bottom: 5px; font-weight: bold; text-align: center;">

                <?php
                if ($Access == 0){ // Guest, not logged in

                    // Welcome Text
                    echo "Welcome to College Baseball Sim, GUEST.";

                    echo "<br><br>";

                    // Login, Join buttons

                    // Join
                    echo "<a href='users/join.php'><div class='Btn'><div class='BtnText'>Sign Up</div></div></a> ";

                    // Login
                    echo " <a href='users/login.php'><div class='Btn'><div class='BtnText'>Log In</div></div></a>";

                } else { // User, is logged in

                    // Welcome Text
                    echo "Welcome, $LogName | 0 Points | Visit the Store";

                    // Server Info
                    ?>

                    <div class="row" style="padding-bottom: 5px; font-weight: bold; font-size: 12px; text-align: center;">

                        <div class="col-xl-12 col-lg-12 col-md-12">
                            <?php

                            // Set Timezone for Server
                            date_default_timezone_set('America/Los_Angeles');
                            $Time = date('H:i');

                            // Switch to find what the season status is.
                            switch($Server['Day']){
                                case 1:
                                case 2:
                                case 3:
                                case 4:
                                case 5:
                                case 6:
                                case 7:
                                case 8:
                                case 9:
                                case 10:
                                    $Period = "Regular Season";
                                    break;
                                case 11:
                                case 12:
                                    $Period = "Conference Tourney";
                                    break;
                                case 13:
                                case 14:
                                    $Period = "Regionals";
                                    break;
                                case 15:
                                    $Period = "Super Regionals";
                                    break;
                                case 16:
                                case 17:
                                    $Period = "College World Series";
                                    break;
                                case 18:
                                    $Period = "National Championship";
                                    break;
                                case 19:
                                    $Period = "Late Signing Period";
                                    break;
                                case 20:
                                    $Period = "Season Rollover";
                                    break;
                                case 0:
                                    $Period = "Offseason";
                                    break;

                            }

                            // Output info
                            echo "Main Server | Season $Server[Season] | Day $Server[Day] - $Period | $Time Server Time";

                            ?>
                        </div>

                    </div>

                    <?php
                }

                ?>

            </div>

        </div>

        <!-- Second Row, Menu Navigation
        NOTE: Uses JS (Global.js) to display dropdown menus
        -->
        <div class="row" style="margin-top: 5px;">

            <div class="col-xl-12 col-lg-12 col-md-12">

                <!-- Main Nav -->
                <div class="row" style="padding-bottom: 5px; font-weight: bold; font-size: 14px; text-align: center;">
                    <div class="col-xl-12 col-lg-12 col-md-12">

                        <div class="MenuItem dropdown-toggle MenuHover" data-Menu="Main">
                            Main Menu
                        </div>

                        <div class="MenuItem dropdown-toggle MenuHover" data-Menu="Coach">
                            Coach
                        </div>

                        <div class="MenuItem dropdown-toggle MenuHover" data-Menu="Locker">
                            Locker Room
                        </div>

                        <?php
                        if ($Access == 3){ // Coach with Team
                            ?>
                            <div class="MenuItem dropdown-toggle MenuHover" data-Menu="Team">
                                Team Mgmt
                            </div>
                            <?php
                        }
                        ?>

                        <div class="MenuItem dropdown-toggle MenuHover" data-Menu="HS">
                            High School
                        </div>

                        <div class="MenuItem dropdown-toggle MenuHover" data-Menu="JuCo">
                            JuCo
                        </div>

                        <div class="MenuItem dropdown-toggle MenuHover" data-Menu="College">
                            College
                        </div>

                        <div class="MenuItem">
                            <a href="index.php?View=Chat">Chat</a>
                        </div>

                    </div>
                </div>

                <div class="row" style="padding-bottom: 5px; font-weight: bold; font-size: 12px; text-align: center;">

                    <!-- Main Menu Dropdown -->
                    <div class="col-xl-12 col-lg-12 col-md-12 SecondMenu" id="Main" style="display: none;">

                        <a href="index.php">
                            <div class="MenuItem">
                                Home
                            </div>
                        </a>

                        <a href="index.php?View=GameGuide">
                            <div class="MenuItem">
                                Game Guide
                            </div>
                        </a>

                        <a href="index.php?View=Store">
                            <div class="MenuItem">
                                Store
                            </div>
                        </a>

                        <a href="index.php?View=NewsArchive">
                            <div class="MenuItem">
                                News Archive
                            </div>
                        </a>

                        <?php

                        if ($Admin == 1){ // User is Admin

                            ?>

                            <a href="index.php?View=WriteArticle">
                                <div class="MenuItem">
                                    Create Article
                                </div>
                            </a>

                            <?php

                        }

                        ?>

                    </div>

                    <!-- Coach Menu Dropdown -->
                    <div class="col-xl-12 col-lg-12 col-md-12 SecondMenu" id="Coach" style="display: none;">

                        <a href="index.php?View=CreateCoach">
                            <div class="MenuItem">
                                Create Coach
                            </div>
                        </a>

                        <?php

                        if ($CoachID != 0){

                            ?>

                            <a href="index.php?View=MyCoaches">
                                <div class="MenuItem">
                                    My Coaches
                                </div>
                            </a>

                            <a href="index.php?View=CoachProfile">
                                <div class="MenuItem">
                                    Profile
                                </div>
                            </a>

                            <a href="index.php?View=Inbox">
                                <div class="MenuItem">
                                    Inbox
                                </div>
                            </a>

                            <a href="index.php?View=Contract">
                                <div class="MenuItem">
                                    Contracts
                                </div>
                            </a>

                            <?php
                            if ($Access == 3){

                                ?>

                                <a href="index.php?View=LeaveTeam">
                                    <div class="MenuItem">
                                        Leave Team
                                    </div>
                                </a>

                                <?php

                            }
                            ?>

                            <a href="index.php?View=Retire">
                                <div class="MenuItem">
                                    Retire
                                </div>
                            </a>

                            <?php

                        }

                        ?>



                        <?php

                        if ($Admin == 1){

                            ?>

                            <a href="index.php">
                                <div class="MenuItem">
                                    Create Article
                                </div>
                            </a>

                            <?php

                        }

                        ?>

                    </div>

                    <!-- Team Menu Dropdown -->
                    <div class="col-xl-12 col-lg-12 col-md-12 SecondMenu" id="Team" style="display: none;">

                        <a href="index.php?View=MyTeam">
                            <div class="MenuItem">
                                My Team
                            </div>
                        </a>

                        <a href="index.php?View=Inbox">
                            <div class="MenuItem">
                                Inbox
                            </div>
                        </a>

                        <a href="index.php?View=Roster">
                            <div class="MenuItem">
                                Roster Mgmt
                            </div>
                        </a>

                        <a href="index.php?View=Lineups">
                            <div class="MenuItem">
                                Lineups
                            </div>
                        </a>

                        <a href="index.php?View=Scout">
                            <div class="MenuItem">
                                Scouting
                            </div>
                        </a>

                        <a href="index.php?View=Recruiting">
                            <div class="MenuItem">
                                Recruiting
                            </div>
                        </a>

                        <a href="index.php?View=Strategy">
                            <div class="MenuItem">
                                Strategy
                            </div>
                        </a>

                        <a href="index.php?View=Training">
                            <div class="MenuItem">
                                Training
                            </div>
                        </a>

                        <a href="index.php?View=Scheduler">
                            <div class="MenuItem">
                                Custom Scheduler
                            </div>
                        </a>

                    </div>

                    <!-- College Menu Dropdown -->
                    <div class="col-xl-12 col-lg-12 col-md-12 SecondMenu" id="College" style="display: none;">

                        <a href="index.php?View=CollegeCentral">
                            <div class="MenuItem">
                                College Central
                            </div>
                        </a>

                        <a href="index.php?View=TopRecruits">
                            <div class="MenuItem">
                                Top Recruits
                            </div>
                        </a>

                        <a href="index.php?View=Rankings">
                            <div class="MenuItem">
                                Rankings
                            </div>
                        </a>

                        <a href="index.php?View=Stats">
                            <div class="MenuItem">
                                Stats
                            </div>
                        </a>

                        <a href="index.php?View=Scores">
                            <div class="MenuItem">
                                Scores
                            </div>
                        </a>

                        <a href="index.php?View=ConfTourneys">
                            <div class="MenuItem">
                                Conf Tournaments
                            </div>
                        </a>

                        <a href="index.php?View=CWS">
                            <div class="MenuItem">
                                College World Series
                            </div>
                        </a>

                        <a href="index.php?View=CollegeHistory">
                            <div class="MenuItem">
                                History
                            </div>
                        </a>

                    </div>



                </div>

            </div>

        </div>

    </div> <!-- End Header -->



    <!-- CONTENT -->
    <div class="container-fluid" style="overflow-y: auto; padding: 0 100px 10px 100px;">

        <div class="row" style="min-height: 92vh; margin-bottom: 10px;">

            <!-- Main Content -->

            <div class="col-xl-12 col-lg-12 col-md-12" style="margin: 5px 5px 0 5px; border-radius: 8px;">

                <div class="row" style="text-align: center;">

                    <?php

                    // ThirdMenu //
                    if ($ThirdMenu == 1){ // Team Roster Management

                        ?>

                        <div class="col-xl-12 col-lg-12 col-md-12">

                            <a href="index.php?View=Roster"><div class="SecMenuItem">Batters</div></a>

                            <a href="index.php?View=RosterPitchers"><div class="SecMenuItem">Pitchers</div></a>

                            <a href="index.php?View=RosterWalkons"><div class="SecMenuItem">Walk Ons</div></a>

                        </div>

                        <?php

                    } elseif ($ThirdMenu == 2){ // College Stats
                        // SecondMenu //
                        ?>
                        <div class="col-xl-12 col-lg-12 col-md-12">

                            <a href="index.php?View=Stats"><div class="SecMenuItem">Batting Stats</div></a>

                            <a href="index.php?View=TeamStats"><div class="SecMenuItem">Team Batting</div></a>

                            <a href="index.php?View=PitchingStats"><div class="SecMenuItem">Pitching Stats</div></a>

                            <a href="index.php?View=TeamPitching"><div class="SecMenuItem">Team Pitching</div></a>

                            <a href="index.php?View=Records"><div class="SecMenuItem">Record Books</div></a>

                        </div>
                        <?php
                    } elseif ($ThirdMenu == 3){ // Team viewer Menu
                        // SecondMenu //

                        if (!isset($_GET['ID'])) {

                            if ($Access >= 3){
                                $ID = $Coach['TeamID'];
                            } else { // Random
                                $Team = $DB->Query("SELECT ID FROM teams ORDER BY RAND() LIMIT 1")->FetchArray();
                                $ID = $Team['ID'];
                            }

                        } else {
                            $ID = $_GET['ID'];
                        }

                        $Team = $DB->Query("SELECT * FROM teams WHERE ID='$ID'")->FetchArray();
                        ?>

                        <div class="col-xl-12 col-lg-12 col-md-12">

                            <a href="index.php?View=Team&ID=<?php echo $ID;?>"><div class="SecMenuItem"><img src="<?php echo $Team['Logo'];?>" class="img-fluid" width="20px"> <?php echo $Team['Team'];?> Home</div></a>

                            <a href="index.php?View=TeamRoster"><div class="SecMenuItem">Roster</div></a>

                            <a href="index.php?View=TeamBat"><div class="SecMenuItem">Batting Stats</div></a>

                            <a href="index.php?View=TeamPitching"><div class="SecMenuItem">Pitching Stats</div></a>

                            <a href="index.php?View=Records"><div class="SecMenuItem">History</div></a>

                        </div>
                        <?php
                    } elseif ($ThirdMenu == 4){ // Recruiting Menu
                        // SecondMenu //
                        ?>
                        <div class="col-xl-12 col-lg-12 col-md-12">

                            <a href="index.php?View=Recruiting"><div class="SecMenuItem">Targets</div></a>

                            <a href="index.php?View=Commits"><div class="SecMenuItem">Commits</div></a>

                            <a href="index.php?View=WatchList"><div class="SecMenuItem">Watchlist</div></a>

                            <a href="index.php?View=RecommendedTargets"><div class="SecMenuItem">Recommended Targets</div></a>

                            <a href="index.php?View=TransferPortal"><div class="SecMenuItem">Transfer Portal</div></a>

                        </div>
                        <?php
                    }

                    ?>

                    <!-- Include the correct Page -->
                    <?php
                    include_once $Include;
                    ?>

                </div>

            </div>

        </div>

    </div> <!-- END CONTENT -->




    <!-- FOOTER -->

    <div class="container-fluid Noise" style="padding: 0; height: 100%;">

        <div class="container-xl">

            <div class="row align-items-center" style="padding-top: 10px;">

                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12" style="text-align: center; font-weight: bold; font-size: 13px;">

                    &copy; 2023 CollegeBaseballSim.com | &copy; 2023 UserSpice

                </div>

            </div>

        </div>

    </div>

    </div>

    </body>

    </html>

<?php

// Create Log Entry
$Time = date('m/d/Y h:i:s a', time()); // Time of entry
// $Log is generated from inside each page.
// Insert Query
$Main->Query("INSERT INTO `log`(`IP`,`ID`,`Time`,`Desc`)VALUES ('$IP','$UserID','$Time','$Log')");

// Close DB Connections
$Main->Close();
$DB->Close();
