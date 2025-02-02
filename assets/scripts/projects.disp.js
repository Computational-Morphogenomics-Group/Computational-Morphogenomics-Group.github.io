// New projects go here, then need extra details for their separate page at projectpages.disp.js
// Need to update both or the link will be broken!
// projIDs of entries in this file and projectpages.disp.js should match for correct display!
				
const PROJECTS = [
    {
        projID : "stgen",
        name : "Maps of the Morphing Cell: Spatial & Temporal Genomics", 
        image : "assets/images/projects/cell.png", 
        shortdesc : "How do cells know where they are and where they’re going?"
    },
    {
        projID : "regen",
        name : "Statistics of self-organization: Development, Wound Healing & Regeneration", 
        image : "assets/images/projects/cell.png", 
        shortdesc : "Why can some creatures regrow limbs while others can’t even fix a scratch properly?"
    },
    {
        projID : "physml",
        name : "The Physics of Proliferating Active Matter: Forces, Flows & Structure", 
        image : "assets/images/projects/cell.png" , 
        shortdesc : "What happens when cells push, pull, and squeeze their way through tissues?"
    },
    {
        projID : "intgen",
        name : "Interpretable Machine Learning: Making Sense of Messy Data", 
        image : "assets/images/projects/cell.png", 
        shortdesc : "Can AI help us understand biology without turning into a black box?"
    },
    {
        projID : "expgen",
        name : "Designing for Discovery: Experimental Design and Causal Reasoning", 
        image : "assets/images/projects/cell.png", 
        shortdesc : "How do we design experiments that uncover both patterns and mechanisms?"
    },
    {
        projID : "predbio",
        name : "Predictive Biology: Learning from Data to Anticipate Outcomes", 
        image : "assets/images/projects/cell.png", 
        shortdesc : "Can we use data to predict how biology unfolds?"
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
