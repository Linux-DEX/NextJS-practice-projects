import Link from "next/link";

export default function Home() {
    return <>
        <h1>Welcome to Home page</h1>
        <br />
        <Link href='/blog'>blog</Link>
        <br />
        <Link href='/products'>products</Link>
        <br />
    </>;
}
