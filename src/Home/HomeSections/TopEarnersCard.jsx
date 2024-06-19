import { GiTwoCoins } from "react-icons/gi";
import { motion } from "framer-motion"

const cardVariants = {
    hidden: { opacity: 0 }, show: { opacity: 1 }
}
const TopEarnersCard = ({ earner }) => {
    const { name, picture, task_completion, available_coins } = earner;
    return (
        <motion.div
            variants={cardVariants}
            className="card card-compact lg:w-96 bg-base-100 shadow-xl">
            <figure><img src={picture} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <div className="flex gap-6">
                    <p className="font-bold">Task Completion: {task_completion}</p>
                    <p className="font-bold flex items-center gap-1">Available Coins: {available_coins} <GiTwoCoins /></p>
                </div>
            </div>
        </motion.div>
    );
};

export default TopEarnersCard;