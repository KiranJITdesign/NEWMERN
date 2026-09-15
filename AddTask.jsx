import { useState } from "react";

function AddTask(props) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    function handleSubmit(e) {
        e.preventDefault();

        const trimmedTitle = title.trim();
        const trimmedDescription = description.trim();

        if (!trimmedTitle || !trimmedDescription) {
            return;
        }

        const newTask = {
            id: Date.now(),
            title: trimmedTitle,
            description: trimmedDescription,
            status: "Pending",
        };

        props.onAddTask(newTask);
        setTitle("");
        setDescription("");
    }

    return (
        <div className="add-task-panel">
            <h2>Add Task</h2>
            <form className="add-task-form" onSubmit={handleSubmit}>
                <div className="field-group">
                    <label>Add Title:</label>
                    <input
                        type="text"
                        value={title}
                        placeholder=""
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>

                <div className="field-group description-field">
                    <label>Add Description:</label>
                    <input
                        type="text"
                        value={description}
                        placeholder=""
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />
                </div>

                <button className="primary-button" type="submit">
                    Add Task!
                </button>
            </form>
        </div>
    );
}

export default AddTask;