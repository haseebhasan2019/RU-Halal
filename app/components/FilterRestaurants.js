import { 
    FormControl, 
    Checkbox,
    FormControlLabel, 
    Button, 
    FormLabel, 
    FormGroup } from '@mui/material';
import { useState } from "react";

export default function FilterRestaurants ({ filter }) {
    // const [cuisine, setCuisine] = useState('')
    const [campus, setCampus] = useState([])
    const [halal, setHalal] = useState([])
    const [cost, setCost] = useState([])

    const campuses = ["Livingston", "College Avenue", "Busch", "Cook/Douglass"];
    const halalStatuses = ["HMS", "Hand-slaughter", "Halal", "Not Halal"];
    const costs = ["$", "$$", "$$$"];

    const onSubmit = (e) => {
        e.preventDefault()
        // if (campus.length == 0 || cost.length == 0 || halal.length == 0) {
        //     alert("Please ensure all search fields have at least one box checked")
        //     return
        // }
        if (campus.length == 0) {
            setCampus(campuses)
        }
        if (halal.length == 0) {
            setHalal(halalStatuses)
        }
        if (cost.length == 0) {
            setCost(costs)
        }
        console.log(campus)
        console.log(halal)
        console.log(cost)
        filter({campus, cost, halal})


        // setCuisine('')
        // setCampus([])
        // setCost([])
        // setHalal([])
    }

    const handleCheckboxChange = (func, category, value) => {
        if (category.includes(value)) {
            func(category.filter((item) => item !== value));
        } else {
            func([...category, value]);
        }
    };

    return (
        <>
        <form onSubmit={onSubmit}>
        <FormGroup sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} row={false}>
            <FormControl margin="normal">
                <FormLabel sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >Closest Campus</FormLabel>
                <FormGroup row >
                    {campuses.map((item) => (
                        <FormControlLabel
                        key={item}
                        control={<Checkbox checked={campus.includes(item)} onChange={() => handleCheckboxChange(setCampus, campus, item)} />}
                        label={item}
                        />
                    ))}
                </FormGroup>
            </FormControl>
            <FormControl margin="normal">
                <FormLabel sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Halal Status</FormLabel>
                <FormGroup row>
                    {halalStatuses.map((item) => (
                        <FormControlLabel
                        key={item}
                        control={<Checkbox checked={halal.includes(item)} onChange={() => handleCheckboxChange(setHalal, halal, item)} />}
                        label={item}
                        />
                    ))}
                </FormGroup>
            </FormControl>
            <FormControl margin="normal">
                <FormLabel sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Cost</FormLabel>
                <FormGroup row>
                    {costs.map((item) => (
                        <FormControlLabel
                        key={item}
                        control={<Checkbox checked={cost.includes(item)} onChange={() => handleCheckboxChange(setCost, cost, item)} />}
                        label={item}
                        />
                    ))}
                </FormGroup>
            </FormControl>
            <Button sx={{ width: '25ch' }} type="submit" variant="contained" color="primary">
                Find a Restaurant!
            </Button>
        </FormGroup>
        </form>
      </>
    )
}
