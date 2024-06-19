import { useLoaderData } from "react-router-dom";
import HomeSectionHeading from "../SectionHeading/HomeSectionHeading";
import TopEarnersCard from "./TopEarnersCard";
import { motion } from "framer-motion";
const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.5
        },
    },
}
const TopEarnersSection = () => {
    const topEarners = useLoaderData()
    return (
        <div>
            <HomeSectionHeading
                mainHeading={'TOP EARNERS'}
                description={'The top earners section showcases individuals or entities who have achieved the highest financial success, often serving as motivation and a benchmark for others.'}
            ></HomeSectionHeading>
            <motion.section
                variants={containerVariants}
                initial="hidden"
                animate="show"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:mx-0 mx-5 mt-6">
                {
                    topEarners.map(earner => <TopEarnersCard key={earner._id} earner={earner}></TopEarnersCard>)
                }
            </motion.section>
        </div>
    );
};

export default TopEarnersSection;