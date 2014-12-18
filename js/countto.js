function countto (n, selector) {
   var i = 0;
   function looop() {
      i++;
      setTimeout(function() {
         var item = $(selector);
         item.html(parseInt(item.html())+1);
         if(i < n) looop();
      }, 80)
   }
   looop();
}