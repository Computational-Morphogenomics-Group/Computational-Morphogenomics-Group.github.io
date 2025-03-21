// Active members go here, alumni go below
				
const ACTIVE = [
    {
        name : "Bianca Dumitrascu", 
        title : "Group Leader",
        image : "assets/images/members/bianca-dumitrascu.png", 
    },
    {
        name : "Agnieszka Geras", 
        title : "Postdoctoral Researcher",
        image : "assets/images/members/agnieszka-geras.jpg", 
    },
    {
        name : "Claire He", 
        title : "Doctoral Student",
        image : "assets/images/members/claire-he.png", 
    }, 
    {
        name : "Ruiyang He", 
        title : "Doctoral Student",
        image : "assets/images/members/ruiyang-he.png", 
    },
    {
        name : "Tianji Yu", 
        title : "Doctoral Student",
        image : "assets/images/members/tianji-yu.png", 
    },  
    {
        name : "Mia Dai", 
        title : "Doctoral Student (Rotating)",
        image : "assets/images/members/mia-dai.jpeg", 
    },
    {
        name : "Michael Pressler", 
        title : "Doctoral Student (Rotating)",
        image : "assets/images/members/michael-pressler.jpeg", 
    }, 
    {
        name : "Ting Chen", 
        title : "Doctoral Student (Rotating)",
        image : "assets/images/members/ting-chen.jpg", 
    }, 
    {
        name : "Özgür Yılmaz Beker", 
        title : "Research Assistant",
        image : "assets/images/members/ozgur-yilmaz-beker.png", 
    },
    {
        name : "Jiahui Zhu", 
        title : "Undergraduate Student",
        image : "assets/images/members/jiahui-zhu.jpg", 
    },
]

// Alumni go here
const ALUMNI = [
	
    {
        name : "Craig Fouts", 
        title : "Machine Learning Engineer @Vickovic Lab",
        image : "assets/images/members/craig-fouts.png", 
    },
	
	{
        name : "Jose Pomarino Nima", 
        title : "Masters Student",
        image : "assets/images/members/jose-pomarino-nima.png", 
    },
    {
        name : "Harry Kabodha", 
        title : "Masters Student",
        image : "assets/images/members/harry-kabodha.png", 
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
        <a class="col-3 col-6-xsmall" href="">
			<span class="image fit"><img src=${data[i].image} alt=""/></span>
			<h4>${data[i].name}</h4>
			<p>${data[i].title}</p>
		</a>
        `

        active_grid.innerHTML += block			 
    }

}
