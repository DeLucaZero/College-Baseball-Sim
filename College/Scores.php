<?php

if ($Access >= 1){ // User, logged in

    // Days 1-10 Show Top 25 by default
    // Days 11-18 Show All

    // Selected Options
    $Day = $_GET['Day'] ?? $Server['Day'];
    $Time = $_GET['Time'] ?? $Server['Game'];
    $Conf = $_GET['Conf'] ?? "!=0";
    $Rank = $_GET['Rank'] ?? "<=25";

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

                        // Loop through Conferences
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

                    <label for="GameRank">Rank:</label><br>
                    <select name="GameRank" id="GameRank">

                        <?php

                        // Loop through Conferences
                        for ($i = 1; $i <= 2; $i++) {

                            switch ($i) {
                                case 1:
                                    $Option = "Top 25";
                                    break;
                                case 2:
                                    $Option = "Any";
                                    break;
                            }

                            if ($Time == $i){ // Selected
                                echo "<option value='$i' selected='selected'>$Option</option>";
                            } else {
                                echo "<option value='$i'>$Option</option>";
                            }

                        }

                        ?>

                    </select>

                </div>

            </div>

        </div>

    </div>

    <!-- Game Results -->
    <div class="col-xl-12 col-lg-12 col-md-12" style="text-align: center; border-radius: 6px; margin:auto; font-weight: bold;">

        <div class="row mx-auto">

        </div>

    </div>

    <?php

    // Define Log
    $Log = "$LogName viewed College Scores.";

} else { // Guest, no access.


    // Define Log
    $Log = "$LogName tried to view College Scores while not being logged in.";

}

