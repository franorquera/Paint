const Bar = ({ paintingColor, paintColor }) => {
    return (
        <div>
            <input onChange={paintingColor} type="color" name="color1" id="color1" value={paintColor}></input>
        </div>
    )
}

export default Bar;