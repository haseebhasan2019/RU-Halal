import {Card, CardContent, Typography } from '@mui/material';

export default function Restaurant ({ restaurant }) {
    return (
        <Card sx={{ width: 275 }}>
            <CardContent>
                <Typography sx={{textAlign: "center"}} variant="h5">
                    {restaurant.name}
                </Typography>
                <Typography variant="body2">
                    <ul>
                        <li>{restaurant.campus}</li>
                        <li>{restaurant.cuisine}</li>
                        <li>{restaurant.cost}</li>
                        <li>{restaurant.halal}</li>
                    </ul>
                </Typography>
            </CardContent>

        </Card>
    )
}