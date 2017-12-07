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
      button.addEventListener("click",function(){
          that.getid(this.getAttribute("id"));
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
  console.log(identificador,array);
}
}

export default listadoCtrl;
