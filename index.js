
$("button").on("click",function(){
  $(this).fadeOut(40).fadeIn(90);
});


$(".learn-more").on("click",function (){
  $(this).fadeOut(20).fadeIn(430);
});


$("a").on("click",function (){
  $(this).attr("style","box-shadow:0 0 20px #71c0ba");
  setTimeout(removeShadow, 140);
  function removeShadow(){
      $("a").attr("style","box-shadow:none");
  }
});


function dropdown(){
  document.querySelector(".pages-list").classList.toggle("hide");
}


function subscribed(){
  document.querySelector(".subscribe-text").classList.toggle("subscribe-click");
}



function msgtn(){
  document.querySelector(".contact-us button").classList.toggle("btn-msg-click");
}



function scrolled(){
  // $(".hotbar").attr("background-color","#141E27");
  // console.log("hello mf");
}
