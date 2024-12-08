import React from 'react'

const services = () => {
    return (
        <div>

            <section>
                <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
                    <header>
                        <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">Product Collection</h2>

                        <p className="mt-4 max-w-md text-gray-500">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque praesentium cumque iure
                            dicta incidunt est ipsam, officia dolor fugit natus?
                        </p>
                    </header>

                    <div className="mt-8 block lg:hidden">
                        <button
                            className="flex cursor-pointer items-center gap-2 border-b border-gray-400 pb-1 text-gray-900 transition hover:border-gray-600"
                        >
                            <span className="text-sm font-medium"> Filters & Sorting </span>

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="size-4 rtl:rotate-180"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                            </svg>
                        </button>
                    </div>

                    <div className="mt-4 lg:mt-8 lg:grid lg:grid-cols-4 lg:items-start lg:gap-8">
                        <div className="hidden space-y-4 lg:block">
                            <div>
                                <label htmlFor="SortBy" className="block text-xs font-medium text-gray-700"> Sort By </label>

                                <select id="SortBy" className="mt-1 rounded border-gray-300 text-sm">
                                    <option>Sort By</option>
                                    <option value="Title, DESC">Title, DESC</option>
                                    <option value="Title, ASC">Title, ASC</option>
                                    <option value="Price, DESC">Price, DESC</option>
                                    <option value="Price, ASC">Price, ASC</option>
                                </select>
                            </div>

                            <div>
                                <p className="block text-xs font-medium text-gray-700">Filters</p>

                                <div className="mt-1 space-y-2">
                                    <a href="#" className="group relative block overflow-hidden">
                                        <button
                                            className="absolute end-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75"
                                        >
                                            <span className="sr-only">Wishlist</span>

                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth="1.5"
                                                stroke="currentColor"
                                                className="size-4"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                                                />
                                            </svg>
                                        </button>

                                        <img
                                            src="https://images.unsplash.com/photo-1628202926206-c63a34b1618f?q=80&w=2574&auto=format&fit=crop"
                                            alt=""
                                            className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
                                        />

                                        <div className="relative border border-gray-100 bg-white p-6">
                                            <p className="text-gray-700">
                                                $49.99
                                                <span className="text-gray-400 line-through">$80</span>
                                            </p>

                                            <h3 className="mt-1.5 text-lg font-medium text-gray-900">Wireless Headphones</h3>

                                            <p className="mt-1.5 line-clamp-3 text-gray-700">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore nobis iure obcaecati pariatur.
                                                Officiis qui, enim cupiditate aliquam corporis iste.
                                            </p>

                                            <form className="mt-4 flex gap-4">
                                                <button
                                                    className="block w-full rounded bg-gray-100 px-4 py-3 text-sm font-medium text-gray-900 transition hover:scale-105"
                                                >
                                                    Add to Cart
                                                </button>

                                                <button
                                                    type="button"
                                                    className="block w-full rounded bg-gray-900 px-4 py-3 text-sm font-medium text-white transition hover:scale-105"
                                                >
                                                    Buy Now
                                                </button>
                                            </form>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-3">
                            <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                                <li>
                                    <a href="#" className="group block overflow-hidden">
                                        <img
                                            src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                                            alt=""
                                            className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                                        />

                                        <div className="relative bg-white pt-3">
                                            <h3
                                                className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4"
                                            >
                                                Basic Tee
                                            </h3>

                                            <p className="mt-2">
                                                <span className="sr-only"> Regular Price </span>

                                                <span className="tracking-wider text-gray-900"> £24.00 GBP </span>
                                            </p>
                                        </div>
                                    </a>
                                </li>

                                <li>
                                    <a href="#" className="group block overflow-hidden">
                                        <img
                                            src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                                            alt=""
                                            className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                                        />

                                        <div className="relative bg-white pt-3">
                                            <h3
                                                className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4"
                                            >
                                                Basic Tee
                                            </h3>

                                            <p className="mt-2">
                                                <span className="sr-only"> Regular Price </span>

                                                <span className="tracking-wider text-gray-900"> £24.00 GBP </span>
                                            </p>
                                        </div>
                                    </a>
                                </li>

                                <li>
                                    <a href="#" className="group block overflow-hidden">
                                        <img
                                            src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                                            alt=""
                                            className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                                        />

                                        <div className="relative bg-white pt-3">
                                            <h3
                                                className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4"
                                            >
                                                Basic Tee
                                            </h3>

                                            <p className="mt-2">
                                                <span className="sr-only"> Regular Price </span>

                                                <span className="tracking-wider text-gray-900"> £24.00 GBP </span>
                                            </p>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default services