"use client";

import { useState } from 'react';

export default function Home() {
  const [recipient, setRecipient] = useState('');
  const [sender, setSender] = useState('');
  const [linkGenerated, setLinkGenerated] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const generateAndCopyLink = () => {
    if (!recipient || !sender) {
      alert("Något verkar vara fel. Fyll i både mottagare och avsändare för att skapa en länk.");
      return;
    }

    const url = `${window.location.origin}/${recipient}?from=${sender}`;
    navigator.clipboard.writeText(url);
    setLinkGenerated(true);
    alert("Länken har kopierats till urklipp!");
  };

  return (
    <div className="min-h-screen p-4 sm:p-8 bg-gradient-to-b from-gray-900 to-black flex items-center justify-center">
      <div className="max-w-2xl mx-auto space-y-6 sm:space-y-8">
        <div className="space-y-6">
          <div className="space-y-2">
            <h1 className="text-5xl font-bold text-center text-pink-400">Digitalt Blombud</h1>
            <p className="text-xl text-center text-pink-200">Sprid glädje med en digital present</p>
          </div>
          
          {!showForm ? (
            <div className="space-y-8">
              <div className="space-y-4">
                <p className="text-lg sm:text-xl text-center text-gray-200">
                  Överraska någon speciell med en vacker digital blomma och ett personligt AI-genererat meddelande.
                </p>
                <p className="text-base sm:text-lg text-center text-gray-300">
                  En unik gåva som sprider värme och omtanke.
                  <span className="block mt-2 text-sm sm:text-base text-pink-300">✨ Helt gratis och magiskt personligt ✨</span>
                </p>
              </div>
              <div className="flex justify-center">
                <button 
                  onClick={() => setShowForm(true)}
                  className="bg-pink-500 hover:bg-pink-600 text-white text-lg px-8 py-4 rounded-md"
                >
                  Skapa din digitala present
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-6 animate-in fade-in slide-in-from-bottom duration-500">
              <div className="w-full max-w-lg mx-auto space-y-3 sm:space-y-4">
                <input
                  type="text"
                  placeholder="Vem vill du skicka blomman till?"
                  value={recipient}
                  onChange={(e) => setRecipient(e.target.value)}
                  className="w-full bg-[#1f1f1f] border border-gray-700 text-white h-10 sm:h-12 px-3 sm:px-4 rounded-md text-sm sm:text-base"
                />
                <input
                  type="text"
                  placeholder="Vem är blomman från?"
                  value={sender}
                  onChange={(e) => setSender(e.target.value)}
                  className="w-full bg-[#1f1f1f] border border-gray-700 text-white h-10 sm:h-12 px-3 sm:px-4 rounded-md text-sm sm:text-base"
                />
                <button 
                  onClick={generateAndCopyLink}
                  disabled={linkGenerated}
                  className={`w-full text-white uppercase text-base sm:text-xl py-3 sm:py-4 rounded-md ${
                    linkGenerated 
                      ? 'bg-gray-500 cursor-not-allowed' 
                      : 'bg-pink-500 hover:bg-pink-600'
                  }`}
                >
                  {linkGenerated ? 'Länk kopierad!' : 'Skapa och kopiera länk'}
                </button>
                
                {linkGenerated && (
                  <p className="text-center text-green-400 text-sm mt-4">
                    Länken har kopierats! Du kan nu dela den med din vän.
                  </p>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
      <footer className="fixed bottom-2 w-full text-center">
        <p className="text-center text-gray-400">
          Made with ❤️ by <span className="text-pink-400">Diamond Strand</span> - 
          <span className="font-bold"> Cookify</span><span className="text-[#FF9A04]">Media</span> • 
          <span className="text-gray-500"> Powered by </span>
          <span className="text-emerald-500">OpenAI</span>
        </p>
      </footer>
    </div>
  );
}