(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _interestCollection = _interopRequireDefault(require("./interestCollection"));

var _interestList = _interopRequireDefault(require("./interestList"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
    };

    _interestCollection.default.postNewInterest(interestObj).then(response => {
      _interestList.default.listInterests();
    });
  }

};
var _default = formBuilder; // // "interests": [
//     { "id": 1,
//     "placeId": 1,
//     "name": "Local Market",
//     "description": "Local market where you can try purchase local products and try the local food",
//     "cost": 0.00,
//     "review": "You can definitely get things for a lower price if you are willing to bargain!"
//     }
// ]

exports.default = _default;

},{"./interestCollection":3,"./interestList":4}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _interestCollection = _interopRequireDefault(require("./interestCollection"));

var _interestList = _interopRequireDefault(require("./interestList"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const interest = {
  makeInterestHTML(interestObj) {
    // const outPutArticle = document.querySelector(".output");
    const interestListOutput = document.createElement("article"); // outPutArticle.appendChild(interestListOutput);

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
    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    interestListOutput.appendChild(editButton);
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    interestListOutput.appendChild(deleteButton);
    deleteButton.setAttribute("id", `interest--${interestObj.id}`);
    deleteButton.addEventListener("click", () => {
      let interestId = event.target.id.split("--")[1];

      _interestCollection.default.deleteInterest(interestId).then(response => {
        _interestList.default.listInterests();
      });
    });
    return interestListOutput;
  }

}; // // "interests": [
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

var _default = interest;
exports.default = _default;

},{"./interestCollection":3,"./interestList":4}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const interestCollection = {
  // Component responsible for interacting with the API. All fetch calls for this application will be defined here
  // This method returns a fetch, which means it is returning a promise. Which means to access the response from the asynchronous HTTP GET request that is being made by this fetch, we can chain a .then at the point where this method(getAllFoods) is called. The .then then is chained to the fetch inside the method is parsing the data from JSON to data structures Javascript will understand. In this case, because we have a collection of items, it will be an array of objects.
  getAllInterests() {
    return fetch("http://localhost:8088/interests").then(response => response.json());
  },

  // This method will make a HTTP POST request to the API. Because a POST has a body with the data for the new item you want created, this method will take one argument which will be the object for the new food item we want to add to our collection in the API.
  postNewInterest(newInterestToSave) {
    // We want to return this fetch request so that at the point it is called, we can take advantage of the asynchronous nature of promises to wait for this to be done before getting the latest data and rerendering the DOM.
    return fetch("http://localhost:8088/interests", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newInterestToSave)
    });
  },

  // In order to delete a item from the JSON Server API, all we need is the id of the item in order to target it, which is the only argument this method has.
  deleteInterest(interestId) {
    return fetch(`http://localhost:8088/interests/${interestId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    });
  },

  // In order to edit an existing food item, we need the id to identify which food item we want to edit and the new data we want to replace the existing data with. So this time, we have two arguments for the method.
  putExistingInterest(interestId, interestToEdit) {
    return fetch(`http://localhost:8088/interests/${interestId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(interestToEdit)
    });
  }

};
var _default = interestCollection;
exports.default = _default;

},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _interestCollection = _interopRequireDefault(require("./interestCollection"));

var _interest = _interopRequireDefault(require("./interest"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const interestList = {
  listInterests() {
    _interestCollection.default.getAllInterests().then(allInterests => {
      const interestDocFragment = document.createElement("div");
      allInterests.forEach(interestInstance => {
        console.log(interestInstance);

        const interestHtml = _interest.default.makeInterestHTML(interestInstance);

        interestDocFragment.appendChild(interestHtml);
      });
      const outputArticle = document.querySelector(".output");

      while (outputArticle.firstChild) {
        outputArticle.removeChild(outputArticle.firstChild);
      }

      outputArticle.appendChild(interestDocFragment);
    });
  }

}; // const taskList = {
//     listTasks() {
//         API.getData("tasks")
//         .then(allTasks => {
//             allTasks.forEach(task => {
//                 const userId = sessionStorage.getItem("userId");
//                 const currentUserId = JSON.parse(userId);
//                 if (task.userId === currentUserId) {
//                     tasks.taskBuilder(task);
//                 }
//             });
//         }) 
//     }
// }

var _default = interestList;
exports.default = _default;

},{"./interest":2,"./interestCollection":3}],5:[function(require,module,exports){
"use strict";

var _formBuilder = _interopRequireDefault(require("./formBuilder"));

var _interestCollection = _interopRequireDefault(require("./interestCollection"));

var _interestList = _interopRequireDefault(require("./interestList"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_formBuilder.default.buildForm();

_interestList.default.listInterests();

},{"./formBuilder":1,"./interestCollection":3,"./interestList":4}]},{},[5])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi9zY3JpcHRzL2Zvcm1CdWlsZGVyLmpzIiwiLi4vc2NyaXB0cy9pbnRlcmVzdC5qcyIsIi4uL3NjcmlwdHMvaW50ZXJlc3RDb2xsZWN0aW9uLmpzIiwiLi4vc2NyaXB0cy9pbnRlcmVzdExpc3QuanMiLCIuLi9zY3JpcHRzL21haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0FDQUE7O0FBQ0E7Ozs7QUFFQSxNQUFNLFNBQVMsR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixPQUF2QixDQUFsQjtBQUNBLE1BQU0sZ0JBQWdCLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsT0FBdkIsQ0FBekI7QUFDQSxNQUFNLFNBQVMsR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixPQUF2QixDQUFsQjtBQUNBLE1BQU0sY0FBYyxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLFFBQXZCLENBQXZCO0FBQ0EsTUFBTSxVQUFVLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsY0FBdkIsQ0FBbkI7QUFFQSxNQUFNLFdBQVcsR0FBRztBQUNoQixFQUFBLFNBQVMsR0FBRztBQUVSLFVBQU0sV0FBVyxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLFNBQXZCLENBQXBCO0FBQ0EsSUFBQSxVQUFVLENBQUMsV0FBWCxDQUF1QixXQUF2QjtBQUNBLFVBQU0sVUFBVSxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLElBQXZCLENBQW5CO0FBQ0EsSUFBQSxVQUFVLENBQUMsV0FBWCxHQUF5Qix1QkFBekI7QUFDQSxJQUFBLFdBQVcsQ0FBQyxXQUFaLENBQXdCLFVBQXhCO0FBRUEsSUFBQSxTQUFTLENBQUMsV0FBVixHQUF3QixNQUF4QjtBQUNBLElBQUEsV0FBVyxDQUFDLFdBQVosQ0FBd0IsU0FBeEI7QUFFQSxJQUFBLGdCQUFnQixDQUFDLFdBQWpCLEdBQStCLGFBQS9CO0FBQ0EsSUFBQSxXQUFXLENBQUMsV0FBWixDQUF3QixnQkFBeEI7QUFFQSxJQUFBLFNBQVMsQ0FBQyxXQUFWLEdBQXdCLE1BQXhCO0FBQ0EsSUFBQSxXQUFXLENBQUMsV0FBWixDQUF3QixTQUF4QjtBQUVBLFVBQU0sWUFBWSxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLFFBQXZCLENBQXJCO0FBQ0EsSUFBQSxZQUFZLENBQUMsV0FBYixHQUEyQixRQUEzQjtBQUNBLFVBQU0sV0FBVyxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLFFBQXZCLENBQXBCO0FBQ0EsSUFBQSxXQUFXLENBQUMsV0FBWixHQUEwQixPQUExQjtBQUNBLFVBQU0sWUFBWSxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLFFBQXZCLENBQXJCO0FBQ0EsSUFBQSxZQUFZLENBQUMsV0FBYixHQUEyQixRQUEzQjtBQUNBLElBQUEsY0FBYyxDQUFDLFdBQWYsQ0FBMkIsWUFBM0I7QUFDQSxJQUFBLGNBQWMsQ0FBQyxXQUFmLENBQTJCLFdBQTNCO0FBQ0EsSUFBQSxjQUFjLENBQUMsV0FBZixDQUEyQixZQUEzQjtBQUNBLElBQUEsV0FBVyxDQUFDLFdBQVosQ0FBd0IsY0FBeEI7QUFDQSxVQUFNLGlCQUFpQixHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLFFBQXZCLENBQTFCO0FBQ0EsSUFBQSxpQkFBaUIsQ0FBQyxXQUFsQixHQUFnQyxLQUFoQztBQUNBLElBQUEsV0FBVyxDQUFDLFdBQVosQ0FBd0IsaUJBQXhCO0FBRUEsSUFBQSxpQkFBaUIsQ0FBQyxnQkFBbEIsQ0FBbUMsT0FBbkMsRUFBNEMsS0FBSyxpQkFBakQ7QUFDSCxHQWpDZTs7QUFtQ2hCLEVBQUEsaUJBQWlCLEdBQUc7QUFDaEIsUUFBSSxXQUFXLEdBQUc7QUFDZCxNQUFBLE9BQU8sRUFBRSxDQURLO0FBRWQsTUFBQSxJQUFJLEVBQUUsU0FBUyxDQUFDLEtBRkY7QUFHZCxNQUFBLFdBQVcsRUFBRSxnQkFBZ0IsQ0FBQyxLQUhoQjtBQUlkLE1BQUEsSUFBSSxFQUFFLFNBQVMsQ0FBQyxLQUpGO0FBS2QsTUFBQSxNQUFNLEVBQUU7QUFMTSxLQUFsQjs7QUFRQSxnQ0FBbUIsZUFBbkIsQ0FBbUMsV0FBbkMsRUFDQyxJQURELENBQ00sUUFBUSxJQUFJO0FBQ2QsNEJBQWEsYUFBYjtBQUNILEtBSEQ7QUFLSDs7QUFqRGUsQ0FBcEI7ZUFvRGUsVyxFQUVmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDdkVBOztBQUNBOzs7O0FBRUEsTUFBTSxRQUFRLEdBQUc7QUFDYixFQUFBLGdCQUFnQixDQUFDLFdBQUQsRUFBYztBQUMxQjtBQUNBLFVBQU0sa0JBQWtCLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsU0FBdkIsQ0FBM0IsQ0FGMEIsQ0FHMUI7O0FBQ0EsVUFBTSxXQUFXLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsSUFBdkIsQ0FBcEI7QUFDQSxJQUFBLFdBQVcsQ0FBQyxXQUFaLEdBQTJCLEdBQUUsV0FBVyxDQUFDLE9BQVEsRUFBakQ7QUFDQSxJQUFBLGtCQUFrQixDQUFDLFdBQW5CLENBQStCLFdBQS9CO0FBQ0EsVUFBTSxhQUFhLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsR0FBdkIsQ0FBdEI7QUFDQSxJQUFBLGFBQWEsQ0FBQyxXQUFkLEdBQTZCLEdBQUUsV0FBVyxDQUFDLElBQUssRUFBaEQ7QUFDQSxJQUFBLGtCQUFrQixDQUFDLFdBQW5CLENBQStCLGFBQS9CO0FBQ0EsVUFBTSxvQkFBb0IsR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixHQUF2QixDQUE3QjtBQUNBLElBQUEsb0JBQW9CLENBQUMsV0FBckIsR0FBb0MsR0FBRSxXQUFXLENBQUMsV0FBWSxFQUE5RDtBQUNBLElBQUEsa0JBQWtCLENBQUMsV0FBbkIsQ0FBK0Isb0JBQS9CO0FBQ0EsVUFBTSxhQUFhLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsR0FBdkIsQ0FBdEI7QUFDQSxJQUFBLGFBQWEsQ0FBQyxXQUFkLEdBQTZCLEdBQUUsV0FBVyxDQUFDLElBQUssRUFBaEQ7QUFDQSxJQUFBLGtCQUFrQixDQUFDLFdBQW5CLENBQStCLGFBQS9CO0FBQ0EsVUFBTSxlQUFlLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsR0FBdkIsQ0FBeEI7QUFDQSxJQUFBLGVBQWUsQ0FBQyxXQUFoQixHQUErQixHQUFFLFdBQVcsQ0FBQyxNQUFPLEVBQXBEO0FBQ0EsSUFBQSxrQkFBa0IsQ0FBQyxXQUFuQixDQUErQixlQUEvQjtBQUVBLFVBQU0sVUFBVSxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLFFBQXZCLENBQW5CO0FBQ0EsSUFBQSxVQUFVLENBQUMsV0FBWCxHQUF5QixNQUF6QjtBQUNBLElBQUEsa0JBQWtCLENBQUMsV0FBbkIsQ0FBK0IsVUFBL0I7QUFFQSxVQUFNLFlBQVksR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixRQUF2QixDQUFyQjtBQUNBLElBQUEsWUFBWSxDQUFDLFdBQWIsR0FBMkIsUUFBM0I7QUFDQSxJQUFBLGtCQUFrQixDQUFDLFdBQW5CLENBQStCLFlBQS9CO0FBQ0EsSUFBQSxZQUFZLENBQUMsWUFBYixDQUEwQixJQUExQixFQUFpQyxhQUFZLFdBQVcsQ0FBQyxFQUFHLEVBQTVEO0FBQ0EsSUFBQSxZQUFZLENBQUMsZ0JBQWIsQ0FBOEIsT0FBOUIsRUFBdUMsTUFBTTtBQUM3QyxVQUFJLFVBQVUsR0FBRyxLQUFLLENBQUMsTUFBTixDQUFhLEVBQWIsQ0FBZ0IsS0FBaEIsQ0FBc0IsSUFBdEIsRUFBNEIsQ0FBNUIsQ0FBakI7O0FBQ0Esa0NBQWdCLGNBQWhCLENBQStCLFVBQS9CLEVBQ0MsSUFERCxDQUNNLFFBQVEsSUFBSTtBQUNsQiw4QkFBYSxhQUFiO0FBQ0ssT0FITDtBQUlDLEtBTkQ7QUFXQSxXQUFPLGtCQUFQO0FBRUg7O0FBMUNZLENBQWpCLEMsQ0E2Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFJQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O2VBRWUsUTs7Ozs7Ozs7OztBQ2xIZixNQUFNLGtCQUFrQixHQUFHO0FBQ3ZCO0FBQ0E7QUFDQSxFQUFBLGVBQWUsR0FBRztBQUNoQixXQUFPLEtBQUssQ0FBQyxpQ0FBRCxDQUFMLENBQ04sSUFETSxDQUNELFFBQVEsSUFBSSxRQUFRLENBQUMsSUFBVCxFQURYLENBQVA7QUFFRCxHQU5zQjs7QUFRdkI7QUFDQSxFQUFBLGVBQWUsQ0FBQyxpQkFBRCxFQUFvQjtBQUNqQztBQUNBLFdBQU8sS0FBSyxDQUFDLGlDQUFELEVBQW9DO0FBQzlDLE1BQUEsTUFBTSxFQUFFLE1BRHNDO0FBRTlDLE1BQUEsT0FBTyxFQUFFO0FBQ0wsd0JBQWdCO0FBRFgsT0FGcUM7QUFLOUMsTUFBQSxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQUwsQ0FBZSxpQkFBZjtBQUx3QyxLQUFwQyxDQUFaO0FBT0QsR0FsQnNCOztBQW1CdkI7QUFDQSxFQUFBLGNBQWMsQ0FBQyxVQUFELEVBQWE7QUFDekIsV0FBTyxLQUFLLENBQUUsbUNBQWtDLFVBQVcsRUFBL0MsRUFBa0Q7QUFDNUQsTUFBQSxNQUFNLEVBQUUsUUFEb0Q7QUFFNUQsTUFBQSxPQUFPLEVBQUU7QUFDTCx3QkFBZ0I7QUFEWDtBQUZtRCxLQUFsRCxDQUFaO0FBTUQsR0EzQnNCOztBQTRCdkI7QUFDQSxFQUFBLG1CQUFtQixDQUFDLFVBQUQsRUFBYSxjQUFiLEVBQTZCO0FBQzlDLFdBQU8sS0FBSyxDQUFFLG1DQUFrQyxVQUFXLEVBQS9DLEVBQWtEO0FBQzVELE1BQUEsTUFBTSxFQUFFLEtBRG9EO0FBRTVELE1BQUEsT0FBTyxFQUFFO0FBQ0wsd0JBQWdCO0FBRFgsT0FGbUQ7QUFLNUQsTUFBQSxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQUwsQ0FBZSxjQUFmO0FBTHNELEtBQWxELENBQVo7QUFPRDs7QUFyQ3NCLENBQTNCO2VBd0NpQixrQjs7Ozs7Ozs7Ozs7QUN4Q2pCOztBQUNBOzs7O0FBRUEsTUFBTSxZQUFZLEdBQUc7QUFDakIsRUFBQSxhQUFhLEdBQUc7QUFDWixnQ0FBbUIsZUFBbkIsR0FDQyxJQURELENBQ00sWUFBWSxJQUFJO0FBRWxCLFlBQU0sbUJBQW1CLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBNUI7QUFHQSxNQUFBLFlBQVksQ0FBQyxPQUFiLENBQXFCLGdCQUFnQixJQUFJO0FBQ3JDLFFBQUEsT0FBTyxDQUFDLEdBQVIsQ0FBWSxnQkFBWjs7QUFDQSxjQUFNLFlBQVksR0FBRyxrQkFBUyxnQkFBVCxDQUEwQixnQkFBMUIsQ0FBckI7O0FBQ0EsUUFBQSxtQkFBbUIsQ0FBQyxXQUFwQixDQUFnQyxZQUFoQztBQUNILE9BSkQ7QUFNQSxZQUFNLGFBQWEsR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixTQUF2QixDQUF0Qjs7QUFFQSxhQUFPLGFBQWEsQ0FBQyxVQUFyQixFQUFpQztBQUM3QixRQUFBLGFBQWEsQ0FBQyxXQUFkLENBQTBCLGFBQWEsQ0FBQyxVQUF4QztBQUNIOztBQUVELE1BQUEsYUFBYSxDQUFDLFdBQWQsQ0FBMEIsbUJBQTFCO0FBQ0gsS0FuQkQ7QUFvQkg7O0FBdEJnQixDQUFyQixDLENBNEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O2VBRWUsWTs7Ozs7O0FDL0NmOztBQUNBOztBQUNBOzs7O0FBR0EscUJBQVksU0FBWjs7QUFFQSxzQkFBYSxhQUFiIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiaW1wb3J0IGludGVyZXN0Q29sbGVjdGlvbiBmcm9tIFwiLi9pbnRlcmVzdENvbGxlY3Rpb25cIlxuaW1wb3J0IGludGVyZXN0TGlzdCBmcm9tIFwiLi9pbnRlcmVzdExpc3RcIlxuXG5jb25zdCBuYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG5jb25zdCBkZXNjcmlwdGlvbklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuY29uc3QgY29zdElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuY29uc3QgcGxhY2VTZWxlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xuY29uc3Qgb3V0cHV0X2FydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybS1vdXRwdXRcIik7XG5cbmNvbnN0IGZvcm1CdWlsZGVyID0ge1xuICAgIGJ1aWxkRm9ybSgpIHtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGZvcm1BcnRpY2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFydGljbGVcIik7XG4gICAgICAgIG91dHB1dF9hcnQuYXBwZW5kQ2hpbGQoZm9ybUFydGljbGUpO1xuICAgICAgICBjb25zdCBmb3JtSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgICAgICBmb3JtSGVhZGVyLnRleHRDb250ZW50ID0gXCJDcmVhdGUgYSBOZXcgSW50ZXJlc3RcIjtcbiAgICAgICAgZm9ybUFydGljbGUuYXBwZW5kQ2hpbGQoZm9ybUhlYWRlcik7IFxuICAgICAgICBcbiAgICAgICAgbmFtZUlucHV0LnBsYWNlaG9sZGVyID0gXCJOYW1lXCI7XG4gICAgICAgIGZvcm1BcnRpY2xlLmFwcGVuZENoaWxkKG5hbWVJbnB1dCk7XG4gICAgICAgIFxuICAgICAgICBkZXNjcmlwdGlvbklucHV0LnBsYWNlaG9sZGVyID0gXCJEZXNjcmlwdGlvblwiO1xuICAgICAgICBmb3JtQXJ0aWNsZS5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbklucHV0KTtcbiAgICAgICAgXG4gICAgICAgIGNvc3RJbnB1dC5wbGFjZWhvbGRlciA9IFwiQ29zdFwiO1xuICAgICAgICBmb3JtQXJ0aWNsZS5hcHBlbmRDaGlsZChjb3N0SW5wdXQpO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgbG9uZG9uT3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICAgICAgbG9uZG9uT3B0aW9uLnRleHRDb250ZW50ID0gXCJMb25kb25cIjtcbiAgICAgICAgY29uc3QgcGFyaXNPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgICBwYXJpc09wdGlvbi50ZXh0Q29udGVudCA9IFwiUGFyaXNcIjtcbiAgICAgICAgY29uc3QgYmVybGluT3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICAgICAgYmVybGluT3B0aW9uLnRleHRDb250ZW50ID0gXCJCZXJsaW5cIjtcbiAgICAgICAgcGxhY2VTZWxlY3Rpb24uYXBwZW5kQ2hpbGQobG9uZG9uT3B0aW9uKTtcbiAgICAgICAgcGxhY2VTZWxlY3Rpb24uYXBwZW5kQ2hpbGQocGFyaXNPcHRpb24pO1xuICAgICAgICBwbGFjZVNlbGVjdGlvbi5hcHBlbmRDaGlsZChiZXJsaW5PcHRpb24pO1xuICAgICAgICBmb3JtQXJ0aWNsZS5hcHBlbmRDaGlsZChwbGFjZVNlbGVjdGlvbik7XG4gICAgICAgIGNvbnN0IGFkZEludGVyZXN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgYWRkSW50ZXJlc3RCdXR0b24udGV4dENvbnRlbnQgPSBcIkFkZFwiO1xuICAgICAgICBmb3JtQXJ0aWNsZS5hcHBlbmRDaGlsZChhZGRJbnRlcmVzdEJ1dHRvbik7XG5cbiAgICAgICAgYWRkSW50ZXJlc3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuYWRkQnV0dG9uRnVuY3Rpb24pO1xuICAgIH0sXG5cbiAgICBhZGRCdXR0b25GdW5jdGlvbigpIHtcbiAgICAgICAgbGV0IGludGVyZXN0T2JqID0ge1xuICAgICAgICAgICAgcGxhY2VJZDogMSxcbiAgICAgICAgICAgIG5hbWU6IG5hbWVJbnB1dC52YWx1ZSxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbklucHV0LnZhbHVlLFxuICAgICAgICAgICAgY29zdDogY29zdElucHV0LnZhbHVlLFxuICAgICAgICAgICAgcmV2aWV3OiBcIlwiXG4gICAgICAgIH1cblxuICAgICAgICBpbnRlcmVzdENvbGxlY3Rpb24ucG9zdE5ld0ludGVyZXN0KGludGVyZXN0T2JqKVxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICBpbnRlcmVzdExpc3QubGlzdEludGVyZXN0cygpO1xuICAgICAgICB9KVxuICAgICAgICBcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZvcm1CdWlsZGVyXG5cbi8vIC8vIFwiaW50ZXJlc3RzXCI6IFtcbi8vICAgICB7IFwiaWRcIjogMSxcbi8vICAgICBcInBsYWNlSWRcIjogMSxcbi8vICAgICBcIm5hbWVcIjogXCJMb2NhbCBNYXJrZXRcIixcbi8vICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTG9jYWwgbWFya2V0IHdoZXJlIHlvdSBjYW4gdHJ5IHB1cmNoYXNlIGxvY2FsIHByb2R1Y3RzIGFuZCB0cnkgdGhlIGxvY2FsIGZvb2RcIixcbi8vICAgICBcImNvc3RcIjogMC4wMCxcbi8vICAgICBcInJldmlld1wiOiBcIllvdSBjYW4gZGVmaW5pdGVseSBnZXQgdGhpbmdzIGZvciBhIGxvd2VyIHByaWNlIGlmIHlvdSBhcmUgd2lsbGluZyB0byBiYXJnYWluIVwiXG4vLyAgICAgfVxuLy8gXSIsImltcG9ydCBpbnRlcmVzdENvbGxlY3QgZnJvbSBcIi4vaW50ZXJlc3RDb2xsZWN0aW9uXCJcbmltcG9ydCBpbnRlcmVzdExpc3QgZnJvbSBcIi4vaW50ZXJlc3RMaXN0XCI7XG5cbmNvbnN0IGludGVyZXN0ID0ge1xuICAgIG1ha2VJbnRlcmVzdEhUTUwoaW50ZXJlc3RPYmopIHtcbiAgICAgICAgLy8gY29uc3Qgb3V0UHV0QXJ0aWNsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub3V0cHV0XCIpO1xuICAgICAgICBjb25zdCBpbnRlcmVzdExpc3RPdXRwdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYXJ0aWNsZVwiKVxuICAgICAgICAvLyBvdXRQdXRBcnRpY2xlLmFwcGVuZENoaWxkKGludGVyZXN0TGlzdE91dHB1dCk7XG4gICAgICAgIGNvbnN0IHBsYWNlSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICAgICAgICBwbGFjZUhlYWRlci50ZXh0Q29udGVudCA9IGAke2ludGVyZXN0T2JqLnBsYWNlSWR9YDtcbiAgICAgICAgaW50ZXJlc3RMaXN0T3V0cHV0LmFwcGVuZENoaWxkKHBsYWNlSGVhZGVyKTtcbiAgICAgICAgY29uc3QgbmFtZVBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICBuYW1lUGFyYWdyYXBoLnRleHRDb250ZW50ID0gYCR7aW50ZXJlc3RPYmoubmFtZX1gO1xuICAgICAgICBpbnRlcmVzdExpc3RPdXRwdXQuYXBwZW5kQ2hpbGQobmFtZVBhcmFncmFwaCk7XG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uUGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgIGRlc2NyaXB0aW9uUGFyYWdyYXBoLnRleHRDb250ZW50ID0gYCR7aW50ZXJlc3RPYmouZGVzY3JpcHRpb259YDtcbiAgICAgICAgaW50ZXJlc3RMaXN0T3V0cHV0LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uUGFyYWdyYXBoKTtcbiAgICAgICAgY29uc3QgY29zdFBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICBjb3N0UGFyYWdyYXBoLnRleHRDb250ZW50ID0gYCR7aW50ZXJlc3RPYmouY29zdH1gO1xuICAgICAgICBpbnRlcmVzdExpc3RPdXRwdXQuYXBwZW5kQ2hpbGQoY29zdFBhcmFncmFwaCk7XG4gICAgICAgIGNvbnN0IHJldmlld1BhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICByZXZpZXdQYXJhZ3JhcGgudGV4dENvbnRlbnQgPSBgJHtpbnRlcmVzdE9iai5yZXZpZXd9YDtcbiAgICAgICAgaW50ZXJlc3RMaXN0T3V0cHV0LmFwcGVuZENoaWxkKHJldmlld1BhcmFncmFwaCk7XG5cbiAgICAgICAgY29uc3QgZWRpdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIGVkaXRCdXR0b24udGV4dENvbnRlbnQgPSBcIkVkaXRcIjtcbiAgICAgICAgaW50ZXJlc3RMaXN0T3V0cHV0LmFwcGVuZENoaWxkKGVkaXRCdXR0b24pO1xuXG4gICAgICAgIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIGRlbGV0ZUJ1dHRvbi50ZXh0Q29udGVudCA9IFwiRGVsZXRlXCI7XG4gICAgICAgIGludGVyZXN0TGlzdE91dHB1dC5hcHBlbmRDaGlsZChkZWxldGVCdXR0b24pO1xuICAgICAgICBkZWxldGVCdXR0b24uc2V0QXR0cmlidXRlKFwiaWRcIiwgYGludGVyZXN0LS0ke2ludGVyZXN0T2JqLmlkfWApXG4gICAgICAgIGRlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBsZXQgaW50ZXJlc3RJZCA9IGV2ZW50LnRhcmdldC5pZC5zcGxpdChcIi0tXCIpWzFdXG4gICAgICAgIGludGVyZXN0Q29sbGVjdC5kZWxldGVJbnRlcmVzdChpbnRlcmVzdElkKVxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgIGludGVyZXN0TGlzdC5saXN0SW50ZXJlc3RzKCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuXG5cblxuXG4gICAgICAgIHJldHVybiBpbnRlcmVzdExpc3RPdXRwdXRcblxuICAgIH1cbn1cblxuLy8gLy8gXCJpbnRlcmVzdHNcIjogW1xuLy8gICAgIHsgXCJpZFwiOiAxLFxuLy8gICAgIFwicGxhY2VJZFwiOiAxLFxuLy8gICAgIFwibmFtZVwiOiBcIkxvY2FsIE1hcmtldFwiLFxuLy8gICAgIFwiZGVzY3JpcHRpb25cIjogXCJMb2NhbCBtYXJrZXQgd2hlcmUgeW91IGNhbiB0cnkgcHVyY2hhc2UgbG9jYWwgcHJvZHVjdHMgYW5kIHRyeSB0aGUgbG9jYWwgZm9vZFwiLFxuLy8gICAgIFwiY29zdFwiOiAwLjAwLFxuLy8gICAgIFwicmV2aWV3XCI6IFwiWW91IGNhbiBkZWZpbml0ZWx5IGdldCB0aGluZ3MgZm9yIGEgbG93ZXIgcHJpY2UgaWYgeW91IGFyZSB3aWxsaW5nIHRvIGJhcmdhaW4hXCJcbi8vICAgICB9XG4vLyBdXG5cbi8vIG1lc3NhZ2VCdWlsZGVyKG1lc3NhZ2VPYmplY3QpIHtcbiAgICBcbi8vICAgICAvLyBtZXNzYWdlVXNlcm5hbWUobWVzc2FnZU9iamVjdC51c2VySWQpIHtcblxuLy8gICAgIC8vIH0gXG5cbi8vICAgICBsZXQgbWVzc2FnZUFydGljbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYXJ0aWNsZVwiKVxuLy8gICAgIG1lc3NhZ2VBcnRpY2xlLnNldEF0dHJpYnV0ZShcImlkXCIsIGBtZXNzYWdlLS0ke21lc3NhZ2VPYmplY3QuaWR9YClcblxuLy8gICAgIGxldCBtZXNzYWdlVXNlcklkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg1XCIpXG4vLyAgICAgbWVzc2FnZVVzZXJJZC50ZXh0Q29udGVudCA9IG1lc3NhZ2VPYmplY3QudXNlcklkXG5cbiAgXG5cbi8vICAgICBsZXQgbWVzc2FnZVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKVxuLy8gICAgIG1lc3NhZ2VUZXh0LnRleHRDb250ZW50ID0gbWVzc2FnZU9iamVjdC50ZXh0XG5cbi8vICAgICBsZXQgbWVzc2FnZVRpbWVTdGFtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpXG4vLyAgICAgbWVzc2FnZVRpbWVTdGFtcC50ZXh0Q29udGVudCA9IG1lc3NhZ2VPYmplY3QudGltZVN0YW1wXG5cbi8vICAgICAvLyBJbiBvcmRlciB0byBjaGFuZ2UgdGhlIGRhdGEgZm9yIGFuIGV4aXN0aW5nIGZvb2QgaXRlbSBpbiBvdXIgQVBJLCB3ZSBuZWVkIHRvIHByb3ZpZGUgdGhlIHVzZXIgd2l0aCBhIHdheSB0byBlZGl0IHRoZSBleGlzdGluZyB2YWx1ZXMuIFRoaXMgbWVhbnMgd2Ugd2lsbCBzaG93IHRoZSB1c2VyIGEgZm9ybSB3aXRoIHRoZSBleGlzdGluZyB2YWx1ZXMgYWxyZWFkeSBwb3B1bGF0ZWQuIE9uY2UgYWdhaW4sIHdlIHdhbnQgb3VyIGRhdGEgdG8gYmUgb3VyIHBvaW50IG9mIHRydXRoLiBTbyB3ZSBtYWtlIGEgSFRUUCBHRVQgcmVxdWVzdCB0YXJnZXRpbmcgdGhlIHNwZWNpZmljIGZvb2QgaXRlbSB0aGUgdXNlciB3YW50cyB0byBlZGl0IHRvIGdldCB0aGUgZGF0YSB0aGF0IHdpbGwgYmUgcG9wdWxhdGVkIGluIHRoZSBmb3JtLiBPbmNlIHdlIGhhdmUgdGhhdCBkYXRhLCB3ZSBjYW4gYnVpbGQgdGhlIGZvcm0sIHBvcHVsYXRlIHRoZSBpbnB1dCBmaWVsZHMgd2l0aCBvdXIgZGF0YSBmb3JtIHRoZSBHRVQgcmVxdWVzdCBhbmQgdGhlbiBhcHBlbmQgdGhhdCBmb3JtIHRvIHRoZSBhcHByb3ByaWF0ZSBwbGFjZSBvbiB0aGUgRE9NLlxuLy8gICAgIGxldCBlZGl0TWVzc2FnZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIilcbi8vICAgICBlZGl0TWVzc2FnZUJ1dHRvbi50ZXh0Q29udGVudCA9IFwiRWRpdFwiXG4vLyAgICAgZWRpdE1lc3NhZ2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbi8vICAgICAgIGxldCBhcnRpY2xlSWQgPSBldmVudC50YXJnZXQucGFyZW50Tm9kZS5pZFxuLy8gICAgICAgbGV0IG1lc3NhZ2VJZCA9IGFydGljbGVJZC5zcGxpdChcIi0tXCIpWzFdXG4vLyAgICAgICBtZXNzYWdlc0NvbGxlY3Rpb24uZ2V0TWVzc2FnZShtZXNzYWdlSWQpXG4vLyAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4vLyAgICAgICAgIG1lc3NhZ2VzRWRpdEZvcm0uY3JlYXRlQW5kQXBwZW5kRm9ybShhcnRpY2xlSWQsIHJlc3BvbnNlKVxuLy8gICAgICAgfSlcbi8vICAgICB9KVxuXG4vLyAgICAgLy8gU2luY2Ugd2UgY2FuIGdldCB0aGUgaWQgb2YgdGhlIGZvb2QgaXRlbSB0byBiZSBkZWxldGVkIGZyb20gdGhlIHBhcmVudCBlbGVtZW50KHRoZSBhcnRpY2xlIGVsZW1lbnQpLCB3ZSBjYW4gdXNlIHRoYXQgdG8gbWFrZSBhbiBIVFRQIERFTEVURSByZXF1ZXN0IHRvIG91ciBBUEkuIE9uY2UgYWdhaW4gYWZ0ZXIgdGhpcyB3ZSB3YW50IHRvIGdldCB0aGUgbGlzdCBvZiBmb29kIGl0ZW1zIGZyb20gdGhlIEFQSSB1c2luZyBhIEhUVFAgR0VUIHJlcXVlc3QgYW5kIGRpc3BsYXkgaXQgdG8gdGhlIHVzZXIgc28gdGhhdCB0aGUgdXNlciBkb2VzIG5vdCBoYXZlIHRvIHJlZnJlc2ggdGhlIHBhZ2UgaW4gb3JkZXIgdG8gc2VlIHRoYXQgdGhlIGl0ZW0gdGhleSBkZWxldGVkIGhhcyBhY3R1YWxseSBiZWVuIGRlbGV0ZWQuXG4vLyAgICAgLy8gbGV0IGRlbGV0ZU1lc3NhZ2VCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpXG4vLyAgICAgLy8gZGVsZXRlTWVzc2FnZUJ1dHRvbi50ZXh0Q29udGVudCA9IFwiRGVsZXRlXCJcbi8vICAgICAvLyBkZWxldGVNZXNzYWdlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4vLyAgICAgLy8gICBsZXQgbWVzc2FnZUlkID0gZXZlbnQudGFyZ2V0LnBhcmVudE5vZGUuaWQuc3BsaXQoXCItLVwiKVsxXVxuLy8gICAgIC8vICAgbWVzc2FnZXNDb2xsZWN0aW9uLmRlbGV0ZUZvb2QobWVzc2FnZUlkKVxuLy8gICAgIC8vICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICBcbi8vICAgICAvLyAgICAgbWVzc2FnZXNMaXN0LnBvc3RNZXNzYWdlKClcbi8vICAgICAvLyAgIH0pXG4vLyAgICAgLy8gfSlcblxuXG5cbi8vICAgICBtZXNzYWdlQXJ0aWNsZS5hcHBlbmRDaGlsZChtZXNzYWdlVXNlcklkKVxuLy8gICAgIG1lc3NhZ2VBcnRpY2xlLmFwcGVuZENoaWxkKG1lc3NhZ2VUZXh0KVxuLy8gICAgIG1lc3NhZ2VBcnRpY2xlLmFwcGVuZENoaWxkKG1lc3NhZ2VUaW1lU3RhbXApXG4vLyAgICAgLy8gbWVzc2FnZUFydGljbGUuYXBwZW5kQ2hpbGQoZGVsZXRlTWVzc2FnZUJ1dHRvbilcbi8vICAgICBpZiAoc2Vzc2lvblN0b3JhZ2UudXNlcklkID09IG1lc3NhZ2VPYmplY3QudXNlcklkKSB7bWVzc2FnZUFydGljbGUuYXBwZW5kQ2hpbGQoZWRpdE1lc3NhZ2VCdXR0b24pfVxuXG4vLyAgICAgcmV0dXJuIG1lc3NhZ2VBcnRpY2xlXG4vLyAgIH1cbi8vIH1cblxuZXhwb3J0IGRlZmF1bHQgaW50ZXJlc3QiLCJjb25zdCBpbnRlcmVzdENvbGxlY3Rpb24gPSB7XG4gICAgLy8gQ29tcG9uZW50IHJlc3BvbnNpYmxlIGZvciBpbnRlcmFjdGluZyB3aXRoIHRoZSBBUEkuIEFsbCBmZXRjaCBjYWxscyBmb3IgdGhpcyBhcHBsaWNhdGlvbiB3aWxsIGJlIGRlZmluZWQgaGVyZVxuICAgIC8vIFRoaXMgbWV0aG9kIHJldHVybnMgYSBmZXRjaCwgd2hpY2ggbWVhbnMgaXQgaXMgcmV0dXJuaW5nIGEgcHJvbWlzZS4gV2hpY2ggbWVhbnMgdG8gYWNjZXNzIHRoZSByZXNwb25zZSBmcm9tIHRoZSBhc3luY2hyb25vdXMgSFRUUCBHRVQgcmVxdWVzdCB0aGF0IGlzIGJlaW5nIG1hZGUgYnkgdGhpcyBmZXRjaCwgd2UgY2FuIGNoYWluIGEgLnRoZW4gYXQgdGhlIHBvaW50IHdoZXJlIHRoaXMgbWV0aG9kKGdldEFsbEZvb2RzKSBpcyBjYWxsZWQuIFRoZSAudGhlbiB0aGVuIGlzIGNoYWluZWQgdG8gdGhlIGZldGNoIGluc2lkZSB0aGUgbWV0aG9kIGlzIHBhcnNpbmcgdGhlIGRhdGEgZnJvbSBKU09OIHRvIGRhdGEgc3RydWN0dXJlcyBKYXZhc2NyaXB0IHdpbGwgdW5kZXJzdGFuZC4gSW4gdGhpcyBjYXNlLCBiZWNhdXNlIHdlIGhhdmUgYSBjb2xsZWN0aW9uIG9mIGl0ZW1zLCBpdCB3aWxsIGJlIGFuIGFycmF5IG9mIG9iamVjdHMuXG4gICAgZ2V0QWxsSW50ZXJlc3RzKCkge1xuICAgICAgcmV0dXJuIGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDo4MDg4L2ludGVyZXN0c1wiKVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgIH0sXG4gIFxuICAgIC8vIFRoaXMgbWV0aG9kIHdpbGwgbWFrZSBhIEhUVFAgUE9TVCByZXF1ZXN0IHRvIHRoZSBBUEkuIEJlY2F1c2UgYSBQT1NUIGhhcyBhIGJvZHkgd2l0aCB0aGUgZGF0YSBmb3IgdGhlIG5ldyBpdGVtIHlvdSB3YW50IGNyZWF0ZWQsIHRoaXMgbWV0aG9kIHdpbGwgdGFrZSBvbmUgYXJndW1lbnQgd2hpY2ggd2lsbCBiZSB0aGUgb2JqZWN0IGZvciB0aGUgbmV3IGZvb2QgaXRlbSB3ZSB3YW50IHRvIGFkZCB0byBvdXIgY29sbGVjdGlvbiBpbiB0aGUgQVBJLlxuICAgIHBvc3ROZXdJbnRlcmVzdChuZXdJbnRlcmVzdFRvU2F2ZSkge1xuICAgICAgLy8gV2Ugd2FudCB0byByZXR1cm4gdGhpcyBmZXRjaCByZXF1ZXN0IHNvIHRoYXQgYXQgdGhlIHBvaW50IGl0IGlzIGNhbGxlZCwgd2UgY2FuIHRha2UgYWR2YW50YWdlIG9mIHRoZSBhc3luY2hyb25vdXMgbmF0dXJlIG9mIHByb21pc2VzIHRvIHdhaXQgZm9yIHRoaXMgdG8gYmUgZG9uZSBiZWZvcmUgZ2V0dGluZyB0aGUgbGF0ZXN0IGRhdGEgYW5kIHJlcmVuZGVyaW5nIHRoZSBET00uXG4gICAgICByZXR1cm4gZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjgwODgvaW50ZXJlc3RzXCIsIHtcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCJcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkobmV3SW50ZXJlc3RUb1NhdmUpXG4gICAgICB9KVxuICAgIH0sXG4gICAgLy8gSW4gb3JkZXIgdG8gZGVsZXRlIGEgaXRlbSBmcm9tIHRoZSBKU09OIFNlcnZlciBBUEksIGFsbCB3ZSBuZWVkIGlzIHRoZSBpZCBvZiB0aGUgaXRlbSBpbiBvcmRlciB0byB0YXJnZXQgaXQsIHdoaWNoIGlzIHRoZSBvbmx5IGFyZ3VtZW50IHRoaXMgbWV0aG9kIGhhcy5cbiAgICBkZWxldGVJbnRlcmVzdChpbnRlcmVzdElkKSB7XG4gICAgICByZXR1cm4gZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6ODA4OC9pbnRlcmVzdHMvJHtpbnRlcmVzdElkfWAsIHtcbiAgICAgICAgbWV0aG9kOiBcIkRFTEVURVwiLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIlxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0sXG4gICAgLy8gSW4gb3JkZXIgdG8gZWRpdCBhbiBleGlzdGluZyBmb29kIGl0ZW0sIHdlIG5lZWQgdGhlIGlkIHRvIGlkZW50aWZ5IHdoaWNoIGZvb2QgaXRlbSB3ZSB3YW50IHRvIGVkaXQgYW5kIHRoZSBuZXcgZGF0YSB3ZSB3YW50IHRvIHJlcGxhY2UgdGhlIGV4aXN0aW5nIGRhdGEgd2l0aC4gU28gdGhpcyB0aW1lLCB3ZSBoYXZlIHR3byBhcmd1bWVudHMgZm9yIHRoZSBtZXRob2QuXG4gICAgcHV0RXhpc3RpbmdJbnRlcmVzdChpbnRlcmVzdElkLCBpbnRlcmVzdFRvRWRpdCkge1xuICAgICAgcmV0dXJuIGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjgwODgvaW50ZXJlc3RzLyR7aW50ZXJlc3RJZH1gLCB7XG4gICAgICAgIG1ldGhvZDogXCJQVVRcIixcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCJcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoaW50ZXJlc3RUb0VkaXQpXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIGV4cG9ydCBkZWZhdWx0IGludGVyZXN0Q29sbGVjdGlvblxuXG5cbiAgXG4iLCJpbXBvcnQgaW50ZXJlc3RDb2xsZWN0aW9uIGZyb20gXCIuL2ludGVyZXN0Q29sbGVjdGlvblwiXG5pbXBvcnQgaW50ZXJlc3QgZnJvbSBcIi4vaW50ZXJlc3RcIlxuXG5jb25zdCBpbnRlcmVzdExpc3QgPSB7XG4gICAgbGlzdEludGVyZXN0cygpIHtcbiAgICAgICAgaW50ZXJlc3RDb2xsZWN0aW9uLmdldEFsbEludGVyZXN0cygpXG4gICAgICAgIC50aGVuKGFsbEludGVyZXN0cyA9PiB7XG5cbiAgICAgICAgICAgIGNvbnN0IGludGVyZXN0RG9jRnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gICAgXG4gICAgICAgICAgICBhbGxJbnRlcmVzdHMuZm9yRWFjaChpbnRlcmVzdEluc3RhbmNlID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhpbnRlcmVzdEluc3RhbmNlKTtcbiAgICAgICAgICAgICAgICBjb25zdCBpbnRlcmVzdEh0bWwgPSBpbnRlcmVzdC5tYWtlSW50ZXJlc3RIVE1MKGludGVyZXN0SW5zdGFuY2UpO1xuICAgICAgICAgICAgICAgIGludGVyZXN0RG9jRnJhZ21lbnQuYXBwZW5kQ2hpbGQoaW50ZXJlc3RIdG1sKTtcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIGNvbnN0IG91dHB1dEFydGljbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm91dHB1dFwiKTtcblxuICAgICAgICAgICAgd2hpbGUgKG91dHB1dEFydGljbGUuZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgICAgIG91dHB1dEFydGljbGUucmVtb3ZlQ2hpbGQob3V0cHV0QXJ0aWNsZS5maXJzdENoaWxkKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgb3V0cHV0QXJ0aWNsZS5hcHBlbmRDaGlsZChpbnRlcmVzdERvY0ZyYWdtZW50KTtcbiAgICAgICAgfSlcbiAgICB9XG59XG5cblxuXG5cbi8vIGNvbnN0IHRhc2tMaXN0ID0ge1xuLy8gICAgIGxpc3RUYXNrcygpIHtcbi8vICAgICAgICAgQVBJLmdldERhdGEoXCJ0YXNrc1wiKVxuLy8gICAgICAgICAudGhlbihhbGxUYXNrcyA9PiB7XG4vLyAgICAgICAgICAgICBhbGxUYXNrcy5mb3JFYWNoKHRhc2sgPT4ge1xuLy8gICAgICAgICAgICAgICAgIGNvbnN0IHVzZXJJZCA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJ1c2VySWRcIik7XG4vLyAgICAgICAgICAgICAgICAgY29uc3QgY3VycmVudFVzZXJJZCA9IEpTT04ucGFyc2UodXNlcklkKTtcbi8vICAgICAgICAgICAgICAgICBpZiAodGFzay51c2VySWQgPT09IGN1cnJlbnRVc2VySWQpIHtcbi8vICAgICAgICAgICAgICAgICAgICAgdGFza3MudGFza0J1aWxkZXIodGFzayk7XG4vLyAgICAgICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgfSk7XG4vLyAgICAgICAgIH0pIFxuLy8gICAgIH1cblxuLy8gfVxuXG5leHBvcnQgZGVmYXVsdCBpbnRlcmVzdExpc3QiLCJpbXBvcnQgZm9ybUJ1aWxkZXIgZnJvbSBcIi4vZm9ybUJ1aWxkZXJcIlxuaW1wb3J0IGludGVyZXN0Q29sbGVjdGlvbiBmcm9tIFwiLi9pbnRlcmVzdENvbGxlY3Rpb25cIlxuaW1wb3J0IGludGVyZXN0TGlzdCBmcm9tIFwiLi9pbnRlcmVzdExpc3RcIlxuXG5cbmZvcm1CdWlsZGVyLmJ1aWxkRm9ybSgpO1xuXG5pbnRlcmVzdExpc3QubGlzdEludGVyZXN0cygpO1xuXG5cblxuIl19
