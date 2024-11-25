// App.js
import { motion } from "framer-motion";

function SculptPage() {
  return (
    <div className="bg-black text-white min-h-screen font-sans">
      <header className="flex justify-between items-center p-4">
        <div className="flex space-x-4">
          <div className="border-2 border-white p-2 cursor-pointer">Menu</div>
        </div>
      </header>

      <main className="flex flex-col items-center">
        <h1 className="text-center text-2xl mt-8 mb-4">SERVICES</h1>
        
        <motion.div 
          className="flex overflow-x-scroll w-full px-4 space-x-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Residential Section */}
          <motion.div className="min-w-[300px] h-[400px] flex-shrink-0 relative">
            <img 
              src="https://source.unsplash.com/random/400x400/?interior" 
              alt="Residential Design" 
              className="object-cover h-full w-full" 
            />
            <div className="absolute bottom-4 left-4">
              <h2 className="text-lg font-bold">INTERIOR DESIGN</h2>
              <p className="text-sm">Residential</p>
            </div>
          </motion.div>

          {/* Commercial Section */}
          <motion.div className="min-w-[300px] h-[400px] flex-shrink-0 relative">
            <img 
              src="https://source.unsplash.com/random/400x400/?studio" 
              alt="Commercial Design" 
              className="object-cover h-full w-full" 
            />
            <div className="absolute bottom-4 left-4">
              <h2 className="text-lg font-bold">INTERIOR DESIGN</h2>
              <p className="text-sm">Commercial</p>
            </div>
          </motion.div>

          {/* Conservation & Heritage Section */}
          <motion.div className="min-w-[300px] h-[400px] flex-shrink-0 relative">
            <img 
              src="https://source.unsplash.com/random/400x400/?bedroom" 
              alt="Conservation & Heritage Design" 
              className="object-cover h-full w-full" 
            />
            <div className="absolute bottom-4 left-4">
              <h2 className="text-lg font-bold">CONSERVATION & HERITAGE</h2>
              <p className="text-sm">Residential</p>
            </div>
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
}

export default SculptPage;
