
			
			// Add new years here
			const YEARS = ["2023", "2022", "2021"]
			
			// Add new papers here, if they contain a new year add it to the array above as well!
			const PAPERS = [
				{
					name : "Sequential Gaussian Processes for Online Learning of Nonstationary Functions", 
					link : "https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=10103648",
					authors : "Michael M. Zhang , Bianca Dumitrascu, Sinead A. Williamson, and Barbara E. Engelhardt", 
					tags : ["In Progress..." , "In Progress..."], 
					source : "IEEE Transactions on Signal Processing", 
					date : "17 Apr 2023", 
					year : "2023"
				},
				{
					name : "A Computational Pipeline for Spatial Mechano-Transcriptomics", 
					link : "https://www.biorxiv.org/content/10.1101/2023.08.03.551894v1.full.pdf", 
					authors : "Adrien Hallou, Ruiyang He, Benjamin D. Simons, Bianca Dumitrascu",
					tags : ["In Progress..." , "In Progress..."], 
					source : "bioRxiv", 
					date : "05 Aug 2023", 
					year : "2023"
				},
				{
					name : "Hypergraph Factorisation for Multi-Tissue Gene Expression Imputation", 
					link : "https://doi.org/gq4m9w",
					 authors : "Ramon Viñas, Chaitanya K. Joshi, Dobrik Georgiev, Bianca Dumitrascu, Eric R. Gamazon, Pietro Liò", 
					 tags : ["Multi-Tissue Imputation" , "Deep Learning"], 
					 source : "bioRxiv", 
					 date : "08 Aug 2022", 
					 year : "2022"
				},
				{
					name : "MarkerMap: Nonlinear Marker Selection for Single-Cell Studies", 
					link : "http://arxiv.org/abs/2207.14106", 
					authors : "Nabeel Sarwar, Wilson Gregory, George A. Kevrekidis, Soledad Villar, Bianca Dumitrascu", 
					tags : ["Interpretability" , "Deep Learning", "scRNA-Seq"], 
					source : "arXiv", 
					date : "28 Jul 2022", 
					year : "2022"
				},
				{
					name : "Dimensionless Machine Learning: Imposing Exact Units Equivariance", 
					link : "https://doi.org/gptvs8", 
					authors : "Soledad Villar, Weichi Yao, David W. Hogg, Ben Blum-Smith, Bianca Dumitrascu", 
					tags : ["Data Augmentation" , "Invariance", "Ecology", "Symbolic Regression"], 
					source : "arXiv", 
					date : "02 Apr 2022", 
					year : "2022"
				},
				{
					name : "Power Analysis for Spatial Omics", 
					link : "https://doi.org/gpgd6z", 
					authors : "Ethan A. G. Baker, Denis Schapiro, Bianca Dumitrascu, Sanja Vicković, Aviv Regev", 
					tags : ["Spatial Transcriptomics"], 
					source : "bioRxiv", 
					date : "31 Jan 2022", 
					year : "2022"
				},
				{
					name : "Deep Learning for Bioimage Analysis in Developmental Biology", 
					link : "https://doi.org/gptvs7", 
					authors : "Adrien Hallou, Hannah G. Yevick, Bianca Dumitrascu, Virginie Uhlmann", 
					tags : ["Imaging" , "Deep Learning"], 
					source : "Development", 
					date : "07 Sep 2021", 
					year : "2021"
				},
				{
					name : "Optimal Marker Gene Selection for Cell Type Discrimination in Single Cell Analysis", 
					link : "https://doi.org/gjzs9r", 
					authors : "Bianca Dumitrascu, Soledad Villar, Dustin G. Mixon, Barbara E. Engelhardt", 
					tags : ["Interpretability", "scRNA-Seq"], 
					source : "Nature Communications", 
					date : "19 Feb 2021", 
					year : "2021"
				},
				{
					name : "Approximate Latent Force Model Inference", 
					link : "https://doi.org/gp3mx5", 
					authors : "Jacob D. Moss, Felix L. Opolka, Bianca Dumitrascu, Pietro Lió", 
					tags : ["Latent Force Models" , "Gene Regulatory Networks", "Dynamical Systems"], 
					source : "arXiv", 
					date : "01 Jan 2021", 
					year : "2021"
				}
			]
			
			
			buildSections(YEARS)
			buildTables(PAPERS, YEARS)
			
			// No need to update below this line if everything is working !

			//############################################################//


			// Keyup event for search
			$(`#search-papers`).on('keyup', function(){
				var val = $(this).val()

				var data = searchTables(PAPERS, val)
				buildTables(data, YEARS)

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
			

			// Function to build the sections (years)
			function buildSections(years){
				var sections = document.getElementById("papers-block")

				sections.innerHTML = `<input id="search-papers" type="text" name="search-papers" placeholder="Search">`

				for (var i=0; i < years.length; i++){
					sections.innerHTML += `\n<br>
						<h3>${years[i]}</h3>
						<div id="grid-${years[i]}" class="row gtr-100 gtr-uniform">
						</div>
						`
				}
			}
			
			// Function to build the content within sections
			function buildTables(data, years){
				
				// Reset content
				for (var i = 0; i < years.length; i++){
					var subsection = document.getElementById("grid-" + years[i])
					subsection.innerHTML = ""
				}
				

				// Update content				
				for (var i = 0; i < data.length; i++){
					var table = document.getElementById("grid-" + data[i].year)

					var block = 
							`
							<div class="col-1 col-12" style="text-align: justify;"><a href=${data[i].link} target="_blank"><span class="image left" style="width: 10%"><img src="assets/images/placeholder.png" alt=""/></span>
								<h4 style="text-align: left;">${data[i].name}</h4>
								${data[i].authors}
								<br>
								${data[i].source} • ${data[i].date}</a>
								<br>
							`
					
							for (var j = 0; j < data[i].tags.length; j++){
						block += `\n<span style="padding-top:2px; padding-bottom:2px; padding-left: 6px; padding-right: 6px; background: #e44c65; border-radius: 5px; pointer-events: none;">${data[i].tags[j]}</span>`
					}

					block += `\n</div>`

					table.innerHTML += block			 
				}
			}