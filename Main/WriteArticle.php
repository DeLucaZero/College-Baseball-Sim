<?php

if ($Admin == 1){ // User is admin


// Define Log
    $Log = "$LogName viewed the Article Writer.";

} else {

    // Define Log
    $Log = "$LogName attempted to view the Article Writer, while not being an admin.";

}