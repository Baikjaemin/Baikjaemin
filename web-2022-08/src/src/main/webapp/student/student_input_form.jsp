<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>  <!-- 지시문 -->
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>학생 정보 입력</title>
<link rel='stylesheet' href='../CSS/student.css'>
</head>
<body>
<h2>학생 정보 입력</h2>
<div id='std_input'>
<form name='frm_input' method='post'>
  <br>
  <span>아아디*</span>
     <input type="text" name='id' size='15' maxLength='20' required><br>
  <span>성명*</span>
     <input type="text" name='mName' size='15' maxLength='20' required><br>
  <span>성별</span>
         <label><input type="radio" name="gen" value='m' checked>남자</label>
         <label><input type="radio" name="gen" value='f'>여자</label><br>
  <span>암호*</span>
         <input type="password" size='15' maxLength='15' 
                autocomplete='off' name='pwd' required><br>
  <span>암호 확인*</span>
         <input type="password" size='15' autocomplete='off' 
                maxLength='15' name='pwd2' required><br>
  <span>연락처*</span>
         <input type="text" size='15' maxLength='15' 
                autocomplete='off' name='p.number' required><br>
  <span>우편번호*</span>
         <input type="text" size='5' name='postal' required readOnly>
         <input type="button" value="우편번호 검색"><br>
  <span>주소*</span>
         <input type="text" size='40' name='addr' required><br>
  <span>상세 주소</span>
         <input type="text" size='40' name='d.addr'><br>
  <span>이메일</span>
         <input type="text" name='email'><br>
        
         <div class='btnZone'>
             <span></span>
             <input type="submit" name='save' value="저장">
             <input type="button" name='cancel' value="취소">
         </div>
         
</form>
</div>
</body>
</html>