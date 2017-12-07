class listadoCtrl {
  constructor($scope,Listado) {
    'ngInject';
  
  var array=[];
  var that=this;
  Listado.getListado().then(function(res){
    array=res;
    var content = document.getElementById("data");
    var div_user = document.createElement("div");
    var parrafo = document.createElement("p");
    var limit= array.length;
    for (var i=0; i < limit;i++) {
      var dat = document.createElement("div");
      var button=document.createElement("button");
      var view=document.createTextNode("Mas info");
      var id=array[i]._id;      
      var nom=array[i].name;
      var city=array[i].city;
      var lat=array[i].lat;
      button.setAttribute("id",id);
      button.setAttribute("data-toggle","modal");
      button.setAttribute("data-target","#myModal");
      button.addEventListener("click",function(){
          that.getid(this.getAttribute("id"),array);
      })
      button.appendChild(view);
      dat.innerHTML = " " + nom +" "+city+" "+lat + "<br>";
      parrafo.appendChild(dat).appendChild(button);
}
div_user.appendChild(parrafo);
content.appendChild(div_user);
});
}
getid(identificador,array){
  function identify(element) { 
    return element._id === identificador;
  }
  var object=array.find(identify);
  //document.getElementById("identificador").innerHTML=object._id;
  $("#identificador").text(object._id);
  $("#nombre").text(object.name);
  $("#ciudad").text(object.city);
}
}

export default listadoCtrl;
