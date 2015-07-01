if(typeof require !== 'undefined') XLSX = require('xlsx');
//var workbook = XLSX.readFile('test.xlsx');
/* DO SOMETHING WITH workbook HERE */

/* set up drag-and-drop event */
function handleDrop(e) {
  console.log("Hello :)");
  e.stopPropagation();
  e.preventDefault();
  console.log(e.dataTranswer.files);
  // var files = e.dataTransfer.files;
  // var i,f;
  // for (i = 0, f = files[i]; i != files.length; ++i) {
  //   var reader = new FileReader();
  //   var name = f.name;
  //   reader.onload = function(e) {
  //     var data = e.target.result;
  //
  //     /* if binary string, read with type 'binary' */
  //     var workbook = XLSX.read(data, {type: 'binary'});
  //     /* DO SOMETHING WITH workbook HERE */
  //   };
  //   reader.readAsBinaryString(f);
  // }
}
var drop1 = document.getElementById("test");
drop1.addEventListener('drop', handleDrop, false);
