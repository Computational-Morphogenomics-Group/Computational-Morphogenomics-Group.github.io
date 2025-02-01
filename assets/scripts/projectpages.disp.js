const PROJINFO = [
    {
        projID : "stgen",
        name : "Maps of the Morphing Cell: Spatial & Temporal Genomics", 
        image : "assets/images/projects/placeholder.png",
        longdesc : 
        `
        How do cells know where they are and where they’re going?
	Cells are not just little biochemical machines—they’re wanderers, navigators, and team players in an ever-changing landscape. 
	We build computational maps of cellular identity and movement, using spatial transcriptomics and temporal modeling to track 
	how cells make decisions about their fate. Whether it’s a regenerating limb or a developing embryo, we aim to decode 
	the blueprints that guide cell migration and organization
        `,
	papers : [
            { title: "MarkerMap: nonlinear marker selection for single-cell studies (2024)", link: "https://doi.org/10.1038/s41540-024-00345-6" },
            { title: "Patches: A Representation Learning framework for Decoding Shared and Condition-Specific Transcriptional Programs in Wound Healing (2024)", link: "https://www.biorxiv.org/content/10.1101/2024.12.23.630186" },
            { title: "A computational pipeline for spatial mechano-transcriptomics (2023)", link: "https://www.biorxiv.org/content/10.1101/2023.08.03.551894" },
            { title: "In silico tissue generation and power analysis for spatial omics (2023)", link: "https://doi.org/10.1038/s41592-023-01889-5" }
        ]	    
    },
    {
        projID : "exgen",
        name : "Explainability + Genomics", 
        link : "https://pypi.org/project/scGeneFit/",
        image : "assets/images/projects/regions.png", 
        longdesc : "In Progress...",
	papers: [] // Empty array if no papers for this project
    },
    {
        projID : "physml",
        name : "Physics + Machine Learning", 
        link : "about:blank" ,
        image : "assets/images/projects/physics.png" , 
        longdesc : "In Progress...",
	papers: [] // Empty array if no papers for this project
    },
    {
        projID : "vitrovsvivo",
        name : "In Vitro vs In Vivo Systems", 
        link : "about:blank",
        image : "assets/images/projects/dish.jpeg", 
        longdesc : "In Progress...",
	papers: [] // Empty array if no papers for this project
    },
    {
        projID : "mechanotranscriptomics",
        name : "Mechanics + Trancriptomics", 
        link : "about:blank",
        image : "assets/images/projects/transcriptomics.jpeg", 
        longdesc : "In Progress...",
	papers: [] // Empty array if no papers for this project
    },
    {
        projID : "perturbference",
        name : "Inference + Perturbation", 
        link : "about:blank",
        image : "assets/images/projects/robustness.jpeg", 
        longdesc : "In Progress...",
	papers: [] // Empty array if no papers for this project
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
	    let papersHTML = "";
            
            // Check if there are relevant papers
            if (projinfo[i].papers && projinfo[i].papers.length > 0) {
                papersHTML += `<h3>Relevant Papers:</h3><ul>`;
                projinfo[i].papers.forEach(paper => {
                    papersHTML += `<li><i class="fas fa-book-open"></i> <a href="${paper.link}" target="_blank">${paper.title}</a></li>`;
                });
                papersHTML += `</ul>`;
            }

	
            template.innerHTML = 
            `
            <h2>${projinfo[i].name}</h2>
                <div class="col-6 col-6" style="text-align: justify;"><span class="image left"><img src="${projinfo[i].image}" alt=""></span>
                    <p>${projinfo[i].longdesc}</p>
		    ${papersHTML} 
                </div>
            `

            return 
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
