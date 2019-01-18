import interestCollection from "./interestCollection";
import interestList from "./interestList";

const interestEditForm = {
  createAndAppendForm (interestId, interestObjToEdit) {

    
    let interestCostField = document.createElement("p")

    let costLabel = document.createElement("label")
    costLabel.textContent = "Cost"
    let costInput = document.createElement("input")
    costInput.value = interestObjToEdit.cost

    interestCostField.appendChild(costLabel);
    interestCostField.appendChild(costInput);

    let interestReviewField = document.createElement("p")

    let reviewLabel = document.createElement("label")
    reviewLabel.textContent = "Review"
    let reviewInput = document.createElement("input")
    reviewInput.value = interestObjToEdit.review

    interestReviewField.appendChild(reviewLabel);
    interestReviewField.appendChild(reviewInput);


    let updateButton = document.createElement("button")
    updateButton.textContent = "Update"
    updateButton.addEventListener("click", () => {
      
   

   
    
    let edittedInterest = {
        place: interestObjToEdit.place,
        name: interestObjToEdit.name,
        description: interestObjToEdit.description,
        cost: costInput.value,
        review: reviewInput.value
    }

    console.log(edittedInterest);
  


    interestCollection.putExistingInterest(interestObjToEdit.id ,edittedInterest)
    .then(response => {
        interestList.listInterests();
    })

  })
    

     
      
    

    

    
    let interestItemArticle = document.getElementById(`${interestId}`)

  //  THIS FUNCTION WOULD CLEAR THE DOM OF THE EXISTING INTEREST WHILE EDITTING...I THINK IT IS BETTER TO VIEW EXISTING INTEREST WHILE EDITING
    // while (interestItemArticle.firstChild) {
    //   interestItemArticle.removeChild(interestItemArticle.firstChild);
    // }


    interestItemArticle.appendChild(interestCostField)
    interestItemArticle.appendChild(interestReviewField)
    interestItemArticle.appendChild(updateButton)
  }
}
export default interestEditForm
