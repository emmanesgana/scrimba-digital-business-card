import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin"

export default function Main() {
    return (
        <div>
            <div className="top-container">
                <img src="images/avatar.jpg" className="top-avatar" alt="Avatar" />
                <h1 className="top-name">Emman Esgana</h1>
                <p className="top-role">Frontend Developer</p>
                <a href="#" className="top-website">Website goes here</a>
                <div className="btn-link-container">
                    <a href="#" className="btn-link-email"><FontAwesomeIcon clasName="icon-envelope" icon={faEnvelope} style={{ color: "#000000", }} /> Email</a>
                    <a href="#" className="btn-link-linkedin"><FontAwesomeIcon className="icon-linkedin" icon={faLinkedin} style={{ color: "#FFFFFF", }} /> LinkedIn</a>
                </div>
            </div>
            <main className="main">
                <h3 className="main-title">About</h3>
                <p className="main-desc">I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
                <h3 className="main-title">Interests</h3>
                <p className="main-desc">Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
            </main>
        </div>
    )
}