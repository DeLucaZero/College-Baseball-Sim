<?php

if ($Access >= 1){ // User, logged in

    // Days 1-10 Show Top 25 by default
    // Days 11-18 Show All

    // Selected Options
    $Day = $_GET['Day'] ?? $Server['Day'];
    $Time = $_GET['Time'] ?? $Server['Game'];
    $Conf = $_GET['Conf'] ?? 0;
    $Rank = $_GET['Rank'] ?? 1;

    // Day Validation
    if ($Day > 18){
        $Day = 18;
    } elseif ($Day < 1){
        $Day = 1;
    }

    // Time Validation
    if ($Time > 6){
        $Time = 6;
    } elseif ($Time < 1){
        $Time = 1;
    }

    // Conf Validation and Query Prep
    if ($Conf == 0){ // All Conferences
        $Conf = "!=0";
    } else { // Specific Conference
        $Conf = "=$Conf";
    }

    // Rank Validation and Query Prep
    if ($Rank == 1){ // Top 25
        $Rank = "<=25";
    } else { // All Games
        $Rank = ">=0";
    }

    ?>

    <!-- Menu Options -->
    <div class="col-xl-12 col-lg-12 col-md-12 mx-auto" style="border-radius: 6px; margin:auto; font-weight: bold;">

        <div class="row mx-auto">

            <div class="col-xl-12 col-lg-12 col-md-12 mx-auto" style="border-radius: 6px; margin:auto; font-weight: bold;">

                <div style="display: inline-block; padding: 10px;">

                    <label for="GameDay">Day:</label><br>
                    <select name="GameDay" id="GameDay">

                        <?php

                        // Loop through Days 1-18
                        for ($i = 1; $i <= 18; $i++) {

                            if ($Day == $i){ // Selected
                                echo "<option value='$i' selected='selected'>Day $i</option>";
                            } else {
                                echo "<option value='$i'>Day $i</option>";
                            }

                        }

                        ?>

                    </select>

                </div>

                <div style="display: inline-block; padding: 10px;">

                    <label for="GameTime">Game Time:</label><br>
                    <select name="GameTime" id="GameTime">

                        <?php

                        // Loop through Times 1-6 (6 Games per day)
                        for ($i = 1; $i <= 6; $i++) {

                            if ($Time == $i){ // Selected
                                echo "<option value='$i' selected='selected'>Time Slot $i</option>";
                            } else {
                                echo "<option value='$i'>Time Slot $i</option>";
                            }

                        }

                        ?>

                    </select>

                </div>

                <div style="display: inline-block; padding: 10px;">

                    <label for="GameConf">Conference:</label><br>
                    <select name="GameConf" id="GameConf">

                        <?php

                        // Option for All Conferences
                        if ($Conf === "!=0"){ // Selected
                            echo "<option value='0' selected='selected'>All</option>";
                        } else {
                            echo "<option value='0'>All</option>";
                        }

                        // Query to loop conferences
                        $GetConf = $DB->query("SELECT ID, Abbr FROM conferences")->FetchAll();
                        foreach ($GetConf as $Conference) {

                            if ($Conf === "=$Conference[ID]"){ // Selected
                                echo "<option value='$Conference[ID]' selected='selected'>$Conference[Abbr]</option>";
                            } else {
                                echo "<option value='$Conference[ID]'>$Conference[Abbr]</option>";
                            }

                        }

                        ?>

                    </select>

                </div>

                <div style="display: inline-block; padding: 10px;">

                    <label for="GameRank">Rank:</label><br>
                    <select name="GameRank" id="GameRank">

                        <?php

                        // Two Options, Top 25 and All
                        if ($Rank === "<=25"){ // Selected
                            echo "<option value='1' selected='selected'>Top 25</option>";
                        } else {
                            echo "<option value='1'>Top 25</option>";
                        }

                        if ($Rank === ">=0"){ // Selected
                            echo "<option value='1' selected='selected'>All</option>";
                        } else {
                            echo "<option value='1'>All</option>";
                        }

                        ?>

                    </select>

                </div>

                <div style="display: inline-block; padding: 10px;">

                    <label for="none"></label><br>
                    <!-- JS Function in College.JS is called on click to redirect back to View?Scores with GET values. -->
                    <a href='#'><div class='Btn ViewScores'><div class='BtnText'>View</div></div></a>

                </div>

            </div>

        </div>

    </div>

    <!-- Game Results -->
    <div class="col-xl-12 col-lg-12 col-md-12" style="text-align: center; border-radius: 6px; margin:auto; font-weight: bold;">

        <div class="row mx-auto">

            <?php

            // Result Test
            #echo "<br>Day: $Day, Time: $Time, Conf: $Conf, Rank: $Rank";

            // Show selected games
            $G = $DB->Query("SELECT * FROM games WHERE Day='$Day' AND Time='$Time' AND Rank $Rank AND HomeConf $Conf OR  Day='$Day' AND Time='$Time' AND Rank $Rank AND AwayConf $Conf ORDER BY Rank")->FetchAll();
            foreach ($G as $G){

                // Shows a single game, located in Global/Functions.php
                ShowGame($DB, $G);

            }

            ?>

        </div>

    </div>

    <?php

    // Define Log
    $Log = "$LogName viewed College Scores.";

} else { // Guest, no access.


    // Define Log
    $Log = "$LogName tried to view College Scores while not being logged in.";

}

