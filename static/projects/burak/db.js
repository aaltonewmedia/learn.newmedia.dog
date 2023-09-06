const db = {
  country: "Zarowka",
  places: [
    {
      name: "Zarowka Municipal Office",
      id: 5001,
      gives_docs: ["Workplace Operation Permit"],
      req_docs: ["Workplace Occupancy Licence","Registration to the Chamber of Commerce","Declaration of Criminal Records"],
      inventory: [],
      responses:{
        greet: "Welcome to Municipal Office what you need?",
        missing_doc: "I cannot give you this document. You need more documents.",
      }
    },

    {
      name: "Department of Financial Services",
      id: 5002,
      gives_docs: ["Workplace Occupancy Licence"],
      req_docs: ["Registration of Workplace Adress","Tax Registration Certificate","Occupational Health and Safety Certificate"],
      inventory: [],
      responses:{
        greet: "Welcome to DFS what you need?",
        missing_doc: "I cannot give you this document. You need more documents.",
      }
    }
    
    


/*
    {
      postal: 11100,
      name: "park",
      greeting: "welcome to the park",
      options: [45900],
      available_docs:["permitA","permitB","permitP"],
      required_docs:["permitD"]
    },  {
      postal: 32001,
      name: "mall",
      greeting: "welcome to the mall",
      options: [],
      available_docs:["permitW","permitY"],
      required_docs:["permitP"]
    }
  

  */
  ]
}