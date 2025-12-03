import React from 'react';

const Contact = () => {
    return (
        <div className="bg-black text-green-400 font-mono p-6">
            <div className="max-w-xl">
                <h1 className="text-xl mb-4"> Contact Me</h1>

                <form className="space-y-4" action="" method="POST">
                    <div>
                        <label className="block mb-1">
                            $ Enter your name:
                        </label>
                        <input
                            type="text"
                            name="name"
                            placeholder="John Doe"
                            required
                            className="w-full bg-black text-green-400 border border-green-400 p-2 outline-none caret-green-400"
                        />
                    </div>
                    <input type="hidden" name="_captcha" value="false" />
                    <input type="hidden" name="_next" value="https://www.umeshsingh.tech/Thanks" />

                    <div>
                        <label className="block mb-1">
                            $ Enter your email:
                        </label>
                        <input
                            type="email"
                            name="email"
                            required
                            placeholder="john@example.com"
                            className="w-full bg-black text-green-400 border border-green-400 p-2 outline-none caret-green-400"
                        />
                    </div>

                    <div>
                        <label className="block mb-1">
                            $ Enter your message:
                        </label>
                        <textarea
                            rows="5"
                            name="message"
                            required
                            placeholder="Write your message here..."
                            className="w-full bg-black text-green-400 border border-green-400 p-2 outline-none caret-green-400 resize-none"
                        ></textarea>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="mt-4 bg-green-700 hover:bg-green-600 text-black font-bold py-2 px-4"
                        >
                            Submit
                        </button>
                    </div>
                </form>

                <p className="mt-8 text-sm text-green-500">
                    <span className="animate-pulse">▌</span> Waiting for your input...
                </p>
            </div>
        </div>
    );
};

export default Contact;
