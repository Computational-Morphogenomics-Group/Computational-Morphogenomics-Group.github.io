const PROJINFO = [
    {
        projID : "stgen",
        name : "Maps of the Morphing Cell: Spatial & Temporal Genomics", 
        image : "assets/images/projects/spine.png",
        longdesc : 
        `
        How do cells know where they are and where they’re going?
	Cells are not just little biochemical machines—they’re wanderers, navigators, and team players in an ever-changing landscape. 
	We build computational maps of cellular identity and movement, using spatial transcriptomics and temporal modeling to track 
	how cells make decisions about their fate. Whether it’s a regenerating limb or a developing embryo, we aim to decode 
	the blueprints that guide cell migration and organization.
        `
    },
    {
        projID : "exgen",
        name : "Explainability + Genomics", 
        link : "https://pypi.org/project/scGeneFit/",
        image : "assets/images/projects/regions.png", 
        longdesc : "In Progress..."
    },
    {
        projID : "physml",
        name : "Physics + Machine Learning", 
        link : "about:blank" ,
        image : "assets/images/projects/physics.png" , 
        longdesc : "In Progress..."
    },
    {
        projID : "vitrovsvivo",
        name : "In Vitro vs In Vivo Systems", 
        link : "about:blank",
        image : "assets/images/projects/dish.jpeg", 
        longdesc : "In Progress..."
    },
    {
        projID : "mechanotranscriptomics",
        name : "Mechanics + Trancriptomics", 
        link : "about:blank",
        image : "assets/images/projects/transcriptomics.jpeg", 
        longdesc : "In Progress..."
    },
    {
        projID : "perturbference",
        name : "Inference + Perturbation", 
        link : "about:blank",
        image : "assets/images/projects/robustness.jpeg", 
        longdesc : "In Progress..."
    },
    
]

buildProjPage(PROJINFO)

// No need to update below this line if everything is working !

//############################################################//
//############################################################//
//############################################################//

function getQueryVariable(variable){
       var query = window.location.search.substring(1);
       var vars = query.split("&");
       for (var i=0;i<vars.length;i++) {
           var pair = vars[i].split("=");
           if(pair[0] == variable){return pair[1];}
       }
       return(false);
}

function buildProjPage(projinfo){
    var projID = getQueryVariable("projID")
    var template = document.getElementById("proj-body")

    for (var i = 0; i < projinfo.length ; i++){
        if (projinfo[i].projID == projID){
            template.innerHTML = 
            `
            <h2>${projinfo[i].name}</h2>
                <div class="col-6 col-6" style="text-align: justify;"><span class="image left"><img src=${projinfo[i].image} alt=""></span>
                    <p>${projinfo[i].longdesc}</p>
                </div>
            `

            return 0
        }   
    }

    template.innerHTML = 
    `
    <h2 id="proj-name">Oooops</h2>
		<div class="col-6 col-6" style="text-align: justify;"><span class="image left"><img src="assets/images/projects/butterfly.png" alt=""></span>
            <p>The project you searched for does not exist!</p>	
	    </div>
    `
}
