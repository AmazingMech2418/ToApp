var data = "<html>"+document.documentElement.innerHTML+"</html>";
var download = function(p1,p2) {
  var el = document.createElement("A");
  el.setAttribute("href","data:application,"+p1);
  el.setAttribute("download",p2);    
  if (document.createEvent) {
      var event = document.createEvent('MouseEvents');
      event.initEvent('click', true, true);
      el.dispatchEvent(event);
    }
  else {
      el.click();
    }
};
download(data,document.title+".hta");
