function addSort(){
var elements = document.getElementsByClassName("list");

      for (var i = 0; i < elements.length; i++) {
        new Sortable(elements[i], {
          group: "shared",
          invertSwap: true,
        });
    }
  };
  addSort();
  //Accordian
  var allPanels = $('.accordion  .accordinContent').hide();
    
  $('.accordion .accordinLink').click(function() {
    
    var curentStyle=$(this).parent().parent().siblings('.accordinContent').css('display');
    allPanels.hide();    
    
    if(curentStyle=='none'){
      console.log('close')
      $(this).parent().parent().siblings('.accordinContent').css('display','none');
    } else {
      $(this).parent().parent().siblings('.accordinContent').css('display','block');
    }
    $(this).parent().parent().siblings('.accordinContent').toggle();
    //console.log('jgjgjs')
    return false;
  });

// Add Your Section Here

  $(".sectionLink").click(function(e){
    e.preventDefault();
    $(this).parent().siblings('.addSectionForm').toggle();
    
  });
//Media
function mediaContent(){
  $('.medaiWrap').hide();
  $(".mediaLink").click(function(e){
    e.preventDefault();
    $('.medaiWrap').toggle();
    
  });
}
mediaContent();  


// Add Your Section Here 
$(".addSection").click(function () { 
  var inputString = $(this).closest('.addSectionWrap').find(".sectionValue").val(); 
  
  $(this).closest('.addSectionWrap').find(".sectionValue").val('');
  
  let media =$('.mediaBox').html();
  
  $(this).closest('.addSectionWrap').before('<div class="list-group-item mb-3 shadow-sm rounded"><div class="clearfix"><h3 class="float-left">'+inputString+' </h3><div class="float-right"><div class="mediaWrap d-inline-block"><a href="#"><i class="fas fa-ellipsis-h fa-lg"></i></a><div class="mediaBox rounded">'+ media +'</div></div></div>'+
  '</div></div>');
  $('.addSectionForm').hide();

  addSort(); 
  mediaContent(); 
}); 

