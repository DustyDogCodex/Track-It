import { FaTimes } from "react-icons/fa"
import { FaPlus } from "react-icons/fa"

function Header({ showForm, displayForm }){
    return(
        <div className="header">
            <h1>Track-It!</h1>
            <button 
                className="show-form-btn"
                onClick={displayForm}
            >
                {showForm ?
                <FaTimes /> :
                <FaPlus />
                }
            
            </button>
        </div>
    )
}

export default Header