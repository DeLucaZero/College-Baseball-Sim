<?php

// Function to display the Correct Year and Redshirt Status of each player.
function Year($Year,$Redshirt){

    if ($Redshirt != 0) { // Player has been redshirted.

        switch ($Year){
            case 1:
                $Year = "HS FR";
                break;
            case 2:
                $Year = "HS SO";
                break;
            case 3:
                $Year = "HS JR";
                break;
            case 4:
                $Year = "HS SR";
                break;
            case 5:
                $Year = "RS FR";
                break;
            case 6:
                $Year = "RS SO";
                break;
            case 7:
                $Year = "RS JR";
                break;
            case 8:
                $Year = "RS SR";
                break;
            case 9:
                $Year = "GSR";
                break;
            default:
                $Year = "Grad";
                break;
        }

    } else { // No Redshirt.

        switch ($Year){
            case 1:
                $Year = "HS FR";
                break;
            case 2:
                $Year = "HS SO";
                break;
            case 3:
                $Year = "HS JR";
                break;
            case 4:
                $Year = "HS SR";
                break;
            case 5:
                $Year = "FR";
                break;
            case 6:
                $Year = "SO";
                break;
            case 7:
                $Year = "JR";
                break;
            case 8:
                $Year = "SR";
                break;
            case 9:
                $Year = "GSR";
                break;
            default:
                $Year = "Grad";
                break;
        }

    }

    // Return Year String.
    return $Year;

}

function Ordinal($num) {
    $ones = $num % 10;
    $tens = floor($num / 10) % 10;
    if ($tens == 1) {
        $suff = "th";
    } else {
        switch ($ones) {
            case 1 : $suff = "st"; break;
            case 2 : $suff = "nd"; break;
            case 3 : $suff = "rd"; break;
            default : $suff = "th";
        }
    }
    return $num . $suff;
}
function NewCollegeOffers($Coach, $DB, $Main){

    for ($I = 1; $I <= 3; $I++){

        $Offers = 0;

        $Team1 = 0;
        $Team2 = 0;
        $Team3 = 0;
        $Team4 = 0;
        $Team5 = 0;

        while ($Offers < 5){

            $TQ = "ID!='$Team1' AND ID!='$Team2' AND ID!='$Team3' AND ID!='$Team4' AND ID!='$Team5'";

            $GetTeams = $DB->Query("SELECT ID,ConfID FROM teams WHERE CPUMgr=1 AND Tier='$I' AND $TQ OR MgrID=0 AND Tier='$I' AND $TQ ORDER BY RAND() LIMIT 50")->NumRows();

            if ($GetTeams == 0){

                $Offers = 5;

            } else {

                if ($GetTeams < 5){

                    $Offers = 5 - $GetTeams;

                }

                $GetTeams = $DB->Query("SELECT ID,ConfID FROM teams WHERE CPUMgr=1 AND Tier='$I' AND $TQ OR MgrID=0 AND Tier='$I' AND $TQ ORDER BY RAND() LIMIT 50")->FetchAll();

                foreach ($GetTeams as $T){

                    if ($Offers <= 4){

                        // Make Offer \\

                        if ($I == 1){

                            $Cash = mt_rand(190,250) * 1000;
                            $Yrs = 2;
                            $Buyout = mt_rand(75,120) * 1000;
                            $Expiration = 3;

                        } elseif ($I == 2){

                            $Cash = mt_rand(85,130) * 1000;
                            $Yrs = 3;
                            $Buyout = mt_rand(30,60) * 1000;
                            $Expiration = 3;

                        } elseif ($I == 3){

                            $Cash = mt_rand(20,60) * 1000;
                            $Yrs = 4;
                            $Buyout = mt_rand(5,20) * 1000;
                            $Expiration = 3;

                        }

                        $Main->Query("INSERT INTO contract_offers(ID,TeamID,Pay,Yrs,Buyout,Expires)VALUES('$Coach[ID]','$T[ID]','$Cash','$Yrs','$Buyout','$Expiration')");

                        switch ($Offers){
                            case 0:
                                $Team1 = $T['ID'];
                                break;
                            case 1:
                                $Team2 = $T['ID'];
                                break;
                            case 2:
                                $Team3 = $T['ID'];
                                break;
                            case 3:
                                $Team4 = $T['ID'];
                                break;
                            case 4:
                                $Team5 = $T['ID'];
                                break;
                        }

                        #echo "TeamID!='$Team1' AND TeamID!='$Team2' AND TeamID!='$Team3' AND TeamID!='$Team4' AND TeamID!='$Team5'";
                        #exit;

                        ++$Offers;

                    } else {
                        break;
                    }


                }

            }

        }

    }


}

function GenerateOffers($Coach ,$DB, $Main){

    for ($I = 1; $I <= 3; $I++){

        $Offers = 0;

        $Team1 = 0;
        $Team2 = 0;
        $Team3 = 0;

        while ($Offers < 3){

            $TQ = "ID!='$Team1' AND ID!='$Team2' AND ID!='$Team3'";

            $GetTeams = $DB->Query("SELECT ID,ConfID FROM baseball_teams WHERE CPUMgr=1 AND Tier='$I' AND $TQ OR MgrID=0 AND Tier='$I' AND $TQ ORDER BY RAND() LIMIT 50")->NumRows();

            if ($GetTeams == 0){

                $Offers = 3;

            } else {

                if ($GetTeams < 3){

                    $Offers = 3 - $GetTeams;

                }

                $GetTeams = $DB->Query("SELECT ID,ConfID FROM baseball_teams WHERE CPUMgr=1 AND Tier='$I' AND $TQ OR MgrID=0 AND Tier='$I' AND $TQ ORDER BY RAND() LIMIT 50")->FetchAll();
                foreach ($GetTeams as $T){

                    if($Offers <= 2){

                        $Conf = $DB->Query("SELECT Tier,AvgPay FROM conferences WHERE ID='$T[ConfID]'")->FetchArray();
                        
                        // Make Offer \\

                        if ($I == 1){

                            if ($Coach['Tier'] <= 3){ // Extremely High Offers 30-40% Above Conf Avg \\

                                $HighMod = 1.5;
                                $LowMod = 1.3;
                                $Yrs = mt_rand(4,8);

                            } elseif ( $Coach['Tier'] <= 5){

                                $HighMod = 1.3;
                                $LowMod = 1;
                                $Yrs = mt_rand(4,7);

                            } elseif ($Coach['Tier'] <= 7){

                                $HighMod = 1.1;
                                $LowMod = .9;
                                $Yrs = mt_rand(3,5);

                            } elseif ($Coach['Tier'] <= 10){

                                $HighMod = .9;
                                $LowMod = .6;
                                $Yrs = mt_rand(2,4);

                            } else {

                                $HighMod = .6;
                                $LowMod = .35;
                                $Yrs = mt_rand(2,3);

                            }

                            $High = round ($Conf['AvgPay'] * $HighMod);
                            $Low = round ($Conf['AvgPay'] * $LowMod);

                            $Pay = mt_rand($Low,$High);
                            $Buyout = mt_rand(75,180) / 100;
                            $Buyout = round ($Pay * $Buyout );
                            $Expiration = 3;

                        } elseif ($I == 2){

                            if ($Coach['Tier'] <= 3){ // Extremely High Offers Above Conf Avg \\

                                $HighMod = 1.8;
                                $LowMod = 1.5;
                                $Yrs = mt_rand(4,8);

                            } elseif ( $Coach['Tier'] <= 5){

                                $HighMod = 1.5;
                                $LowMod = 1.3;
                                $Yrs = mt_rand(4,7);

                            } elseif ($Coach['Tier'] <= 7){

                                $HighMod = 1.3;
                                $LowMod = 1.1;
                                $Yrs = mt_rand(3,5);

                            } elseif ($Coach['Tier'] <= 10){

                                $HighMod = 1.1;
                                $LowMod = .8;
                                $Yrs = mt_rand(2,4);

                            } else {

                                $HighMod = .8;
                                $LowMod = .4;
                                $Yrs = mt_rand(2,3);

                            }

                            $High = round ($Conf['AvgPay'] * $HighMod);
                            $Low = round ($Conf['AvgPay'] * $LowMod);

                            $Pay = mt_rand($Low,$High);
                            $Buyout = mt_rand(50,100) / 100;
                            $Buyout = round ($Pay * $Buyout );
                            $Expiration = 3;

                        } elseif ($I == 3){

                            if ($Coach['Tier'] <= 3){ // Extremely High Offers Above Conf Avg \\

                                $HighMod = 2.2;
                                $LowMod = 1.9;
                                $Yrs = mt_rand(4,8);

                            } elseif ( $Coach['Tier'] <= 5){

                                $HighMod = 1.9;
                                $LowMod = 1.6;
                                $Yrs = mt_rand(4,7);

                            } elseif ($Coach['Tier'] <= 7){

                                $HighMod = 1.6;
                                $LowMod = 1.4;
                                $Yrs = mt_rand(3,5);

                            } elseif ($Coach['Tier'] <= 10){

                                $HighMod = 1.3;
                                $LowMod = .8;
                                $Yrs = mt_rand(2,4);

                            } else {

                                $HighMod = .8;
                                $LowMod = .3;
                                $Yrs = mt_rand(2,3);

                            }

                            $High = round ($Conf['AvgPay'] * $HighMod);
                            $Low = round ($Conf['AvgPay'] * $LowMod);

                            $Pay = mt_rand($Low,$High);
                            $Buyout = mt_rand(20,50) / 100;
                            $Buyout = round ($Pay * $Buyout );
                            $Expiration = 3;

                        }

                        $Pay = round (($Pay / 1000) ) * 1000;
                        $Buyout = round (($Buyout / 1000) ) * 1000;

                        mysqli_query($DB,"INSERT INTO contract_offers(ID,TeamID,Pay,Yrs,Buyout,Expires)VALUES('$Coach[ID]','$T[ID]','$Pay','$Yrs','$Buyout','$Expiration')") or die(mysqli_error($DB));

                        switch ($Offers){
                            case 0:
                                $Team1 = $T['ID'];
                                break;
                            case 1:
                                $Team2 = $T['ID'];
                                break;
                            case 2:
                                $Team3 = $T['ID'];
                                break;
                        }

                        #echo "TeamID!='$Team1' AND TeamID!='$Team2' AND TeamID!='$Team3' AND TeamID!='$Team4' AND TeamID!='$Team5'";
                        #exit;

                        ++$Offers;

                    }

                }

            }

        }

    }

}

function ShowGame($DB, $G){

    // Get Teams Info
    $Away = $DB->Query("SELECT Team,Logo,Wins,Loss FROM teams WHERE ID='$G[AwayID]'")->FetchArray();
    $Home = $DB->Query("SELECT Team,Logo,Wins,Loss FROM teams WHERE ID='$G[HomeID]'")->FetchArray();

    // Get Ranks
    $AwayR = $DB->Query("SELECT Rank FROM rankings WHERE ID='$G[AwayID]'")->FetchArray();
    $HomeR = $DB->Query("SELECT Rank FROM rankings WHERE ID='$G[HomeID]'")->FetchArray();

    $AwayRank = $AwayR['Rank'] <= 25 ? $AwayR['Rank'] : "";
    $HomeRank = $HomeR['Rank'] <= 25 ? $HomeR['Rank'] : "";

    ?>

    <div class="col-xl-4 col-lg-4 col-md-4 Noise mx-auto" style="margin: 5px 10px 10px 0; border-radius: 6px; max-width: 350px;">

        <div class="row">
            <div class="col-xl-10 col-lg-10 col-md-10" style="padding-top: 5px; padding-bottom: 5px;text-align: left;">

                <?php
                echo "<div style='font-size: 11px; display: inline-block;'>$AwayRank</div> <div class='' style='display: inline-block; font-size: 14px;'><a href='index.php?View=Team&ID=$G[AwayID]'><img class='img-fluid' src='$Away[Logo]' width='25px'> $Away[Team]</a></div> <div style='font-size: 11px; display: inline-block;'> $Away[Wins]-$Away[Loss]</div>";
                ?>

            </div>

            <div class="col-xl-2 col-lg-2 col-md-2" style="padding-top: 5px; padding-bottom: 5px; text-align: right;">

                <?php
                if ($G['Status'] == 0){
                    echo "<div style='font-size: 11px; display: inline-block;'></div>";
                } else {
                    echo "<div style='font-size: 11px; display: inline-block;'>$G[AwayScore]</div>";
                }

                ?>

            </div>
        </div>

        <div class="row">
            <div class="col-xl-10 col-lg-10 col-md-10" style="padding-bottom: 5px; text-align: left;">

                <?php
                echo "<div style='font-size: 11px; display: inline-block;'>$HomeRank</div> <div style='font-size: 14px; display: inline-block;'><a href='index.php?View=Team&ID=$G[HomeID]'><img class='img-fluid' src='$Home[Logo]' width='25px'> $Home[Team]</a></div> <div style='font-size: 11px; display: inline-block;'> $Home[Wins]-$Home[Loss]</div>";
                ?>

            </div>

            <div class="col-xl-2 col-lg-2 col-md-2" style="padding-bottom: 5px; text-align: right;">

                <?php
                if ($G['Status'] == 0){
                    echo "<div style='font-size: 11px; display: inline-block;'></div>";
                } else {
                    echo "<div style='font-size: 11px; display: inline-block;'>$G[HomeScore]</div>";
                }
                ?>

            </div>
        </div>

        <div class="row" style="font-weight: bold; font-size: 11px;">

            <div class="col-xl-6 col-lg-6 col-md-6" style="padding-bottom: 5px;">

                <?php
                echo "Regular Season";

                ?>

            </div>

            <div class="col-xl-6 col-lg-6 col-md-6" style="padding-bottom: 5px;">

                <?php
                if ($G['Status'] == 2){
                    echo "[Boxscore]";
                } else {

                    switch ($G['Time']){
                        case 1:
                            echo "13:00 ST";
                            break;
                        default:
                            echo "12:00 ST";
                            break;

                    }

                }

                ?>

            </div>
        </div>
    </div>

    <?php
}

function Avg($Avg){

    if ($Avg == 0) {
        $Avg = ".000";
    } elseif ($Avg == 1) {
        $Avg = "1.000";
    } elseif ($Avg < 1) {
        $Avg = substr($Avg,1);

        if (strlen($Avg) == 2){
            $Avg = $Avg."00";
        } elseif (strlen($Avg) == 3){
            $Avg = $Avg."0";
        }

    }

    return $Avg;

}

function FIPConstant($DB){

    // FIP Constant
    $Sum = $DB->Query("SELECT SUM(Outs) AS Outs, SUM(ER) AS ER, SUM(HR) AS HR, SUM(BB) AS BB, SUM(SO) AS SO FROM stats_pitching_season WHERE Outs>0")->FetchArray();

    $BaseERA = (13 * $Sum['HR'] + 3 * ($Sum['BB']) - 2 * $Sum['SO']) / ($Sum['Outs'] / 3);
    $FIPConstant = $BaseERA + 3.2;

    return $FIPConstant;

}

function FIP($P,$FIPConstant){

    $ERA = (13 * $P['HR'] + 3 * ($P['BB']) - 2 * $P['SO']) / ($P['Outs'] / 3);

    return round($FIPConstant + $ERA,2);

}



function MaxBudgets($Team, $Mgr){

    $Budget = 0;
    $JrBudget = 0;

    switch ($Team['Tier']){
        case 1:
            $Budget += 200;
            $JrBudget += 100;
            break;
        case 2:
            $Budget += 125;
            $JrBudget += 70;
            break;
        case 3:
            $Budget += 50;
            $JrBudget += 25;
            break;
    }

    switch ($Mgr['ExtraFocus']){

        case 1:
            $Budget += 30;
            $JrBudget += 30;
            break;
        case 2:
            $Budget += 60;
            $JrBudget += 60;
            break;
        case 3:
            $Budget += 90;
            $JrBudget += 90;
            break;
        case 4:
            $Budget += 120;
            $JrBudget += 120;
            break;
        case 5:
            $Budget += 150;
            $JrBudget += 150;
            break;

    }

    return array($Budget, $JrBudget);

}

function CurrentBudgets($DB, $Team, $Mgr){

    $Budget = 0;
    $JrBudget = 0;

    switch ($Team['Tier']){
        case 1:
            $Budget += 200;
            $JrBudget += 100;
            break;
        case 2:
            $Budget += 125;
            $JrBudget += 70;
            break;
        case 3:
            $Budget += 50;
            $JrBudget += 25;
            break;
    }

    switch ($Mgr['ExtraFocus']){

        case 1:
            $Budget += 30;
            $JrBudget += 30;
            break;
        case 2:
            $Budget += 60;
            $JrBudget += 60;
            break;
        case 3:
            $Budget += 90;
            $JrBudget += 90;
            break;
        case 4:
            $Budget += 120;
            $JrBudget += 120;
            break;
        case 5:
            $Budget += 150;
            $JrBudget += 150;
            break;

    }

    $Board = $DB->Query("SELECT Focus FROM `recruiting_board` WHERE `CoachID`='$Mgr[ID]' AND `Active`=1 AND Yr >= 4 OR (TeamID='$Team[ID]' AND StaffID=0 AND Active=1 AND Yr >= 4)")->FetchAll();
    foreach ($Board as $B){

        $Budget -= $B['Focus'];

    }

    return array($Budget, $JrBudget);

}

function Scholarships($DB, $Team, $Mgr){

    $Scholarships = 27;

    switch ($Mgr['ExtraSch']){
        case 1:
            $Scholarships += 1;
            break;
        case 2:
            $Scholarships += 2;
            break;
        case 3:
            $Scholarships += 4;
            break;
        case 4:
            $Scholarships += 6;
            break;
        case 5:
            $Scholarships += 8;
            break;
    }

    // Seniors and Redshirt Seniors //
    $Seniors = $DB->Query("SELECT ID FROM players WHERE `TeamID`='$Team[ID]' AND `Yr`=9 AND Sch=1 OR `TeamID`='$Team[ID]' AND `Yr`=8 AND Rs=0 AND Sch=1 OR `TeamID`='$Team[ID]' AND `Draft`=2")->NumRows();
    $AllPlayers = $DB->Query("SELECT ID FROM players WHERE `TeamID`='$Team[ID]' AND `Sch`=1 OR `Cmt`='$Team[ID]' AND `Sgn`=1")->NumRows();

    $Scholarships -= $AllPlayers - $Seniors;

    return $Scholarships;
}

class Player {

    // Public Variables //
    public $ID;
    public $Name;
    public $ShortName;
    public $Year;
    Public $Yr;
    public $RedShirt;
    public $Pos;
    public $PrefPos;
    public $Hand;
    public $HomeTown;
    public $TeamID;
    public $HSID;
    public $Ovr;
    public $Stam;
    public $Dura;
    public $Posi;
    public $Arm;
    public $Glv;
    public $Grd;
    public $Fly;
    public $Avg;
    public $HR;
    public $Dub;
    public $Trip;
    public $Walk;
    public $SO;
    public $EBH;
    public $Vis;
    public $Field;
    public $Stl;
    public $H9;
    public $K9;
    public $BB9;
    public $HR9;

    // Constructor
    public function __construct($DB, $ID, $P){

        // Player Information
        $this->ID = $ID;
        $this->Name = $P['Nme'];
        $this->ShortName = ShortName($this->Name);
        $this->Year = $P['Yr'];
        $this->RedShirt = $P['Rs'];
        $this->Yr = Year($this->Year, $this->RedShirt);
        $this->Pos = $P['Pos'];
        $this->PrefPos = $P['PrefPos'];
        $this->HomeTown = "$P[Twn], $P[St]";
        $this->HSID = $P['HS'];
        $this->Hand = $P['H'];

        // Neutral Attributes
        $this->Stam = $P['Stm'];
        $this->Dura = $P['Dur'];

        // Batting/Fielding Attributes
        $this->Posi = $P['Posi'];
        $this->Arm = $P['Arm'];
        $this->Glv = $P['Glv'];
        $this->Grd = $P['Grd'];
        $this->Fly = $P['Fly'];
        $this->Avg = $P['Av'];
        $this->HR = $P['HR'];
        $this->Dub = $P['2B'];
        $this->Trip = $P['3B'];
        $this->Walk = $P['BB'];
        $this->SO = $P['SO'];
        $this->Stl = $P['Stl'];

        // Pitchings Attributes
        $this->H9 = $P['H9'];
        $this->K9 = $P['K9'];
        $this->BB9 = $P['BB9'];
        $this->HR9 = $P['HR9'];

        $this->EBH = round( ($this->Dub + $this->Trip) / 2);
        $this->Vis = round( ($this->Walk + $this->SO) / 2);
        $this->Field = round( ($this->Posi + $this->Arm + $this->Glv + $this->Grd + $this->Fly) / 5);

        // Training \\

        // Temp Boosts \\

        // Equipment \\

        // Correct Overalls
        switch ($this->PrefPos){
            case "SP":
                $this->Ovr = round ( ( ($this->Stam - 25) + ($this->H9 - 25) + ($this->K9 - 25)  + ($this->BB9 - 25)  + ($this->HR9 - 25)) / 4.93 + 25);
                break;
            case "RP":
                $this->Ovr = round ( ( ($this->Stam - 25) + ($this->H9 - 25) + ($this->K9 - 25)  + ($this->BB9 - 25)  + ($this->HR9 - 25)) / 4.17 + 25);
                break;
            case "CL":
                $this->Ovr = round ( ( ($this->Stam - 25) + ($this->H9 - 25) + ($this->K9 - 25)  + ($this->BB9 - 25)  + ($this->HR9 - 25)) / 4 + 25);
                break;
            case "C":
                $this->Ovr = round ( ( $this->Stam + $this->Posi + $this->Arm + $this->Glv + $this->Grd + $this->Fly + $this->Avg + $this->HR + $this->Dub + $this->Trip + $this->Walk + $this->SO + $this->Stl - 325) / 8.934 + 25);
                break;
            case "1B":
                $this->Ovr = round ( ( $this->Stam + $this->Posi + $this->Arm + $this->Glv + $this->Grd + $this->Fly + $this->Avg + $this->HR + $this->Dub + $this->Trip + $this->Walk + $this->SO + $this->Stl - 325) / 9.466 + 25);
                break;
            case "2B":
                $this->Ovr = round ( ( $this->Stam + $this->Posi + $this->Arm + $this->Glv + $this->Grd + $this->Fly + $this->Avg + $this->HR + $this->Dub + $this->Trip + $this->Walk + $this->SO + $this->Stl - 325) / 10.8 + 25);
                break;
            case "SS":
                $this->Ovr = round ( ( $this->Stam + $this->Posi + $this->Arm + $this->Glv + $this->Grd + $this->Fly + $this->Avg + $this->HR + $this->Dub + $this->Trip + $this->Walk + $this->SO + $this->Stl - 325) / 10.6 + 25);
                break;
            case "3B":
            case "RF":
                $this->Ovr = round ( ( $this->Stam + $this->Posi + $this->Arm + $this->Glv + $this->Grd + $this->Fly + $this->Avg + $this->HR + $this->Dub + $this->Trip + $this->Walk + $this->SO + $this->Stl - 325) / 9.734 + 25);
                break;
            case "CF":
                $this->Ovr = round ( ( $this->Stam + $this->Posi + $this->Arm + $this->Glv + $this->Grd + $this->Fly + $this->Avg + $this->HR + $this->Dub + $this->Trip + $this->Walk + $this->SO + $this->Stl - 325) / 11.14 + 25);
                break;
            case "LF":
                $this->Ovr = round ( ( $this->Stam + $this->Posi + $this->Arm + $this->Glv + $this->Grd + $this->Fly + $this->Avg + $this->HR + $this->Dub + $this->Trip + $this->Walk + $this->SO + $this->Stl - 325) / 10.26 + 25);
                break;
        }

    }

}

function ShortName($Name){

    $FName = substr($Name,0,1).".";
    $LastName = substr($Name, strrpos($Name, ' ') + 1);
    $ShortName = "$FName $LastName";

    return $ShortName;
}