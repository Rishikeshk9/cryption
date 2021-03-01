
a=999999;
$('.blck').click(function(e) {
 // $(this).hide(); 
 
 // $(this).css("z-index", a++);
    
  //alert($(e.target).closest(".blck").length);
  $(this).toggleClass('changed');

 })
 $( document ).ready(function() {
  tippy('#cryptfin', {
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare enim eu sodales bibendum. Proin varius turpis a accumsan tempor. Maecenas sollicitudin non leo quis efficitur.',
  });

  tippy('#seer', {
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare enim eu sodales bibendum. Proin varius turpis a accumsan tempor. Maecenas sollicitudin non leo quis efficitur.',
  });

  tippy('#cryptcap', {
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare enim eu sodales bibendum. Proin varius turpis a accumsan tempor. Maecenas sollicitudin non leo quis efficitur.',
  });

  tippy('#ethrush', {
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare enim eu sodales bibendum. Proin varius turpis a accumsan tempor. Maecenas sollicitudin non leo quis efficitur.',
  });
});
   