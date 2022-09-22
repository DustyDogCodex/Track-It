const Header = () => {
    const onClicking = (e) => {
        console.log(e)
    }
    return (
    <header>
        <h1>Track your tasks!</h1>
        <button className="btn" onClick={onClicking}>Add a task</button>
    </header>
  )
}

export default Header