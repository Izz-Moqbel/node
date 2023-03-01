const express = require("express");

const app = express();

const path = require("path");
const router = express.Router();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/pages"));
app.use(express.static(path.join(__dirname, "/public"))); // set path for assets folder

// res.sendFile(
//   path.join(__dirname , 'home_page.html' )
//);

/*
router.use('/about',(req,res,next)=>{
  makeRequest();
    console.log('Required Type:',req.method)
    next()
})
*/

app.listen(3000, () => {
  console.log("Server Started On Port 3000");
  console.log("http://localhost:3000");
});

const axios = require("axios");

async function makeRequest() {
  app.get("/", (req, res, next) => {
    res.render("home", {
      title: "PokéAPI",
      PokéMon: [
        {
          name: pName,
          order: pOrder,
          species: pSpeciesName,
          speciesURL: pSpeciesUrl,
        },
        {
          name: pName2,
          order: pOrder2,
          species: pSpeciesName2,
          speciesURL: pSpeciesUrl2,
        },
        {
          name: pName3,
          order: pOrder3,
          species: pSpeciesName3,
          speciesURL: pSpeciesUrl3,
        },
      ],
    });
  });

  const config = {
    method: "get",
    url: "https://pokeapi.co/api/v2/pokemon/kakuna",
  };

  const config2 = {
    method: "get",
    url: "https://pokeapi.co/api/v2/pokemon/blastoise",
  };

  const config3 = {
    method: "get",
    url: "https://pokeapi.co/api/v2/pokemon/pikachu",
  };

  let res = await axios(config);
  let res2 = await axios(config2);
  let res3 = await axios(config3);

  let pName = res.data.name;
  let pOrder = res.data.order;
  let pSpeciesName = res.data.species.name;
  let pSpeciesUrl = res.data.species.url;

  let pName2 = res2.data.name;
  let pOrder2 = res2.data.order;
  let pSpeciesName2 = res2.data.species.name;
  let pSpeciesUrl2 = res2.data.species.url;

  let pName3 = res3.data.name;
  let pOrder3 = res3.data.order;
  let pSpeciesName3 = res3.data.species.name;
  let pSpeciesUrl3 = res3.data.species.url;
}
makeRequest();

/*

async function makeRequest3()
{

  //console.log("Response Data");
    const config={
        method:"get",
        url:"https://pokeapi.co/api/v2/pokemon/blastoise",};
let res =await axios(config);

  
  
//console.log(res.data);
}

/*
async function makeRequest2()
{
    const config2={
        method:"get",
        url:"https://pokeapi.co/api/v2/pokemon/diamond",};
let res =await axios(config);
let pName2=res.data.name;
let pOrder2=res.data.order;
let pSpeciesName2=res.data.species.name;
let pSpeciesUrl2=res.data.species.url;
}

//makeRequest3();

 


       

*/
