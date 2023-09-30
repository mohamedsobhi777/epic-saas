import Image from "next/image";
import Link from "next/link";
import hero from "../../public/assets/hero.png";

export default function HomePage() {
    return (
        <div className="grid-halves h-screen-navbar">
            <div className="bg-teal border-right">
                <div className="column-padding">
                    <div className="tabled-centered">
                        <div className="content-grid home-hero">
                            <h1>
                                The most <br /> epic products.
                            </h1>
                            <p className="section-subtitle">
                                All the epic things on the internet, all in one
                                place.
                            </p>
                            <Link className="large-button" href="/products">
                                <div className="large-button-text">
                                    Explore Products
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-salmon">
                <div className="column-padding centered ">
                    <div className="callout-wrap">
                        <Image
                            src={hero}
                            className="callout-image"
                            // width={100}
                            alt="hero"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
