export default function Restaurant ({ restaurant, onDelete }) {
    return (
        <div>
            <h3>
                {restaurant.name}
            </h3>
            <ul>
                <li>{restaurant.campus}</li>
                <li>{restaurant.cuisine}</li>
                <li>{restaurant.cost}</li>
                <li>{restaurant.halal}</li>
                <li>+</li>
                <li onClick={() => onDelete(restaurant.id)}>-</li>
            </ul>
            

        </div>
    )
}