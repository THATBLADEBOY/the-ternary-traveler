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

},{"./interestCollection":3,"./interestList":5}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _interestCollection = _interopRequireDefault(require("./interestCollection"));

var _interestList = _interopRequireDefault(require("./interestList"));

var _interestEditForm = _interopRequireDefault(require("./interestEditForm"));

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
    interestListOutput.appendChild(reviewParagraph); // EDIT PORTION UNDERWAY!!!!!!!!!!!

    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    interestListOutput.appendChild(editButton);
    editButton.setAttribute("id", `interest--${interestObj.id}`);
    editButton.addEventListener("click", () => {
      let articleId = event.target.parentNode.id;
      let interestId = event.target.id.split("--")[1];
      console.log(interestId);

      _interestCollection.default.getInterest(interestId).then(response => {
        _interestEditForm.default.createAndAppendForm(interestId, response);
      });
    }); //     let editFoodButton = document.createElement("button")
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

},{"./interestCollection":3,"./interestEditForm":4,"./interestList":5}],3:[function(require,module,exports){
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
  },

  getInterest(interestId) {
    return fetch(`http://localhost:8088/interests/${interestId}`).then(response => response.json());
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

var _interestList = _interopRequireDefault(require("./interestList"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const interestEditForm = {
  // This module will build an edit form and append it to the DOM. The form will contain input fields with existing values from the API and an Update button. The user can edit the the values in the input fields. An event listener on the Update button will handle taking the new values entered by the user and calling the API to update the data.
  createAndAppendForm(interestId, interestObjToEdit) {
    let interestCostField = document.createElement("p");
    let costLabel = document.createElement("label");
    costLabel.textContent = "Cost";
    let costInput = document.createElement("input");
    costInput.value = interestObjToEdit.cost;
    interestCostField.appendChild(costLabel);
    interestCostField.appendChild(costInput);
    let interestReviewField = document.createElement("p");
    let reviewLabel = document.createElement("label");
    reviewLabel.textContent = "Review";
    let reviewInput = document.createElement("input");
    reviewInput.value = interestObjToEdit.review;
    interestReviewField.appendChild(reviewLabel);
    interestReviewField.appendChild(reviewInput);
    let updateButton = document.createElement("button");
    updateButton.textContent = "Update"; // There is an event listener on the Update button which will take the new values in the input fields and build an object for the food item to be edited. Then we make a HTTP PUT request where we target the food item we want to edit by specifying the id in the URL. We also pass the object representing the food item with the new values as data in our HTTP request. Once again, because our data has been modified, we make an HTTP GET request to get all the food items and display them.

    updateButton.addEventListener("click", () => {
      let edittedInterest = {
        placeId: interestObjToEdit.placeId,
        name: interestObjToEdit.name,
        description: interestObjToEdit.description,
        cost: costInput.value,
        review: reviewInput.value
      };

      _interestCollection.default.putExistingInterest(interestObjToEdit.id, edittedInterest).then(response => {
        _interestList.default.listInterests();
      }); //   while (interestItemArticle.firstChild) {
      //     interestItemArticle.removeChild(interestItemArticle.firstChild);
      //   }

    }); // let interestItemArticle = document.getElementById(`#${interestId}`)
    // while (interestItemArticle.firstChild) {
    //   interestItemArticle.removeChild(interestItemArticle.firstChild);
    // }
    // interestItemArticle.appendChild(interestCostField)
    // interestItemArticle.appendChild(interestReviewField)
    // interestItemArticle.appendChild(updateButton)
  }

};
var _default = interestEditForm;
exports.default = _default;

},{"./interestCollection":3,"./interestList":5}],5:[function(require,module,exports){
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

},{"./interest":2,"./interestCollection":3}],6:[function(require,module,exports){
"use strict";

var _formBuilder = _interopRequireDefault(require("./formBuilder"));

var _interestCollection = _interopRequireDefault(require("./interestCollection"));

var _interestList = _interopRequireDefault(require("./interestList"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_formBuilder.default.buildForm();

_interestList.default.listInterests();

},{"./formBuilder":1,"./interestCollection":3,"./interestList":5}]},{},[6])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi9zY3JpcHRzL2Zvcm1CdWlsZGVyLmpzIiwiLi4vc2NyaXB0cy9pbnRlcmVzdC5qcyIsIi4uL3NjcmlwdHMvaW50ZXJlc3RDb2xsZWN0aW9uLmpzIiwiLi4vc2NyaXB0cy9pbnRlcmVzdEVkaXRGb3JtLmpzIiwiLi4vc2NyaXB0cy9pbnRlcmVzdExpc3QuanMiLCIuLi9zY3JpcHRzL21haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0FDQUE7O0FBQ0E7Ozs7QUFFQSxNQUFNLFNBQVMsR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixPQUF2QixDQUFsQjtBQUNBLE1BQU0sZ0JBQWdCLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsT0FBdkIsQ0FBekI7QUFDQSxNQUFNLFNBQVMsR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixPQUF2QixDQUFsQjtBQUNBLE1BQU0sY0FBYyxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLFFBQXZCLENBQXZCO0FBQ0EsTUFBTSxVQUFVLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsY0FBdkIsQ0FBbkI7QUFFQSxNQUFNLFdBQVcsR0FBRztBQUNoQixFQUFBLFNBQVMsR0FBRztBQUVSLFVBQU0sV0FBVyxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLFNBQXZCLENBQXBCO0FBQ0EsSUFBQSxVQUFVLENBQUMsV0FBWCxDQUF1QixXQUF2QjtBQUNBLFVBQU0sVUFBVSxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLElBQXZCLENBQW5CO0FBQ0EsSUFBQSxVQUFVLENBQUMsV0FBWCxHQUF5Qix1QkFBekI7QUFDQSxJQUFBLFdBQVcsQ0FBQyxXQUFaLENBQXdCLFVBQXhCO0FBRUEsSUFBQSxTQUFTLENBQUMsV0FBVixHQUF3QixNQUF4QjtBQUNBLElBQUEsV0FBVyxDQUFDLFdBQVosQ0FBd0IsU0FBeEI7QUFFQSxJQUFBLGdCQUFn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RWUsWTs7Ozs7O0FDL0NmOztBQUNBOztBQUNBOzs7O0FBR0EscUJBQVksU0FBWjs7QUFFQSxzQkFBYSxhQUFiIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiaW1wb3J0IGludGVyZXN0Q29sbGVjdGlvbiBmcm9tIFwiLi9pbnRlcmVzdENvbGxlY3Rpb25cIlxuaW1wb3J0IGludGVyZXN0TGlzdCBmcm9tIFwiLi9pbnRlcmVzdExpc3RcIlxuXG5jb25zdCBuYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG5jb25zdCBkZXNjcmlwdGlvbklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuY29uc3QgY29zdElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuY29uc3QgcGxhY2VTZWxlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xuY29uc3Qgb3V0cHV0X2FydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybS1vdXRwdXRcIik7XG5cbmNvbnN0IGZvcm1CdWlsZGVyID0ge1xuICAgIGJ1aWxkRm9ybSgpIHtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGZvcm1BcnRpY2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFydGljbGVcIik7XG4gICAgICAgIG91dHB1dF9hcnQuYXBwZW5kQ2hpbGQoZm9ybUFydGljbGUpO1xuICAgICAgICBjb25zdCBmb3JtSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgICAgICBmb3JtSGVhZGVyLnRleHRDb250ZW50ID0gXCJDcmVhdGUgYSBOZXcgSW50ZXJlc3RcIjtcbiAgICAgICAgZm9ybUFydGljbGUuYXBwZW5kQ2hpbGQoZm9ybUhlYWRlcik7IFxuICAgICAgICBcbiAgICAgICAgbmFtZUlucHV0LnBsYWNlaG9sZGVyID0gXCJOYW1lXCI7XG4gICAgICAgIGZvcm1BcnRpY2xlLmFwcGVuZENoaWxkKG5hbWVJbnB1dCk7XG4gICAgICAgIFxuICAgICAgICBkZXNjcmlwdGlvbklucHV0LnBsYWNlaG9sZGVyID0gXCJEZXNjcmlwdGlvblwiO1xuICAgICAgICBmb3JtQXJ0aWNsZS5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbklucHV0KTtcbiAgICAgICAgXG4gICAgICAgIGNvc3RJbnB1dC5wbGFjZWhvbGRlciA9IFwiQ29zdFwiO1xuICAgICAgICBmb3JtQXJ0aWNsZS5hcHBlbmRDaGlsZChjb3N0SW5wdXQpO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgbG9uZG9uT3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICAgICAgbG9uZG9uT3B0aW9uLnRleHRDb250ZW50ID0gXCJMb25kb25cIjtcbiAgICAgICAgY29uc3QgcGFyaXNPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgICBwYXJpc09wdGlvbi50ZXh0Q29udGVudCA9IFwiUGFyaXNcIjtcbiAgICAgICAgY29uc3QgYmVybGluT3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICAgICAgYmVybGluT3B0aW9uLnRleHRDb250ZW50ID0gXCJCZXJsaW5cIjtcbiAgICAgICAgcGxhY2VTZWxlY3Rpb24uYXBwZW5kQ2hpbGQobG9uZG9uT3B0aW9uKTtcbiAgICAgICAgcGxhY2VTZWxlY3Rpb24uYXBwZW5kQ2hpbGQocGFyaXNPcHRpb24pO1xuICAgICAgICBwbGFjZVNlbGVjdGlvbi5hcHBlbmRDaGlsZChiZXJsaW5PcHRpb24pO1xuICAgICAgICBmb3JtQXJ0aWNsZS5hcHBlbmRDaGlsZChwbGFjZVNlbGVjdGlvbik7XG4gICAgICAgIGNvbnN0IGFkZEludGVyZXN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgYWRkSW50ZXJlc3RCdXR0b24udGV4dENvbnRlbnQgPSBcIkFkZFwiO1xuICAgICAgICBmb3JtQXJ0aWNsZS5hcHBlbmRDaGlsZChhZGRJbnRlcmVzdEJ1dHRvbik7XG5cbiAgICAgICAgYWRkSW50ZXJlc3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuYWRkQnV0dG9uRnVuY3Rpb24pO1xuICAgIH0sXG5cbiAgICBhZGRCdXR0b25GdW5jdGlvbigpIHtcbiAgICAgICAgbGV0IGludGVyZXN0T2JqID0ge1xuICAgICAgICAgICAgcGxhY2VJZDogMSxcbiAgICAgICAgICAgIG5hbWU6IG5hbWVJbnB1dC52YWx1ZSxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbklucHV0LnZhbHVlLFxuICAgICAgICAgICAgY29zdDogY29zdElucHV0LnZhbHVlLFxuICAgICAgICAgICAgcmV2aWV3OiBcIlwiXG4gICAgICAgIH1cblxuICAgICAgICBpbnRlcmVzdENvbGxlY3Rpb24ucG9zdE5ld0ludGVyZXN0KGludGVyZXN0T2JqKVxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICBpbnRlcmVzdExpc3QubGlzdEludGVyZXN0cygpO1xuICAgICAgICB9KVxuICAgICAgICBcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZvcm1CdWlsZGVyXG5cbi8vIC8vIFwiaW50ZXJlc3RzXCI6IFtcbi8vICAgICB7IFwiaWRcIjogMSxcbi8vICAgICBcInBsYWNlSWRcIjogMSxcbi8vICAgICBcIm5hbWVcIjogXCJMb2NhbCBNYXJrZXRcIixcbi8vICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTG9jYWwgbWFya2V0IHdoZXJlIHlvdSBjYW4gdHJ5IHB1cmNoYXNlIGxvY2FsIHByb2R1Y3RzIGFuZCB0cnkgdGhlIGxvY2FsIGZvb2RcIixcbi8vICAgICBcImNvc3RcIjogMC4wMCxcbi8vICAgICBcInJldmlld1wiOiBcIllvdSBjYW4gZGVmaW5pdGVseSBnZXQgdGhpbmdzIGZvciBhIGxvd2VyIHByaWNlIGlmIHlvdSBhcmUgd2lsbGluZyB0byBiYXJnYWluIVwiXG4vLyAgICAgfVxuLy8gXSIsImltcG9ydCBpbnRlcmVzdENvbGxlY3QgZnJvbSBcIi4vaW50ZXJlc3RDb2xsZWN0aW9uXCJcbmltcG9ydCBpbnRlcmVzdExpc3QgZnJvbSBcIi4vaW50ZXJlc3RMaXN0XCI7XG5pbXBvcnQgaW50ZXJlc3RDb2xsZWN0aW9uIGZyb20gXCIuL2ludGVyZXN0Q29sbGVjdGlvblwiO1xuaW1wb3J0IGludGVyZXN0RWRpdEZvcm0gZnJvbSBcIi4vaW50ZXJlc3RFZGl0Rm9ybVwiO1xuXG5jb25zdCBpbnRlcmVzdCA9IHtcbiAgICBtYWtlSW50ZXJlc3RIVE1MKGludGVyZXN0T2JqKSB7XG4gICAgICAgIC8vIGNvbnN0IG91dFB1dEFydGljbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm91dHB1dFwiKTtcbiAgICAgICAgY29uc3QgaW50ZXJlc3RMaXN0T3V0cHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFydGljbGVcIilcbiAgICAgICAgLy8gb3V0UHV0QXJ0aWNsZS5hcHBlbmRDaGlsZChpbnRlcmVzdExpc3RPdXRwdXQpO1xuICAgICAgICBjb25zdCBwbGFjZUhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgICAgICAgcGxhY2VIZWFkZXIudGV4dENvbnRlbnQgPSBgJHtpbnRlcmVzdE9iai5wbGFjZUlkfWA7XG4gICAgICAgIGludGVyZXN0TGlzdE91dHB1dC5hcHBlbmRDaGlsZChwbGFjZUhlYWRlcik7XG4gICAgICAgIGNvbnN0IG5hbWVQYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgbmFtZVBhcmFncmFwaC50ZXh0Q29udGVudCA9IGAke2ludGVyZXN0T2JqLm5hbWV9YDtcbiAgICAgICAgaW50ZXJlc3RMaXN0T3V0cHV0LmFwcGVuZENoaWxkKG5hbWVQYXJhZ3JhcGgpO1xuICAgICAgICBjb25zdCBkZXNjcmlwdGlvblBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICBkZXNjcmlwdGlvblBhcmFncmFwaC50ZXh0Q29udGVudCA9IGAke2ludGVyZXN0T2JqLmRlc2NyaXB0aW9ufWA7XG4gICAgICAgIGludGVyZXN0TGlzdE91dHB1dC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvblBhcmFncmFwaCk7XG4gICAgICAgIGNvbnN0IGNvc3RQYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgY29zdFBhcmFncmFwaC50ZXh0Q29udGVudCA9IGAke2ludGVyZXN0T2JqLmNvc3R9YDtcbiAgICAgICAgaW50ZXJlc3RMaXN0T3V0cHV0LmFwcGVuZENoaWxkKGNvc3RQYXJhZ3JhcGgpO1xuICAgICAgICBjb25zdCByZXZpZXdQYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgcmV2aWV3UGFyYWdyYXBoLnRleHRDb250ZW50ID0gYCR7aW50ZXJlc3RPYmoucmV2aWV3fWA7XG4gICAgICAgIGludGVyZXN0TGlzdE91dHB1dC5hcHBlbmRDaGlsZChyZXZpZXdQYXJhZ3JhcGgpO1xuXG5cblxuXG4vLyBFRElUIFBPUlRJT04gVU5ERVJXQVkhISEhISEhISEhIVxuXG5cbiAgICAgICAgY29uc3QgZWRpdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIGVkaXRCdXR0b24udGV4dENvbnRlbnQgPSBcIkVkaXRcIjtcbiAgICAgICAgaW50ZXJlc3RMaXN0T3V0cHV0LmFwcGVuZENoaWxkKGVkaXRCdXR0b24pO1xuICAgICAgICBlZGl0QnV0dG9uLnNldEF0dHJpYnV0ZShcImlkXCIsIGBpbnRlcmVzdC0tJHtpbnRlcmVzdE9iai5pZH1gKVxuICAgICAgICBlZGl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGxldCBhcnRpY2xlSWQgPSBldmVudC50YXJnZXQucGFyZW50Tm9kZS5pZFxuICAgICAgICBsZXQgaW50ZXJlc3RJZCA9IGV2ZW50LnRhcmdldC5pZC5zcGxpdChcIi0tXCIpWzFdXG4gICAgICAgICAgY29uc29sZS5sb2coaW50ZXJlc3RJZClcbiAgICAgICAgICBpbnRlcmVzdENvbGxlY3Rpb24uZ2V0SW50ZXJlc3QoaW50ZXJlc3RJZClcbiAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICBpbnRlcmVzdEVkaXRGb3JtLmNyZWF0ZUFuZEFwcGVuZEZvcm0oaW50ZXJlc3RJZCwgcmVzcG9uc2UpXG4gICAgICAgICAgfSlcbiAgICAgICAgfSlcblxuXG5cblxuICAgIC8vICAgICBsZXQgZWRpdEZvb2RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpXG4gICAgLy8gZWRpdEZvb2RCdXR0b24udGV4dENvbnRlbnQgPSBcIkVkaXRcIlxuICAgIC8vIGVkaXRGb29kQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgLy8gICBsZXQgYXJ0aWNsZUlkID0gZXZlbnQudGFyZ2V0LnBhcmVudE5vZGUuaWRcbiAgICAvLyAgIGxldCBmb29kSWQgPSBhcnRpY2xlSWQuc3BsaXQoXCItLVwiKVsxXVxuICAgIC8vICAgZm9vZENvbGxlY3Rpb24uZ2V0Rm9vZChmb29kSWQpXG4gICAgLy8gICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgLy8gICAgIGZvb2RFZGl0Rm9ybS5jcmVhdGVBbmRBcHBlbmRGb3JtKGFydGljbGVJZCwgcmVzcG9uc2UpXG4gICAgLy8gICB9KVxuICAgIC8vIH0pXG5cblxuXG5cblxuXG5cbiAgICAgICAgY29uc3QgZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgZGVsZXRlQnV0dG9uLnRleHRDb250ZW50ID0gXCJEZWxldGVcIjtcbiAgICAgICAgaW50ZXJlc3RMaXN0T3V0cHV0LmFwcGVuZENoaWxkKGRlbGV0ZUJ1dHRvbik7XG4gICAgICAgIGRlbGV0ZUJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBgaW50ZXJlc3QtLSR7aW50ZXJlc3RPYmouaWR9YClcbiAgICAgICAgZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGxldCBpbnRlcmVzdElkID0gZXZlbnQudGFyZ2V0LmlkLnNwbGl0KFwiLS1cIilbMV1cbiAgICAgICAgaW50ZXJlc3RDb2xsZWN0LmRlbGV0ZUludGVyZXN0KGludGVyZXN0SWQpXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgaW50ZXJlc3RMaXN0Lmxpc3RJbnRlcmVzdHMoKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG5cblxuXG5cbiAgICAgICAgcmV0dXJuIGludGVyZXN0TGlzdE91dHB1dFxuXG4gICAgfVxufVxuXG4vLyAvLyBcImludGVyZXN0c1wiOiBbXG4vLyAgICAgeyBcImlkXCI6IDEsXG4vLyAgICAgXCJwbGFjZUlkXCI6IDEsXG4vLyAgICAgXCJuYW1lXCI6IFwiTG9jYWwgTWFya2V0XCIsXG4vLyAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkxvY2FsIG1hcmtldCB3aGVyZSB5b3UgY2FuIHRyeSBwdXJjaGFzZSBsb2NhbCBwcm9kdWN0cyBhbmQgdHJ5IHRoZSBsb2NhbCBmb29kXCIsXG4vLyAgICAgXCJjb3N0XCI6IDAuMDAsXG4vLyAgICAgXCJyZXZpZXdcIjogXCJZb3UgY2FuIGRlZmluaXRlbHkgZ2V0IHRoaW5ncyBmb3IgYSBsb3dlciBwcmljZSBpZiB5b3UgYXJlIHdpbGxpbmcgdG8gYmFyZ2FpbiFcIlxuLy8gICAgIH1cbi8vIF1cblxuLy8gbWVzc2FnZUJ1aWxkZXIobWVzc2FnZU9iamVjdCkge1xuICAgIFxuLy8gICAgIC8vIG1lc3NhZ2VVc2VybmFtZShtZXNzYWdlT2JqZWN0LnVzZXJJZCkge1xuXG4vLyAgICAgLy8gfSBcblxuLy8gICAgIGxldCBtZXNzYWdlQXJ0aWNsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhcnRpY2xlXCIpXG4vLyAgICAgbWVzc2FnZUFydGljbGUuc2V0QXR0cmlidXRlKFwiaWRcIiwgYG1lc3NhZ2UtLSR7bWVzc2FnZU9iamVjdC5pZH1gKVxuXG4vLyAgICAgbGV0IG1lc3NhZ2VVc2VySWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDVcIilcbi8vICAgICBtZXNzYWdlVXNlcklkLnRleHRDb250ZW50ID0gbWVzc2FnZU9iamVjdC51c2VySWRcblxuICBcblxuLy8gICAgIGxldCBtZXNzYWdlVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpXG4vLyAgICAgbWVzc2FnZVRleHQudGV4dENvbnRlbnQgPSBtZXNzYWdlT2JqZWN0LnRleHRcblxuLy8gICAgIGxldCBtZXNzYWdlVGltZVN0YW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIilcbi8vICAgICBtZXNzYWdlVGltZVN0YW1wLnRleHRDb250ZW50ID0gbWVzc2FnZU9iamVjdC50aW1lU3RhbXBcblxuLy8gICAgIC8vIEluIG9yZGVyIHRvIGNoYW5nZSB0aGUgZGF0YSBmb3IgYW4gZXhpc3RpbmcgZm9vZCBpdGVtIGluIG91ciBBUEksIHdlIG5lZWQgdG8gcHJvdmlkZSB0aGUgdXNlciB3aXRoIGEgd2F5IHRvIGVkaXQgdGhlIGV4aXN0aW5nIHZhbHVlcy4gVGhpcyBtZWFucyB3ZSB3aWxsIHNob3cgdGhlIHVzZXIgYSBmb3JtIHdpdGggdGhlIGV4aXN0aW5nIHZhbHVlcyBhbHJlYWR5IHBvcHVsYXRlZC4gT25jZSBhZ2Fpbiwgd2Ugd2FudCBvdXIgZGF0YSB0byBiZSBvdXIgcG9pbnQgb2YgdHJ1dGguIFNvIHdlIG1ha2UgYSBIVFRQIEdFVCByZXF1ZXN0IHRhcmdldGluZyB0aGUgc3BlY2lmaWMgZm9vZCBpdGVtIHRoZSB1c2VyIHdhbnRzIHRvIGVkaXQgdG8gZ2V0IHRoZSBkYXRhIHRoYXQgd2lsbCBiZSBwb3B1bGF0ZWQgaW4gdGhlIGZvcm0uIE9uY2Ugd2UgaGF2ZSB0aGF0IGRhdGEsIHdlIGNhbiBidWlsZCB0aGUgZm9ybSwgcG9wdWxhdGUgdGhlIGlucHV0IGZpZWxkcyB3aXRoIG91ciBkYXRhIGZvcm0gdGhlIEdFVCByZXF1ZXN0IGFuZCB0aGVuIGFwcGVuZCB0aGF0IGZvcm0gdG8gdGhlIGFwcHJvcHJpYXRlIHBsYWNlIG9uIHRoZSBET00uXG4vLyAgICAgbGV0IGVkaXRNZXNzYWdlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKVxuLy8gICAgIGVkaXRNZXNzYWdlQnV0dG9uLnRleHRDb250ZW50ID0gXCJFZGl0XCJcbi8vICAgICBlZGl0TWVzc2FnZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuLy8gICAgICAgbGV0IGFydGljbGVJZCA9IGV2ZW50LnRhcmdldC5wYXJlbnROb2RlLmlkXG4vLyAgICAgICBsZXQgbWVzc2FnZUlkID0gYXJ0aWNsZUlkLnNwbGl0KFwiLS1cIilbMV1cbi8vICAgICAgIG1lc3NhZ2VzQ29sbGVjdGlvbi5nZXRNZXNzYWdlKG1lc3NhZ2VJZClcbi8vICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbi8vICAgICAgICAgbWVzc2FnZXNFZGl0Rm9ybS5jcmVhdGVBbmRBcHBlbmRGb3JtKGFydGljbGVJZCwgcmVzcG9uc2UpXG4vLyAgICAgICB9KVxuLy8gICAgIH0pXG5cbi8vICAgICAvLyBTaW5jZSB3ZSBjYW4gZ2V0IHRoZSBpZCBvZiB0aGUgZm9vZCBpdGVtIHRvIGJlIGRlbGV0ZWQgZnJvbSB0aGUgcGFyZW50IGVsZW1lbnQodGhlIGFydGljbGUgZWxlbWVudCksIHdlIGNhbiB1c2UgdGhhdCB0byBtYWtlIGFuIEhUVFAgREVMRVRFIHJlcXVlc3QgdG8gb3VyIEFQSS4gT25jZSBhZ2FpbiBhZnRlciB0aGlzIHdlIHdhbnQgdG8gZ2V0IHRoZSBsaXN0IG9mIGZvb2QgaXRlbXMgZnJvbSB0aGUgQVBJIHVzaW5nIGEgSFRUUCBHRVQgcmVxdWVzdCBhbmQgZGlzcGxheSBpdCB0byB0aGUgdXNlciBzbyB0aGF0IHRoZSB1c2VyIGRvZXMgbm90IGhhdmUgdG8gcmVmcmVzaCB0aGUgcGFnZSBpbiBvcmRlciB0byBzZWUgdGhhdCB0aGUgaXRlbSB0aGV5IGRlbGV0ZWQgaGFzIGFjdHVhbGx5IGJlZW4gZGVsZXRlZC5cbi8vICAgICAvLyBsZXQgZGVsZXRlTWVzc2FnZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIilcbi8vICAgICAvLyBkZWxldGVNZXNzYWdlQnV0dG9uLnRleHRDb250ZW50ID0gXCJEZWxldGVcIlxuLy8gICAgIC8vIGRlbGV0ZU1lc3NhZ2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbi8vICAgICAvLyAgIGxldCBtZXNzYWdlSWQgPSBldmVudC50YXJnZXQucGFyZW50Tm9kZS5pZC5zcGxpdChcIi0tXCIpWzFdXG4vLyAgICAgLy8gICBtZXNzYWdlc0NvbGxlY3Rpb24uZGVsZXRlRm9vZChtZXNzYWdlSWQpXG4vLyAgICAgLy8gICAudGhlbigoKSA9PiB7XG4gICAgICAgIFxuLy8gICAgIC8vICAgICBtZXNzYWdlc0xpc3QucG9zdE1lc3NhZ2UoKVxuLy8gICAgIC8vICAgfSlcbi8vICAgICAvLyB9KVxuXG5cblxuLy8gICAgIG1lc3NhZ2VBcnRpY2xlLmFwcGVuZENoaWxkKG1lc3NhZ2VVc2VySWQpXG4vLyAgICAgbWVzc2FnZUFydGljbGUuYXBwZW5kQ2hpbGQobWVzc2FnZVRleHQpXG4vLyAgICAgbWVzc2FnZUFydGljbGUuYXBwZW5kQ2hpbGQobWVzc2FnZVRpbWVTdGFtcClcbi8vICAgICAvLyBtZXNzYWdlQXJ0aWNsZS5hcHBlbmRDaGlsZChkZWxldGVNZXNzYWdlQnV0dG9uKVxuLy8gICAgIGlmIChzZXNzaW9uU3RvcmFnZS51c2VySWQgPT0gbWVzc2FnZU9iamVjdC51c2VySWQpIHttZXNzYWdlQXJ0aWNsZS5hcHBlbmRDaGlsZChlZGl0TWVzc2FnZUJ1dHRvbil9XG5cbi8vICAgICByZXR1cm4gbWVzc2FnZUFydGljbGVcbi8vICAgfVxuLy8gfVxuXG5leHBvcnQgZGVmYXVsdCBpbnRlcmVzdCIsImNvbnN0IGludGVyZXN0Q29sbGVjdGlvbiA9IHtcbiAgICAvLyBDb21wb25lbnQgcmVzcG9uc2libGUgZm9yIGludGVyYWN0aW5nIHdpdGggdGhlIEFQSS4gQWxsIGZldGNoIGNhbGxzIGZvciB0aGlzIGFwcGxpY2F0aW9uIHdpbGwgYmUgZGVmaW5lZCBoZXJlXG4gICAgLy8gVGhpcyBtZXRob2QgcmV0dXJucyBhIGZldGNoLCB3aGljaCBtZWFucyBpdCBpcyByZXR1cm5pbmcgYSBwcm9taXNlLiBXaGljaCBtZWFucyB0byBhY2Nlc3MgdGhlIHJlc3BvbnNlIGZyb20gdGhlIGFzeW5jaHJvbm91cyBIVFRQIEdFVCByZXF1ZXN0IHRoYXQgaXMgYmVpbmcgbWFkZSBieSB0aGlzIGZldGNoLCB3ZSBjYW4gY2hhaW4gYSAudGhlbiBhdCB0aGUgcG9pbnQgd2hlcmUgdGhpcyBtZXRob2QoZ2V0QWxsRm9vZHMpIGlzIGNhbGxlZC4gVGhlIC50aGVuIHRoZW4gaXMgY2hhaW5lZCB0byB0aGUgZmV0Y2ggaW5zaWRlIHRoZSBtZXRob2QgaXMgcGFyc2luZyB0aGUgZGF0YSBmcm9tIEpTT04gdG8gZGF0YSBzdHJ1Y3R1cmVzIEphdmFzY3JpcHQgd2lsbCB1bmRlcnN0YW5kLiBJbiB0aGlzIGNhc2UsIGJlY2F1c2Ugd2UgaGF2ZSBhIGNvbGxlY3Rpb24gb2YgaXRlbXMsIGl0IHdpbGwgYmUgYW4gYXJyYXkgb2Ygb2JqZWN0cy5cbiAgICBnZXRBbGxJbnRlcmVzdHMoKSB7XG4gICAgICByZXR1cm4gZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjgwODgvaW50ZXJlc3RzXCIpXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgfSxcbiAgXG4gICAgLy8gVGhpcyBtZXRob2Qgd2lsbCBtYWtlIGEgSFRUUCBQT1NUIHJlcXVlc3QgdG8gdGhlIEFQSS4gQmVjYXVzZSBhIFBPU1QgaGFzIGEgYm9keSB3aXRoIHRoZSBkYXRhIGZvciB0aGUgbmV3IGl0ZW0geW91IHdhbnQgY3JlYXRlZCwgdGhpcyBtZXRob2Qgd2lsbCB0YWtlIG9uZSBhcmd1bWVudCB3aGljaCB3aWxsIGJlIHRoZSBvYmplY3QgZm9yIHRoZSBuZXcgZm9vZCBpdGVtIHdlIHdhbnQgdG8gYWRkIHRvIG91ciBjb2xsZWN0aW9uIGluIHRoZSBBUEkuXG4gICAgcG9zdE5ld0ludGVyZXN0KG5ld0ludGVyZXN0VG9TYXZlKSB7XG4gICAgICAvLyBXZSB3YW50IHRvIHJldHVybiB0aGlzIGZldGNoIHJlcXVlc3Qgc28gdGhhdCBhdCB0aGUgcG9pbnQgaXQgaXMgY2FsbGVkLCB3ZSBjYW4gdGFrZSBhZHZhbnRhZ2Ugb2YgdGhlIGFzeW5jaHJvbm91cyBuYXR1cmUgb2YgcHJvbWlzZXMgdG8gd2FpdCBmb3IgdGhpcyB0byBiZSBkb25lIGJlZm9yZSBnZXR0aW5nIHRoZSBsYXRlc3QgZGF0YSBhbmQgcmVyZW5kZXJpbmcgdGhlIERPTS5cbiAgICAgIHJldHVybiBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4OC9pbnRlcmVzdHNcIiwge1xuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIlxuICAgICAgICB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShuZXdJbnRlcmVzdFRvU2F2ZSlcbiAgICAgIH0pXG4gICAgfSxcbiAgICAvLyBJbiBvcmRlciB0byBkZWxldGUgYSBpdGVtIGZyb20gdGhlIEpTT04gU2VydmVyIEFQSSwgYWxsIHdlIG5lZWQgaXMgdGhlIGlkIG9mIHRoZSBpdGVtIGluIG9yZGVyIHRvIHRhcmdldCBpdCwgd2hpY2ggaXMgdGhlIG9ubHkgYXJndW1lbnQgdGhpcyBtZXRob2QgaGFzLlxuICAgIGRlbGV0ZUludGVyZXN0KGludGVyZXN0SWQpIHtcbiAgICAgIHJldHVybiBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDo4MDg4L2ludGVyZXN0cy8ke2ludGVyZXN0SWR9YCwge1xuICAgICAgICBtZXRob2Q6IFwiREVMRVRFXCIsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSxcbiAgICAvLyBJbiBvcmRlciB0byBlZGl0IGFuIGV4aXN0aW5nIGZvb2QgaXRlbSwgd2UgbmVlZCB0aGUgaWQgdG8gaWRlbnRpZnkgd2hpY2ggZm9vZCBpdGVtIHdlIHdhbnQgdG8gZWRpdCBhbmQgdGhlIG5ldyBkYXRhIHdlIHdhbnQgdG8gcmVwbGFjZSB0aGUgZXhpc3RpbmcgZGF0YSB3aXRoLiBTbyB0aGlzIHRpbWUsIHdlIGhhdmUgdHdvIGFyZ3VtZW50cyBmb3IgdGhlIG1ldGhvZC5cbiAgICBwdXRFeGlzdGluZ0ludGVyZXN0KGludGVyZXN0SWQsIGludGVyZXN0VG9FZGl0KSB7XG4gICAgICByZXR1cm4gZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6ODA4OC9pbnRlcmVzdHMvJHtpbnRlcmVzdElkfWAsIHtcbiAgICAgICAgbWV0aG9kOiBcIlBVVFwiLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIlxuICAgICAgICB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShpbnRlcmVzdFRvRWRpdClcbiAgICAgIH0pXG4gICAgfSxcbiAgICBnZXRJbnRlcmVzdChpbnRlcmVzdElkKSB7XG4gICAgICByZXR1cm4gZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6ODA4OC9pbnRlcmVzdHMvJHtpbnRlcmVzdElkfWApXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgfSxcbiAgfVxuXG4gIGV4cG9ydCBkZWZhdWx0IGludGVyZXN0Q29sbGVjdGlvblxuXG5cbiAgXG4iLCJpbXBvcnQgaW50ZXJlc3RDb2xsZWN0aW9uIGZyb20gXCIuL2ludGVyZXN0Q29sbGVjdGlvblwiO1xuaW1wb3J0IGludGVyZXN0TGlzdCBmcm9tIFwiLi9pbnRlcmVzdExpc3RcIjtcblxuY29uc3QgaW50ZXJlc3RFZGl0Rm9ybSA9IHtcbiAgLy8gVGhpcyBtb2R1bGUgd2lsbCBidWlsZCBhbiBlZGl0IGZvcm0gYW5kIGFwcGVuZCBpdCB0byB0aGUgRE9NLiBUaGUgZm9ybSB3aWxsIGNvbnRhaW4gaW5wdXQgZmllbGRzIHdpdGggZXhpc3RpbmcgdmFsdWVzIGZyb20gdGhlIEFQSSBhbmQgYW4gVXBkYXRlIGJ1dHRvbi4gVGhlIHVzZXIgY2FuIGVkaXQgdGhlIHRoZSB2YWx1ZXMgaW4gdGhlIGlucHV0IGZpZWxkcy4gQW4gZXZlbnQgbGlzdGVuZXIgb24gdGhlIFVwZGF0ZSBidXR0b24gd2lsbCBoYW5kbGUgdGFraW5nIHRoZSBuZXcgdmFsdWVzIGVudGVyZWQgYnkgdGhlIHVzZXIgYW5kIGNhbGxpbmcgdGhlIEFQSSB0byB1cGRhdGUgdGhlIGRhdGEuXG4gIGNyZWF0ZUFuZEFwcGVuZEZvcm0gKGludGVyZXN0SWQsIGludGVyZXN0T2JqVG9FZGl0KSB7XG5cbiAgICBcbiAgICBsZXQgaW50ZXJlc3RDb3N0RmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKVxuXG4gICAgbGV0IGNvc3RMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKVxuICAgIGNvc3RMYWJlbC50ZXh0Q29udGVudCA9IFwiQ29zdFwiXG4gICAgbGV0IGNvc3RJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKVxuICAgIGNvc3RJbnB1dC52YWx1ZSA9IGludGVyZXN0T2JqVG9FZGl0LmNvc3RcblxuICAgIGludGVyZXN0Q29zdEZpZWxkLmFwcGVuZENoaWxkKGNvc3RMYWJlbCk7XG4gICAgaW50ZXJlc3RDb3N0RmllbGQuYXBwZW5kQ2hpbGQoY29zdElucHV0KTtcblxuICAgIGxldCBpbnRlcmVzdFJldmlld0ZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIilcblxuICAgIGxldCByZXZpZXdMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKVxuICAgIHJldmlld0xhYmVsLnRleHRDb250ZW50ID0gXCJSZXZpZXdcIlxuICAgIGxldCByZXZpZXdJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKVxuICAgIHJldmlld0lucHV0LnZhbHVlID0gaW50ZXJlc3RPYmpUb0VkaXQucmV2aWV3XG5cbiAgICBpbnRlcmVzdFJldmlld0ZpZWxkLmFwcGVuZENoaWxkKHJldmlld0xhYmVsKTtcbiAgICBpbnRlcmVzdFJldmlld0ZpZWxkLmFwcGVuZENoaWxkKHJldmlld0lucHV0KTtcblxuXG4gICAgbGV0IHVwZGF0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIilcbiAgICB1cGRhdGVCdXR0b24udGV4dENvbnRlbnQgPSBcIlVwZGF0ZVwiXG5cbiAgICAvLyBUaGVyZSBpcyBhbiBldmVudCBsaXN0ZW5lciBvbiB0aGUgVXBkYXRlIGJ1dHRvbiB3aGljaCB3aWxsIHRha2UgdGhlIG5ldyB2YWx1ZXMgaW4gdGhlIGlucHV0IGZpZWxkcyBhbmQgYnVpbGQgYW4gb2JqZWN0IGZvciB0aGUgZm9vZCBpdGVtIHRvIGJlIGVkaXRlZC4gVGhlbiB3ZSBtYWtlIGEgSFRUUCBQVVQgcmVxdWVzdCB3aGVyZSB3ZSB0YXJnZXQgdGhlIGZvb2QgaXRlbSB3ZSB3YW50IHRvIGVkaXQgYnkgc3BlY2lmeWluZyB0aGUgaWQgaW4gdGhlIFVSTC4gV2UgYWxzbyBwYXNzIHRoZSBvYmplY3QgcmVwcmVzZW50aW5nIHRoZSBmb29kIGl0ZW0gd2l0aCB0aGUgbmV3IHZhbHVlcyBhcyBkYXRhIGluIG91ciBIVFRQIHJlcXVlc3QuIE9uY2UgYWdhaW4sIGJlY2F1c2Ugb3VyIGRhdGEgaGFzIGJlZW4gbW9kaWZpZWQsIHdlIG1ha2UgYW4gSFRUUCBHRVQgcmVxdWVzdCB0byBnZXQgYWxsIHRoZSBmb29kIGl0ZW1zIGFuZCBkaXNwbGF5IHRoZW0uXG4gICAgdXBkYXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgXG4gICAgbGV0IGVkaXR0ZWRJbnRlcmVzdCA9IHtcbiAgICAgICAgcGxhY2VJZDogaW50ZXJlc3RPYmpUb0VkaXQucGxhY2VJZCxcbiAgICAgICAgbmFtZTogaW50ZXJlc3RPYmpUb0VkaXQubmFtZSxcbiAgICAgICAgZGVzY3JpcHRpb246IGludGVyZXN0T2JqVG9FZGl0LmRlc2NyaXB0aW9uLFxuICAgICAgICBjb3N0OiBjb3N0SW5wdXQudmFsdWUsXG4gICAgICAgIHJldmlldzogcmV2aWV3SW5wdXQudmFsdWVcbiAgICB9XG5cblxuICAgIGludGVyZXN0Q29sbGVjdGlvbi5wdXRFeGlzdGluZ0ludGVyZXN0KGludGVyZXN0T2JqVG9FZGl0LmlkICxlZGl0dGVkSW50ZXJlc3QpXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICBpbnRlcmVzdExpc3QubGlzdEludGVyZXN0cygpO1xuICAgIH0pXG4gICAgXG5cbiAgICAvLyAgIHdoaWxlIChpbnRlcmVzdEl0ZW1BcnRpY2xlLmZpcnN0Q2hpbGQpIHtcbiAgICAvLyAgICAgaW50ZXJlc3RJdGVtQXJ0aWNsZS5yZW1vdmVDaGlsZChpbnRlcmVzdEl0ZW1BcnRpY2xlLmZpcnN0Q2hpbGQpO1xuICAgIC8vICAgfVxuICAgICAgXG4gICAgfSlcblxuICAgIFxuXG4gICAgXG4gICAgLy8gbGV0IGludGVyZXN0SXRlbUFydGljbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgIyR7aW50ZXJlc3RJZH1gKVxuXG4gICBcbiAgICAvLyB3aGlsZSAoaW50ZXJlc3RJdGVtQXJ0aWNsZS5maXJzdENoaWxkKSB7XG4gICAgLy8gICBpbnRlcmVzdEl0ZW1BcnRpY2xlLnJlbW92ZUNoaWxkKGludGVyZXN0SXRlbUFydGljbGUuZmlyc3RDaGlsZCk7XG4gICAgLy8gfVxuICAgIC8vIGludGVyZXN0SXRlbUFydGljbGUuYXBwZW5kQ2hpbGQoaW50ZXJlc3RDb3N0RmllbGQpXG4gICAgLy8gaW50ZXJlc3RJdGVtQXJ0aWNsZS5hcHBlbmRDaGlsZChpbnRlcmVzdFJldmlld0ZpZWxkKVxuICAgIC8vIGludGVyZXN0SXRlbUFydGljbGUuYXBwZW5kQ2hpbGQodXBkYXRlQnV0dG9uKVxuICB9XG59XG5leHBvcnQgZGVmYXVsdCBpbnRlcmVzdEVkaXRGb3JtXG4iLCJpbXBvcnQgaW50ZXJlc3RDb2xsZWN0aW9uIGZyb20gXCIuL2ludGVyZXN0Q29sbGVjdGlvblwiXG5pbXBvcnQgaW50ZXJlc3QgZnJvbSBcIi4vaW50ZXJlc3RcIlxuXG5jb25zdCBpbnRlcmVzdExpc3QgPSB7XG4gICAgbGlzdEludGVyZXN0cygpIHtcbiAgICAgICAgaW50ZXJlc3RDb2xsZWN0aW9uLmdldEFsbEludGVyZXN0cygpXG4gICAgICAgIC50aGVuKGFsbEludGVyZXN0cyA9PiB7XG5cbiAgICAgICAgICAgIGNvbnN0IGludGVyZXN0RG9jRnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gICAgXG4gICAgICAgICAgICBhbGxJbnRlcmVzdHMuZm9yRWFjaChpbnRlcmVzdEluc3RhbmNlID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhpbnRlcmVzdEluc3RhbmNlKTtcbiAgICAgICAgICAgICAgICBjb25zdCBpbnRlcmVzdEh0bWwgPSBpbnRlcmVzdC5tYWtlSW50ZXJlc3RIVE1MKGludGVyZXN0SW5zdGFuY2UpO1xuICAgICAgICAgICAgICAgIGludGVyZXN0RG9jRnJhZ21lbnQuYXBwZW5kQ2hpbGQoaW50ZXJlc3RIdG1sKTtcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIGNvbnN0IG91dHB1dEFydGljbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm91dHB1dFwiKTtcblxuICAgICAgICAgICAgd2hpbGUgKG91dHB1dEFydGljbGUuZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgICAgIG91dHB1dEFydGljbGUucmVtb3ZlQ2hpbGQob3V0cHV0QXJ0aWNsZS5maXJzdENoaWxkKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgb3V0cHV0QXJ0aWNsZS5hcHBlbmRDaGlsZChpbnRlcmVzdERvY0ZyYWdtZW50KTtcbiAgICAgICAgfSlcbiAgICB9XG59XG5cblxuXG5cbi8vIGNvbnN0IHRhc2tMaXN0ID0ge1xuLy8gICAgIGxpc3RUYXNrcygpIHtcbi8vICAgICAgICAgQVBJLmdldERhdGEoXCJ0YXNrc1wiKVxuLy8gICAgICAgICAudGhlbihhbGxUYXNrcyA9PiB7XG4vLyAgICAgICAgICAgICBhbGxUYXNrcy5mb3JFYWNoKHRhc2sgPT4ge1xuLy8gICAgICAgICAgICAgICAgIGNvbnN0IHVzZXJJZCA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJ1c2VySWRcIik7XG4vLyAgICAgICAgICAgICAgICAgY29uc3QgY3VycmVudFVzZXJJZCA9IEpTT04ucGFyc2UodXNlcklkKTtcbi8vICAgICAgICAgICAgICAgICBpZiAodGFzay51c2VySWQgPT09IGN1cnJlbnRVc2VySWQpIHtcbi8vICAgICAgICAgICAgICAgICAgICAgdGFza3MudGFza0J1aWxkZXIodGFzayk7XG4vLyAgICAgICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgfSk7XG4vLyAgICAgICAgIH0pIFxuLy8gICAgIH1cblxuLy8gfVxuXG5leHBvcnQgZGVmYXVsdCBpbnRlcmVzdExpc3QiLCJpbXBvcnQgZm9ybUJ1aWxkZXIgZnJvbSBcIi4vZm9ybUJ1aWxkZXJcIlxuaW1wb3J0IGludGVyZXN0Q29sbGVjdGlvbiBmcm9tIFwiLi9pbnRlcmVzdENvbGxlY3Rpb25cIlxuaW1wb3J0IGludGVyZXN0TGlzdCBmcm9tIFwiLi9pbnRlcmVzdExpc3RcIlxuXG5cbmZvcm1CdWlsZGVyLmJ1aWxkRm9ybSgpO1xuXG5pbnRlcmVzdExpc3QubGlzdEludGVyZXN0cygpO1xuXG5cblxuIl19
