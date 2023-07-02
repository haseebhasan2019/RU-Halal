import { useState } from "react";

export default function AddRestaurant ({ onAdd }) {
    const [name, setName] = useState('')
    const [cuisine, setCuisine] = useState('')
    const [campus, setCampus] = useState('')
    const [cost, setCost] = useState('')
    const [halal, setHalal] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
        if (!name) {
            alert("Please add a restaurant")
            return
        }
        onAdd({ name, cuisine, campus, cost, halal })

        document.querySelector('input[name="campus"]:checked').checked = false;
        document.querySelector('input[name="cost"]:checked').checked = false;
        document.querySelector('input[name="halal"]:checked').checked = false;

        setName('')
        setCuisine('')
        setCampus('')
        setCost('')
        setHalal('')
    }
    return (
        <form onSubmit={onSubmit}>
            <div>
                <input type="text" placeholder="Add Restaurant"
                    value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div>
                <input type="text" placeholder="Add Cuisine"
                    value={cuisine} onChange={(e) => setCuisine(e.target.value)} />
            </div>
            <div>
                <label>Closest Campus</label><br></br>
                <label>
                    <input type="radio" value="Livingston" name="campus" onChange={(e) => setCampus(e.target.value)}/>
                    Livingston
                </label><br></br>
                <label>
                    <input type="radio" value="College Avenue" name="campus" onChange={(e) => setCampus(e.target.value)}/>
                    College Avenue
                </label><br></br>
                <label>
                    <input type="radio" value="Busch" name="campus" onChange={(e) => setCampus(e.target.value)}/>
                    Busch
                </label><br></br>
                <label>
                    <input type="radio" value="Cook" name="campus" onChange={(e) => setCampus(e.target.value)}/>
                    Cook
                </label><br></br>
                <label>
                    <input type="radio" value="Douglass" name="campus" onChange={(e) => setCampus(e.target.value)}/>
                    Douglass
                </label>
            </div>
            <div>
                <label>Cost</label><br></br>
                <label>
                    <input type="radio" value="$" name="cost" onChange={(e) => setCost(e.target.value)}/>
                    $
                </label><br></br>
                <label>
                    <input type="radio" value="$$" name="cost" onChange={(e) => setCost(e.target.value)}/>
                    $$
                </label><br></br>
                <label>
                    <input type="radio" value="$$$" name="cost" onChange={(e) => setCost(e.target.value)}/>
                    $$$
                </label><br></br>
            </div>
            <div>
                <label>Halal Status</label><br></br>
                <label>
                    <input type="radio" value="HMS" name="halal" onChange={(e) => setHalal(e.target.value)}/>
                    HMS
                </label><br></br>
                <label>
                    <input type="radio" value="Hand-slaughter" name="halal" onChange={(e) => setHalal(e.target.value)}/>
                    Hand-slaughter
                </label><br></br>
                <label>
                    <input type="radio" value="Halal" name="halal" onChange={(e) => setHalal(e.target.value)}/>
                    Halal
                </label><br></br>
                <label>
                    <input type="radio" value="Not Halal" name="halal" onChange={(e) => setHalal(e.target.value)}/>
                    Not Halal
                </label><br></br>
            </div>

            <input type='submit' value='Save Restaurant' />

        </form>

    )
}

// export default AddRestaurant
