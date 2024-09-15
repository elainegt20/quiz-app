
'use client'
import React from 'react'
import {Stack, Paper } from '@mui/material'

import QuestionCard from './QuestionCard';

import styles from './QuizzCard.module.css'



const QuizzCard= ({data})=> {

  const [allResults, setAllResults] = React.useState([]);

  const handleAnswerSubmit = (result) => {
      setAllResults(prevResults => {
          const nextResults = [...prevResults, result];
          localStorage.setItem('Results', JSON.stringify(nextResults));
          console.log(nextResults);
          return nextResults;
      });
  };
 
    return (
        <>
          {data.dashboard.map((quizz, quizzIndex) => (
            quizz.subtopics.map((subtopic, subtopicIndex) => (
              <div key={`${quizzIndex}-${subtopicIndex}`} className={styles.quizzCardSubtopicContainer}>
                {subtopic.questions.map((question, questionIndex) => (
                  <Paper key={`${quizzIndex}-${subtopicIndex}-${questionIndex}`} elevation={3} sx={{ width: 800, p: 2.5, borderRadius: 2 }}>
                    <Stack spacing={2.5}>
                      <QuestionCard
                        key={questionIndex}
                        question={question}
                        onAnswerSubmit={handleAnswerSubmit}
                      />
                    </Stack>
                  </Paper>
                ))}
              </div>
            ))
          ))}
    </>
        
      );
  
  

}

export default QuizzCard;

  
{/* <>
          {data.dashboard.map((quizz, quizzIndex) => (
            quizz.subtopics.map((subtopic, subtopicIndex) => (
              <div key={`${quizzIndex}-${subtopicIndex}`}>
                {subtopic.questions.map((question, questionIndex) => (
                  <Paper key={`${quizzIndex}-${subtopicIndex}-${questionIndex}`} elevation={3} sx={{ width: 600, p: 2.5, borderRadius: 2 }}>
                    <Stack spacing={2.5}>
                      <QuestionCard
                        key={questionIndex}
                        question={question}
                      />
                    </Stack>
                  </Paper>
                ))}
              </div>
            ))
          ))}
        </> */}
