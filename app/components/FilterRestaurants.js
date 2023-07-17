import { 
    FormControl, 
    Checkbox,
    RadioGroup, 
    FormControlLabel, 
    Radio, 
    Button, 
    FormLabel, 
    FormGroup } from '@mui/material';
import { useState } from "react";

export default function FilterRestaurants ({ filter }) {
    // const [cuisine, setCuisine] = useState('')
    const [campus, setCampus] = useState('')
    const [cost, setCost] = useState([])
    const [halal, setHalal] = useState([])

    const onSubmit = (e) => {
        e.preventDefault()
        // if (!name) {
        //     alert("Please add a restaurant")
        //     return
        // }
        // onAdd({ name, cuisine, campus, cost, halal })
        // console.log(campus)
        // console.log(cost)
        // console.log(halal)
        filter({campus, cost, halal})

        // document.querySelector('input[name="campus"]:checked').checked = false;
        // document.querySelector('input[name="cost"]:checked').checked = false;
        // document.querySelector('input[name="halal"]:checked').checked = false;

        // setCuisine('')
        setCampus('')
        setCost([])
        setHalal([])
    }

    const handleHalalChange = (value) => {
        if (halal.includes(value)) {
          setHalal(halal.filter((item) => item !== value));
        } else {
          setHalal([...halal, value]);
        }
      };

    const handleCheckboxChange = (fun, cat, value) => {
        if (cat.includes(value)) {
            fun(cat.filter((item) => item !== value));
        } else {
            fun([...cat, value]);
        }
    };

    return (
        <>
        <form onSubmit={onSubmit}>
        <FormGroup sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} row={false}>
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
                <FormControlLabel value="Cook/Douglass" control={<Radio />} label="Cook/Douglass" />
            </RadioGroup>
        </FormControl>
        <FormControl margin="normal">
            <FormLabel sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Halal Status</FormLabel>
            <FormGroup row>
                <FormControlLabel
                control={<Checkbox checked={halal.includes('HMS')} onChange={() => handleHalalChange('HMS')} />}
                label="HMS"
                />
                <FormControlLabel
                control={<Checkbox checked={halal.includes('Hand-slaughter')} onChange={() => handleHalalChange('Hand-slaughter')} />}
                label="Hand-slaughter"
                />
                <FormControlLabel
                control={<Checkbox checked={halal.includes('Halal')} onChange={() => handleHalalChange('Halal')} />}
                label="Halal"
                />
                <FormControlLabel
                control={<Checkbox checked={halal.includes('Not Halal')} onChange={() => handleHalalChange('Not Halal')} />}
                label="Not Halal"
                />
            </FormGroup>
        </FormControl>
        <FormControl margin="normal">
            <FormLabel sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Cost</FormLabel>
            <FormGroup row >
                <FormControlLabel
                control={<Checkbox checked={cost.includes('$')} onChange={() => handleCheckboxChange(setCost, cost, '$')} />}
                label="$"
                />
                <FormControlLabel
                control={<Checkbox checked={cost.includes('$$')} onChange={() => handleCheckboxChange(setCost, cost, '$$')} />}
                label="$$"
                />
                <FormControlLabel
                control={<Checkbox checked={cost.includes('$$$')} onChange={() => handleCheckboxChange(setCost, cost, '$$$')} />}
                label="$$$"
                />
            </FormGroup>
        </FormControl>
        <Button sx={{ width: '25ch' }} type="submit" variant="contained" color="primary">
            Save Restaurant
        </Button>
        </FormGroup>
        </form>
      </>
    )
}
