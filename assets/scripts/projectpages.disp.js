const PROJINFO = [
    {
        projID : "esc",
        name : "Embedded Spatial Clustering", 
        image : "assets/images/projects/spine.png",
        longdesc : 
        `
        This is how a long description would look like. The rest will be lipsum.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        In elementum enim nec lacus rutrum, vitae venenatis est cursus. Morbi mollis sed ex ut egestas. Cras ut dolor turpis. 
        Aliquam blandit, sapien et consequat maximus, orci dui mollis nulla, id tempus tellus turpis et nunc.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras elit ex, aliquam eget efficitur eget, tempor vitae tellus. 
        Morbi nec neque eleifend, pulvinar lectus vel, mollis quam. Etiam ac sagittis tellus. Nulla pretium vehicula auctor. Fusce ultrices ultrices 
        diam, eget gravida neque scelerisque at. Nulla quis nulla erat. Nunc eu dapibus risus, id aliquet nulla. In dictum nulla eget arcu feugiat ultrices. 
        Cras tortor lorem, tempus at lectus sed, viverra tempus magna. Maecenas vulputate, ante at ornare tristique, nibh urna elementum mi, eget volutpat 
        neque ipsum eget arcu. Fusce eu molestie purus.Vestibulum pellentesque sagittis metus, at laoreet lectus aliquam eget. Quisque nibh ante, luctus in libero quis,
        ultricies aliquam nisi. Ut varius sollicitudin lorem, eget molestie mauris egestas et. Quisque rhoncus ac odio sed scelerisque. Duis finibus odio est, 
        pulvinar aliquam metus euismod eget. Vestibulum urna metus, dignissim eu ex sit amet, condimentum egestas ex. In vel finibus ante, sit amet tincidunt 
        augue. Sed nec. 
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
		<div class="col-6 col-6" style="text-align: justify;"><span class="image left"><img src="assets/images/butterfly.png" alt=""></span>
            <p>The project you searched for does not exist!</p>	
	    </div>
    `
}