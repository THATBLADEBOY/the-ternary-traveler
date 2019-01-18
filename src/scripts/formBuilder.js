import interestCollection from "./interestCollection"
import interestList from "./interestList"

const nameInput = document.createElement("input");
const descriptionInput = document.createElement("input");
const costInput = document.createElement("input");
const placeSelection = document.createElement("select");
const output_art = document.querySelector(".form-output");

const formBuilder = {
    buildForm() {

        output_art.setAttribute("class", "container")
        
        const formArticle = document.createElement("article");
        formArticle.setAttribute("class", "form-container")
        output_art.appendChild(formArticle);
        const formHeader = document.createElement("h2");
        formHeader.textContent = "Create a New Interest";
        formArticle.appendChild(formHeader); 
        
        nameInput.placeholder = "Name";
        nameInput.setAttribute("class", "form-control")
        formArticle.appendChild(nameInput);
        
        descriptionInput.placeholder = "Description";
        descriptionInput.setAttribute("class", "form-control")
        formArticle.appendChild(descriptionInput);

        const costPlaceAddArticle = document.createElement("article");
        formArticle.appendChild(costPlaceAddArticle);
        costPlaceAddArticle.setAttribute("class", "cost-place-add");
        
        costInput.placeholder = "Cost";
        costInput.setAttribute("class", "form-control")
        costPlaceAddArticle.appendChild(costInput);

        interestCollection.getAllPlaces()
        .then(place => {


        
        const londonOption = document.createElement("option");
        londonOption.textContent = "London";
        londonOption.setAttribute("value", `${place[0].name}`)
        const parisOption = document.createElement("option");
        parisOption.textContent = "Paris";
        parisOption.setAttribute("value", `${place[1].name}`)
        const berlinOption = document.createElement("option");
        berlinOption.textContent = "Berlin";
        berlinOption.setAttribute("value", `${place[2].name}`);


        placeSelection.appendChild(londonOption);
        placeSelection.appendChild(parisOption);
        placeSelection.appendChild(berlinOption);
        costPlaceAddArticle.appendChild(placeSelection);

    

        
        const addInterestButton = document.createElement("button");
        addInterestButton.textContent = "Add";
        addInterestButton.setAttribute("class", "btn btn-primary")
        costPlaceAddArticle.appendChild(addInterestButton);

        addInterestButton.addEventListener("click", this.addButtonFunction);

    })  
    
    },

    addButtonFunction() {
        let interestObj = {
            place: placeSelection.value,
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