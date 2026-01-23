import {easeInOut, motion} from 'motion/react'

const SlideInUp = ({children, className = ''}: {children: React.ReactNode, className?: string}) => {

    const variation = {
        hidden: {
            opacity: 0,
            y: 50,
        },
        show: {
            opacity: 1,
            y: 0,
        }
    }

    return (
        <motion.div className={className} variants={variation} initial='hidden' whileInView='show' viewport={{once: false, amount: 0.2}} transition={{
            duration: 0.8,
            ease: easeInOut
        }}>
            {children}
        </motion.div>
    )
}

export default SlideInUp