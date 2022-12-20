/**
 * score_crud.js
 */
let list =[];  //전체 데이터 저장

function Score(serial, id, subject, score){
	this.serial = serial;
	this.id = id;
	this.subject = subject;
	this.score = score;
	this.output = function(){
		let str = `
		  <div class='item'>
           <span class='serial'>${this.serial}</span>
           <span class='id'>${this.id}</span>
           <span class='subject'>${this.subject}</span>
           <span class='score'>${this.score}</span>
          </div>
		`;
		return str;
	}
}
function view(serial){
    let index = list.findIndex(v=>v.serial==serial);
    
    frm.id.value = list[index].id;
    frm.subject.value = list[index].subject;
    frm.score.value = list[index].score;
    
} 
frm.findSerial.onclick = function(){
	let serial = Number(frm.serial.value);
	let id = frm.id.value;
	let subject = frm.subject.value;
	let score = frm.score.value;
	let index = list.findIndex( v=> v.serial == frm.serial.value);
	
	if(serial==''){
	  alert('찾으시는 SERIAL을 입력 해주세요')
      frm.serial.focus();
      return;
	}else if(index==-1){
	  alert("찾으시는 SERIAL이 저장되어 있지 않습니다");
      frm.serial.focus();
      return;	
	}else{
		frm.id.value = list[index].id;
		frm.subject.value = list[index].subject;
		frm.score.value = list[index].score;
	}
}

frm.btnSave.onclick = function(){
	let serial = frm.serial.value;
	let id = frm.id.value;
	let subject = frm.subject.value;
	let score = frm.score.value;
    let d = new Score(serial,id,subject,score);
    
    if(frm.id.value==''){
		alert('학번을 입력해주세요.');
		frm.id.focus();
		return;
	}
	if(frm.subject.value==''){
		alert('과목을 입력해주세요');
		frm.subject.focus();
		return;
	}
	if(frm.score.value==''){
		alert('점수를 입력해주세요.');
		frm.score.focus();
		return;
	}
	
let index = list.findIndex(v => v.serial == frm.serial.value);
    
if(index>=0){
	    alert("SERIAL이 중복되었습니다.") 
        frm.serial.focus();
        return;
    }else if(serial<0 || Number.isInteger(serial)==false){
	    alert("SERIAL에 양의 정수를 입력 해주세요.")
        frm.serial.focus();
        return;
    }else{
    list.push(d);   
    }
    
}

frm.btnUpdate.onclick = function(){
    let index = list.findIndex(v=>v.serial==frm.serial.value);
    let serial = Number(frm.serial.value);
    let id = frm.id.value;
    let subject = frm.subject.value;
    let score = frm.score.value;
 
    if(index>=0){
	   list[index].id = frm.id.value;
       list[index].subject = frm.subject.value;
       list[index].score = frm.score.value;
       alert('데이터가 수정되었습니다.')
    }else{
	   alert('수정할 데이터가 없습니다.') 
    }	
}

frm.btnDelete.onclick = function(){
	let index = list.findIndex(v=>v.serial==frm.serial.value);
	let id = frm.id.value;
	let subject = frm.subject.value;
	let score = frm.score.value;
	
	if(index>=0){
		list.splice(index,1);
		frm.serial.value='';
		frm.id.value='';
		frm.subject.value='';
		frm.score.value='';
		alert('데이터가 삭제되었습니다.');
	}else{
	    alert('삭제할 자료를 찾지 못했습니다.');
	}
}

frm.btnOutput.onclick = function(){
	let serial = Number(frm.serial.value);
	let id = frm.id.value;
	let subject = frm.subject.value;
	let score = frm.score.value;
	let items = document.querySelector(".items");
	
	items.innerHTML = '';
	for(d of list){

	     items.innerHTML = d.output;	
	    
	}
}





