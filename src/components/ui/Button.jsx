import { Link } from "react-router-dom";

export default function Button({ path = "", label, icon, className, variant = "primary", aos,duration,
    delay }) {
    const base =
        "inline-flex items-center justify-center gap-3 cursor-pionter font-bold rounded-full transition-all duration-300 transform hover:-translate-y-1";

    const styles = {
        primary:
            "bg-primary hover:bg-primary-dark text-white px-8 py-3.5 shadow-[0_0_20px_rgba(10,163,128,0.4)]",

        linear:
            "bg-linear-to-l from-primary-dark to-primary hover:from-primary-darker hover:to-primary-dark text-white px-8 py-4 shadow-lg shadow-primary/30",

        outline:
            "bg-white/10 backdrop-blur-md border border-white/30 text-white hover:bg-white hover:text-primary-dark px-8 py-3.5",

        light:
            "bg-white text-primary-dark border-2 border-primary-dark/20 hover:border-primary-dark hover:bg-primary-dark hover:text-white px-8 py-3.5",

        danger:
            "bg-linear-to-l from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white px-10 py-5 shadow-lg shadow-red-500/30 text-xl",
    };
    return (
        <Link
            to={path.startsWith("/") ? path : `/${path}`}
            data-aos={aos}
            data-aos-duration={duration}
            data-aos-delay={delay}
            className={`${base} ${styles[variant]} ${className}`}
        >
            {icon && <i className={`fas fa-${icon}`}></i>}
            {label}
        </Link>
    )
}
