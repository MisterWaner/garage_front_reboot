import ReviewsCarousel from './ReviewsCarousel';

const reviews = [
    {
        id: 1,
        author: 'John Doe',
        title: 'Amazing Product!',
        comment: 'This is a fantastic product!',
        rating: 5,
    },
    {
        id: 2,
        author: 'Jane Smith',
        title: 'Not What I Expected',
        comment: "I wasn't impressed with the quality.",
        rating: 2,
    },
    {
        id: 3,
        author: 'Alice Johnson',
        title: 'Great Value',
        comment: 'Great value for the price.',
        rating: 4,
    },
];

export default function ReviewSection() {
    return (
        <section className='my-10'>
            <h2 className='text-2xl font-semibold font-montserrat mb-4'>
                Ils nous ont fait{' '}
                <span className='underline underline-offset-4 decoration-red-500'>
                    Confiance
                </span>
                .
            </h2>
            <ReviewsCarousel reviews={reviews} />
        </section>
    );
}
