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
<<<<<<< HEAD
                {showForm ? <FaTimes /> : <FaPlus />}
=======
                {showForm ?
                <FaTimes /> :
                <FaPlus />
                }
            
>>>>>>> 3b62dddc3f0620fe2c2748136b970714097876f1
            </button>
        </div>
    )
}

export default Header