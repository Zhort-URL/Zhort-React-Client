import { Link } from "react-router-dom";

export default function Error404() {
    return (
        <>
            <main className="grid min-h-full place-items-center py-24 px-6 sm:py-48 lg:px-8">
                <div className="text-center">
                    <p className="text-base font-semibold text-zhort-primary">404</p>
                    <h1 className="mt-4 text-3xl font-bold tracking-tight text-zhort-gray sm:text-5xl">Page not found</h1>
                    <p className="mt-6 text-base leading-7 text-zhort-grayer">Sorry, we couldn’t find the page you’re looking for.</p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <Link
                            to="/"
                            className="rounded-md bg-zhort-secondary px-3.5 py-2.5 text-sm font-semibold text-zhort-gray shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Go back home
                        </Link>
                    </div>
                </div>
            </main>
        </>
    )
}