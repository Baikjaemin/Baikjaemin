<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>student_modify.html</title>
<link rel='stylesheet' href='../CSS/student.css'>
</head>
<body>
<h2>학생 정보 수정</h2>
<div id='std_input'>
<form>
<span>아아디</span>
       <input type="text" name='id'><br>
<span>성명</span>
       <input type="text" name='name'><br>
<span>성별</span>
       <input type="radio" name="gen" value='m'>남자
       <input type="radio" name="gen" value='f'>여자<br>
<span>암호</span>
       <input type="text" name='password'><br>
<span>암호 확인</span>
       <input type="text" name='repass'><br>
<span>연락처</span>
       <input type="text" name='p.number'><br>
<span>우편번호</span>
       <input type="text" name='postal'>
<input type="submit" name='s.postal' value="우편번호 검색"><br>
<span>주소</span>
       <input type="text" name='addr'><br>
<span>상세 주소</span>
        <input type="text" name='d.addr'><br><br>
<input type="submit" name='save' value="수정">
<input type="reset" name='cancel' value="취소">
<input type="button" name="delete" value="삭제">
</form>
</div>
</body>
</html>