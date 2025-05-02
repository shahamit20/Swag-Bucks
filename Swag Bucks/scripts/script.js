
document.addEventListener("DOMContentLoaded",()=>{
    document.getElementById("btn").addEventListener("click",(event)=>{
        event.preventDefault();
        let email = document.getElementById("email").value
        let password = document.getElementById("password").value
        let earn = parseInt(localStorage.getItem("Earn")) || 0;
        earn += 10; // Add 10 points
        console.log(earn);
        

        let user = localStorage.getItem("User")
        console.log(user)
        let userobj = JSON.parse(user)
        console.log(userobj.email)
        console.log(email)

        if(userobj.email == email && userobj.password == password){
            window.location.href="home.html"
            
            localStorage.setItem("Earn", earn);
            localStorage.setItem("justLoggedIn", "true");
        }
        else{
            alert("please Enter correct Email")
        }
        

    })

})

    
