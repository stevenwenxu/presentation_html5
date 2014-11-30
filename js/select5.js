function handleFileSelect5(ev) {
   ev.stopPropagation();
   ev.preventDefault();
   var files = ev.dataTransfer.files;
   var output = [];
   for (var i = 0, f; f =files[i]; i++) {
      output.push('<li><strong>', escape(f.name), '</ strong>(', f.type || 'n/a  ', ') -', f.size, ' bytes, last modified: ' , f.lastModifiedDate ? f.   lastModifiedDate. toLocaleDateString() : "n/a", '</li>');
   }
   document.getElementById('newlist').innerHTML = '<ul>' + output.join('') + '</ul>';
}

function handleDragOver(ev) {
   ev.stopPropagation();
   ev.preventDefault();
   ev.dataTransfer.dropEffect = "copy";
}

var dropZone = document.getElementById('drop_zone');
dropZone.addEventListener('dragover', handleDragOver, false);
dropZone.addEventListener('drop', handleFileSelect5, false);