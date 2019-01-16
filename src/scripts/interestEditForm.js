import interestCollection from "./interestCollection";
import interestList from "./interestList";

const interestEditForm = {
  // This module will build an edit form and append it to the DOM. The form will contain input fields with existing values from the API and an Update button. The user can edit the the values in the input fields. An event listener on the Update button will handle taking the new values entered by the user and calling the API to update the data.
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

    // There is an event listener on the Update button which will take the new values in the input fields and build an object for the food item to be edited. Then we make a HTTP PUT request where we target the food item we want to edit by specifying the id in the URL. We also pass the object representing the food item with the new values as data in our HTTP request. Once again, because our data has been modified, we make an HTTP GET request to get all the food items and display them.
    updateButton.addEventListener("click", () => {
    
    let edittedInterest = {
        placeId: interestObjToEdit.placeId,
        name: interestObjToEdit.name,
        description: interestObjToEdit.description,
        cost: costInput.value,
        review: reviewInput.value
    }


    interestCollection.putExistingInterest(interestObjToEdit.id ,edittedInterest)
    .then(response => {
        interestList.listInterests();
    })
    

    //   while (interestItemArticle.firstChild) {
    //     interestItemArticle.removeChild(interestItemArticle.firstChild);
    //   }
      
    })

    

    
    // let interestItemArticle = document.getElementById(`#${interestId}`)

   
    // while (interestItemArticle.firstChild) {
    //   interestItemArticle.removeChild(interestItemArticle.firstChild);
    // }
    // interestItemArticle.appendChild(interestCostField)
    // interestItemArticle.appendChild(interestReviewField)
    // interestItemArticle.appendChild(updateButton)
  }
}
export default interestEditForm
