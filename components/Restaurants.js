import Restaurant from "./Restaurant"

export default function Restaurants ( {restaurants} ) { //onDelete
    return (
        <>
            {restaurants.map((restaurant) => (
                <Restaurant key={restaurant.id} restaurant={restaurant} />
            )
            )}
        </>
    )
}