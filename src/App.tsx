import React, { useState } from 'react';
import {Alumno} from "../src/interfaces/alumno";
import {Acumulador} from "../src/components/UseStateAcumulador";

//1.	Crear una función con parámetros que permita calcular el área de un cuadrado.
const AreaCuadrado = (lado: number): number => {
  return lado * lado;
};

//2.	Desarrolle una función que reciba un arreglo como parámetro y como resultado retorne la suma de los elementos del arreglo. 
const SumaArreglo = (arr: number[]): number => {
  return arr.reduce((i, j) => i + j, 0);
};

//3.	Del siguiente arreglo devolver un nuevo arreglo con los valores divididos para 5.
//const arreglo = [5,10,15,20,25,30,35,40,45,50]
const ValoresDivididos = (arr: number[]): number[] => {
  arr = arr.map(num => num / 5);
  return arr;
};

//4.	Crear un arreglo con objetos "alumno" y sus propiedades son nombre, edad y calificaciones. 
//Luego, escribir una función que calcule el promedio de las calificaciones. 
const Promedio = (alumnos: Alumno[]): number => {
  let total = 0;
  for (let i in alumnos) {
    total = total + alumnos[i].calificacion;
  }
  return total / alumnos.length;
};

// 5.	Empleado el hook useState crear un acumulador de 5. Se debe visualizar el valor del acumular y dos botones (incrementar - disminuir)
const App: React.FC = () => {
  const arreglo_ej2 = [1,3,5,7,9];
  const arreglo_ej3 = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];

  const alumnos: Alumno[] = [
    { nombre: 'Viviana', edad: 31, calificacion: 10 },
    { nombre: 'Wendy', edad: 20, calificacion: 8 },
    { nombre: 'Gerson', edad: 18, calificacion: 9 }
  ];

  
  return (
    <div>
      <h2>Ejercicios</h2>
      <h3>1: Calcular area de un cuadrado</h3>
      <p>Área de un cuadrado de lado 4: {AreaCuadrado(4)}</p>

      <h3>2: Suma arreglo</h3>
      <p>Suma del arreglo [{arreglo_ej2.join(', ')}]: {SumaArreglo(arreglo_ej2)}</p>

      <h3>3: Dividir arreglo</h3>
      <p>Dividir [{arreglo_ej3.join(', ')}] para 5: {ValoresDivididos(arreglo_ej3).join(', ')}</p>

      <h3>4: Calcular promedio de calificaciones</h3>
      <p>Promedio de calificaciones de los alumnos: {Promedio(alumnos)}</p>

      <h3>5: Acumulador</h3>
      <Acumulador />
    </div>
  );
};

export default App;
