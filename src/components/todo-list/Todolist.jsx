// import { useState } from "react";

// const Todolist = () => {
//     const [inputValue, setInputValue] = useState()

//     const [TodoList, setTodoList] = useState([]);

//     const formHandler = (e) => {
//         e.preventDefault();

//         setTodoList((prev) => [...prev, inputValue]);

//         setInputValue("");
//        };

//        const deleteHandler = (task) => {
//         const removedTask = TodoList.filter((list) => list !== task);
//         setTodoList(removedTask);
//         console.log(removedTask);
//     };
    
//     return (
//         <>
//             <div className="d-flex justify-content-center  align-items-center" style={{ height: "100vh" }}>
//                 <div>

//                     <form onSubmit={formHandler}>
//                         <input type="text" value={inputValue} placeholder="Enter your text..." onChange={(e) => {
//                             setInputValue(e.target.value);

//                         }} />
//                         <button type="submit">Add</button>
//                     </form>

//                     <div className="mt-3">
//                         {TodoList.map((task) => {
//                             return <>
//                                 <div className="d-flex justify-content-between my-2">
//                                     <h4> {task}</h4>
//                                     <button onClick={()=> deleteHandler (task)} className="btn btn-danger">Remove</button>
//                                 </div>

//                             </>
//                         })}
//                     </div>
//                 </div>
//             </div>
//        </>
//     );

// };



// export default Todolist;



import { useState } from "react";

const Todolist = () => {
    const [inputValue, setInputValue] = useState("");
    const [TodoList, setTodoList] = useState([]);

    const formHandler = (e) => {
        e.preventDefault();
        if (inputValue.trim()) {
            setTodoList((prev) => [...prev, inputValue]);
            setInputValue("");
        }
    };

    const deleteHandler = (task) => {
        const removedTask = TodoList.filter((list) => list !== task);
        setTodoList(removedTask);
    };

    return (
        <>
            <div className="d-flex justify-content-center align-items-center" style={{ height: "100vh", backgroundColor: "#032830" }}>
                <div className="card p-4 shadow bg-dark border border-black" style={{ maxWidth: "400px", width: "100%" }}>
                    <h3 className="text-center text-white mb-4">Todo-List</h3>
                    
                    <form onSubmit={formHandler} className="d-flex mb-3">
                        <input
                            type="text"
                            value={inputValue}
                            placeholder="Add to Task..."
                            onChange={(e) => setInputValue(e.target.value)}
                            className="form-control me-2"
                            
                        />
                        <button type="submit" className="btn btn-warning fw-bold">Add</button>
                    </form>

                    <div>
                        {TodoList.map((task, index) => (
                            <div key={index} className="d-flex justify-content-between align-items-center p-2 mb-2 text-white rounded-3" style={{ backgroundColor: "#333"}}>
                                <h4 className="m-0">{task}</h4>
                                <button onClick={() => deleteHandler(task)} className="btn btn-sm btn-danger fw-bolder">Remove</button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Todolist;
