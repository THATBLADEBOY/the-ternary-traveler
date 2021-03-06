import interestCollect from "./interestCollection"
import interestList from "./interestList";
import interestCollection from "./interestCollection";
import interestEditForm from "./interestEditForm";

const interest = {
    makeInterestHTML(interestObj) {
        const interestListOutput = document.createElement("article")
        interestListOutput.setAttribute("id", `interest--${interestObj.id}`)
        interestListOutput.setAttribute("class", "container")
        interestListOutput.setAttribute("class", "interest-container")

        

        const placeHeader = document.createElement("h3");
        placeHeader.textContent = `${interestObj.place}`;
        interestListOutput.appendChild(placeHeader);
        const nameHeader = document.createElement("h4");
        nameHeader.textContent = `${interestObj.name}`;
        interestListOutput.appendChild(nameHeader);
        const descriptionParagraph = document.createElement("p");
        descriptionParagraph.textContent = `${interestObj.description}`;
        interestListOutput.appendChild(descriptionParagraph);
        const costHeader = document.createElement("section");
        costHeader.textContent = "Cost:";
        costHeader.setAttribute("class", "cost-header");
        interestListOutput.appendChild(costHeader);
        const costParagraph = document.createElement("p");
        costParagraph.textContent = `${interestObj.cost}`;
        interestListOutput.appendChild(costParagraph);
        const reviewHeader = document.createElement("section");
        reviewHeader.textContent = "Review:";
        reviewHeader.setAttribute("class", "review-header");
        interestListOutput.appendChild(reviewHeader);
        const reviewParagraph = document.createElement("p");
        reviewParagraph.textContent = `${interestObj.review}`;
        interestListOutput.appendChild(reviewParagraph);



        const editButton = document.createElement("button");
        editButton.textContent = "Edit Cost - Add Review";
        interestListOutput.appendChild(editButton);
        editButton.setAttribute("id", `interest--${interestObj.id}`);
        editButton.setAttribute("class", "btn btn-primary")
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
        deleteButton.setAttribute("id", `interest--${interestObj.id}`);
        deleteButton.setAttribute("class", "btn btn-primary")
        deleteButton.addEventListener("click", () => {
        let deleteConfirmation = confirm(`Are you sure you want to delete ${interestObj.name} in ${interestObj.place} ?`);
        if (deleteConfirmation == true) {
        let interestId = event.target.id.split("--")[1]
        console.log(interestId);
        interestCollect.deleteInterest(interestId)
        .then(response => {
        interestList.listInterests();
            })
        }
        })
    




        return interestListOutput
    
    }
}


export default interest