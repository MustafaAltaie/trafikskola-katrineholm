import { useDeleteReviewMutation } from "../features/schoolsApi";
import SchoolsRating from '../components/SchoolsRating';

const Section5SettingsReview = ({ review }) => {
    const [deleteReview] = useDeleteReviewMutation();

    const handleDeleteReview = () => {
        if(confirm('Ta bort omdömen?')) {
            deleteReview(review._id);
        }
    }

    return (
        <div className="sec5Comment">
            <div className='sec5CommentPart1'>
                <h1>{review.name.slice(0, 1).toUpperCase() || 'A'}</h1>
            </div>
            <div className='sec5CommentPart2 flexColumn'>
                <div>
                    <p>{review.name || 'Anonym'}, {review.age > 0 && review.age + ' år'}</p>
                    <h5 className='yellowStars'><SchoolsRating rating={review.rating} size='small' colorFill='#d90' colorEmpty='#aaa' /></h5>
                </div>
                {review.message ?
                <p>{review.message}</p> :
                <p style={{ color: '#00000055' }}>Eleven lämnade inget meddelande.</p>}
            </div>
            <h1 onClick={handleDeleteReview}>🗑️</h1>
        </div>
    )
}

export default Section5SettingsReview;