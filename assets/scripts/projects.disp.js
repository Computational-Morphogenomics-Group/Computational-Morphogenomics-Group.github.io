// New projects go here, then need a separate page at assets/projects/<projectname>.html (change this to read query?)
				
const PROJECTS = [
    {
        name : "Embedded Spatial Clustering", 
        link : "https://github.com/Computational-Morphogenomics-Group/sceLDA",
        image : "assets/images/spine.png", 
        shortdesc : "In Progress..."
    },
    {
        name : "Explainability + Genomics", 
        link : "https://pypi.org/project/scGeneFit/",
        image : "assets/images/regions.png", 
        shortdesc : "In Progress..."
    },
    {
        name : "Physics + Machine Learning", 
        link : "about:blank" ,
        image : "assets/images/physics.png" , 
        shortdesc : "In Progress..."
    },
    {
        name : "In Vitro vs In Vivo Systems", 
        link : "about:blank",
        image : "assets/images/dish.jpeg", 
        shortdesc : "In Progress..."
    },
    {
        name : "Mechanics + Trancriptomics", 
        link : "about:blank",
        image : "assets/images/transcriptomics.jpeg", 
        shortdesc : "In Progress..."
    },
    {
        name : "Inference + Perturbation", 
        link : "about:blank",
        image : "assets/images/robustness.jpeg", 
        shortdesc : "In Progress..."
    },
    
]


buildProjects(PROJECTS)

// No need to update below this line if everything is working !

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
        <a class="col-6 col-6-xsmall" href=${projects[i].link} target="_blank" style="text-align: justify;"><span class="image left"><img src=${projects[i].image} alt=""/></span>
            <h4 style="text-align: left;">${projects[i].name}</h4>
            ${projects[i].shortdesc}
        </a>
        `

        grid.innerHTML += block			 
    }
}