export default function Restaurant ({ restaurant }) {
    return (
        <div>
            <h3>{restaurant.name}
                {/* onClick={() => onDelete(restaurant.id)} */}
            </h3>
            <p>{restaurant.cuisine}</p>

        </div>
    )
}