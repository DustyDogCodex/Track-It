/* component that stores and display's each individual task's information */

function Task({ info }) {
    return (
        <div className="task">
            {info}
        </div>
    )
}

export default Task