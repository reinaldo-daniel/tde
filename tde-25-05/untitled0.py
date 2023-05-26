# -*- coding: utf-8 -*-
"""Untitled0.ipynb

Automatically generated by Colaboratory.

Original file is located at
    https://colab.research.google.com/drive/1z5kUVgK0vuzQCuGrVm6HyJpScSrq-qJZ
"""

import pandas as pd

arquivo = pd.read_csv('natacao.csv')

#Questão 03

provasMasculinas = arquivo.loc[arquivo['Genero'] == 'Masculino']
contagemParticipacoes = provasMasculinas['Atleta'].value_counts()
maiParticipacoes = contagemParticipacoes.idxmax()

print(maiParticipacoes)

#Questão 04

provasFemininas = arquivo.loc[arquivo['Genero'] == 'Feminino']
contagemParticipacoes = provasFemininas['Atleta'].value_counts()
maiParticipacoes = contagemParticipacoes.idxmax()

print(maiParticipacoes)

#Questão 05

medalhasBronze = arquivo.loc[arquivo['Posicao'] == 3]
contagemMedalhas = medalhasBronze['Equipe'].value_counts()
maisMedalhasBronze = contagemMedalhas.idxmax()

print(maisMedalhasBronze)

arquivo = pd.read_csv('natacao.csv')

def converter_distancia(distancia):
  distancia = distancia.replace('m', '')
  if 'X' in distancia:
      partes = distancia.split('X')
      multiplicador = int(partes[0])
      valor = int(partes[1])
      return multiplicador * valor
  else:
      return int(distancia)

arquivo['Distancia_Convertida'] = arquivo['Distancia'].apply(converter_distancia)

distancia_media = arquivo['Distancia_Convertida'].mean()

print(distancia_media)