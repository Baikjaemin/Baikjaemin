/**
 * 
 */
array = [

{ 'name': 'hong1', 'id' : 'a001', 'phone' : '1234' , 'email' : 'a001@abc.kr'},

{ 'name': 'hong2', 'id' : 'a002', 'phone' : '1235', 'email' : 'a002@abc.kr'},

{ 'name': 'hong3', 'id' : 'a003', 'phone' : '1236', 'email' : 'a003@abc.kr'},

{ 'name': 'hong4', 'id' : 'a004', 'phone' : '1237', 'email' : 'a004@abc.kr'},

]

let template;
list();
function list(){
	let items = document.querySelector('#items');
	items.innerHTML = '';
	for(v of array){
		template =
		`
		<div class='item'>
		   <span class='name'>${v.name}</span>
           <span class='id'>${v.id}</span>  
           <span class='phone'>${v.phone}</span>
           <span class='email'>${v.email}</span>
        </div>
		`
		items.innerHTML += (template);
	}
}

function view(name){
	let index = array.findIndex(d=>d.name==name);
	let item = document.querySelector('#item'); 
	
    name.value = array[index].name;
    id.value = array[index].id;
    phone.value = array[index].phone;
    email.value = array[index].email;
    
    }
	