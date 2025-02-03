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
            { title: "MarkerMap: nonlinear marker selection for single-cell studies (2024)", link: "https://doi.org/10.1038/s41540-024-00339-3" },
            { title: "Patches: A Representation Learning framework for Decoding Shared and Condition-Specific Transcriptional Programs in Wound Healing (2024)", link: "https://www.biorxiv.org/content/10.1101/2024.12.23.630186" },
            { title: "A computational pipeline for spatial mechano-transcriptomics (2023)", link: "https://www.biorxiv.org/content/10.1101/2023.08.03.551894" },
            { title: "In silico tissue generation and power analysis for spatial omics (2023)", link: "https://doi.org/10.1038/s41592-023-01889-5" }
        ]	    
    },
    {
        projID : "regen",
        name : "Statistics of self-organization: Development, Wound Healing & Regeneration", 
        link : "https://ladder.readthedocs.io/en/latest/",
        image : "assets/images/projects/placeholder.png", 
        longdesc : 
	`Why can some creatures regrow limbs while others can’t even fix a scratch properly?
	Some animals can regenerate whole limbs, while others struggle to repair even minor wounds. We study the mathematics 
	of self-organization in development, wound healing, and regeneration, focusing on how collective cell behavior leads to tissue formation—or failure.
	By applying computational modeling and statistical learning, we explore the fundamental principles that govern tissue recovery and morphogenesis.
 	`,
	papers: [] // Empty array if no papers for this project
    },
    {
        projID : "physml",
        name : "The Physics of Proliferating Active Matter: Forces, Flows & Structure", 
        link : "about:blank" ,
        image : "assets/images/projects/placeholder.png" , 
        longdesc : 
	`What happens when cells push, pull, and squeeze their way through tissues?
	Cells aren’t static—they move, exert forces, and react to their surroundings. Using mechanics, statistical physics, 
	and machine learning, we study how cells behave as intelligent, proliferative, active matter—systems that dynamically rearrange themselves.
	From development to cancer, we seek to understand how cells physically interact to create and reshape living structures.
        `,
	papers: [] // Empty array if no papers for this project
    },
    {
        projID : "intgen",
        name : "Interpretable Machine Learning: Making Sense of Messy Data", 
        link : "about:blank",
        image : "assets/images/projects/placeholder.png", 
        longdesc : 
	`Can AI help us understand biology without turning into a black box?
	Machine learning is powerful—but in biology, interpretability matters just as much as accuracy.
	We develop methods that make AI more transparent, robust, and useful for understanding cellular processes.
	From gene expression modeling to predicting cell fates, we design computational tools that help us learn 
	from complex, noisy, and high-dimensional biological data—without losing biological meaning.
	`,
	papers: [] // Empty array if no papers for this project
    },
    {
        projID : "expgen",
        name : "Designing for Discovery: Experimental Design and Causal Reasoning", 
        link : "about:blank",
        image : "assets/images/projects/placeholder.png", 
        longdesc : 
	`How do we design experiments that uncover both patterns and mechanisms?
	Biology is full of hidden dependencies, but not all experiments are designed to reveal them.
	We develop methods for optimal experimental design, helping scientists ask better questions and extract causal relationships from complex biological systems.
	Whether it’s single-cell genomics, CRISPR perturbations, or spatial transcriptomics, we create statistical and computational approaches to maximize the information gained from each experiment.
	`,
	papers: [] // Empty array if no papers for this project
    },
    {
        projID : "predbio",
        name : "Predictive Biology: Learning from Data to Anticipate Outcomes", 
        link : "about:blank",
        image : "assets/images/projects/placeholder.png", 
        longdesc : 
	`Cells respond to signals, adapt to environments, and sometimes behave unpredictably.
	We develop predictive models that learn from large biological datasets to forecast cellular responses, disease progression, and experimental outcomes.
	From clinical applications to synthetic biology, we focus on creating data-driven models that help scientists anticipate biological behavior before it happens.
	`,
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
                papersHTML += `
                <h3>Relevant Papers:</h3>
                <ul>
                `;
                projinfo[i].papers.forEach(paper => {
                    papersHTML += `
                    <li style="margin-bottom: 5px;list-style-position: inside;">
                        <span style="position: relative;">
                            <i class="fas fa-book-open"></i><a href="${paper.link}" target="_blank">&nbsp${paper.title}</a>
                        </span>
                    </li>
                    `
                });
                papersHTML += `
                </ul>
                `;
            }

	
            template.innerHTML = 
            `
            <h2>${projinfo[i].name}</h2>
                <div class="col-6 col-6" style="text-align: justify;"><span class="image left"><img src="${projinfo[i].image}" alt=""></span>
                    <p>
                        ${projinfo[i].longdesc}
                        ${papersHTML} 
                    </p>
		    
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
