$(document).ready(function(){

    // droggable
    $(".draggable_div").draggable();
    // 
    $(".draggable_div1").draggable({revert:true});
    // 
    // $(".draggable_div2").draggable({revert:true, revertDuration:0});

    $(".draggable_div2").draggable({revert:true, helper: "clone"});



    // droppable

    $("#draggable_div4").draggable();
    $("#droppable_div1").droppable({
        drop: function(event, ui){
            $(this)
            .addClass("ui-state-highlight")
            .find("p")
            .html("dropped!");

        }
    });


    // droppable revert

    $("#draggable_div5").draggable({revert: "valid"});
    $("#draggable_div6").draggable({revert: "invalid"});
    $("#droppable_div2").droppable({
        classes: {
            "ui-droppable-active": "ui-state-active",
            "ui-droppable-hover": "ui-state-hover"
          },
          drop: function( event, ui ) {
            $( this )
              .addClass( "ui-state-highlight" )
              .find( "p" )
                .html( "Dropped!" );
          }

    });


    // resizable 


    $( "#resizable" ).resizable();
    // 

   $("#resizable_div1").resizable({
    animate: true
   });
// 

   $("#resizable_div2").resizable({
      helper: "ui-resizable-helper2",
      animate:true
    });


    $(".resizable_div3").resizable({
      handles: "se"

    })

 


    // selectable


    $("#selectable").selectable();

    $("#selectable_div1").selectable();

    $("#selectable_div2").selectable({
      stop: function(){
        var result  = $("#select-result").empty();
        $( ".ui-selected", this ).each(function() {
          var index = $( "#selectable_div2 li" ).index( this );
          result.append( " #" + ( index + 1 ) );
        });

      }
    });


    // sortable()


    $("#sortable_div1").sortable();

// connected sortable
    $( "#sortable_div2, #sortable_div3" ).sortable({
      connectWith: ".connectedSortable"
    }).disableSelection();


// sortables grid

$("#sortable_grid").sortable();

































    
});

