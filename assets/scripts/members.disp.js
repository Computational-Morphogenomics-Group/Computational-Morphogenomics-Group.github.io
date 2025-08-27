// Active members go here, alumni go below
				
const ACTIVE = [
    {
        name : "Bianca Dumitrascu", 
        title : "Group Leader",
        image : "assets/images/members/bianca-dumitrascu.png",
        link : "bianca.html", 
    },
    {
        name : "Lambda Moses", 
        title : "Postdoctoral Researcher",
        image : "assets/images/members/lambda-moses.png",
        link : "https://cancerdynamics.columbia.edu/lambda-moses", 
    }, 	
    {
        name : "Özgür Yılmaz Beker", 
        title : "Doctoral Student",
        image : "assets/images/projects/ozgur-yilmaz-beker.png",
        link : "https://cancerdynamics.columbia.edu/ozgur-beker", 
    },
	{
        name : "Haochen Yang", 
        title : "Doctoral Student",
        image : "assets/images/projects/development.png",
        link : "https://www.dbmi.columbia.edu/phd-students/", 
    },
    {
        name : "Ruiyang He", 
        title : "Joint Doctoral Student (Vickovic Lab)",
        image : "assets/images/members/ruiyang-he.png",
        link : "https://cancerdynamics.columbia.edu/ruiyang-he", 
    },
    {
        name : "Michael Pressler", 
        title : "Rotation Student",
        image : "assets/images/members/michael-pressler.jpeg",
        link : "https://cancerdynamics.columbia.edu/michael-p-pressler", 
    }
]

// Alumni go here
const ALUMNI = [
	
    {
        name : "Craig Fouts", 
        title : "Machine Learning Engineer @Vickovic Lab",
        image : "assets/images/members/craig-fouts.png",
        link: "https://www.craigfouts.com/",
    },
	
	{
        name : "Jose Pomarino Nima", 
        title : "Masters Student",
        image : "assets/images/members/jose-pomarino-nima.png",
        link: "https://computational-morphogenomics-group.github.io/",  
    },
    {
        name : "Harry Kabodha", 
        title : "Masters Student",
        image : "assets/images/members/harry-kabodha.png",
        link: "https://cancerdynamics.columbia.edu/harry-edward-igulu-kabodha", 
    },  
]


buildMembers(ACTIVE, "grid-members")
buildMembers(ALUMNI, "grid-alumni")

// No need to update below this line if everything is working !

//############################################################//
//############################################################//
//############################################################//


// Function to build projects
function buildMembers(data, grid_id){
    var active_grid = document.getElementById(grid_id)
    active_grid.innerHTML = ""
    
    for (var i = 0; i < data.length; i++){

        var block = 
        `
        <a class="col-3 col-6-xsmall" href="${data[i].link}", target='_blank'>
			<span class="image fit"><img src=${data[i].image} alt=""/></span>
			<h4>${data[i].name}</h4>
			<p>${data[i].title}</p>
		</a>
        `

        active_grid.innerHTML += block			 
    }

}
