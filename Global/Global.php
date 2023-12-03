<?php

// Get Database Class
include 'Database.php';

// Create Database Connections

// CBS_Main is for User and General Website Database
$Main = new Database('localhost', 'root', '', 'cbs_main', 'utf8');

// CBS is used for Game data.
$DB = new Database('localhost', 'root', '', 'cbs', 'utf8');

// Defining root for use in embedded folders
define('ROOT', $_SERVER['DOCUMENT_ROOT']);

// Required for UserSpice user management system.
/*
 *CHANGE 'CBS' in next line to Directory Name you are using
*/
require_once(ROOT."/CBS/users/init.php");


// User is Logged In
if (isset($user) && $user->isLoggedIn()) {

    // Check if User has active Coach
    if ($user->data()->CoachID != 0){

        // Access to Coach Related Items
        $Access = 2;

        // Extra Variables
        $CoachID = $user->data()->CoachID;

        // Get Coach Info
        $Coach = $DB->Query("SELECT * FROM coaches WHERE ID='$CoachID'")->FetchArray();

        // Check if Coach Has Team
        if ($Coach['TeamID'] != 0){

            // Full Team Access
            $Access = 3;

        }

        // Update Activity
        if ($Coach['Active'] == 0){

            // Update Active Days
            $DB->Query("UPDATE `coaches` SET `Active`=1, `ActiveDays`=`ActiveDays`+1 WHERE `ID`='$CoachID'");

        }

    } else {

        // Limit Access to Non-Coach related stuff
        $Access = 1;

        // Variables
        $CoachID = 0;

    }

    // User Variables
    $UserID = $user->data()->id;
    $LogName = $user->data()->username;
    $Cash = $user->data()->Pts;
    $Admin = $user->data()->Admin;
    #$LastChat = $user->data()->LastChat;

} else { // Guest, not logged in

    // Limit Guest Access
    $Access = 0;

    // Variables
    $UserID = 0;
    $LogName = 'Guest';
    $Admin = 0;

}

// Website Description and Keywords
$Description = "";
$Keywords = "";

// User IP
$IP = $_SERVER['REMOTE_ADDR'];

// Server Info
$Server = $Main->Query("SELECT * FROM servers WHERE ID=1")->FetchArray();

include 'Functions.php';