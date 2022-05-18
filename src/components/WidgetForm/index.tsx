import { CloseButton } from "../CloseButton";

import bugIMageUrl from '../../assets/imgs/bug.svg';
import ideaIMageUrl from '../../assets/imgs/idea.svg';
import toughtIMageUrl from '../../assets/imgs/thought.svg';
import { useState } from "react";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";
import { FeedbackSuccessStep } from "./Steps/FeedbackSuccessStep";

  export const feedbackTypes = {
    BUG: {
      title: 'Problema',
      image:{
        source:bugIMageUrl,
        alt:'Imagem de um inseto'
      },
    },  
    IDEA: {
      title: 'Ideia',
      image:{
        source:ideaIMageUrl,
        alt:'Imagem de uma lampada'
      },
    },
    OTHER:{
      title: 'Outro',
      image:{
        source: toughtIMageUrl,
        alt:'Imagem de um balão de pensamento'
      },
    },
  };

  export type FeedbackType = keyof typeof feedbackTypes;

 export function WidgetForm(){

    const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
    const [feedbackSent, setFeedbackSent] = useState(false);

    function handleRestartFeedback(){
        setFeedbackType(null);
        setFeedbackSent(false);
    }

  return (
      <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto" >
       
        
       { feedbackSent ? (
         <FeedbackSuccessStep onFeedbackRestartRequested={handleRestartFeedback}/>
       ): (
         <>
        {!feedbackType ? (
          <FeedbackTypeStep  onFeedbackTypeChanged={setFeedbackType} />
        ) : 
        (
          <FeedbackContentStep feedbackType = {feedbackType}
            onFeedbackRestartRequested={handleRestartFeedback}
            onFeedbackSent={()  => setFeedbackSent(true)}
          />
          
        )}
        </>
        )}
      

        <footer>
        Feito com ♥ pela <a className="underline underline-offset-2" href="https://rocketseat.com.br">Rocketseat</a>
        
                </footer>
      </div>
  );
}