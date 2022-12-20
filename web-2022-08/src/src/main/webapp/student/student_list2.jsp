<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>학생 정보 조회</title>
<link rel='stylesheet' href='../CSS/student.css'>
</head>
<body>

<div id='std_list'>

   <h2>학생 정보 조회</h2>
   <form name='frm_search' method='post'>
    <input type='button' value='입력'>
    <input type='search' name='findStr'>
    <input type='button' value='조회'>
   </form>

<ul>
   <li class='title'> <!-- 타이틀 -->
      <span class='no'>No</span>
      <span class='id'>아이디</span>
      <span class='name'>성명</span>
      <span class='gender'>성별</span>
      <span class='phone'>연락처</span>
      <span class='address'>주소</span>
      <span class='email'>이메일</span>
      <span class='zipcode'>우편번호</span>
    </li>
    <% for(int i=1; i<10 ; i++){ %>
    <li class='item'>
      <span class='no'><%=i %></span>
      <span class='id'>lgtwins0501</span>
      <span class='name'>백재민</span>
      <span class='gender'>남</span>
      <span class='phone'>01076236632</span>
      <span class='address'>경기도 안양시 동안구</span>
      <span class='email'>lgtwins0501@naver.com</span>
      <span class='zipcode'>14051</span>
    </li>
    <%} %>
    <li class='item'>
      <span class='no'>2</span>
      <span class='id'>dustn384</span>
      <span class='name'>유연수</span>
      <span class='gender'>여</span>
      <span class='phone'>01082775339</span>
      <span class='address'>경기도 안양시 동안구</span>
      <span class='email'>dustn384@naver.com</span>
      <span class='zipcode'>14051</span>
    </li>
 

    <li class='btnpage'>  <!-- page이동 버튼 -->
       <input type='button' value='처음'>
       <input type='button' value='이전'>
       <input type='button' value='1'>
       <input type='button' value='2'>
       <input type='button' value='3'>
       <input type='button' value='4'>
       
       <input type='button' value='다음'>
       <input type='button' value='맨끝'>
       
    </li>    
</ul>

</div>
</body>
</html>