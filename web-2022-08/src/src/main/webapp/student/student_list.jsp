<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>학생정보 조회</title>
<link rel='stylesheet' href='../CSS/student.css'>
</head>
<body>
<h3>학생정보 조회</h3>

<a href='http://localhost:8888/web-2022-08/student/student_list.jsp'>
        <button>입력</button></a>
<input type="search" name='searchbox'>
<button>조회</button>


<nav class='a'>
<ul>
    <li>
    <div class='NO'>No.</div> 
    <div class='id'>아이디</div>
    <div class='name'>성명</div>
    <div class='gen'>성별</div>
    <div class='PN'>연락처</div>
    <div class='addr'>주소</div>
    <div class='Email'>이메일</div>
    <div class='postal'>우편번호</div>
    </li>
</ul>
</nav>
<br>
<nav class='b'>
<a href='http://localhost:8888/web-2022-08/student/student_modify.jsp'>
  <ul> 
    <li><div class='NO'>1</div> 
    <div class='id'>lgtwins0501</div>
    <div class='name'>백재민</div>
    <div class='gen'>남</div>
    <div class='PN'>01076236632</div>
    <div class='addr'>경기도 안양시</div>
    <div class='Email'>lgtwins0501@naver.com</div>
    <div class='postal'>14051</div>
  </li>
  </ul>
  </a>
</nav>
<nav class='b'>
<a href='http://localhost:8888/web-2022-08/student/student_modify.jsp'>
  <ul> 
    <li><div class='NO'>2</div> 
    <div class='id'>dustn384</div>
    <div class='name'>유연수</div>
    <div class='gen'>여</div>
    <div class='PN'>01082775339</div>
    <div class='addr'>경기도 안양시</div>
    <div class='Email'>dustn384@naver.com</div>
    <div class='postal'>14051</div>
  </li>
  </ul>
  </a>
</nav>
</body>
</html>