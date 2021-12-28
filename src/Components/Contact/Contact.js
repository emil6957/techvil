import "./Contact.css";
import Footer from "../Footer/Footer";

export default function Contact() {
    return (
        <section className="contact">
            <h1 className="contact__title">Email Us</h1>
            <form className="contact__form">
                <div className="form__field">
                    <input className="input" placeholder=" " autoComplete="off" id="name" name="name" type="text" />
                    <label className="label" htmlFor="name">Name...</label>
                </div>
                <div className="form__field">
                    <input className="input" placeholder=" " autoComplete="off" id="email" name="email" type="email" />
                    <label className="label" htmlFor="email">Email...</label>
                </div>
                <div className="form__field">
                    <textarea className="input" placeholder=" " autoComplete="off" id="message" name="message" />
                    <label className="label" htmlFor="message">Your Message...</label>
                </div>
                <button className="form__btn" type="submit" >Submit</button>
            </form>
            <Footer />
        </section>

    )
}