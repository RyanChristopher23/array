Array_student=[];
function submit(){
    var n1=document.getElementById("s1").value;
    var n2=document.getElementById("s2").value;
    var n3=document.getElementById("s3").value;
    var n4=document.getElementById("s4").value;
    var n5=document.getElementById("s5").value;
    var n6=document.getElementById("s6").value;

    Array_student.push(n1);
    Array_student.push(n2);
    Array_student.push(n3);
    Array_student.push(n4);
    Array_student.push(n5);
    Array_student.push(n6);
    console.log(Array_student);
    document.getElementById("display_name").innerHTML=Array_student;
    document.getElementById("submit_btn").style.display="none";
    document.getElementById("sort_btn").style.display="inline-block";
}
function sorting(){
    Array_student.sort();
    console.log(Array_student);
    document.getElementById("display_name").innerHTML=Array_student;

}
