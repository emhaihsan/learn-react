import Hero from "./hero";

const AboutView = () => {
    return (
        <>
            <Hero text="About Us" backdrop="https://image.tmdb.org/t/p/w1280/your-backdrop-image.jpg" />
            <div className="container my-5">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <h2>Welcome to Movie Browser</h2>
                        <p className="lead">
                            Movie Browser is your ultimate destination for exploring the world of movies. We provide detailed information on a wide range of movies, including plot summaries, cast details, ratings, and more.
                        </p>
                        <h3>Our Mission</h3>
                        <p>
                            Our mission is to make movie browsing a delightful experience. Whether you are looking for the latest releases or classic films, we have got you covered. Our user-friendly platform ensures you get the information you need with ease.
                        </p>
                        <h3>Meet the Team</h3>
                        <p>
                            Our team is composed of movie enthusiasts and tech experts who are passionate about delivering the best movie browsing experience. We work tirelessly to keep our database updated with the latest movies and information.
                        </p>
                        <h3>Contact Us</h3>
                        <p>
                            Have questions or feedback? We'd love to hear from you! Reach out to us at contact@moviebrowser.com.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AboutView;
