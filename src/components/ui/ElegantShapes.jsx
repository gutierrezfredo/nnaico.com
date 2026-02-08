import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

function ElegantShape({
  className,
  delay = 0,
  width = 400,
  height = 100,
  rotate = 0,
  gradient = "from-white/[0.08]",
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -150,
        rotate: rotate - 15,
      }}
      animate={{
        opacity: 1,
        y: 0,
        rotate: rotate,
      }}
      transition={{
        duration: 2.4,
        delay,
        ease: [0.23, 0.86, 0.39, 0.96],
        opacity: { duration: 1.2 },
      }}
      className={cn("absolute", className)}
    >
      <motion.div
        animate={{
          y: [0, 15, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          width,
          height,
        }}
        className="relative"
      >
        <div
          className={cn(
            "absolute inset-0 rounded-full",
            "bg-gradient-to-r to-transparent",
            gradient,
            "backdrop-blur-[2px] border border-white/[0.1]",
            "shadow-[0_8px_32px_0_rgba(255,255,255,0.05)]",
            "after:absolute after:inset-0 after:rounded-full",
            "after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_70%)]"
          )}
        />
      </motion.div>
    </motion.div>
  )
}

export function FloatingShapes() {
  return (
    <div className="hidden md:block absolute inset-0 overflow-hidden pointer-events-none">
      {/* Large shape top left */}
      <ElegantShape
        delay={0.3}
        width={500}
        height={120}
        rotate={12}
        gradient="from-blue-400/[0.08]"
        className="left-[-15%] md:left-[-5%] top-[10%] md:top-[15%]"
      />

      {/* Medium shape bottom right */}
      <ElegantShape
        delay={0.5}
        width={400}
        height={100}
        rotate={-15}
        gradient="from-cyan-400/[0.08]"
        className="right-[-10%] md:right-[0%] top-[65%] md:top-[70%]"
      />

      {/* Small shape bottom left */}
      <ElegantShape
        delay={0.4}
        width={250}
        height={70}
        rotate={-8}
        gradient="from-blue-300/[0.08]"
        className="left-[5%] md:left-[10%] bottom-[15%] md:bottom-[20%]"
      />

      {/* Small shape top right */}
      <ElegantShape
        delay={0.6}
        width={180}
        height={50}
        rotate={20}
        gradient="from-indigo-400/[0.08]"
        className="right-[10%] md:right-[15%] top-[5%] md:top-[10%]"
      />
    </div>
  )
}
