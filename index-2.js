
    var readlineSync = require("readline-sync")

    score = 0
    
    var userinput = readlineSync.question("enter your name -- ")
    console.log("Welcome to the game !!!! " + userinput + " how well do you know RAGHAV?");
    console.log("     ")
    function play (question,answer) 
    {
    var useranswer = readlineSync.question(question)
    
    if(useranswer == answer)
    {
    console.log("YOU ARE RIGHT");
    score = score + 5;
    
    }
    else
    {
      console.log("YOU ARE WRONG");
    score = score - 1;
    }
    console.log("your score is = " + score)
    console.log("------------")
    
    }
    
    var biodata = [{
    
    question : "what is my gender? ", 
    answer : "male"
    
    },
    
    {
    
      question : "where do i live? ",
      answer:"bengaluru"
    },
    
    {
    question : "what is my occupation ? ",
    answer : "student"
    
    
    }
    ]
    
    for(var i=0;i<biodata.length;i++)
    {
    var questions = biodata[i];
    play(questions.question,questions.answer)
    
    }
    
    console.log("Congo!!!!! your total score is " + score + "/15")
    
    
    
    
    
    // var readlineSync = require('readline-sync');
    // var userName = readlineSync.question('May I have your name? ');
    
    
    // var greet = "namaste" + '  ' + userName;
    // console.log(greet);
    
   
    
