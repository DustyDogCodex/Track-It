/* component that stores and display's each individual task's information */
import { FaTimes } from "react-icons/fa";

function Task({ id, info, date, onDelete, onToggle }) {
    return (
        <div className="task" onDoubleClick={() => onToggle(id)}>
            <h4>
                {info} 
                <FaTimes style={{color:'red', cursor:'pointer'}} onClick={() => onDelete(id)} />
            </h4>
            <p>{date}</p>
        </div>
    )
}

export default Task