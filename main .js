
document.getElementById("my_canvas");
ctx= canvas.getContext("2d");


var Color="#Color_input"
var Width="#LineWidth_input"


canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e)
{
    Color=document.getElementById("Color_input").value;
    Width=document.getElementById("LineWidth_input").value;
    
    mouseEvent="mousedown";
}




canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e)
{
    mouseEvent="mouseup";
}






canvas.addEventListener("mouseleave",my_mouseup);
function my_mouseup(e)
{
    mouseEvent="mouseleave";
}







canvas.addEventListener("mousemove",my_mousemoveb>);
function my_mouseup(e)
{
    mouseEvent="mouseleave";
}





   position_of_mouse_x=e.clientX-canvas.offsetLeft;
   position_of_mouse_y=e.clientY-canvas.offsetTop;





   if(mouseEvent=="mousedown")
   {
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=width_of_line;

    console.log("last position of x and y coordinates=");
    console.log("x="+last_position_of_x+"y="+Last_position_of_y);
    ctx.moveTo(last_position_of_x,Last_position_of_y);

    console.log("current position of x and y coordinates=");
    console.log("x="+current_position_of_mouse_x+"y="+current_position_of_mouse_y);
    ctx.lineTo(current_position_of_mouse_x,current_position_of_mouse_y);
    

   }



   function my_touchstart(e)
   {
       current_position_of_touch_x = e.touches[0].clientX - canvas.offsetLeft;
       current_position_of_touch_y = e.touches[0].clientY - canvas.offsetTop;
        
    }


    function my_touchmove(e)
   {
       current_position_of_touch_x = e.touches[0].clientX - canvas.offsetLeft;
       current_position_of_touch_y = e.touches[0].clientY - canvas.offsetTop;
        
    }

