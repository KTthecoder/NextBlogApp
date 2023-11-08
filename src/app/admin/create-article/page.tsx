import CreateArticleForm from "@/components/CreateArticleForm";

const page = () => {
    return (
        <div className="flex w-full flex-col items-center justify-center">
            <div className="flex flex-col items-center justify-center mt-12 sm:mt-2 md:mt-2 lg:-mt-6 w-11/12">
                <h2 className="text-white text-2xl tracking-wider border-b-[rgb(45,45,45)] border-b-2 w-11/12 mb-7 text-center pb-4 sm:w-96">Create Article</h2>
                <CreateArticleForm/>
            </div>
        </div>
    )
}

export default page