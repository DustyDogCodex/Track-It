const Header = () => {
    const onClicking = () => {
        console.log('A button was clicked!')
    }
    return (
    <header>
        <h1>Track your tasks!</h1>
        <button className="btn" onClick={onClicking}>Add a task</button>
    </header>
  )
}

export default Header