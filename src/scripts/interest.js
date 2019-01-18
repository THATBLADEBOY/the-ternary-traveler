import interestCollect from "./interestCollection"
import interestList from "./interestList";
import interestCollection from "./interestCollection";
import interestEditForm from "./interestEditForm";

const interest = {
    makeInterestHTML(interestObj) {
        // const outPutArticle = document.querySelector(".output");
        const interestListOutput = document.createElement("article")
        interestListOutput.setAttribute("id", `interest--${interestObj.id}`)
        // outPutArticle.appendChild(interestListOutput);
        // let placeName = 
        // interestCollection.getAllPlaces()
        // .then(place => console.log(place[0].name, place[1].name, place[2]))

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
            interestEditForm.createAndAppendForm(articleId, response)
          })
        })









        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        interestListOutput.appendChild(deleteButton);
        deleteButton.setAttribute("id", `interest--${interestObj.id}`)
        deleteButton.addEventListener("click", () => {
        let interestId = event.target.id.split("--")[1]
        console.log(interestId);
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



export default interest