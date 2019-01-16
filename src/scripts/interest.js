import interestCollect from "./interestCollection"
import interestList from "./interestList";
import interestCollection from "./interestCollection";
import interestEditForm from "./interestEditForm";

const interest = {
    makeInterestHTML(interestObj) {
        // const outPutArticle = document.querySelector(".output");
        const interestListOutput = document.createElement("article")
        // outPutArticle.appendChild(interestListOutput);
        const placeHeader = document.createElement("h3");
        placeHeader.textContent = `${interestObj.placeId}`;
        interestListOutput.appendChild(placeHeader);
        const nameParagraph = document.createElement("p");
        nameParagraph.textContent = `${interestObj.name}`;
        interestListOutput.appendChild(nameParagraph);
        const descriptionParagraph = document.createElement("p");
        descriptionParagraph.textContent = `${interestObj.description}`;
        interestListOutput.appendChild(descriptionParagraph);
        const costParagraph = document.createElement("p");
        costParagraph.textContent = `${interestObj.cost}`;
        interestListOutput.appendChild(costParagraph);
        const reviewParagraph = document.createElement("p");
        reviewParagraph.textContent = `${interestObj.review}`;
        interestListOutput.appendChild(reviewParagraph);




// EDIT PORTION UNDERWAY!!!!!!!!!!!


        const editButton = document.createElement("button");
        editButton.textContent = "Edit";
        interestListOutput.appendChild(editButton);
        editButton.setAttribute("id", `interest--${interestObj.id}`)
        editButton.addEventListener("click", () => {
        let articleId = event.target.parentNode.id
        let interestId = event.target.id.split("--")[1]
          console.log(interestId)
          interestCollection.getInterest(interestId)
          .then(response => {
            interestEditForm.createAndAppendForm(interestId, response)
          })
        })




    //     let editFoodButton = document.createElement("button")
    // editFoodButton.textContent = "Edit"
    // editFoodButton.addEventListener("click", () => {
    //   let articleId = event.target.parentNode.id
    //   let foodId = articleId.split("--")[1]
    //   foodCollection.getFood(foodId)
    //   .then(response => {
    //     foodEditForm.createAndAppendForm(articleId, response)
    //   })
    // })







        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        interestListOutput.appendChild(deleteButton);
        deleteButton.setAttribute("id", `interest--${interestObj.id}`)
        deleteButton.addEventListener("click", () => {
        let interestId = event.target.id.split("--")[1]
        interestCollect.deleteInterest(interestId)
        .then(response => {
        interestList.listInterests();
            })
        })




        return interestListOutput

    }
}

// // "interests": [
//     { "id": 1,
//     "placeId": 1,
//     "name": "Local Market",
//     "description": "Local market where you can try purchase local products and try the local food",
//     "cost": 0.00,
//     "review": "You can definitely get things for a lower price if you are willing to bargain!"
//     }
// ]

// messageBuilder(messageObject) {
    
//     // messageUsername(messageObject.userId) {

//     // } 

//     let messageArticle = document.createElement("article")
//     messageArticle.setAttribute("id", `message--${messageObject.id}`)

//     let messageUserId = document.createElement("h5")
//     messageUserId.textContent = messageObject.userId

  

//     let messageText = document.createElement("p")
//     messageText.textContent = messageObject.text

//     let messageTimeStamp = document.createElement("p")
//     messageTimeStamp.textContent = messageObject.timeStamp

//     // In order to change the data for an existing food item in our API, we need to provide the user with a way to edit the existing values. This means we will show the user a form with the existing values already populated. Once again, we want our data to be our point of truth. So we make a HTTP GET request targeting the specific food item the user wants to edit to get the data that will be populated in the form. Once we have that data, we can build the form, populate the input fields with our data form the GET request and then append that form to the appropriate place on the DOM.
//     let editMessageButton = document.createElement("button")
//     editMessageButton.textContent = "Edit"
//     editMessageButton.addEventListener("click", () => {
//       let articleId = event.target.parentNode.id
//       let messageId = articleId.split("--")[1]
//       messagesCollection.getMessage(messageId)
//       .then(response => {
//         messagesEditForm.createAndAppendForm(articleId, response)
//       })
//     })

//     // Since we can get the id of the food item to be deleted from the parent element(the article element), we can use that to make an HTTP DELETE request to our API. Once again after this we want to get the list of food items from the API using a HTTP GET request and display it to the user so that the user does not have to refresh the page in order to see that the item they deleted has actually been deleted.
//     // let deleteMessageButton = document.createElement("button")
//     // deleteMessageButton.textContent = "Delete"
//     // deleteMessageButton.addEventListener("click", () => {
//     //   let messageId = event.target.parentNode.id.split("--")[1]
//     //   messagesCollection.deleteFood(messageId)
//     //   .then(() => {
        
//     //     messagesList.postMessage()
//     //   })
//     // })



//     messageArticle.appendChild(messageUserId)
//     messageArticle.appendChild(messageText)
//     messageArticle.appendChild(messageTimeStamp)
//     // messageArticle.appendChild(deleteMessageButton)
//     if (sessionStorage.userId == messageObject.userId) {messageArticle.appendChild(editMessageButton)}

//     return messageArticle
//   }
// }

export default interest