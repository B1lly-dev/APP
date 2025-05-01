     //initialises different variables
    let points = 0;
    let task1 = 0, task2 = 0, task3 = 0, task4 = 0, task5 = 0;

    //item numbers are: 1= blue hat, 2 = red hat, 3 = sunglasses, 4 = space
    let item1 = 10, item2 = 20, item3 = 30, item4 = 40;
    let purchased1 = 0, purchased2 = 0, purchased3 = 0, purchased4 = 0;
    
    //sets the points to 0
    setPoints();

    
    //updates the number of points
    function setPoints(){
        document.getElementById('points').innerHTML=points;  
    }

    //adds points to total upon completion of task 1 and marks the task as complete
    function taskComplete1(){
        if (task1 == 0){
        points = points + 10;
        document.getElementById('taskButton1').innerHTML= ('Complete!');
        task1++;
        setPoints();
        }
    }

    //adds points to total upon completion of task 2 and marks the task as complete
    function taskComplete2(){
        if (task2 ==0){
        points = points + 10;
        document.getElementById('taskButton2').innerHTML= ('Complete!');
        task2++
        setPoints();
        }
    }

    //adds points to total upon completion of task 3 and marks the task as complete
    function taskComplete3(){
        if (task3 == 0){
        points = points + 10;
        document.getElementById('taskButton3').innerHTML= ('Complete!');
        task3++
        setPoints();
        }
    }

    //adds points to total upon completion of task 4 and marks the task as complete
    function taskComplete4(){
        if (task4 == 0){
        points = points + 10;
        document.getElementById('taskButton4').innerHTML= ('Complete!');
        task4++
        setPoints();
        }
    }

    //adds points to total upon completion of task 5 and marks the task as complete
    function taskComplete5(){
        if (task5 == 0){
        points = points + 10;
        document.getElementById('taskButton5').innerHTML= ('Complete!');
        task5++
        setPoints();
        }
    }

    //remove customisation
    function standard() {
        document.getElementById('myImage').src='images/capybara.jpg';
    }

    //purchases the blue hat and deducts the cost from total points
    function bluehat() {
        if (points >= 10 && purchased1 ==0){
            points = points - item1;
            document.getElementById('points').innerHTML=points;
            document.getElementById('myImage').src='images/bluehatcapybara.jpg';
            purchased1 ++;
        }
        else if(purchased1 ==1){
            document.getElementById('myImage').src='images/bluehatcapybara.jpg';
        }
           
        
    }

    //purchases the red hat and decucts the cost from total points
    function redhat() {
        if (points >= 20 && purchased2 == 0){
            points = points - item2;
            document.getElementById('points').innerHTML=points; 
            document.getElementById('myImage').src='images/redhatcapybara.jpg';
            purchased2++
        }
        else if(purchased2 == 1){
            document.getElementById('myImage').src='images/redhatcapybara.jpg';
        }
    }

    //purchases the sunglasses and deducts the cost from total points
    function sunglasses() {
        if (points >=30 && purchased3 == 0){
        points = points - item3;
        document.getElementById('points').innerHTML=points; 
        document.getElementById('myImage').src='images/sunglassescapy.jpg';
        purchased3++
        }
        else if(purchased3 == 1){
            document.getElementById('myImage').src='images/sunglassescapy.jpg';
        }
    }

    //purchases the space helmet and deducts the cost from the total points
    function space() {
        if (points >=40 && purchased4 == 0){
        points = points - item4;
        document.getElementById('points').innerHTML=points; 
        document.getElementById('myImage').src='images/spacecapy.jpg';
        purchased4++
        }
        else if(purchased4 == 1){
        document.getElementById('myImage').src='images/spacecapy.jpg'; 
        }
        
    }

    


   
