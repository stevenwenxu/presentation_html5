function handleFileSelect(ev) {
   var files = ev.target.files;
   var output = [];
   for(var i = 0, f; f = files[i]; i++) {
      // output.push('<li>', escape(f.name), ' is a ', f.type || 'n/a  ', ' file of size ', f.size, ' bytes, last modified: '  , f.lastModifiedDate ? f.lastModifiedDate. toLocaleDateString() : "n/a", '</li>');
      output.push('<li>', escape(f.name), ' is a ', f.type || 'n/a  ', ' file with size ', f.size, ' bytes', '</li>');
   }
   document.getElementById('list').innerHTML = '<ul>' + output.join('') + '</ul>';
}
document.getElementById('files').addEventListener('change', handleFileSelect, false);