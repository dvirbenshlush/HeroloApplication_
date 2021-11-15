const isDark =(state = false,action)=> {
switch(action.type){
    case 'changeMode':
        return !state;
    default: 
        return state;
}

}


export default isDark;