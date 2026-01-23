import {easeInOut, motion} from 'motion/react'

const FadeIn = ({children, className = ''}: {children: React.ReactNode, className?: string}) => {

    const variation = {
        hidden: {
            opacity: 0,
        },
        show: {
            opacity: 1,
        }
    }

    return (
        <motion.div className={className} variants={variation} initial='hidden' whileInView='show' viewport={{once: false, amount: 0.2}} transition={{
            duration: 1,
            ease: easeInOut
        }}>
            {children}
        </motion.div>
    )
}

export default FadeIn