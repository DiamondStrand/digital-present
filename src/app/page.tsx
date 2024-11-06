import { Card, CardContent } from "@/components/ui/card";

// app/page.tsx
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-[#191919] gap-4">
      <Card className="w-[50rem] bg-[#2a2a2a] border-gray-700 text-white">
        <CardContent className="pt-6 space-y-6">
          <div className="space-y-2">
            <h1 className="text-5xl font-bold text-center text-pink-400">Digitalt Blombud</h1>
            <p className="text-xl text-center text-pink-200">Sprid glädje med en digital present</p>
          </div>
          
          <div className="space-y-4">
            <p className="text-xl text-center text-gray-200">
              Överraska någon speciell med en vacker digital blomma och ett personligt AI-genererat meddelande.
            </p>
            
            <p className="text-lg text-center text-gray-300">
              En unik gåva som sprider värme och omtanke. Perfekt för att visa uppskattning, 
              gratulera eller bara säga hej till någon du bryr dig om. 
              <span className="block mt-2 text-pink-300">✨ Helt gratis och magiskt personligt ✨</span>
            </p>
          </div>
        </CardContent>
      </Card>
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