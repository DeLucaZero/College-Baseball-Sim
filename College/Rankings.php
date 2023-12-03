<?php

// Rankings update Twice per day. Once after each Series in the day.

if ($Access >= 1){ // User logged in

    ?>

    <div class="col-xl-12 col-lg-12 col-md-12 Noise" style="text-align: center; border-radius: 6px; max-width: 45%; margin:auto; font-weight: bold; padding: 0 10px 0 10px;">

        <table class="tablesorter" style="width: 100%;">

            <thead>
            <tr>
                <th>Rank</th>
                <th>Team</th>
                <th>Record</th>
                <th>Pts</th>
                <?php if ($Admin == 1){echo "<th>Talent</th>";}?>
                <th>RPI</th>
                <th>PtDiff</th>
                <th>SoW</th>
                <th>SoL</th>
                <th>SoS</th>
                <th>Change</th>
            </tr>
            </thead>

            <?php
            $Rank = 1;

            $Ranks = $DB->Query("SELECT * FROM rankings ORDER BY `Rank`")->FetchAll();
            foreach ($Ranks as $Ranks){

                ?>

                <tr>
                    <td><?php echo $Rank;?></td>

                    <td>
                        <?php
                        $Team = $DB->Query("SELECT Team,Logo,Wins,Loss FROM teams WHERE ID='$Ranks[ID]'")->FetchArray();

                        echo "<a href='index.php?View=Team&ID=$Ranks[ID]'><img class='img-fluid' width='40px' src='$Team[Logo]'> $Team[Team]</a>";
                        ?>
                    </td>

                    <td><?php echo "$Team[Wins]-$Team[Loss]"?></td>
                    <td><?php echo $Ranks['Pts'];?></td>
                    <?php if ($Admin == 1){echo "<td>$Ranks[Talent]</td>";}?>
                    <td><?php echo $Ranks['RPI'];?></td>
                    <td><?php echo $Ranks['PtDiff'];?></td>
                    <td><?php echo $Ranks['SoW'];?></td>
                    <td><?php echo $Ranks['SoL'];?></td>
                    <td><?php echo $Ranks['SoS'];?></td>
                    <td><?php ?></td>
                </tr>

                <?php

                // Increment Rank
                ++$Rank;

            }

            ?>

            <tbody>



            </tbody>

        </table>

    </div>



    <?php

    // Define Log
    $Log = "$LogName viewed the College Power Rankings.";

} else { // Guest, not logged in, not allowed to view.

    // Define Log
    $Log = "$LogName attempted to view the College Power Rankings without being logged in.";

}
