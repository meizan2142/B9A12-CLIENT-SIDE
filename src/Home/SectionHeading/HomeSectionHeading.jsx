const HomeSectionHeading = ({mainHeading, description}) => {
    return (
        <div className="text-center ">
            <h1 className="text-4xl font-bold">{mainHeading}</h1>
            <p className="text-gray-400 lg:w-1/2 w-3/4 mt-4 mx-auto">{description}</p>
        </div>
    );
};

export default HomeSectionHeading;