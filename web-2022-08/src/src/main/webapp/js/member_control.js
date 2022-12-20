/*
 * 학생관리 CRUD 
 * 작성일 :2022.08(bjm)
 */
let data=[                //[]대신 newArray()를 써도됨
	{'id' : 'a001', 'name' : 'hong' , 'gender' : 'm' , 'phone' : '010-1111-1234'},
	{'id' : 'b001', 'name' : 'kim'  , 'gender' : 'f' , 'phone' : '010-2222-1234'},
	{'id' : 'c001', 'name' : 'choi' , 'gender' : 'm' , 'phone' : '010-3333-1234'}
];     
let template;
list();
function list(){
   let items = document.querySelector('#items');
   items.innerHTML = '';
   for(v of data){
	template =                           //${변수} v가 가져온 데이터를 집어 넣어라는 명령어
		`           
		<div class='item' onclick='view("${v.id}")'>
		    <span class='id'>${v.id}</span>          
		    <span class='name'>${v.name}</span>
		    <span class='gender'>${v.gender}</span>
		    <span class='phone'>${v.phone}</span>
		</div>
		`
	
	items.innerHTML += (template);
   }
}
function view(id){
	let index = data.findIndex(d=>d.id==id);  //d의 위치값이 몇이다를 반환       
	let frm = document.frm_member;
	
	frm.id.value    = data[index].id;
	frm.name.value  = data[index].name;
	frm.phone.value = data[index].phone;
	
	if(data[index].gender == 'm'){   // doom 구조의 배열을 나타냄
	    frm.gender[0].checked=true;
	}else{
		frm.gender[1].checked=true;
	}
}

//데이터 추가 Create------------------------------------------------------
function add(frm){  // =document.frm_member
	let gender;
	let v;
	let items = document.querySelector('#items');
	let index;
	
	if(frm.gender[0].checked) {
	      gender=frm.gender[0].value;
	}else if(frm.gender[1].checked){
	      gender = frm.gender[1].value;
    }else {
     //성별이 체크되어 있지 ㅇ낳으면 성별 선택 메시지를 출력
          alert('성별을 체크해야 됩니다');
           return;
    }
    // form 값을 {}로 만들어 data에 push
	v={'id':frm.id.value, 'name' :frm.name.value,
	   'gender':gender, 'phone' :frm.phone.value
    };
	data.push(v);    //배열뒤에 추가
	template =                          
		`           
		<div class='item' onclick='view("${v.id}")'>
		    <span class='id'>${v.id}</span>          
		    <span class='name'>${v.name}</span>
		    <span class='gender'>${v.gender}</span>
		    <span class='phone'>${v.phone}</span>
		</div>
		`
    /* 성별체크 유무
       if(!frm.gender[0].checked && !frm.gender[1].checked){
	      alert('성별을 체크해 주세요');
          return;
       }  
    */
   /* 
    //아이디 중복 체크 1
	index = data.findIndex(d=>d.id==frm.id.value);
	
	//아이디 중복 체크 2
	/*index = data.findIndex( function(v, index){
		let r = -1;
		if(v.id == frm.id.value) r=index;
		return r;
	});
    
	if(index>=0){
	    alert('아이디가 중복되었습니다.');
        frm.id.focus();            //아이디 쪽으로 커서가 감
        return; 
    }
    */        

    // 이름 입력 여부 체크
    if(frm.name.value==''){
	   alert('성명을 확인해주세요')
       frm.name.focus();
       return;
    }
    //연락처 입력 여부 체크
    if(frm.phone.value==''){
	   alert('연락처를 확인해주세요')
       frm.phone.focus();
       return;
    }
	items.innerHTML += template;   //목록화면뒤에 추가
}

// 데이터 수정 Update 

function update(frm){
	let index = data.findIndex(d=>d.id==frm.id.value);
	let g;       //성별
	if(frm.gender[0].checked){
		g=frm.gender[0].value;		
	}else{
		g=frm.gender[1].value;
	}
	
	if(index>=0){       //수정할 데이터가 있는 경우
		data[index].name = frm.name.value;
		data[index].phone = frm.phone.value;
	    data[index].gender = g;
         list();
         alert('데이터가 수정되었습니다.')
	}else{
		alert('수정할 데이터가 없습니다.')
	}
}

function deleteFunc(frm){
	let index = data.findIndex(d=>d.id==frm.id.value);
	if(index>=0){
		data.splice(index,1);
		list();
		frm.id.value='';
		frm.name.value='';
		frm.phone.value='';
		frm.gender[0].checked=false;
		frm.gender[1].checked=false;
	}
	
	
	
}





