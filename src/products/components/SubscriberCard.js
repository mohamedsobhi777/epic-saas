import Link from "next/link";

export default function SubscriberCard() {
    return (
        <section>
            <div>
                <h4>See All Products</h4>
                <p>Go back to see the entire catalogue.</p>
            </div>
            <Link href="/products" className="primary"></Link>
        </section>
    );
}
