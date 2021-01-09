import Link from 'next/link';

const index = () => (
    <div>
        <Link href="/about">
            <a>Go To About</a>
        </Link>
        <h1>Home</h1>
        Welcome to portfolio
    </div>
)

export default index;