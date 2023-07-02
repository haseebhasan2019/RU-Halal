export default function Restaurant ({ restaurant }) {
    return (
        <div>
            <h3>{restaurant.name}
                {/* onClick={() => onDelete(restaurant.id)} */}
            </h3>
            <ul>
                <li>{restaurant.campus}</li>
                <li>{restaurant.cuisine}</li>
                <li>{restaurant.cost}</li>
                <li>{restaurant.halal}</li>
            </ul>

        </div>
    )
}