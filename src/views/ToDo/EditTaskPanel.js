function EditTaskPanel(props){
    return <div className="grid grid-rows-3 rounded-l-xl bg-theme-blue shadow-lg z-10 relative">
        <div className="md:row-span-1 flex rounded-tl-xl">

            <ol className="w-100 font-medium text-gray-900 bg-blue-200 border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                <button onClick={() => props.setEditActive(false)}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd"
                              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                              clip-rule="evenodd"/>
                    </svg>
                </button>
                <li className="p-3">
                    {props?.focusedTask?.name && props.focusedTask.name}
                </li>
                {props.focusedTask.dueDate &&
                <li className="p-3">
                    Due Date:{props.focusedTask.dueDate}
                </li>
                }
                {!props.focusedTask.dueDate &&
                <li className="p-3">
                    Add Due Date
                </li>}
                {props.focusedTask.note &&
                <li className="p-3">
                    Note:{props.focusedTask.note}
                </li>}
                {!props.focusedTask.note &&
                <li className="p-3">
                    Add Note
                </li>
                }
                {props.focusedTask.repeatByDay !== -1  &&
                <li className="p-3">
                    Habit:{props.focusedTask.repeatByDay}
                </li>
                }
                {props.focusedTask.repeatByDay === -1 &&
                <li className="p-3">
                    Make Habit
                </li>}
            </ol>


        </div>
    </div>
}
export default EditTaskPanel;