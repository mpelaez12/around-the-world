var countries = {
    "United States": {
        capital: "Washington D.C.",
        animal: "Bald eagle",
        language: "English",
        population: "318.9 million"
    },
    Spain : {
        capital: "Madrid",
        animal: "Bull",
        language:"Spanish",
        population: "47 million"
        },
    "Egypt" : {
        capital: "Cairo",
        animal: "Steppe Eagle",
        language:"Arabic",
        population: "92 million"
        },
     Brazil : {
        capital: "Brasilia",
        animal: "Jaguar",
        language:"Portuguese",
        population: "209 million"
        },   
     Italy : {
        capital: "Rome",
        animal: "Wolf",
        language:"Italian",
        population: "59 million"
        },
     Andorra: {
        capital: "Andorra la Bella",
        animal: "The Lammergeier Vulture",
        language:"Catalan",
        population: "79 thousands"
        }
};
   
   
   
   $(document).ready(function(){
       
    $("#button").click(function(){
        var country=  $("#miguel").val();
        $("#capital").text(countries[country].capital);
        $("#language").text(countries[country].language);
        $("#animal").text(countries[country].animal);
        $("#population").text(countries[country].population);
        
    });
});