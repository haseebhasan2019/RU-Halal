import { useState } from "react";

export default function AddRestaurant ({ onAdd }) {
    const [name, setName] = useState('')
    const [cuisine, setCuisine] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
        if (!name) {
            alert("Please add a restaurant")
            return
        }
        onAdd({ name, cuisine })

        setName('')
        setCuisine('')
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
                    <input type="radio" value="Livingston" name="campus" />
                    Livingston
                </label><br></br>
                <label>
                    <input type="radio" value="CollegeAvenue" name="campus" />
                    College Avenue
                </label><br></br>
                <label>
                    <input type="radio" value="Busch" name="campus" />
                    Busch
                </label><br></br>
                <label>
                    <input type="radio" value="Cook" name="campus" />
                    Cook
                </label><br></br>
                <label>
                    <input type="radio" value="Douglass" name="campus" />
                    Douglass
                </label>
            </div>

            <input type='submit' value='Save Restaurant' />

        </form>

    )
}

// export default AddRestaurant
