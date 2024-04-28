let container=document.createElement("div");
document.body.appendChild(container);
let names=["wael","rayen","ahmed","monsour"];
let ages=["20","18","40","25"];


  
function cardo(names,ages){
    //create element 
    let card=document.createElement("div");
    let title=document.createElement("h2");
    let age=document.createElement("p");
    let img=document.createElement("img")
    //content 
    let head=document.createTextNode(names);
    let ageContent=document.createTextNode(ages);
    img.src="pingo1.jpg";
    
     title.appendChild(head);
     age.appendChild(ageContent);

       //append elements to card
    card.appendChild(title);
    card.appendChild(age);
    card.appendChild(img);
    
    //append card to container
    container.appendChild(card);
    //styling 
    card.style.margin='2px';
    card.style.padding='10px';
    card.style.color='#fff';
    card.style.display="inline-block"
    img.style.width="100%";;
    container.style.textAlign="center";
    card.style.width="200px";
    card.style.background="#f57ddd";
    
}
for(let i=0;i<4;i++){
    cardo(names[i],ages[i]);
}



