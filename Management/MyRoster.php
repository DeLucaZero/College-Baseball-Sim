<?php

if ($Access == 3 || $Admin == 1){ // Coach with Team or Admin

    if (isset($_GET['ID'])){ // Used for Admin Access

        if ($Admin == 1){
            $ID = $_GET['ID']; // Set ID to the one specified by admin
        } else { // User not admin, use their current team
            $ID = $Coach['TeamID'];
        }

    } else {

        $ID = $Coach['TeamID']; // Used previously set TeamID

    }

    ?>

    <div class="col-xl-12 col-lg-12 col-md-12 col-12">

        <div class="MyRoster">

            <?php
            // Loop through 3 times, once for Catchers, second for Inf, third for OF.
            for ($I = 1; $I <= 3; $I++){

                switch ($I){
                    case 1:
                        $Title = "Catchers";
                        $Pos = 'C';
                        break;
                    case 2:
                        $Title = "Infielders";
                        $Pos = "INF";
                        break;
                    case 3:
                        $Title = "Outfielders";
                        $Pos = "OF";
                        break;
                }

                ?>

                <div class="row MyRosterRow">

                    <div class="col-xl-12 col-lg-12 col-md-12 col-12 mx-auto" style="max-width: 1300px;">

                        <div class="TeamRosterTitle Noise BoxShadowSm" style=""><?php echo $Title;?></div>

                    </div>

                </div>

                <div class="row MyRosterRow NoPad">

                    <div class="col-xl-12 col-lg-12 col-md-12 col-12">

                        <table class="tablesorter Noise BoxShadowSm" style="margin: auto; border-radius: 3px; width: 1200px;">
                            <thead>
                            <tr>

                                <th>Year</th>
                                <th>H</th>
                                <th>Pos</th>
                                <th>Status</th>
                                <th>Rating</th>
                                <th>Name</th>
                                <th>Ovr</th>
                                <th>Avg</th>
                                <th>HR</th>
                                <th>EBH</th>
                                <th>Vis</th>
                                <th>Stl</th>
                                <th>Field</th>
                                <th>Stm</th>
                                <th>Dur</th>
                                <th>Redshirt</th>
                                <th>Portal</th>
                                <th>Cut</th>

                            </tr>
                            </thead>
                            <tbody>

                            <?php
                            // Loop through each player at the specified Pos (C, INF, OF)
                            $P = $DB->Query("SELECT ID,Pos,PrefPos,Nrg,Inj,Stm,H9,K9,BB9,HR9,Posi,Arm,Glv,Grd,Fly,Av,HR,2B,3B,BB,SO,Stl,H,Yr,Sch,Inj,Star,Nme,Dur,Ovr,Rs,Xfer,Twn,St,HS FROM players WHERE TeamID='$ID' AND Pos='$Pos'")->FetchAll();
                            foreach ($P as $P){

                                // Call player class. Global/Functions.php
                                $Player = new Player($DB, $P['ID'], $P);

                                ?>
                                <tr>
                                    <td><div class="ScoreSmall"><?php echo $Player->Yr;?></div> </td>
                                    <td><div class="ScoreSmall"><?php echo $Player->Hand;?></div> </td>
                                    <td><div class="ScoreSmall"><?php echo $Player->PrefPos;?></div> </td>

                                    <td>
                                        <?php

                                        if ($P['Rs'] == 1){
                                            echo " <img class='TRosterStar' src='CSS/Media/Redshirt.png' height='12px' width='12px'> ";
                                        }

                                        if ($P['Sch'] == 1){
                                            echo " <img class='TRosterStar' src='CSS/Media/Scholarship.png' height='12px' width='12px'> ";
                                        }

                                        if ($P['ID'] < 0){
                                            echo " <img class='TRosterStar' src='CSS/Media/Draft.png' height='12px' width='12px'> ";
                                        }


                                        if ($P['Xfer'] > 0){
                                            echo " <img class='TRosterStar' src='CSS/Media/Transfer.png' height='12px' width='12px'> ";
                                        }

                                        if ($P['Inj'] > 0){
                                            echo " <img class='TRosterStar' src='CSS/Media/Injury.png' height='12px' width='12px'> $P[Inj]";
                                        }

                                        ?>
                                    </td>

                                    <td>
                                        <div class="StarOrder"><?php echo "$P[Star]";?></div>

                                        <?php
                                        for ($A = 1; $A <= $P['Star']; $A++){
                                            echo "<img src='CSS/Media/Star.png' height='10px' width='10px'>";
                                        }
                                        ?>
                                    </td>


                                    <td>
                                        <div class="ScoreSmall">
                                            <?php
                                            echo "<a href='index.php?View=Player&ID=$P[ID]'>$Player->Name</a>";
                                            ?>
                                        </div>
                                    </td>
                                    <td><div class="ScoreSmall"><?php echo $Player->Ovr;?></div> </td>
                                    <td><div class="ScoreSmall"><?php echo $Player->Avg;?></div> </td>
                                    <td><div class="ScoreSmall"><?php echo $Player->HR;?></div> </td>
                                    <td><div class="ScoreSmall"><?php echo $Player->EBH;?></div> </td>
                                    <td><div class="ScoreSmall"><?php echo $Player->Vis;?></div> </td>
                                    <td><div class="ScoreSmall"><?php echo $Player->Stl;?></div> </td>
                                    <td><div class="ScoreSmall"><?php echo $Player->Field;?></div> </td>
                                    <td><div class="ScoreSmall"><?php echo $Player->Stam;?></div> </td>
                                    <td><div class="ScoreSmall"><?php echo $Player->Dura;?></div> </td>

                                    <?php

                                    if ($P['Sch'] == 1){ // Scholarship Player

                                        if ($P['Rs'] == 0 AND $Server['Day'] <= 3){ // Players can only redshirt once, and only before Day 4 of the season.

                                            // Calls function in Manager.js, then uses Ajax.
                                            echo "<td><a href='#'><div class='BtnSmall Redshirt' data-ID='$P[ID]'><div class='BtnTextSmall'>Redshirt</div></div></a></td>";

                                        } else {

                                            echo "<td><div class='NoClickBtnSm Redshirt' data-ID='$P[ID]'><div class='BtnTextSmall'>Redshirt</div></div></td>";

                                        }

                                        if ($P['Xfer'] == 0){

                                            // Calls function in Manager.js, then uses Ajax.
                                            echo "<td><a href='#'><div class='BtnSmall Portal' data-ID='$P[ID]'><div class='BtnTextSmall'>Portal</div></div></a></td>";

                                        } else {

                                            echo "<td><a href='#'><div class='NoClickBtnSm Portal' data-ID='$P[ID]'><div class='BtnTextSmall'>Portal</div></div></a></td>";

                                        }

                                        if ($Coach['Cuts'] <= 1 AND $Server['Day'] <= 4){ // Coaches can only Cut 2 players per season and must be done before day 5.

                                            // Calls function in Manager.js, then uses Ajax.
                                            echo "<td><a href='#'><div class='BtnSmall CutPlayer' data-ID='$P[ID]'><div class='BtnTextSmall'>Cut</div></div></a></td>";

                                        } else {

                                            echo "<td><div class='NoClickBtnSm' data-ID='$P[ID]'><div class='BtnTextSmall'>Cut</div></div></td>";

                                        }

                                    } else { // Not a scholarship player

                                        ?>

                                        <td colspan="3"></td>

                                        <?php

                                    }

                                    ?>

                                </tr>
                                <?php
                            }
                            ?>

                            </tbody>
                        </table>

                    </div>

                </div>

                <?php
            }
            ?>

        </div>



    </div>

    <?php

    // Define Log
    $Log = "$LogName viewed TeamID $ID Roster Management - Fielders";

} elseif ($Access != 0) { // Coach without team

    // Define Log
    $Log = "$LogName viewed Roster Management - Fielders without having a team.";

} else { // Guest, not logged in

    // Define Log
    $Log = "$LogName viewed Roster Management - Fielders without being logged in.";

}

