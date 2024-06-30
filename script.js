const API_URL = 'https://cataas.com/cat';

// Function to handle radio button and to give the right result
function SendData(res){
    const sub = document.getElementById("sub");
    sub.addEventListener('click', (e)=>{
        e.preventDefault();
        let data = document.querySelectorAll("input[name='cat']");
        let rButton;
        for(let i of data){
            if(i.checked){
                rButton = i.value;
            }
        }
        
        if(rButton === "cat" || rButton === "gif")
        {
            document.getElementById("image").src = `${res.url}/${rButton}`
        }
        else if(rButton === "custom"){
            let cust = document.getElementById("custom").value;
            document.getElementById("image").src = `${res.url}/${cust}`
        }else if(rButton === "text"){
            let text = document.getElementById("text").value;
            document.getElementById("image").src = `${res.url}/says/${text}`
        }
    })
}

// Function to get the data by submitting the form
async function getdata(){
    try {
        let res = await fetch(API_URL, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
    
        if(res.status === 200){
            console.log(res.url)
            SendData(res);
        }
    } catch (error) {
        console.log(error)
    }
}

getdata();

function reload(){
    location.reload
}