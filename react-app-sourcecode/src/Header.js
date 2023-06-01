export default function Header(props){
    return  ( 
    <header>
        <nav className="navbar ">
            <span className="navbar-brand mb-0 h1">{props.title}</span>
            <img src="logo.png" alt="Bootstrap" height="60"/>
        </nav>
    </header>)
}
