import { notFound } from "next/navigation";

export default function ReviewDetails({ params }: {
    params: {
        productId: string;
        reviewId: string;
    };
}) {
    if (parseInt(params.reviewId) > 1000) {
        notFound();
    }
    return (
        <>
            <h1>Review Details {params.reviewId} and Product { params.productId }</h1>
        </>
    );
}