
function menuToggler() {

//Variables
var check = document.getElementById('checkBox');

var items = document.getElementsByClassName('links');


var l1 = document.getElementById('l1');
var l2 = document.getElementById('l2');
var l3 = document.getElementById('l3');
 
if (check.checked == 1) {
			
				document.getElementById('dropdown-menu').style.transform = 'scale(1,1)';
				
				l1.style.transform = 'rotate(45deg)';
				
				l1.style.top = '8px';
				
				l1.style.left = '-2px';
				
				l2.style.width = '0%';
				
				l2.style.opacity = '0';
				
				l3.style.transform = 'rotate(-45deg)';
				
				l3.style.top = '8px';
				
				l3.style.left = '-2px';
				
				 var i;
				 
  for (i = 0; i < items.length; i++) {
  items[i].style.opacity = '1'
   items[i].style.transition =' opacity 250ms ease-in-out 200ms';
    
  }
				
}else{
				document.getElementById('dropdown-menu').style.transform = 'scale(1,0)';
				
				l1.style.transform = 'rotate(0deg)';
				
				l1.style.top = '0px';
				
				l1.style.left = '0px';
				
				l2.style.width = '100%';
				
				l2.style.opacity = '1';
				
				l3.style.transform = 'rotate(0deg)';
				
				l3.style.top = '8px';
				
				l3.style.left = '0px';
				
				var i;
				
				for (i = 0; i < items.length; i++) {
  items[i].style.opacity = '0'
   items[i].style.transition =' opacity 150ms ease-in-out';
    
  }
}
				
				
}


function searchFunction() {

				let searchInput = document.getElementById('searchBox').value;

    searchInput=searchInput.toLowerCase(); 

    let items = document.getElementsByClassName('items'); 

    for (i = 0; i < items.length; i++) {  

        if (!items[i].innerHTML.toLowerCase().includes(searchInput)) { 

            items[i].style.display="none"; 

        } 

        else { 

            items[i].style.display="list-item";                  
        } 

    } 				

}

