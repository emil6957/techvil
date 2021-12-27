import "./css/Hero.css";

export default function Hero() {
    return (
        <section className="hero">
            <div className="hero__content">
                <h1 className="hero__title">Welcome</h1>
                <p className="hero__description">
                    Techvil is a online store for tech devices such as computers 
                    and laptops including a wide range of different parts for your 
                    system at several price ranges to make your budget setup
                </p>
                <button className="hero__button">Shop Now</button>
            </div>
        </section>
    )
}