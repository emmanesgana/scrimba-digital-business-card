import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithubSquare, faTwitterSquare, faFacebookSquare, faInstagramSquare } from "@fortawesome/free-brands-svg-icons"

export default function Footer() {
    return (
        <footer>
            <div className="footer-container">
                <a href="#"><FontAwesomeIcon clasName="icon-envelope" icon={faTwitterSquare} size="2xl" style={{ color: "#918E9B", }} /></a>
                <a href="#"><FontAwesomeIcon clasName="icon-envelope" icon={faFacebookSquare} size="2xl" style={{ color: "#918E9B", }} /></a>
                <a href="#"><FontAwesomeIcon clasName="icon-envelope" icon={faInstagramSquare} size="2xl" style={{ color: "#918E9B", }} /></a>
                <a href="#"><FontAwesomeIcon clasName="icon-envelope" icon={faGithubSquare} size="2xl" style={{ color: "#918E9B", }} /></a>
            </div>
        </footer >
    )
}