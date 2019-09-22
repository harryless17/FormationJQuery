$(document).ready(function(){
  var $mainMenuItems = $("#main-menu ul").children("li"),
      $totalMainMenuItems = $mainMenuItems.length,
      openedIndex = 2,
      init = function(){
       bindEvents();
       animateItem($mainMenuItems.eq(openedIndex),true,250);
      },

      bindEvents = function(){
          $mainMenuItems.children(".images").click(function(){
            var newIndex = $(this).parent().index();
            checkAndAnimateItem(newIndex);
          });
          $(".button").hover(
            function(){
              $(this).addClass("hovered");
            },
            function(){
              $(this).removeClass("hovered");
            }
          );

          $(".button").click(function(){
            checkAndAnimateItem($(this).index());
          });
        },
      animateItem = function($item,toOpren,speed){
        var $colorImage = $item.find(".color"),
        itemParam = toOpren ? {width:"420px"} : {width:"140px"},
        colorParam = toOpren ? {left:"0px"} : {left:"140px"};
        $colorImage.animate(colorParam,speed);
        $item.animate(itemParam,speed);
      },

      checkAndAnimateItem = function(indexToCheckAndAnimate){
        if (openedIndex == indexToCheckAndAnimate) {
          animateItem($mainMenuItems.eq(indexToCheckAndAnimate),false,250);
          openedIndex = -1;
        }
        else{
          animateItem($mainMenuItems.eq(openedIndex),false,250);
          openedIndex=indexToCheckAndAnimate;
          animateItem($mainMenuItems.eq(openedIndex),true,250);
        }
      };



      init();

});
