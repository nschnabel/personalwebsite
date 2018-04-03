$(function() {
    var titles = ["traveler.", "graphic designer.", "photographer.", "n engineer.", "content creator.", "n adventurer."]
    
    setTimeout(typeText, 2000, "Hi, I'm Nick.", $("#innerWelcome"), 50, 2, false);
    setTimeout(typeText, 5050,"I'm a", $("#Ima"), 50, 0);
    setTimeout(typeText, 5300, titles[0] , $("#Title"), 50, 0.5, false);
    setTimeout(deleteText,6350, $("#Title"), 50);
    
    var time = 6850;
    for(var i = 1 ; i < titles.length ; i++)
    {
        if(i != titles.length - 1)
        {    
            setTimeout(typeText, time, titles[i] , $("#Title"), 30, 0.5, true);
            time += ((titles[i].length)*30 + 550);
            setTimeout(deleteText, time, $("#Title"), 30);
            time += (titles[i].length)*30 + 100;
        }
        else
        {
            setTimeout(typeText, time, titles[i] , $("#Title"), 30, 1, true);
            time += ((titles[i].length)*30 + 600);
            
            $("#learn-more").delay(time).fadeIn(500);
        }
    }
    
    function typeText (txt, element, timeout, secondsToToggle, exists)
    {
        var i = 0;
        var cursor;
        var textInput;
        
        
        if (exists){
            cursor = element.find(".cursor");
            cursor.show();
            textInput = element.find(".typeWrap")
            
        }
        else{ 
            cursor = $("<span> </span>");
            cursor.text("|");
            cursor.addClass("cursor");
            textInput = $("<span> </span>");
            textInput.addClass("typeWrap");
        }
        
        if(txt.charAt(0) == "n")
        {
            element.siblings().css("float", "left")
            textInput.css("float", "left");  
        }
        else{
            element.siblings().css("float", "none")
            textInput.css("float", "none");  
        }
        
        element.append(textInput, cursor);
        
        //setTimeout(writeWelcome, 100);
        writeWelcome();

        function writeWelcome() {
          if (i < txt.length) {
//            element.text(element.text().replace(/\|/g, ''));
            textInput.text(textInput.text() + txt.charAt(i));
//            element.append("|");
            i++;
            setTimeout(writeWelcome, timeout);
          }
          else{
            textInput.text(txt);  
            toggleCursor();
          }
        }
        
        
        var time = 0;
        function toggleCursor() {
            cursor.toggle();
            if (time < secondsToToggle*1000){
                setTimeout(toggleCursor, 350);
                time+=350;
            }
            else{
                cursor.hide();
            }
        }     
    }
    
    function deleteText(element, timeout)
    {
        //alert("hi");
        element.find(".cursor").show();
        //alert(element.find(".typeWrap").text());
        var text = element.find(".typeWrap");
        //text.text("HI");
        var length = text.text().length;
        //alert(length);
        var i = 0;
        deleteHelper();
        
        function deleteHelper()
        {
            if(i < length)
            {
                newText = text.text().slice(0, -1);
                //alert(newText);
                text.text(newText);
                i++;
                setTimeout(deleteHelper, timeout);
            }
            else
            {
               text.text("");
            }
        }

    }
});

$("#learn-more").click(function(){
    //alert("hi");
    //$("#bg").animate({bottom: "1000px"}, 2000);
    $('html,body').animate({
        scrollTop: $("#main-container").offset().top},
        300, 
        'swing', 
        function() {$("#bg").hide()});
});