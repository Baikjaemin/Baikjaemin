/**
 * 
 */
let m_index; //배열의 위치값을 모든 function에서 사용하기 위해
let data=[
	{'id' : '2016001', 'subject' : '국어', 'score' : '90'},
	{'id' : '2016001', 'subject' : '영어', 'score' : '80'},
	{'id' : '2016001', 'subject' : '수학', 'score' : '95'},
	{'id' : '2016002', 'subject' : '국어', 'score' : '70'},
	{'id' : '2016002', 'subject' : '영어', 'score' : '60'},
	{'id' : '2016002', 'subject' : '수학', 'score' : '50'},
	{'id' : '2016003', 'subject' : '국어', 'score' : '100'}, 
	{'id' : '2016003', 'subject' : '영어', 'score' : '100'}, 
	{'id' : '2016003', 'subject' : '수학', 'score' : '100'} 
];
let template;
list();
function list(){
	let items = document.querySelector('#items');
	items.innerHTML = '';
	let tot=0;
	for(index in data){     //배열의 위치값을 받아서 배열의 데이터를 모두 바뀔수 있게 해줌
		v = data[index];    //for (v of data)는 데이터의 위치값은 가져오지 못함 
		template = 
		`
		<div class='item' onclick='view("${index}")'>
          <span class='id'>${v.id}</span>
          <span class='subject'>${v.subject}</span>
          <span class='score'>${v.score}</span>
        </div>
		`
	 items.innerHTML += (template);	
     tot += Number(v.score);
	}
	items.innerHTML += '평균:' + (tot/data.length).toFixed(1);
}

function view(index){
	m_index = index;
	let frm = document.frm_score;
	
	frm.id.value      = data[index].id;
	frm.subject.value = data[index].subject;
	frm.score.value   = data[index].score;
}

function add(frm){
	let v;
	let items = document.querySelector('#items');
	let status = document.querySelector('.status');
	
	index = data.findIndex( d=>d.id==frm.id.value);

	if(frm.id.value==''){
		status.innerHTML = ('학번을 확인해주세요.');
		frm.id.focus();
		return;
	}
	
	if(frm.subject.value == ''){
		status.innerHTML = ('과목을 입력하세요.');
		frm.subject.focus();
		return;
	}
	
	if(frm.score.value == ''){
		status.innerHTML = ('성적을 입력하세요.');
		frm.score.focus();
		return;
	}
	v={'id': frm.id.value, 
	   'subject' : frm.subject.value,
	   'score' : frm.score.value};
	data.push(v);
	
	list();	
	
}

function update(frm){
	let index = m_index;
	let status = document.querySelector('.status');
	if(index>=0){
		data[index].id = frm.id.value;
		data[index].subject = frm.subject.value;
		data[index].score = frm.score.value;
		list();
		status.innerHTML = ('데이터가 수정되었습니다.');
	}else{
		status.innerHTML = ('수정할 데이터가 없습니다.');
	}
	
}

function deleteFunc(frm){
    let index = m_index;
    let status = document.querySelector('.status');

    if(index>=0){
       data.splice(index,1);
       list();
       frm.id.value='';
       frm.subject.value='';
       frm.score.value='';     
       status.innerHTML = '데이터가 삭제되었습니다.'
    }else{
       status.innerHTML = ('삭제할 자료를 찾지 못했습니다.');
    }
} 



