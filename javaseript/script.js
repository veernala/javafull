let arg=prompt("Enter a value?");
switch(arg){
    case'0':
    case '1':
        console.log('One or Zero');
        break;
    case '2':
        console.log('Two');
        break;
    case 3:console.log('Never Excecutes' );
    break;
    default:console.log('an unknown value');
}