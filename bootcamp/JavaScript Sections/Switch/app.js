const day = 2;
switch(day){
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:   //both cases will work 
    case 7:   // if it's 6 --> weekend , if it's 7 --> weekend
        console.log('weekend');
        break;
    default: //else
        console.log('I dont know that')
}