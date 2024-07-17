import { createSlice } from '@reduxjs/toolkit'

export const boardSlice = createSlice({
    name: 'board',
    initialState: {
        /*
            lists consists of objects. Each object within lists is in the following format:
            {
                listId: id, 
                listTitle: title, 
                tasks: [
                    {
                        taskId: id, 
                        taskTitle: title, 
                        taskDescription: description
                    }
                ]
            }
        */
        lists: []
    },
    reducers: {
        createNewListReducer: (state, action) => {
            /*
                - The "listTitle" is provided in action.payload.
                - Add a new list to the existing array of lists ensuring that it has:
                    - a unique listId which can be generated using uuidv4()
                    - an empty tasks list
            */
           const newList = {
            listId : uuidv4(), //generate a unique ID for the list
            listTitle : action.payload.listTitle, //get the list title from the action payload
            tasks:[]
           };
           state.lists.push(newList);

        },
        createNewTaskReducer: (state, action) => {
            /*
                - The "listId" and "taskTitle" are provided in action.payload.
                - Add a new task to the tasks array of the list identified by "listId" ensuring that it has:
                    - a unique "taskId" for the new task which can be generated using uuidv4()
                    - a title, "taskTitle" 
                    - an empty description
            */
        },
        deleteListReducer: (state, action) => {
            /*
                - The "listId" is provided in action.payload to identify the list to be removed.
                - Delete the list with "listId" from the state's lists array.
            */
        },
        deleteTaskReducer: (state, action) => {
            /*
                - The "listId" and "taskId" are provided in action.payload.
                - Find the list by "listId", then delete the task by "taskId" from the list's tasks array.
            */
        },
        editListTitleReducer: (state, action) => {
            /*
                - The "listId" and "updatedListTitle" are provided in action.payload.
                - Find the list by "listId" and update its "listTitle" property with "updatedListTitle".
            */
        },
        editTaskReducer: (state, action) => {
            /*
                - The "listId", "taskId", "updatedTaskTitle", and "updatedTaskDescription" are provided in action.payload.
                - Find the task by "taskId" within the specified list by "listId" and update its 
                  "taskTitle" and "taskDescription" properties with "updatedTaskTitle" and "updatedTaskDescription", respectively.
            */
        },
        dragReducer: (state, action) => {
            /*
                - The source and destination of the drag, along with the draggable type are provided in action.payload.
                - Reorder tasks and lists based on drag and drop actions.
                - Handle both scenarios where tasks are dragged within the same list or between different lists.
            */
        },
        // Do not edit below this line
        resetStateReducer: (state) => {
            // Resets the state to its initial form with no lists.
            return {
                lists: []
            };
        },
    },
})

export const { 
    createNewListReducer,
    createNewTaskReducer,
    deleteListReducer,
    deleteTaskReducer,
    editListTitleReducer,
    editTaskReducer,
    dragReducer,
    resetStateReducer
} = boardSlice.actions

export default boardSlice.reducer