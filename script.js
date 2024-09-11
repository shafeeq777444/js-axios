
// const API_URL="https://www.themealdb.com/api/json/v1/1/search.php?f=a"
// const dishListEl = document.getElementById("dish-list")

// // function for adding li with img with the use with data
// function updateDom(data){
//    data.meals.forEach((dish)=>{
//     const li=document.createElement("li")
//     li.innerHTML=`
//     <img src='${dish.strMealThumb}'>
//     <h3>${dish.strCategory}</h3>
//     `
//     dishListEl.appendChild(li)
//    })
// }


// axios.get(API_URL).then(({data})=>{
//     console.log(data);
//     updateDom(data) 
// }).catch((err)=>console.log(err.message));

// axios({
//     method:"get",
//     url: API_URL,
    
//     params:{
//         api_key:"",
//         f: "a"
//     }
// }).then(({data})=>{
//     updateDom(data)
// }).catch((err)=>console.log(err.message));

// asynch and await
// ----------------

// async function getData(){
// data= await axios.get(API_URL)
// updateDom({data})
// }

// getData()