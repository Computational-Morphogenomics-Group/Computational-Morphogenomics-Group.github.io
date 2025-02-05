
			
			// Add new years here
			const YEARS = ["2025, "2024", "2023", "2022", "2021"]
			
			// Add new papers here, if they contain a new year add it to the array above as well!
			const PAPERS = [
				
				{
    				name: "Gene-level alignment of single-cell trajectories",
    				link: "https://www.nature.com/articles/s41592-024-02378-4",
    				authors: `Dinithi Sumanaweera, Chenqu Suo, Ana-Maria Cujba, Daniele Muraro, 
					Emma Dann, 
					Krzysztof Polanski, 
					Alexander S Steemers, 
					Woochan Lee, Amanda J Oliver, 
					Jong-Eun Park, Kerstin B Meyer, 
					Bianca Dumitrascu, Sarah A Teichmann`,
    				tags: ["single-cell", "trajectory alignment"],
    				source: "Nature Methods 22 (1), 68-81",
    				year: "2025"
  },

  {
    name: "Dynamic cell fate plasticity and tissue integration drive functional synovial joint regeneration",
    link: "https://www.biorxiv.org/content/10.1101/2024.12.12.628180v1",
    authors: `Maria Blumenkrantz, Felicia Woron, Ernesto Gagarin, Everett Weinstein, 
	    Maryam H Kamel, Leonardo Campos, Agnieszka Geras, Troy Anderson, 
	    Julia Mo, Desmarie Sherwood, Maya Gwin, 
	    Bianca Dumitrascu, Nadeen O Chahine, Joanna Smeeton`,
    tags: ["cell fate", "plasticity", "regeneration", "single-cell", "archetype-analysis"],
    source: "bioRxiv",
    year: "2024"
  },
  {
    name: "MarkerMap: nonlinear marker selection for single-cell studies",
    link: "https://www.nature.com/articles/s41540-024-00339-3",
    authors: "W. Gregory, N. Sarwar, G. Kevrekidis, S. Villar, and B. Dumitrascu",
    tags: ["single-cell", "marker selection", "deep learning", "interpretable-ml"],
    source: "npj Systems Biology and Applications 10 (1), 17",
    year: "2024"
  },
  {
    name: "Patches: A Representation Learning framework for Decoding Shared and Condition-Specific Transcriptional Programs in Wound Healing",
    link: "https://doi.org/10.1101/2024.12.23.630186",
    authors: "O. Beker, D. Amador, J.P. Nima, S.V. Deursen, Y. Woappi, and B. Dumitrascu",
    tags: ["representation learning", "wound healing", "single-cell", "deep learning", "interpretable-ml"],
    source: "bioRxiv, 2024.12.23.630186",
    year: "2024"
  },
  {
    name: "CellFlows: Inferring Splicing Kinetics from Latent and Mechanistic Cellular Dynamics",
    link: "https://openreview.net/pdf?id=ZwSIN40zKM",  // Placeholder DOI link
    authors: "S. Chang, Z. Chen, B. Dumitrascu, and D.A. Knowles",
    tags: ["cellular dynamics", "latent variable models", "mechanistic modeling"],
    source: "ICML'24 Workshop ML for Life and Material Science: From Theory to Industry",
    year: "2024"
  },
  {
    name: "A computational pipeline for spatial mechano-transcriptomics",
    link: "https://www.biorxiv.org/content/10.1101/2023.08.03.551894v1",
    authors: "A. Hallou*, R. He*, B.D. Simons, and B. Dumitrascu",
    tags: ["spatial transcriptomics", "mechano-transcriptomics", "biophysics", "development"],
    source: "\emph{Accepted at Nature Methods}",
    year: "2023"
  },
  {
    name: "Hypergraph factorization for multi-tissue gene expression imputation",
    link: "https://www.nature.com/articles/s42256-023-00684-8",
    authors: "R. Viñas, C.K. Joshi, D. Georgiev, P. Lin, #B. Dumitrascu, #E.R. Gamazon, and #P. Liò",
    tags: ["hypergraph", "multi-tissue", "gene expression", "deep learning"],
    source: "Nature Machine Intelligence 5 (7), 739-753",
    year: "2023"
  },
  {
    name: "Sequential Gaussian processes for online learning of nonstationary functions",
    link: "https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=10103648",
    authors: "M.M. Zhang, B. Dumitrascu, S.A. Williamson, and B.E. Engelhardt",
    tags: ["Gaussian processes", "nonstationary functions", "online learning", "machine learning"],
    source: "IEEE Transactions on Signal Processing 71, 1539-1550",
    year: "2023"
  },
  {
    name: "In silico tissue generation and power analysis for spatial omics",
    link: "https://www.nature.com/articles/s41592-023-01766-67",
    authors: "E.A.G. Baker, D. Schapiro, B. Dumitrascu, S. Vickovic, and A. Regev",
    tags: ["in silico vs in vivo", "spatial omics"],
    source: "Nature Methods 20 (3), 424-431",
    year: "2023"
  },
  {
    name: "Narti: Neural algorithmic reasoning for trajectory inference",
    link: "https://icml-compbio.github.io/2023/papers/WCBICML2023_paper77.pdf",  // Placeholder DOI link
    authors: "D. Georgiev, R. Viñas, S. Considine, #B. Dumitrascu, and #P. Liò",
    tags: ["trajectory inference", "neural algorithms", "algorithmic reasoning", "machine learning"],
    source: "The 2023 ICML Workshop on Computational Biology",
    year: "2023"
  },
  {
    name: "Dimensionless machine learning: Imposing exact units equivariance",
    link: "https://www.jmlr.org/papers/volume24/22-0680/22-0680.pdf",  // Placeholder DOI link
    authors: "S. Villar, W. Yao, D.W. Hogg, B. Blum-Smith, and B. Dumitrascu",
    tags: ["mechanistic modeling", "interpretable-ml"],
    source: "Journal of Machine Learning Research 24 (109), 1-32",
    year: "2023"
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
							<div class="col-1 col-12" style="text-align: justify;"><a href=${data[i].link} target="_blank"><span class="image left" style="width: 10%"><img src="assets/images/projects/placeholder.png" alt=""/></span>
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
