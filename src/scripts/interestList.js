import interestCollection from "./interestCollection"
import interest from "./interest"

const interestList = {
    listInterests() {
        interestCollection.getAllInterests()
        .then(allInterests => {

            const interestDocFragment = document.createElement("div");

    
            allInterests.forEach(interestInstance => {
                console.log(interestInstance);
                const interestHtml = interest.makeInterestHTML(interestInstance);
                interestDocFragment.appendChild(interestHtml);
            })

            const outputArticle = document.querySelector(".output");

            while (outputArticle.firstChild) {
                outputArticle.removeChild(outputArticle.firstChild);
            }

            outputArticle.appendChild(interestDocFragment);
        })
    }
}




// const taskList = {
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

export default interestList