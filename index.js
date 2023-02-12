var targetContainer = document.querySelector("body")
var ol = document.createElement("ol")
targetContainer.appendChild(ol)

const menu = () => { 
    const searchBar = document.getElementById("searchBar");

    var foodData = fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=" + searchBar.value, {
        method : "GET",
        headers : {
            "Accept" : "application/json"
        }
    })
    .then(response => response.json())
    .then(response => 
        {   
            ol.innerHTML = ""
            for(var i = 0; i < response["meals"].length; i++){
                var list = document.createElement("li")
                var url = document.createElement("a")
                var img = document.createElement("img")
                var br = document.createElement("br")
                
                url.setAttribute("href", response["meals"][i]["strYoutube"])
                img.setAttribute("src", response["meals"][i]["strMealThumb"])
                img.setAttribute("width", "360")
                img.setAttribute("heigth", "360")
                url.innerText = response["meals"][i]["strMeal"] + "\n"
                list.appendChild(url)
                list.appendChild(img)
                ol.appendChild(list)
                ol.appendChild(br)
            }
        })
    }

menu()