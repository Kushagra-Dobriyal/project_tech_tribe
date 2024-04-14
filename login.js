let loginInput = querySelector("#email").value;
let loginPassword = querySelector("#password").value;

addEventListener(("input"),(event) =>{
  if( loginInput == admin@gmail.com && loginPassword == admin@password)
    {
    window.location.assing("firstpage.html");
      alert("you have successfully logged in);
            
    }
            else{
              alert("Invalid credentials");
              
            }

  
});




