const collapsibles = document.querySelectorAll("collapsible");
collapsibles.foreach((item)=>
item.addEvenListene("click",function(){
    this.callList.toggle("collapsible--expanded");
})
);