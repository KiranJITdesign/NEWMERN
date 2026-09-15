import { Link } from "react-router-dom";

function TaskCard(props) {
    return (
        <div className="task-card">
            <div className="task-card-title">{props.title}</div>
            <div className="task-card-description">{props.description}</div>

            <div className="task-card-status-wrap">
                <span className={`task-status ${props.status.toLowerCase()}`}>{props.status}</span>
                <button className="secondary-button" onClick={props.onToggle}>
                    Change Status
                </button>
            </div>

            <div className="task-card-actions">
                <button className="secondary-button" onClick={props.onDelete}>
                    Delete
                </button>
                <Link className="details-link" to={`/tasks/${props.id}`}>
                    View Details
                </Link>
            </div>
        </div>
    );
}

export default TaskCard;