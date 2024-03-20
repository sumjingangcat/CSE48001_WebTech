import "./UserInput.css"

export default function UserInput(){
    return(
        <user-input>
            <div className="input-group">
                <p>
                    <label>Initial Investment</label>
                    <input type="number" required/>
                </p>
                <p>
                    <label>Annual Investment</label>
                    <input type="number" required/>
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label>Expected Return</label>
                    <input type="number" required/>
                </p>
                <p>
                    <label>Duration</label>
                    <input type="number" required/>
                </p>
            </div>
        </user-input>
    )
}