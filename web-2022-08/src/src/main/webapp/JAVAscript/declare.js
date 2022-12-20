/**
 * declare.js
 */
 let here=document.querySelector('#here');
 here.innerHTML=
     '<font color="red">외부에서 작성된 스크립트</font>';
  /** 가로안에 here가 객체를 찾지 못했을 경우 null 값이 된다   
   * 코드의 순서가 뒤바뀌었는데 defer 값을 설정 해주지 않으면
   * 객체를 찾을수가 없기 때문에 null 값이되어 오류 */
   