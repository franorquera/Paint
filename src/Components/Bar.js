const Bar = ({ paintingColor, paintColor }) => {
    return (
        <div>
            <input onChange={paintingColor} type="color" name="color1" id="color1" value={paintColor}></input>
            <input type="radio" name="tool" id="paint" />
            <label htmlFor="paint">Paint</label>
            <input type="radio" name="tool" id="clean" />
            <label htmlFor="clean">Clean</label>
        </div>
    )
}

export default Bar;