import css from './ImageCard.module.css'

export default function ImageCard({ item, onClick }) {
    return (
        <div className={css.wrap} onClick={onClick}>
           <img src={item.urls.small} alt={item.alt_description} />
        </div>
    )
}