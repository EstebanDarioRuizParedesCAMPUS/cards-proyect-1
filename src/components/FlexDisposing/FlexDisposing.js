import "./FlexDisposing.css"

function FlexDisposing(props){
    const classes = 'flexDisposing ' + props.className
    return(
        <div className={classes}>
           {props.children}
        </div>
    )
}

export default FlexDisposing
