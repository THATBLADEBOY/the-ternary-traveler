const interestCollection = {
  
    getAllInterests() {
      return fetch("http://localhost:8088/interests")
      .then(response => response.json())
    },
  
    postNewInterest(newInterestToSave) {
      return fetch("http://localhost:8088/interests", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newInterestToSave)
      })
    },
   
    deleteInterest(interestId) {
      return fetch(`http://localhost:8088/interests/${interestId}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }
      })
    },
    
    putExistingInterest(interestId, interestToEdit) {
      return fetch(`http://localhost:8088/interests/${interestId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(interestToEdit)
      })
    },
    getInterest(interestId) {
      return fetch(`http://localhost:8088/interests/${interestId}`)
      .then(response => response.json())
    },
  }

  export default interestCollection


  
