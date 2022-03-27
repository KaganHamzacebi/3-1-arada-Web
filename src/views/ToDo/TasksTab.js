function TasksTab(props){
    return <div className="grid grid-rows-3 rounded-l-xl bg-theme-blue shadow-lg z-10 relative">
        <div className="md:row-span-1 flex rounded-tl-xl">
            <ol className="w-100 font-medium text-gray-900 bg-blue-200 border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                <li className="w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600">TESTO</li>
                { props.categories && props.categories.map((category) => {
                    return <li onClick={() => props.setCurrentCategory(category)} className="w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600">{category.name}</li>
                })
                }
            </ol>
        </div>
    </div>
}
export default TasksTab;