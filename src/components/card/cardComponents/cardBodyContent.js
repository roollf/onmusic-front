import Link from "next/link";

export default function CardBodyContent({ title, content }) {
    return (
        <>
            <h5 className={`card-title`}>{title}</h5>
            <p className={`card-text`}>
                {content}
            </p>
            <Link href={`#`} className={`btn btn-primary`}>
                Go somewhere
            </Link>
        </>
    )
}