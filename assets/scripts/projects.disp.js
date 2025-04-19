// New projects go here, then need extra details for their separate page at projectpages.disp.js
// Need to update both or the link will be broken!
// projIDs of entries in this file and projectpages.disp.js should match for correct display!

const PROJECTS = [
    {
        projID : "regen",
        name : "From Local Decisions to Global Patterns: Self-Organization in Development, Regeneration, Wound Healing", 
        image : "assets/images/projects/development.png", 
        shortdesc : "How do cells use local rules to generate global structures and recover from injury?"
    },
    {
        projID : "stgen",
        name : "Cell Behavior in Context: Spatial and Temporal Genomics", 
        image : "assets/images/projects/onecell.png", 
        shortdesc : "How do individual cells maintain and interpret their identity in space and time?"
    },
    {
        projID : "intgen",
        name : "Interpretable Machine Learning: Structure, Symmetry, and Decision-Making", 
        image : "assets/images/projects/gear.png", 
        shortdesc : "How do we build learning systems that generalize, adapt, and explain?"
    },
]

// Custom route overrides for selected projects
const CUSTOM_ROUTES = {
  stgen: "from-cell-to-context.html",
  regen: "self-organization.html",
  intgen: "cmg-core-ml.html"
};

buildProjects(PROJECTS)

// No need to update below this line if everything is working !

//############################################################//
//############################################################//
//############################################################//

// Function to build projects
function buildProjects(projects){
    var grid = document.getElementById("grid-projects")
    grid.innerHTML = ""

    for (var i = 0; i < projects.length; i++){
        const proj = projects[i];
        const customLink = CUSTOM_ROUTES[proj.projID] || `projectpages.html?projID=${proj.projID}`;

        var block = `
        <a class="col-12" href="${customLink}" style="text-align: justify; display: block; margin-bottom: 2rem;">
            <span class="image left"><img src="${proj.image}" alt="" style="width: 150px; float: left; margin-right: 1rem;"/></span>
            <h4 style="text-align: left; margin-top: 0;">${proj.name}</h4>
            <p>${proj.shortdesc}</p>
        </a>
        `

        grid.innerHTML += block;
    }
}
