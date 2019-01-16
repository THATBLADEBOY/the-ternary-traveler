import interestCollection from "./interestCollection"
import interestList from "./interestList"

const nameInput = document.createElement("input");
const descriptionInput = document.createElement("input");
const costInput = document.createElement("input");
const placeSelection = document.createElement("select");
const output_art = document.querySelector(".form-output");

const formBuilder = {
    buildForm() {
        
        const formArticle = document.createElement("article");
        output_art.appendChild(formArticle);
        const formHeader = document.createElement("h2");
        formHeader.textContent = "Create a New Interest";
        formArticle.appendChild(formHeader); 
        
        nameInput.placeholder = "Name";
        formArticle.appendChild(nameInput);
        
        descriptionInput.placeholder = "Description";
        formArticle.appendChild(descriptionInput);
        
        costInput.placeholder = "Cost";
        formArticle.appendChild(costInput);
        
        const londonOption = document.createElement("option");
        londonOption.textContent = "London";
        const parisOption = document.createElement("option");
        parisOption.textContent = "Paris";
        const berlinOption = document.createElement("option");
        berlinOption.textContent = "Berlin";
        placeSelection.appendChild(londonOption);
        placeSelection.appendChild(parisOption);
        placeSelection.appendChild(berlinOption);
        formArticle.appendChild(placeSelection);
        const addInterestButton = document.createElement("button");
        addInterestButton.textContent = "Add";
        formArticle.appendChild(addInterestButton);

        addInterestButton.addEventListener("click", this.addButtonFunction);
    },

    addButtonFunction() {
        let interestObj = {
            placeId: 1,
            name: nameInput.value,
            description: descriptionInput.value,
            cost: costInput.value,
            review: ""
        }

        interestCollection.postNewInterest(interestObj)
        .then(response => {
            interestList.listInterests();
        })
        
    }
}

export default formBuilder

// // "interests": [
//     { "id": 1,
//     "placeId": 1,
//     "name": "Local Market",
//     "description": "Local market where you can try purchase local products and try the local food",
//     "cost": 0.00,
//     "review": "You can definitely get things for a lower price if you are willing to bargain!"
//     }
// ]