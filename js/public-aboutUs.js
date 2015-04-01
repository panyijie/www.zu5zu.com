/**
 * Created by elvis on 15/3/25.
 */
 $(document).ready(function()
 {

     $(".about-title").each(function()
     {
        $(this).mouseover(function func1()
        {
            $(this).css('backgroundColor', '#e0e0e0');
        });
         $(this).mouseout(function func2()
         {
             $(this).css('backgroundColor', '#eeeeee');
        });
     });
     $(".about-sb").children(".about-title").each(function()
     {
         $(this).click(function()
         {
             var header=$(this);
             var img_div=header.next();
             var detail=header.next().next();
             if(img_div.hasClass('hid'))
             {
                 img_div.removeClass('hid');
                 detail.removeClass('hid');
             }
             else
             {
                 img_div.addClass("hid");
                 detail.addClass("hid");
             }
         });
     });
 });
//
//function show(obj)
//{
//	var header=$(obj);
//	var img_div=header.next();
//	var detail=header.next().next();
//	if(img_div.hasClass('hid'))
//	{
//		img_div.removeClass('hid');
//		detail.removeClass('hid');
//	}
//	else
//	{
//		img_div.addClass("hid");
//		detail.addClass("hid");
//	}
//}
