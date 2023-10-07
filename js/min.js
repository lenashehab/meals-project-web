
let h2 = document.querySelector('h2'),
    imgBox = document.getElementById('img-box'),
    rowData = document.getElementById('rowData'),
    layer = document.querySelector('.layer'),
    row = document.getElementById('row'),
    apiResponse,
    responseData;
mealData = [],
    meal = [];

// close-open nav
$('#open-close').click(function () {
    let navWidth = $('.ul-side').outerWidth();
    // ,$('#open-icon').remove()
    // $('#open-icon').html('')
    $('#open-close').hide('#open-icon').show('#open-icon');

    if ($('#sideNav').css('left') == '210px') {

        $('#sideNav').animate({ left: '0' }, 900)
    }
    else {
        $('#sideNav').animate({ left: '210px' }, 900)
    }

})



// get Data
async function getMealsData() {
    apiResponse = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=");
    mealData = await apiResponse.json();
    mealData = mealData.meals;
    displayData();
}

getMealsData();

// display Data
function displayData() {

    let mealsLoop = '';

    for (let i = 0; i < mealData.length; i++) {
        mealsLoop += `
<div class="col-md-6 col-lg-3">
<div class="meal-box rounded bg-danger">
    <div class="layer d-flex align-items-center">
        <h2 class="h2-color">${mealData[i].strMeal}</h2>
    </div>
        <img id="img-box" src="${mealData[i].strMealThumb}" alt="">
</div>
</div>
`
    }
    rowData.innerHTML = mealsLoop;
}

// one meal recipe
// async function getFullRecipe(recipeName) {
//     // $(".loading-container").fadeIn(100)
//     let meal = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${recipeName}`)
//     meal = await meal.json();
//     meal=meal.meals;
//     displayricpeMeal();

//     // $(".loading-container").fadeOut(500)
// }

// layer.addEventListener('click',function displayricpeMeal(meal){
//     let recipeInsta='';
//     for(let i=0;i<meal.length;i++){
//         recipeInsta += `<div class="col-md-4">
//         <div class="img-box text-center">
//             <img src="">
//             <h1>cobra</h1>
//         </div>
//     </div>

//     <div class="col-md-8 ">
//         <div class="inst-box">
//             <h2>Instructions</h2>
//             <p></p>
//             <p class="fw-bolder">Area :</p>
//             <p class="fw-bolder">Category : </p>
//             <h3>Recipes :</h3>

//             <ul class="d-flex list-unstyled " id="recipes">

//             </ul>
//             <h3 class="my-2 mx-1 p-1">Tags :</h3>
//             <ul class="d-flex " id="tags">
//             </ul>


//             <a class="btn btn-success text-white" target="_blank" href="${meal.strSource}">Source</a>
//             <a class="btn youtube-button text-white" target="_blank" href="${meal.strYoutube}">Youtube</a>
//         </div>
//     </div>`
//     }
//     let liBox = "";
//     for (let i = 0; i <= 21; i++) {
//         if (meal[`strIngredient${i}`]) {
//             liBox += `<li class="my-3 mx-1 p-1 alert-success rounded">${meal[`strMeasure${i}`]} ${meal[`strIngredient${i}`]}</li>`
//         }
//     }

// })

// layer.addEventListener('click',function(){
//     console.log('lena shehab')
// })



// search
let liOne = document.querySelector('.ul-side .liOne'),
    input = document.querySelectorAll('.form-control'),
    inputName = document.querySelector('.input-name');

for (let i = 0; i < input.length; i++) {
    input[i].addEventListener('click', function () {
        input[i].classList.add('bg-black')

    })
    input[i].addEventListener('keypress', function () {
        input[i].value = '';
    })
}

liOne.addEventListener('click', function () {
    let s = '';
    s = ` <div class="row g-3 mt-5" id="search-row">
        <div class="col-md">
                <input type="text" class="form-control input-name" id="floatingInputGrid" placeholder="Search By Name" value="Search By Name">
            </div>
      
        <div class="col-md">
                <input type="text" class="form-control" id="floatingInputGrid" placeholder="Search By Letter" value="Search By Letter">
            </div>
        </div>
    </div>`
    document.getElementById('container-all').innerHTML = s;
})

async function searchByName() {
    apiResponse = await fetch(`www.themealdb.com/api/json/v1/1/search.php?s=${input.value}`);
    mealData = await apiResponse.json();
    mealData = mealData.meals;
    displayData();
}

// input.addEventListener('keypress',function(){
//     searchByName();
// })

// categori
let liTwo = document.querySelector('.ul-side .liTwo');

liTwo.addEventListener('click',function(){
    async function getMealsData() {
        apiResponse = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php");
        mealData = await apiResponse.json();
        mealData = mealData.categories;
        console.log(mealData)
        // displayData();
    }
})





