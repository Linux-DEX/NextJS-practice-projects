export default function ProductDetails({
    params,
}: {
    params: { productId: string };
}) {
    return (
        <>
            <h1>Products {params.productId} details are here!!!!</h1>
        </>
    );
}
