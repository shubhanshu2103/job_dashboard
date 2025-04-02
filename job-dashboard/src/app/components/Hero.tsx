import React from "react";
import "../styles/HeroSection.css";
import heroImage from "../images/hero_image.png";
import Image from "next/image";

const HeroSection = () => {
    return (
        <section className="hero">
            <div className="hero-content">
                {/* Heading */}
                <h1>
                    <span className="text-primary">Discover more than</span>{" "}
                    <span className="text-highlight">5000+ Jobs</span>
                </h1>
                <br></br>
                <br></br>
                {/* Subtitle */}
                <p className="hero-subtitle">
                    Great platform for the job seeker that searching for new career heights
                    and passionate about startups.
                </p>
                <br></br>
                {/* Search Bar */}
                <div className="search-container">
                    <input type="text" placeholder="Job title, keyword..." className="search-input" />
                    <select className="search-dropdown">
                        <option value="">Select category</option>
                        <option value="ui">UI Designer</option>
                        <option value="ux">UX Researcher</option>
                        <option value="android">Android Developer</option>
                        <option value="admin">Admin</option>
                    </select>
                    <button className="search-button">Search My Job</button>
                </div>

                {/* Popular Jobs */}
                <div className="popular-jobs">
                    <span>Popular:</span> UI Designer, UX Researcher, Android, Admin
                </div>
            </div>

            {/* Hero Image */}
            <div className="hero-image">
                <Image
                    src={heroImage}
                    alt="Job Hunt Illustration"
                    width={501}
                    height={707}
                    priority
                />
            </div>
        </section>
    );
};

export default HeroSection;
