import { useState, useEffect } from 'react';
import { codeStore } from '../store/codeReviewStore';
import { useStore } from '@nanostores/react';

import { motion } from 'framer-motion';
import { IaResponseSection } from './IaResponseSection';

export const IaOutput = () => {
  const code = useStore(codeStore);
  
  const response = {   
    "rating": 7,   
    "feedback": {     
      "strengths": [
        "El código está bien estructurado y sigue buenas prácticas como la encapsulación.",       
        "Los nombres de las variables son claros y descriptivos, lo que facilita la comprensión del código."     
      ],     
      "areas_for_improvement": [       
        "Uso de números mágicos: Evite el uso de números literales como 1000 y 0.05 en el método `calculateDiscount()`. Es mejor definir estos valores como constantes para mejorar la mantenibilidad.",       
        "Agregar validaciones: Considere agregar validaciones para los parámetros del constructor para asegurar que los valores sean válidos (por ejemplo, `orderAmount` no negativo).",       
        "Separación de la lógica de descuento: Si la lógica de descuento se vuelve más compleja en el futuro, podría beneficiarse de ser extraída a una clase o método separado, siguiendo el Principio de Responsabilidad Única."     
      ],     
      "recommendations": [
        "Defina constantes para los valores 1000 y 0.05, como `private static final double DISCOUNT_THRESHOLD = 1000;` y `private static final double DISCOUNT_RATE = 0.05;`.",
        "Agregue métodos getter para los campos privados para permitir el acceso controlado a sus valores.",
        "Revise el libro 'Clean Code' de Robert C. Martin para profundizar en el manejo adecuado de las constantes y la encapsulación."
      ]   
    } 
  }

  const circleRadius = 45;
  const circleCircumference = 2 * Math.PI * circleRadius;
  const ratingPercentage = response.rating / 10;

  return (
    <div className='flex flex-col gap-5 m-5 w-full items-center justify-center'>
      <div className='text-2xl'>AI Output</div>

      <div className='flex flex-col gap-5 w-[800px]'>
        <div className='flex gap-2'>
          <div className='flex flex-col text-center rounded-lg items-center justify-bewteen min-w-60'>
            <strong className='text-2xl'>Rating</strong>
            <div className="relative flex items-center justify-center mt-10">
              <motion.svg
                width="100"
                height="100"
                viewBox="0 0 100 100"
                className="rating-circle"
              >
                <circle
                  cx="50"
                  cy="50"
                  r={circleRadius}
                  fill="transparent"
                  stroke="#e6e6e6"
                  strokeWidth="10"
                />
                <motion.circle
                  cx="50"
                  cy="50"
                  r={circleRadius}
                  fill="transparent"
                  stroke="#4CAF50"
                  strokeWidth="10"
                  strokeDasharray={circleCircumference}
                  strokeDashoffset={circleCircumference}
                  animate={{
                    strokeDashoffset: circleCircumference * (1 - ratingPercentage),
                  }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                  initial={{ strokeDashoffset: circleCircumference }}
                />
              </motion.svg>
              <div className='absolute  text-2xl font-bold'>{response.rating}</div>
            </div>
          </div>

          <IaResponseSection section={response.feedback.strengths} title='Strengths' clasName='bg-[#102F4C] text-white rounded-lg' />
        </div>

        <div className='grid grid-rows-1 grid-cols-1 gap-5'>
          <IaResponseSection section={response.feedback.areas_for_improvement} title='Areas of improvement' clasName='bg-[#102F4C] text-white p-5 rounded-lg' />
          <IaResponseSection section={response.feedback.recommendations} title='Recommendations' clasName='bg-[#102F4C] text-white p-5 rounded-lg' />
        </div>
      </div>

    </div>
  )
};