let user = {} ;
Object.defineProperty(user,"name",{
    value:"Virat Kholi",
    
})
  
  let descriptor = Object.getOwnPropertyDescriptor(user, 'name');
  
  console.log( JSON.stringify(descriptor, null, 2 ) );