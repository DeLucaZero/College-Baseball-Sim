$(function(){
    $(document).on("click",".ViewTarget",function(){

        var ID = $(this).attr('data-ID');
        var TeamID = $(this).attr('data-TeamID');

        $.post('Ajax/Ajax.php',{TeamID:TeamID,ID:ID, Page:'Recruit/ViewTarget.php'}, function(data){

            data = data.split("^");

            $("div.TargetInfo").html(data[0]);

        });

    });
});