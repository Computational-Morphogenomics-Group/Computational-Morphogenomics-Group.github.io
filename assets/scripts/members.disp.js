// Active members go here, alumni go below

const ACTIVE = [
    {
        name: "Bianca Dumitrascu",
        title: "Group Leader",
        image: "assets/images/members/bianca-dumitrascu.png",
        link: "bianca.html",
    },
    {
        name: "Lambda Moses",
        title: "Postdoctoral Researcher",
        image: "assets/images/members/lambda-moses.png",
        link: "https://cancerdynamics.columbia.edu/lambda-moses",
    },
    {
        name: "Özgür Yılmaz Beker",
        title: "Doctoral Student",
        image: "assets/images/members/ozgur-yilmaz-beker.png",
        link: "https://zgr2788.github.io/",
    },
    {
        name: "Haochen Yang",
        title: "Doctoral Student",
        image: "assets/images/members/haochen-yang.jpg",
        link: "https://www.dbmi.columbia.edu/phd-students/",
    },
    {
        name: "Michael Pressler",
        title: "Doctoral Student",
        image: "assets/images/members/michael-pressler.jpeg",
        link: "https://cancerdynamics.columbia.edu/michael-p-pressler",
    },
    {
        name: "Merwan Oussal",
        title: "Research Intern",
        image: "assets/images/projects/development.png",
        link: "https://www.morpho-lab.com/members.html",
    },
    {
        name: "Marissa Esteban",
        title: "Research Fellow",
        image: "assets/images/members/marissa-esteban.jpg",
        link: "https://marissanesteban.github.io/",
    },
    {
        name: "Eddie Kong",
        title: "MSc Intern",
        image: "assets/images/members/eddie-kong.jpg",
        link: "https://www.morpho-lab.com/members.html",
    },
    {
        name: "Gilyana Dorzhieva",
        title: "Undergraduate Research Intern",
        image: "assets/images/members/gilyana-dorzhieva.jpg",
        link: "https://www.morpho-lab.com/members.html",
    }
]

// Alumni go here
const ALUMNI = [

    {
        name: "Beini Wang",
        title: "MA Intern, now at TikTok",
        image: "assets/images/members/beini-wang.jpg",
        link: "https://www.morpho-lab.com/members.html",
    },
    {
        name: "Craig Fouts",
        title: "MSc Intern, now at Machine Learning Engineer @Vickovic Lab",
        image: "assets/images/members/craig-fouts.png",
        link: "https://www.craigfouts.com/",
    },
	
    {
        name: "Samuel Gunz",
        title: "Visiting PhD Student (Robinson Lab, UZH)",
        image: "assets/images/members/samuel-gunz.jpg",
        link: "https://www.mls.uzh.ch/en/research/robinson/groupmembers/samuel-gunz.html",
    },
    {
        name: "Jose Pomarino Nima",
        title: "MSc Intern",
        image: "assets/images/members/jose-pomarino-nima.png",
        link: "https://www.morpho-lab.com/members.html",
    },
    {
        name: "Harry Kabodha",
        title: "MSc Student",
        image: "assets/images/members/harry-kabodha.png",
        link: "https://cancerdynamics.columbia.edu/harry-edward-igulu-kabodha",
    },
    {
        name: "Ruiyang He",
        title: " MPhil Student, currently PhD Student in BioEngineering (Vickovic Lab, Columbia University)",
        image: "assets/images/members/ruiyang-he.png",
        link: "https://cancerdynamics.columbia.edu/ruiyang-he",
    },
    {
        name: "Ruben Weitzman",
        title: " MPhil Student, currently PhD student in Computer Science (with Yarin Gal and Debora Marks, Oxford University)",
        image: "assets/images/projects/development.png",
        link: "https://rubenweitzman.github.io/",
    },
	
    {
        name: "Lilly Wollman",
        title: "MA Student, currently at Synteny AI",
        image: "assets/images/projects/development.png",
        link: "https://synteny.ai/",
    }
]


buildMembers(ACTIVE, "grid-members")
buildMembers(ALUMNI, "grid-alumni")

// No need to update below this line if everything is working !

//############################################################//
//############################################################//
//############################################################//


// Function to build projects
function buildMembers(data, grid_id) {
    var active_grid = document.getElementById(grid_id)
    active_grid.innerHTML = ""

    for (var i = 0; i < data.length; i++) {

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
