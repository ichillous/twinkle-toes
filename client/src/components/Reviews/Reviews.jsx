import React from 'react';

const Reviews = (props) => {
    
    const { reviews } = props
    
    const REVIEW = reviews.map((review, idx) => {
    
        return (
                <div className="review-container" key={idx}>
                    <h4 className="review" >{review.author}</h4>
                    <h6 className="review">{review.rating}</h6>
                    <h6 className="review">{review.description}</h6> 
                </div>
        )
    })
    return (
        <div className="reviews">
            <h5>Reviews:</h5>
                {REVIEW}  
        </div>
    );
};

export default Reviews;