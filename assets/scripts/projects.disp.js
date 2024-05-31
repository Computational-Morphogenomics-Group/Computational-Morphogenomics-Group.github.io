// New projects go here, then need extra details for their separate page at projectpages.disp.js
// Need to update both or the link will be broken!
// projIDs of entries in this file and projectpages.disp.js should match for correct display!
				
const PROJECTS = [
    {
        projID : "esc",
        name : "Embedded Spatial Clustering", 
        image : "assets/images/spine.png", 
        shortdesc : "In Progress..."
    },
    {
        projID : "exgen",
        name : "Explainability + Genomics", 
        image : "assets/images/regions.png", 
        shortdesc : "In Progress..."
    },
    {
        projID : "physml",
        name : "Physics + Machine Learning", 
        image : "assets/images/physics.png" , 
        shortdesc : "In Progress..."
    },
    {
        projID : "vitrovsvivo",
        name : "In Vitro vs In Vivo Systems", 
        image : "assets/images/dish.jpeg", 
        shortdesc : "In Progress..."
    },
    {
        projID : "mechanotranscriptomics",
        name : "Mechanics + Trancriptomics", 
        image : "assets/images/transcriptomics.jpeg", 
        shortdesc : "In Progress..."
    },
    {
        projID : "perturbference",
        name : "Inference + Perturbation", 
        image : "assets/images/robustness.jpeg", 
        shortdesc : "In Progress..."
    },
    
]


buildProjects(PROJECTS)

// No need to update below this line if everything is working !

//############################################################//
//############################################################//
//############################################################//


// Keyup event for search
$(`#search-projects`).on('keyup', function(){
    var val = $(this).val()

    var data = searchTables(PROJECTS, val)
    buildProjects(data)

})

//Function to search tables
function searchTables(data, value){
    var filteredData = []

    value = value.toLowerCase()

    for (var i = 0; i < data.length; i++){

        var name = data[i].name.toLowerCase()
        
        if (name.includes(value)){
            filteredData.push(data[i])
        }


    }

    return filteredData

}


// Function to build projects
function buildProjects(projects){
    var grid = document.getElementById("grid-projects")
    grid.innerHTML = ""
    
    for (var i = 0; i < projects.length; i++){

        var block = 
        `
        <a class="col-6 col-6-xsmall" href="projectpages.html?projID=${projects[i].projID}" target="_blank" style="text-align: justify;"><span class="image left"><img src=${projects[i].image} alt=""/></span>
            <h4 style="text-align: left;">${projects[i].name}</h4>
            ${projects[i].shortdesc}
        </a>
        `

        grid.innerHTML += block			 
    }
}