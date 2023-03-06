import Head from "next/head";
import Select from "../src";

const Home = () => {
    return (
        <div className="px-4 py-8">
            <Head>
                <title>react-tailwindcss-select PlayGround</title>
            </Head>

            <h1 className="text-center font-semibold text-xl">
                <pre className="text-gray-600 text-lg bg-gray-200 max-w-max mx-auto px-2 rounded">
                    react-tailwindcss-select
                </pre>
                <span className="text-gray-700">PlayGround</span>
            </h1>

            <div className="max-w-md mx-auto my-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, quis.
            </div>
        </div>
    );
};

export default Home;
