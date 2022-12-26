import './ItemListContainer.css'

const ItemListContainer = ({greeting}) => {
    return (
        <div>
            <h1 className='item-list'>{greeting}</h1>
        </div>
    )
}

export default ItemListContainer