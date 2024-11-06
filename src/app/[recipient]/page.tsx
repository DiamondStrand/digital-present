"use client";

import { useParams, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import FlowerAnimation from '../../components/FlowerAnimation';
import OpenAI from "openai";
import { Card, CardContent } from "@/components/ui/card";

export default function RecipientPage() {
  const params = useParams();
  const searchParams = useSearchParams();
  const recipient = params.recipient as string;
  const from = searchParams.get('from');
  const [isLoading, setIsLoading] = useState(false);
  const [displayedMessage, setDisplayedMessage] = useState('');

  useEffect(() => {
    if (recipient) {
      const getMessage = async () => {
        setIsLoading(true);
        setDisplayedMessage('');
        
        try {
          const openai = new OpenAI({
            apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
            dangerouslyAllowBrowser: true
          });

          const stream = await openai.chat.completions.create({
            model: "gpt-4o-mini",
            messages: [
              { 
                role: "system", 
                content: `Du är en supergullig och kärleksfull vän som skriver söta och varma hälsningar på svenska. Du älskar att använda gulliga uttryck och emojis. Använd namnet ${recipient} utan att förändra det.` 
              },
              {
                role: "user",
                content: `Skriv ett supersött och gulligt meddelande på svenska till ${recipient}. 
                         Nämn att du skickar en digital blomma.
                         Max 2 korta meningar.
                         Använd gärna något sött smeknamn.
                         Använd en varm och kärleksfull ton.
                         Skriv som om det kommer från en nära vän som vill sprida glädje.`
              }
            ],
            stream: true,
            temperature: 0.9,
            max_tokens: 75
          });

          for await (const part of stream) {
            const content = part.choices[0]?.delta?.content || '';
            if (content) {
              setDisplayedMessage((prev) => prev + content);
            }
          }
        } catch (error) {
          console.error('Error:', error);
          setDisplayedMessage('Kunde inte generera meddelande');
        } finally {
          setIsLoading(false);
        }
      };

      getMessage();
    }
  }, [recipient]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-[#191919] gap-4">
      <FlowerAnimation />
      <Card className="-mt-56 w-[40rem] bg-[#2a2a2a] border-gray-700 text-white">
        <CardContent className="pt-6">
          {isLoading ? (
            <div className="flex justify-center">
              <div className="animate-pulse text-pink-500">Skriver ett meddelande...</div>
            </div>
          ) : (
            <div className="space-y-4">
              <p className="text-3xl text-center text-gray-100 font-handwriting">
                {displayedMessage}
              </p>
              {from && (
                <p className="text-xl text-center font-bold text-pink-500 font-handwriting">
                  Från {from}
                </p>
              )}
            </div>
          )}
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