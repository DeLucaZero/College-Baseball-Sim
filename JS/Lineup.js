function DraggingStart(event){
    event.dataTransfer.setData("text", event.target.id);
    event.dataTransfer.setData("data", JSON.stringify(event.target.dataset));
    console.log("you started dragging targetID"+event.target.id);
}



function AllowDrop(event) {
    event.preventDefault();
    console.log('Allowing Drop');
}


function OnDropBat(event) {
    event.preventDefault();

    let targetDiv = event.currentTarget; // Get the target div
    let data = event.dataTransfer.getData("text");

    let originalElement = document.getElementById(data); // Get the original div
    let clonedContents = originalElement.outerHTML; // Get the contents of the original div

    // Clear the contents of the original div
    originalElement.outerHTML = '';

    let targetContents = targetDiv.innerHTML; // Get the contents of the target div

    targetDiv.innerHTML = clonedContents; // Set the cloned contents in the target div
    originalElement.innerHTML = targetContents; // Set the original contents in the original div

    // Remove the draggable attribute from the cloned div to prevent duplication
    originalElement.removeAttribute("draggable");

    let OrderSpot = targetDiv.getAttribute('data-OrderSpot');
    let OldSpot = originalElement.getAttribute('data-OrderSpot');
    let Pos = originalElement.getAttribute('data-Pos');
    let TeamID = originalElement.getAttribute('data-TeamID');

    // Your original code here, including the AJAX request
    $.post('Ajax/Ajax.php', { OrderSpot: OrderSpot, OldSpot: OldSpot, Pos: Pos, TeamID: TeamID, Page: 'Lineup/OrderChange.php' }, function(DepthData) {
        console.log(DepthData);

        DepthData = DepthData.split("|");

        if (DepthData[0] != 1) {
            alert(DepthData[0]);
            // window.location.href = "index.php?Page=BattingOrder";
        } else {
            window.location.href = "index.php?Page=BattingOrder";
        }
    });

    console.log('Dropped. NewSpot ' + OrderSpot + 'OldSpot: '+OldSpot + 'TargetID: ' + targetDiv.id);
    console.log('OriginalID: ' + originalElement.id);
}

function OnDropPitcher(event) {
    event.preventDefault();

    let Position = event.target.getAttribute("data-Position");

    let data = event.dataTransfer.getData("text");
    event.target.replaceWith(document.getElementById(data).cloneNode(true));

    let newData = JSON.parse(event.dataTransfer.getData("data"))

    let ID = newData.id;
    let Pos = newData.position;

    $.post('Ajax/Ajax.php',{ID:ID, NewPos:Position, OldPos: Pos, Page:'Lineup/PitchingChange.php'}, function(DepthData){

        console.log(DepthData);

        DepthData = DepthData.split("|");

        if (DepthData[0] == 1){

            console.log(DepthData);

            //alert(DepthData[1]);

            window.location.href = "index.php?Page=LineupPitching";

        } else if (DepthData[0] != 1) {
            alert(DepthData[0]);
            window.location.href = "index.php?Page=LineupPitching";
            console.log(DepthData);
        }

    });

    $('div.Target'+ID).attr('data-Position',Position);

    console.log(JSON.parse(event.dataTransfer.getData("data")));
    console.log('Dropped. Pos:'+Position+" PlayerID:"+ID+" OldPos:"+Pos);
}

function OnDrop(event) {
    event.preventDefault();

    let Position = event.target.getAttribute("data-Position");

    let data = event.dataTransfer.getData("text");
    event.target.replaceWith(document.getElementById(data).cloneNode(true));

    let newData = JSON.parse(event.dataTransfer.getData("data"))

    let ID = newData.id;
    let Pos = newData.position;

    $.post('Ajax/Ajax.php',{ID:ID, NewPos:Position, OldPos: Pos, Page:'Lineup/DepthChange.php'}, function(DepthData){

        console.log(DepthData);

        DepthData = DepthData.split("|");

        if (DepthData[0] == 2){

            window.location.href = "index.php?Page=DepthChart";

        } if (DepthData[0] == 0){

            alert(DepthData[1]);

            window.location.href = "index.php?Page=DepthChart";

        } else if (DepthData[0] != 1) {
            alert(DepthData[0]);
            window.location.href = "index.php?Page=DepthChart";
        }

    });

    $('div.Target'+ID).attr('data-Position',Position);

    console.log(JSON.parse(event.dataTransfer.getData("data")));
    console.log('Dropped. Pos:'+Position+" PlayerID:"+ID+" OldPos:"+Pos);
}