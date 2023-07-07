import { 
    FormControl, 
    TextField, 
    RadioGroup, 
    FormControlLabel, 
    Radio, 
    Button, 
    FormLabel, 
    FormGroup } from '@mui/material';
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
        <>
        <form onSubmit={onSubmit}>
        <FormGroup sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} center row={false}>
        <FormControl margin="normal" sx={{ width: '30ch' }}>
            <TextField
            label="Add Restaurant"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            size = {100}
            />
        </FormControl >
        <FormControl margin="normal" sx={{ width: '30ch' }}>
            <TextField
            label="Add Cuisine"
            value={cuisine}
            onChange={(e) => setCuisine(e.target.value)}
            />
        </FormControl>
        <FormControl margin="normal">
            <FormLabel sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >Closest Campus</FormLabel>
            <RadioGroup
            row
            aria-label="Closest Campus"
            name="campus"
            value={campus}
            onChange={(e) => setCampus(e.target.value)}
            >
            <FormControlLabel value="Livingston" control={<Radio />} label="Livingston" />
            <FormControlLabel value="College Avenue" control={<Radio />} label="College Avenue" />
            <FormControlLabel value="Busch" control={<Radio />} label="Busch" />
            <FormControlLabel value="Cook" control={<Radio />} label="Cook" />
            <FormControlLabel value="Douglass" control={<Radio />} label="Douglass" />
            </RadioGroup>
        </FormControl>
        <FormControl margin="normal">
            <FormLabel sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Halal Status</FormLabel>
            <RadioGroup
            row
            aria-label="Halal Status"
            name="halal"
            value={halal}
            onChange={(e) => setHalal(e.target.value)}
            >
            <FormControlLabel value="HMS" control={<Radio />} label="HMS" />
            <FormControlLabel value="Hand-slaughter" control={<Radio />} label="Hand-slaughter" />
            <FormControlLabel value="Halal" control={<Radio />} label="Halal" />
            <FormControlLabel value="Not Halal" control={<Radio />} label="Not Halal" />
            </RadioGroup>
        </FormControl>
        <FormControl margin="normal">
            <FormLabel sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Cost</FormLabel>
            <RadioGroup
            row
            aria-label="Cost"
            name="cost"
            value={cost}
            onChange={(e) => setCost(e.target.value)}
            >
            <FormControlLabel value="$" control={<Radio />} label="$" />
            <FormControlLabel value="$$" control={<Radio />} label="$$" />
            <FormControlLabel value="$$$" control={<Radio />} label="$$$" />
            </RadioGroup>
        </FormControl>
        <Button sx={{ width: '25ch' }} type="submit" variant="contained" color="primary">
            Save Restaurant
        </Button>
        </FormGroup>
        </form>
      </>
    )
}

// export default AddRestaurant
