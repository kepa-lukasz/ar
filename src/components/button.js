import "./button.css"
export default function CustomButton({ text, ...rest}){

    const mouseLeave = (ev)=>{
        ev.target.classList.add("after-hover")
        ev.target.classList.remove("before-hover")

    }
    const mouseEnter = (ev)=>{
        ev.target.classList.add("before-hover")
        if(ev.target.classList.contains("after-hover")){
            ev.target.classList.remove("after-hover")
        } 

    }
    return(
        <button 
        onMouseLeave={(ev)=>{mouseLeave(ev)}}
        onMouseEnter={(ev)=>{mouseEnter(ev)}}
        {...rest}
        >
            {text}
        </button>
    )
}