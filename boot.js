$(document).ready(function(){
    $(".submit").click(function(){
      alert("UserName Is: " + $(".un").val()+ "\n" + ("Password Is: " + $(".pass").val()));
    });
    $(".submit").click(function () {
        $(".un").val('');
    });
    $(".submit").click(function () {
        $(".pass").val('');
    });
    $(document).ready(function(){
        $(".un").focus(function(){
          $(this).css("background-color", "orange");
        });
        $(".pass").blur(function(){
          $(this).css("background-color", "green");
        });
      });
  });