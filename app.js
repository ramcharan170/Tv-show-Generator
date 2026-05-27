const form=document.querySelector("#form");
const results=document.querySelector("#results");
const card=document.querySelector(".card");
let formElement;
form.addEventListener('submit',(e)=>{e.preventDefault();
    formElement=form.elements.input.value;
    results.replaceChildren();
    card.style.width='auto';
    tv_api();
    
})

const tv_api= async()=>{
    const config={params:{q:formElement},headers:{"Content-type":"application/json"}}
    try{ 
        const sol= await axios.get("https://api.tvmaze.com/search/shows",config)
        let length=sol.data.length;
        for(let i=0;i<length;i++){
            if(sol.data[i].show.image){
                const newimg=document.createElement('IMG');
                newimg.src=sol.data[i].show.image.medium;
                results.append(newimg);

            }
        }
    }
    catch(e){
        console.log(e);
    }
}
