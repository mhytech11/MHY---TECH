.social-links a:hover {
    color: #e74c3c;
}

footer p {
    margin-top: 20px;
    color: #bdc3c7;
}

/* Responsive Design */
@media (max-width: 768px) {
    header .container {
        flex-direction: column;
        gap: 15px;
    }
    
    nav ul {
        flex-wrap: wrap;
        justify-content: center;
    }
    
    .hero h1 {
        font-size: 36px;
    }
    
    .tagline {
        font-size: 20px;
    }
    
    .vlog-grid {
        grid-template-columns: 1fr;
    }
}
